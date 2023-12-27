"use client";

import { AuthForm } from "@/components/authorization";
import { Container } from "@/components/shared/container";

export default function Page() {
    return (
        <Container>
            <div className="w-300">
                <AuthForm />
            </div>
        </Container>
    );
}
