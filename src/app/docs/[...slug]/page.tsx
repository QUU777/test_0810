import { notFound } from "next/navigation";
// This is a placeholder. We will implement MDX loading later.
// import { allDocs } from "@/.contentlayer/generated";
// import { Mdx } from "@/components/mdx-components";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: DocPageProps["params"]) {
  const slug = params.slug?.join("/") || "";
  // const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  const doc = {slugAsParams: slug, title: "Placeholder Title", body: {code: "<h1>Placeholder</h1>"}}; // Placeholder

  if (!doc) {
    null;
  }

  return doc;
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
        </div>
        {/* <Mdx code={doc.body.code} /> */}
        <div className="prose">
            This is a placeholder for the document content. The slug is: {doc.slugAsParams}
        </div>
      </div>
    </main>
  );
}
