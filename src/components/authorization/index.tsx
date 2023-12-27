"use client";

import { memo, useEffect, useMemo } from "react";
import { Inputs } from "./form";
import { SubmitButton } from "../shared/button/submit";
import { useFormik } from "formik";
import { form } from "@/mocked/form";
import { userApi } from "@/api/user";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/types/routes";
import { validationSchema } from "@/schema/validateSchema";
import { movieAPi } from "@/api/movie";
import { setMovies } from "@/features/movies/moviesSlice";
import { useAppDispatch } from "@/store/hooks";
import { Iuser } from "@/types/interfaces";

export const AuthForm = memo(() => {
    const router = useRouter();
    let user: Iuser | null = null;

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: form.initialValuesSignIn,
        validationSchema,
        onSubmit: async (values) => {
            try {
                user = await userApi.userSignIn(values);

                localStorage.setItem("user", JSON.stringify(user));

                if (user) {
                    const moviesDto = await movieAPi.getAllMovie(user!._id, 8);
                    dispatch(setMovies(moviesDto.data));

                    if (moviesDto.data.length) {
                        router.push(ROUTES.MOVIES);

                        return;
                    }
                }

                router.push(ROUTES.MAIN);
            } catch (e) {
                console.log(e);
            }
        },
    });

    const { errors, submitForm, getFieldProps, touched } = formik;

    const inputInfoArray = useMemo(() => {
        return [
            {
                type: "email",
                placeholder: "Email",
                ...getFieldProps("email"),
                errors: errors.email,
                touched: touched.email,
            },
            {
                type: "password",
                placeholder: "Password",
                ...getFieldProps("password"),
                errors: errors.password,
                touched: touched.password,
            },
        ];
    }, [
        errors.email,
        errors.password,
        getFieldProps,
        touched.email,
        touched.password,
    ]);

    return (
        <div className="flex flex-col gap-y-lg">
            <span className="sm:text-lg text-48 text-center font-semibold leading-lg">
                Sign in
            </span>
            <div className="flex flex-col gap-6 items-center">
                <Inputs inputInfoArray={inputInfoArray} />
                <div className="flex justify-center items-center gap-2">
                    <input className="border-0 rounded-full" type="checkbox" />
                    <div className="leading-6">Remember me</div>
                </div>
                <SubmitButton text="Login" submitFunc={submitForm} />
            </div>
        </div>
    );
});

AuthForm.displayName = "AuthForm";
