"use client"
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full bg-zinc-600 p-6 text-2xl flex items-center gap-5">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/archive" className="hover:underline">Archive</Link>
            <Link href="/add" className="bg-sky-500 shadow-sm px-4 py-2 rounded-xl hover:bg-sky-600 transition-all">Add +</Link>
        </div>
    );
}
