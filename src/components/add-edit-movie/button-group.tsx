"use client";

import { FC, memo, useCallback } from "react";
import { CancelButton } from "../shared/button/cancel";
import { SubmitButton } from "../shared/button/submit";
import { useRouter } from "next/navigation";

type Props = {
    submitForm: () => void;
};

export const ButtonGroup: FC<Props> = memo(({ submitForm }) => {
    const router = useRouter();
    const routerBack = useCallback(() => {
        router.back();
    }, [router]);
    return (
        <>
            <CancelButton text="Cancel" submitFunc={routerBack} />
            <SubmitButton text="Submit" submitFunc={submitForm} />
        </>
    );
});

ButtonGroup.displayName = "ButtonGroup";
