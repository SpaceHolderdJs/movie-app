"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { IMovie } from "@/types/interfaces";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { allMovies, setMovie } from "@/features/movies/moviesSlice";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/types/routes";

export const ListOfMovies = () => {
    const router = useRouter();

    const movies = useAppSelector(allMovies);

    const dispatch = useAppDispatch();

    const setMovieFunc = useCallback(
        (movie: IMovie) => {
            dispatch(setMovie(movie));
            router.push(ROUTES.EDITMOVIE);
        },
        [dispatch, router]
    );
    {
        `grid ${
            movies.length > 4 ? "md:grid-cols-4" : "grid-cols-2"
        } gap-4 pt-8 grid-rows-2`;
    }

    return (
        <div
            className={`grid md:grid-cols-4 grid-cols-2 gap-4 pt-8 ${
                movies.length > 4 && "grid-rows-2"
            }`}
        >
            {movies.map((el, i) => (
                <div
                    className="border-1 p-2 pb-4 bg-bgMovie cursor-pointer rounded-10 max-w-400"
                    key={`${el.title}${i}`}
                    onClick={() => setMovieFunc(el)}
                >
                    <div className="border-1 rounded-12 max-h-60 md:max-h-96 overflow-hidden">
                        <Image
                            src={el.imageUrl}
                            width={380}
                            height={504}
                            objectFit="cover"
                            alt="movie"
                            className="md:min-h-96 min-h-60"
                        />
                    </div>

                    <div className="flex flex-col gap-2 px-2 pt-4">
                        <div className="font-medium text-xl">{el.title}</div>
                        <div>{el.year}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

ListOfMovies.displayName = "ListOfMovies";
