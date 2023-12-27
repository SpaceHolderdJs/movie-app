import { FC, PropsWithChildren, memo } from "react";

export const Container: FC<PropsWithChildren> = memo(({ children }) => {
    return (
        <div className="flex justify-center min-h-screen items-center p-2 text-center">
            {children}
        </div>
    );
});

Container.displayName = "Container";
