import { FC, memo } from "react";

type Props = {
    text: string;
};

export const Title: FC<Props> = memo(({ text }) => {
    return (
        <div className="sm:text-48 text-32 font-semibold leading-56 flex items-center justify-center">
            <span>{text}</span>
        </div>
    );
});

Title.displayName = "Title";
