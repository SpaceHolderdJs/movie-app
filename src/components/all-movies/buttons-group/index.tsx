import { Title } from "@/components/shared/title";
import { memo, useCallback } from "react";
import Image from "next/image";
import LogoutSVG from "@/public/logout.svg";
import AddSvg from "@/public/add-button.svg";
import { ROUTES } from "@/types/routes";
import { useRouter } from "next/navigation";

export const ButtonsGroup = memo(() => {
    const router = useRouter();
    const navigateToAddMovie = useCallback(() => {
        router.push(ROUTES.ADDMOVIE);
    }, [router]);

    const logOut = useCallback(() => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");

            router.push(ROUTES.AUTHORIZATION);
        }
    }, [router]);

    return (
        <div className="flex justify-between items-center">
            <div
                className="flex gap-5 cursor-pointer justify-center items-center"
                onClick={navigateToAddMovie}
            >
                <Title text="My movies" />
                <Image src={AddSvg} width={32} height={32} alt="add button" />
            </div>
            <div
                className="flex gap-3 items-center justify-center cursor-pointer"
                onClick={logOut}
            >
                <span className="hidden md:block">Logout</span>
                <Image
                    src={LogoutSVG}
                    width={32}
                    height={32}
                    alt="add button"
                />
            </div>
        </div>
    );
});

ButtonsGroup.displayName = "ButtonsGroup";
