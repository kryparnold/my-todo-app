"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoProvider from "./context/TodoProvider";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <TodoProvider>
                {children}
            </TodoProvider>
        </QueryClientProvider>
    );
}
