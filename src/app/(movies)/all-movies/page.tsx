"use client";

import { movieAPi } from "@/api/movie";
import { ButtonsGroup } from "@/components/all-movies/buttons-group";
import { ListOfMovies } from "@/components/all-movies/list";
import { Pagination } from "@/components/all-movies/pagination";
import { Loader } from "@/components/loader";
import { allMovies, setMovies, skip } from "@/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Iuser } from "@/types/interfaces";
import { ROUTES } from "@/types/routes";
import { scrollToFunc } from "@/utils/scrollTo";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const limit = 8;

export default function Page() {
    const skipValue = useAppSelector(skip);
    const router = useRouter();
    const [countOfMovies, setCountOfMovie] = useState(0);

    const dispatch = useAppDispatch();

    let user: Iuser | null = null;

    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user")!);
    }
    const paginationButtonCount = useMemo(() => {
        const totalPages = countOfMovies && Math.ceil(countOfMovies / 8);

        const arrayOfPageNumbers = [];

        if (totalPages) {
            for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
                arrayOfPageNumbers.push(pageNumber);
            }
        }

        return arrayOfPageNumbers;
    }, [countOfMovies]);

    useEffect(() => {
        try {
            (async () => {
                const moviesDto = await movieAPi.getAllMovie(
                    user!._id,
                    limit,
                    skipValue * limit
                );

                setCountOfMovie(moviesDto.total);

                dispatch(setMovies(moviesDto.data));
            })();
        } catch (e) {
            console.log(e);
        }
    }, [dispatch, skipValue, router, user]);

    return (
        <div className="p-6 pt-20 md:py-6 md:px-48">
            <div className="flex flex-col">
                <div className="self-start pb-28 w-full flex flex-col gap-10">
                    <ButtonsGroup />
                    <ListOfMovies />
                    <Pagination paginationButtonArray={paginationButtonCount} />
                </div>
            </div>
        </div>
    );
}
