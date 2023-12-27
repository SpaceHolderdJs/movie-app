"use client";
import { FC, memo } from "react";
import { IinputArray } from "@/types/interfaces";

type Props = {
    inputInfoArray: Array<IinputArray>;
};

export const Inputs: FC<Props> = memo(({ inputInfoArray }) => {
    return (
        <div className="flex flex-col gap-6 items-center justify-center w-full">
            {inputInfoArray.map((inputField, i) => (
                <div key={`${inputField.type}${i}`} className="w-full">
                    <input
                        id={inputField.type}
                        className="bg-blue border-0 border-10 py-2.5 px-2.5 rounded-lg  w-full focus:outline-none placeholder-white"
                        {...inputField}
                    />
                    {inputField.touched && inputField.errors && (
                        <span className="text-lightGreen italic">
                            {inputField.errors}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
});

Inputs.displayName = "Inputs";
