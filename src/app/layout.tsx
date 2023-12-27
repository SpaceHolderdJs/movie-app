import type { Metadata } from "next";
import { AuthChecker } from "@/providers/authChecker";
import { StoreProvider } from "@/providers/store";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="color-white">
                <StoreProvider>
                    <AuthChecker>{children}</AuthChecker>
                </StoreProvider>
            </body>
        </html>
    );
}
