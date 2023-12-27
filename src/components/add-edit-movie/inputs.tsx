import { FC, memo } from "react";
import { Inputs } from "../authorization/form";
import { InputProps } from "@/types/interfaces";

type Props = {
    inputInfoArray: Array<InputProps>;
};

export const AddMovieInputs: FC<Props> = memo(({ inputInfoArray }) => {
    return (
        <>
            <div className="w-full lg:max-w-80">
                <Inputs inputInfoArray={inputInfoArray.slice(0, 1)} />
            </div>
            <div className="w-full lg:max-w-56">
                <Inputs inputInfoArray={inputInfoArray.slice(1)} />
            </div>
        </>
    );
});

AddMovieInputs.displayName = "AddMovieInputs";
