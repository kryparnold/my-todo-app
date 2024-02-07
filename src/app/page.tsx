"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchBar from "@/components/SearchBar";
import TodoList from "@/components/TodoList";
import { useTodo } from "@/components/context/TodoProvider";
import { useState } from "react";

export default function Home() {
    const [content, setContent] = useState("");
    const { addTodo } = useTodo();

    return (
        <main className="w-full flex justify-center">
            <MaxWidthWrapper>
                <div className="flex gap-5 py-10">
                    <SearchBar filter={content} setFilter={(filter: string) => setContent(filter)} />
                    <button type="submit" value={content} className="bg-sky-500 rounded-xl p-3 text-2xl whitespace-nowrap" onClick={() => {
                        addTodo(content);
                        setContent("");
                    }}>Add +</button>
                </div>
                <TodoList filter={content} />
            </MaxWidthWrapper>
        </main>
    );
}
