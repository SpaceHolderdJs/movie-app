"use client";

import { movieAPi } from "@/api/movie";
import { MovieAddEditComponent } from "@/components/add-edit-movie";
import { ROUTES } from "@/types/routes";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useFormik } from "formik";
import { DropzoneInputProps, useDropzone } from "react-dropzone";
import { useAppSelector } from "@/store/hooks";
import { oneMovie } from "@/features/movies/moviesSlice";
import { Iuser } from "@/types/interfaces";
import { movieSchema } from "@/schema/movieSchema";
import { Loader } from "@/components/loader";

export default function Page() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const movie = useAppSelector(oneMovie);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    let user: Iuser;

    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user")!);
    }

    const removeFile = useCallback(() => {
        setFile(null);
    }, []);

    const formik = useFormik({
        initialValues: {
            title: movie?.title || "",
            year: movie?.year || "",
        },
        validationSchema: movieSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const { title, year } = values;

                await movieAPi.editMovie(
                    movie?._id!,
                    user._id,
                    title,
                    year,
                    file || movie?.imageUrl!
                );

                router.push(ROUTES.MOVIES);
            } catch (e) {
                console.log(e);
            } finally {
                setFile(null);
                setLoading(false);
            }
        },
    });

    const { errors, submitForm, getFieldProps, touched } = formik;

    const inputInfoArray = useMemo(() => {
        return [
            {
                type: "title",
                placeholder: "Title",
                ...getFieldProps("title"),
                errors: errors.title,
                touched: touched.title,
            },
            {
                type: "year",
                placeholder: "Publishing year",
                ...getFieldProps("year"),
                errors: errors.year,
                touched: touched.year,
            },
        ];
    }, [errors.title, errors.year, getFieldProps, touched.title, touched.year]);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="pt-20 px-6 md:p-28">
            <MovieAddEditComponent
                title="Edit"
                inputInfoArray={inputInfoArray}
                getRootProps={getRootProps}
                file={file}
                getInputProps={
                    getInputProps as <T extends DropzoneInputProps>(
                        props?: T | undefined
                    ) => T
                }
                isDragActive={isDragActive}
                submitForm={submitForm}
            />
        </div>
    );
}
