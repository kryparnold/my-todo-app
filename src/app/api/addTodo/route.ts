import prisma from "@/lib/db";
import { NextRequest } from "next/server";

interface RequestBody {
	content: string;
}

export async function POST(req: NextRequest) {
	const { content }: RequestBody = await req.json();

	const newTodo = await prisma.todo.create({
		data: {
			content,
		},
	});

	return new Response(JSON.stringify(newTodo));
}
