import prisma from "@/lib/db";
import { NextRequest } from "next/server";

interface RequestBody {
	id: string;
}

export async function POST(req: NextRequest) {
	const { id }: RequestBody = await req.json();

	await prisma.todo.delete({
		where: {
			id,
		},
	});

	return new Response("Success");
}
