export const Sidebar = () => {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="relative h-full overflow-y-auto p-6 lg:p-8">
        {/* Placeholder for navigation */}
        <div className="space-y-2">
          <p className="font-medium">はじめに</p>
          <ul className="space-y-1">
            <li><a href="/docs/introduction" className="text-sm text-muted-foreground hover:text-primary">紹介</a></li>
            <li><a href="/docs/getting-started" className="text-sm text-muted-foreground hover:text-primary">入門</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
