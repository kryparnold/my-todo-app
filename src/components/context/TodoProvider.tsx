"use client"
import { Todo } from "@prisma/client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";


export type TodoContextType = {
    todos: Todo[],
    toggleTodo: (id: string, state: boolean) => void;
    toggleArchiveTodo: (id: string, state: boolean) => void;
    deleteTodo: (id: string) => void;
    addTodo: (content: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);

    async function handleToggle(id: string, finished: boolean) {
        await fetch("/api/toggleTodo", {
            method: "POST",
            body: JSON.stringify({
                id,
                finished
            })
        });

        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, finished } : todo
            )
        );
    }

    async function handleArchiveToggle(id: string, archived: boolean) {
        await fetch("/api/toggleArchiveTodo", {
            method: "POST",
            body: JSON.stringify({
                id,
                archived
            })
        });

        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, archived } : todo
            )
        )
    }

    async function handleDelete(id: string) {
        await fetch("/api/deleteTodo", {
            method: "POST",
            body: JSON.stringify({
                id,
            })
        });

        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id)
        );
    }

    async function handleAdd(content: string) {
        const response = await fetch("/api/addTodo", {
            method: "POST",
            body: JSON.stringify({
                content
            })
        });

        const newTodo = await response.json();

        setTodos(prevTodos =>
            [...prevTodos, newTodo]
        );
    }

    const { data: rawTodos } = useQuery("todos", async () => {
        const response = await fetch("/api/todos");
        return response.json();
    });

    useEffect(() => {
        if (rawTodos) {
            setTodos(rawTodos);
        }
    }, [rawTodos]);

    return (
        <TodoContext.Provider value={{
            todos: todos ?? [],
            toggleTodo: (id: string, state: boolean) => handleToggle(id, state),
            deleteTodo: (id: string) => handleDelete(id),
            toggleArchiveTodo: (id: string, state: boolean) => handleArchiveToggle(id, state),
            addTodo: (content: string) => handleAdd(content)
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider');
    }

    return context;
}