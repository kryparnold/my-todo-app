"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TodoList from "@/components/TodoList";
import { useTodo } from "@/components/context/TodoProvider";

export const dynamic = "force-dynamic";

export default function Archive() {

    return (
        <main className="w-full flex justify-center py-10">
            <MaxWidthWrapper>
                <TodoList archive={true} />
            </MaxWidthWrapper>
        </main>
    );
}
