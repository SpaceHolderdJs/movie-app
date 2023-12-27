"use client";

import { movieAPi } from "@/api/movie";
import { MovieAddEditComponent } from "@/components/add-edit-movie";
import { useFormik } from "formik";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DropzoneInputProps, useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/types/routes";
import { movieSchema } from "@/schema/movieSchema";
import { Iuser } from "@/types/interfaces";
import { Loader } from "@/components/loader";
import { enqueueSnackbar } from "notistack";

export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [file, setFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragAccept } = useDropzone({
        onDrop,
    });

    let user: Iuser;

    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user")!);
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            year: "",
        },
        validationSchema: movieSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);

                if (!file) {
                    enqueueSnackbar("You should provide file!", {
                        variant: "error",
                    });

                    return;
                }

                const { title, year } = values;

                await movieAPi.addMovie(user._id, title, year, file!);
                setFile(null);

                router.push(ROUTES.MOVIES);
            } catch (e) {
                console.log(e);
            } finally {
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
                isAdd={true}
                title="Create a new movie"
                inputInfoArray={inputInfoArray}
                getRootProps={getRootProps}
                file={file}
                getInputProps={
                    getInputProps as <T extends DropzoneInputProps>(
                        props?: T | undefined
                    ) => T
                }
                isDragActive={isDragAccept}
                submitForm={submitForm}
            />
        </div>
    );
}
