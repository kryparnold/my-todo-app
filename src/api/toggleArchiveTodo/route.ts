import prisma from "@/lib/db";
import { NextRequest } from "next/server";

interface RequestBody {
	id: string;
	archived: boolean;
}

export async function POST(req: NextRequest) {
	const { id, archived }: RequestBody = await req.json();

	await prisma.todo.update({
		where: {
			id,
		},
		data: {
			archived,
		},
	});

	return new Response("Success");
}
