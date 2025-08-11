// src/app/docs/[...slug]/page.ts
import type { Metadata } from "next";

type Params = { slug: string[] };

export default async function DocPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params; // ← Promise を await する
  // ここにページ本体
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Docs: {slug?.join("/")}</h1>
    </main>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params; // ← 同様に await
  return {
    title: `Docs - ${slug?.join("/") || "index"}`,
  };
}
