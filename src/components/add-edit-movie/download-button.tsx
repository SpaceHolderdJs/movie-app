import Image from "next/image";
import DownSvg from "@/public/download.svg";
import { FC, memo, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { oneMovie } from "@/features/movies/moviesSlice";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

type Props = {
    getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
    getRootProps: DropzoneRootProps;
    file: File | null;
    isDragActive: boolean;
    isAdd?: boolean;
};

export const AddMovieButton: FC<Props> = memo(
    ({ getInputProps, file, isAdd = false }) => {
        const movie = useAppSelector(oneMovie);

        const backGroundImage = useMemo(() => {
            return file
                ? {
                      backgroundImage: `url('${URL.createObjectURL(file)}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                  }
                : isAdd
                ? {}
                : {
                      backgroundImage: `url(${movie?.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                  };
        }, [file, isAdd, movie?.imageUrl]);

        return (
            <div className="flex w-full min-h-60 md:min-w-80 lg:min-w-96 md:min-h-96 flex-col border border-white border-dashed rounded-10 bg-blue cursor-pointer overflow-hidden">
                <div
                    className="flex flex-col gap-3 justify-center items-center h-full"
                    style={backGroundImage}
                    {...getInputProps()}
                >
                    {!file && (
                        <Image
                            src={DownSvg}
                            height="24"
                            width="24"
                            alt="down"
                        />
                    )}
                    <span>
                        {file
                            ? `File selected: ${file.name}`
                            : "Upload an image here"}
                    </span>
                </div>
            </div>
        );
    }
);

AddMovieButton.displayName = "AddMovieButton";
