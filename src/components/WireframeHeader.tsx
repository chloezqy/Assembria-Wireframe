interface WireframeHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function WireframeHeader({ activeTab, onTabChange }: WireframeHeaderProps) {
  const tabs = ["Overview", "Machines", "Maintenance", "Analytics"];
  
  return (
    <header className="border-b-2 border-foreground bg-card">
      <div className="px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-foreground tracking-tight">Assembria</h1>
            <nav className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`px-5 py-2.5 rounded-lg border-2 transition-colors ${
                    activeTab === tab
                      ? "bg-foreground text-background border-foreground"
                      : "text-muted-foreground hover:text-foreground hover:border-border bg-card border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border-2 border-border bg-muted" />
          </div>
        </div>
      </div>
    </header>
  );
}
