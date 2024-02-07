"use client";
import { Todo as TodoModel } from "@prisma/client";
import { useTodo } from "./context/TodoProvider";

interface TodoProps {
    data: TodoModel,
}

export default function Todo({ data }: TodoProps) {
    const { toggleTodo, deleteTodo, toggleArchiveTodo } = useTodo();

    return (
        <div className="flex gap-3 bg-zinc-700 px-5 py-3 rounded-xl items-center group">
            <input type="checkbox" className="w-6 aspect-square accent-sky-500" defaultChecked={data.finished} onChange={(e) => toggleTodo(data.id, !data.finished)} />
            <div className={`text-2xl flex-1 ${data.finished ? "text-white/60 line-through" : "text-current"}`}>
                {data.content}
            </div>
            <div className="opacity-0 transition-opacity group-hover:opacity-100 flex gap-5 items-center">
                {!data.archived ? (
                    <div className="text-white cursor-pointer active:scale-90 transition-all hover:text-sky-500" onClick={(e) => toggleArchiveTodo(data.id, !data.archived)}>
                        <ArchiveIcon />
                    </div>
                ) : (
                    <div className="text-white cursor-pointer active:scale-90 transition-all hover:text-sky-500" onClick={(e) => toggleArchiveTodo(data.id, !data.archived)}>
                        <UnArchiveIcon />
                    </div>
                )}
                <div className="text-white cursor-pointer active:scale-90 transition-all hover:text-red-600" onClick={(e) => deleteTodo(data.id)}>
                    <DeleteIcon />
                </div>
            </div>
            <div className="text-sm text-zinc-300 min-w-48 text-right">
                {data.createdAt.toLocaleString().replace(",", " - ")}
            </div>
        </div>
    );
}

function ArchiveIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" viewBox="4 4 16 16"><path fill="currentColor" d="m12 17.192l3.308-3.307l-.708-.708l-2.1 2.1v-4.7h-1v4.7l-2.1-2.1l-.708.708zM5 7.808v10.577q0 .269.173.442t.442.173h12.77q.269 0 .442-.173t.173-.442V7.808zM5.77 20q-.672 0-1.221-.549Q4 18.901 4 18.231V7.487q0-.293.093-.55q.094-.258.28-.475L5.931 4.59q.217-.292.543-.441Q6.8 4 7.174 4h9.614q.374 0 .71.149q.335.15.552.441l1.577 1.91q.186.217.28.485q.093.267.093.56V18.23q0 .67-.549 1.22q-.55.549-1.22.549zM5.38 6.808H18.6l-1.33-1.596q-.097-.097-.222-.154Q16.923 5 16.788 5H7.192q-.134 0-.26.058q-.124.057-.22.154zM12 13.404"></path></svg>
    )
}

function DeleteIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" className="p-1" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5.5l-13 13m0-13l13 13" /></svg>
    )
}

function UnArchiveIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" viewBox="4 4 16 16"><path fill="currentColor" d="m12 10.577l-3.308 3.308l.708.707l2.1-2.1v4.7h1v-4.7l2.1 2.1l.708-.707zm-7-2.77v10.578q0 .269.173.442t.442.173h12.77q.269 0 .442-.173t.173-.442V7.808zM5.77 20q-.672 0-1.221-.549Q4 18.901 4 18.231V7.487q0-.293.093-.55q.094-.258.28-.475L5.931 4.59q.217-.292.543-.441Q6.8 4 7.174 4h9.614q.374 0 .71.149q.335.15.552.441l1.577 1.91q.186.217.28.485q.093.267.093.56V18.23q0 .67-.549 1.22q-.55.549-1.22.549zM5.38 6.808H18.6l-1.33-1.596q-.097-.097-.222-.154Q16.923 5 16.788 5H7.192q-.134 0-.26.058q-.124.057-.22.154zM12 13.404"></path></svg>
    )
}