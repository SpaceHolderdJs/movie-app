import { SubmitButton } from "@/components/shared/button/submit";
import { Title } from "@/components/shared/title";
import { ROUTES } from "@/types/routes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const EmptyListOfMovies = () => {
    const router = useRouter();

    const navigateToAddMoviePage = useCallback(() => {
        router.push(ROUTES.ADDMOVIE);
    }, [router]);

    return (
        <div className="flex flex-col gap-5">
            <Title text="Your movie list is empty" />
            <div className="flex justify-center items-center">
                <div className="w-60">
                    <SubmitButton
                        text="Add a new movie"
                        submitFunc={navigateToAddMoviePage}
                    />
                </div>
            </div>
        </div>
    );
};
