import MaxWidthWrapper from "./MaxWidthWrapper";

interface SearchBarProps {
    setFilter: (filter: string) => void;
}

export default function SearchBar({ setFilter }: SearchBarProps) {
    return (
        <div className="w-full grid place-items-center">
            <div className="w-full flex">
                <input type="text" className="border-none outline-none my-10 bg-zinc-700 p-4 text-xl rounded-xl flex-1" placeholder="Todo Content..." onChange={(e) => setFilter(e.target.value)} />
            </div>
        </div>
    );
}
