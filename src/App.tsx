import { useState } from "react";
import { WireframeHeader } from "./components/WireframeHeader";
import { OverviewDashboard } from "./components/OverviewDashboard";
import { MachinesPage } from "./components/MachinesPage";
import { MaintenancePage } from "./components/MaintenancePage";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";

export default function App() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <WireframeHeader activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        {activeTab === "Overview" && <OverviewDashboard />}
        {activeTab === "Machines" && <MachinesPage />}
        {activeTab === "Maintenance" && <MaintenancePage />}
        {activeTab === "Analytics" && <AnalyticsDashboard />}
      </main>
    </div>
  );
}
