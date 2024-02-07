import Todo from "./Todo";
import { useTodo } from "./context/TodoProvider";

export default function TodoList({ archive = false, filter = "" }: { archive?: boolean, filter?: string }) {
    const { todos } = useTodo();
    const filteredTodos = todos.filter(todo => todo.archived === archive).filter(todo => todo.content.includes(filter));

    if (!filteredTodos.length) {
        return (
            <div className="w-full text-center text-4xl font-bold py-4">No Todos Found</div>
        );
    }

    return (
        <div className="w-full flex gap-5 flex-col">
            {filteredTodos.map((todo, index) => (<Todo data={todo} key={index} />))}
        </div>
    );
}
