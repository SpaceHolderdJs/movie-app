"use client";

import { FC, memo } from "react";

type Props = {
    text: string;
    submitFunc: () => void;
};

export const CancelButton: FC<Props> = memo(({ text, submitFunc }) => {
    return (
        <div
            className="border border-white border-solid border-1 rounded-10 cursor-pointer w-full"
            onClick={submitFunc}
        >
            <div className="py-3 text-center text-16 font-bold leading-24">
                {text}
            </div>
        </div>
    );
});

CancelButton.displayName = "CancelButton";
