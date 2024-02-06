import prisma from "@/lib/db";

export async function GET() {
	const todos = await prisma.todo.findMany();

	return new Response(JSON.stringify(todos));
}
