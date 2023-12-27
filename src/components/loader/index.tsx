import { memo } from "react";

export const Loader = memo(() => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
    );
});

Loader.displayName = "Loader";
