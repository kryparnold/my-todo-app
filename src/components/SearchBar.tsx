import MaxWidthWrapper from "./MaxWidthWrapper";

interface SearchBarProps {
    setFilter: (filter: string) => void;
    filter: string;
}

export default function SearchBar({ setFilter, filter }: SearchBarProps) {
    return (
        <div className="w-full grid place-items-center">
            <div className="w-full flex">
                <input type="text" value={filter} className="border-none outline-none bg-zinc-700 p-4 text-xl rounded-xl flex-1" placeholder="Todo Content..." onChange={(e) => setFilter(e.target.value)} />
            </div>
        </div>
    );
}
