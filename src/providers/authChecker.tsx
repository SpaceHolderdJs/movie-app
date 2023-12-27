"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/types/routes";
import { isAuth } from "@/utils/isAuth";

export const AuthChecker: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    const isAuthCheck = isAuth();

    useEffect(() => {
        if (!isAuthCheck) {
            router.push(ROUTES.AUTHORIZATION);

            return;
        }
    }, [isAuthCheck, router]);
    return <>{children}</>;
};
