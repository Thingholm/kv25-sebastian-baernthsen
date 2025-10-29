import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
const secret = req.headers.get("x-secret");
if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid secret", { status: 401 });
}

const payload = await req.json();
if (!payload) return new Response("No payload", { status: 400 });

if (payload.slug) {
    revalidatePath(`/${payload.slug}`);
}
if (payload.slugs?.length) {
    payload.slugs.forEach((s: string) => revalidatePath(`/${s}`));
}

if (payload.revalidateHome) revalidatePath("/");

return new Response(JSON.stringify({ revalidated: true }));
}
