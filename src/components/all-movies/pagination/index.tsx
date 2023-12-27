import { setLimitOfSkip, setMovies, skip } from "@/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, memo, useCallback, useMemo } from "react";

type Props = {
    paginationButtonArray: Array<number>;
};

export const Pagination: FC<Props> = memo(({ paginationButtonArray }) => {
    const dispatch = useAppDispatch();

    const activeButton = useAppSelector(skip);

    const setSkipNumber = (value: number) => {
        if (value > 1) {
            dispatch(setMovies([]));

            dispatch(setLimitOfSkip(value - 1));

            return;
        }

        dispatch(setLimitOfSkip(0));
    };

    const moveToNextPage = useCallback(() => {
        if (activeButton < paginationButtonArray.length) {
            dispatch(setLimitOfSkip(activeButton + 1));

            return;
        }

        return;
    }, [activeButton, dispatch, paginationButtonArray.length]);

    const moveToPrevPage = useCallback(() => {
        if (activeButton > 0) {
            dispatch(setLimitOfSkip(activeButton - 1));

            return;
        }

        return;
    }, [activeButton, dispatch]);

    const checkLimitOfNextClick = useMemo(() => {
        return activeButton >= paginationButtonArray.length - 1;
    }, [activeButton, paginationButtonArray.length]);

    const checkLimitOfPrevClick = useMemo(() => {
        return activeButton <= 0;
    }, [activeButton]);

    return (
        <div className="flex justify-center items-center gap-4">
            <div
                className={`text-base cursor-pointer ${
                    checkLimitOfPrevClick
                        ? "cursor-not-allowed opacity-50 pointer-events-none"
                        : ""
                }`}
                onClick={moveToPrevPage}
            >
                Prev
            </div>
            <div className="flex gap-3">
                {paginationButtonArray.map((number) => (
                    <div
                        className={`px-4 py-3 border-transparent rounded-10 cursor-pointer ${
                            activeButton + 1 === number
                                ? "bg-lightGreen"
                                : "bg-bgMovie"
                        }`}
                        key={number}
                        onClick={() => setSkipNumber(number)}
                    >
                        {number}
                    </div>
                ))}
            </div>
            <div
                className={`text-base cursor-pointer ${
                    checkLimitOfNextClick
                        ? "cursor-not-allowed opacity-50 pointer-events-none"
                        : ""
                }`}
                onClick={moveToNextPage}
            >
                Next
            </div>
        </div>
    );
});

Pagination.displayName = "Pagination";
