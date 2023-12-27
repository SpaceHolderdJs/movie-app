"use client";

import { EmptyListOfMovies } from "@/components/movies/empty-list";
import { Container } from "@/components/shared/container";

export default function Home() {
    return (
        <Container>
            <EmptyListOfMovies />
        </Container>
    );
}
