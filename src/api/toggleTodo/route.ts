import prisma from "@/lib/db";
import { NextRequest } from "next/server";

interface RequestBody {
	id: string;
	finished: boolean;
}

export async function POST(req: NextRequest) {
	const { id, finished }: RequestBody = await req.json();

	await prisma.todo.update({
		where: {
			id,
		},
		data: {
			finished,
			finishedAt: finished ? new Date() : null,
		},
	});

    return new Response("Success");
}
