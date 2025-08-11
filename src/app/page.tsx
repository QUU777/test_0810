import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              お試し作成
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              これは、Jupiterプロジェクトのドキュメントの日本語版です。
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              左のサイドバーからドキュメントを選択してください。
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
