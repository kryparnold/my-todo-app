import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Todo App",
    description: "Todo App by Kryp",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="min-h-screen">
            <body className={`${inter.className} min-h-screen bg-zinc-800 text-white`}>
                <Navbar />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
