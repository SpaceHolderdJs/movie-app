import { FC, memo } from "react";

import { AddMovieButton } from "./download-button";
import { AddMovieInputs } from "./inputs";
import { ButtonGroup } from "./button-group";
import { Title } from "../shared/title";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";
import { InputProps } from "@/types/interfaces";

type Props = {
    inputInfoArray: Array<InputProps>;
    title: string;
    getRootProps: DropzoneRootProps;
    file: File | null;
    getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
    isDragActive: boolean;
    submitForm: () => void;
    isAdd?: boolean;
};

export const MovieAddEditComponent: FC<Props> = memo(
    ({
        inputInfoArray,
        getRootProps,
        file,
        getInputProps,
        isDragActive,
        submitForm,
        isAdd,
        title,
    }) => {
        return (
            <>
                <div className="hidden md:block">
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="self-start pb-28">
                                <Title text={title} />
                            </div>

                            <div className="flex">
                                <AddMovieButton
                                    getInputProps={
                                        getRootProps as <
                                            T extends DropzoneInputProps
                                        >(
                                            props?: T | undefined
                                        ) => T
                                    }
                                    getRootProps={getInputProps}
                                    file={file}
                                    isDragActive={isDragActive}
                                    isAdd={isAdd}
                                />
                                <div className="flex flex-col md:pl-9 lg:pl-28">
                                    <div className="flex flex-col gap-5 self-start pb-16 min-w-80">
                                        <AddMovieInputs
                                            inputInfoArray={inputInfoArray}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-5 self-start w-full">
                                        <div className="flex gap-5">
                                            <ButtonGroup
                                                submitForm={submitForm}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden">
                    <div className="flex flex-col gap-5">
                        <div className="self-start pb-28">
                            <Title text={title} />
                        </div>
                        <div className="flex flex-col gap-5 self-start w-full">
                            <AddMovieInputs inputInfoArray={inputInfoArray} />
                        </div>
                        <div className="flex w-full">
                            <AddMovieButton
                                getInputProps={
                                    getRootProps as <
                                        T extends DropzoneInputProps
                                    >(
                                        props?: T | undefined
                                    ) => T
                                }
                                getRootProps={getInputProps}
                                file={file}
                                isDragActive={isDragActive}
                            />
                        </div>
                    </div>
                    <div className="flex gap-5 pt-12">
                        <ButtonGroup submitForm={submitForm} />
                    </div>
                </div>
            </>
        );
    }
);

MovieAddEditComponent.displayName = "MovieAddEditComponent";
