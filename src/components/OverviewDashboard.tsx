import { Card } from "./ui/card";

export function OverviewDashboard() {
  const machines = [
    { name: "Welding Robot A1", risk: 15 },
    { name: "Assembly Line B2", risk: 42 },
    { name: "Quality Check C3", risk: 8 },
    { name: "Paint System D4", risk: 67 },
    { name: "Inspection Unit E5", risk: 22 },
  ];

  return (
    <div className="p-8 space-y-8 bg-background">
      {/* Three Column Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* System Status */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-foreground bg-foreground" />
                <span className="text-foreground">Operation</span>
              </div>
              <span className="text-foreground">92%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-border" />
                <span className="text-foreground">Shipping</span>
              </div>
              <span className="text-muted-foreground">78%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-border" />
                <span className="text-foreground">Maintenance</span>
              </div>
              <span className="text-muted-foreground">15%</span>
            </div>
          </div>
        </Card>

        {/* Predictive Activity Chart */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-foreground">Predictive Activity (24h)</h3>
          </div>
          <div className="h-[200px] border-2 border-border rounded-lg p-6 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">[ Bar Chart Placeholder ]</span>
          </div>
        </Card>

        {/* Issue Distribution */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-foreground">Issue Distribution</h3>
          </div>
          <div className="h-[200px] border-2 border-border rounded-lg p-6 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">[ Donut Chart Placeholder ]</span>
          </div>
          <div className="mt-5 space-y-2.5">
            {["Critical", "Warning", "Info"].map((item, idx) => (
              <div key={item} className="flex items-center justify-between p-2 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${idx === 0 ? 'bg-foreground' : idx === 1 ? 'bg-chart-2' : 'bg-chart-3'}`} />
                  <span className="text-muted-foreground">{item}</span>
                </div>
                <span className="text-foreground">{[12, 28, 45][idx]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Assembly Line Overview */}
      <div>
        <h2 className="mb-6 text-foreground">Assembly Line Overview</h2>
        <div className="grid grid-cols-5 gap-5">
          {machines.map((machine) => (
            <Card key={machine.name} className="p-5 border-2 border-border rounded-xl bg-card">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-lg border-2 border-border bg-secondary" />
                  <div className="px-3 py-1.5 rounded-lg border-2 border-foreground bg-foreground text-background">
                    {machine.risk}%
                  </div>
                </div>
                <div>
                  <p className="text-foreground">{machine.name}</p>
                  <p className="text-muted-foreground mt-1">ID: {machine.name.slice(-2)}</p>
                </div>
                <div className="h-2.5 rounded-full border-2 border-border relative overflow-hidden bg-card">
                  <div
                    className="absolute inset-y-0 left-0 bg-foreground rounded-full"
                    style={{ width: `${machine.risk}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Predictive Insights */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Predictive Insights</h3>
          <div className="space-y-3">
            {[
              { title: "Paint System D4 degradation detected", priority: "High", time: "2h ago" },
              { title: "Assembly Line B2 efficiency drop", priority: "Medium", time: "4h ago" },
              { title: "Welding Robot A1 calibration needed", priority: "Low", time: "6h ago" },
            ].map((insight, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border-2 border-border bg-muted">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground">{insight.title}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-muted-foreground">{insight.priority}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{insight.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Scheduled Repairs */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Scheduled Repairs</h3>
          <div className="space-y-3">
            {[
              { machine: "Quality Check C3", date: "Oct 24, 2025", tech: "Team A" },
              { machine: "Inspection Unit E5", date: "Oct 26, 2025", tech: "Team B" },
              { machine: "Welding Robot A1", date: "Oct 28, 2025", tech: "Team C" },
            ].map((repair, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border-2 border-border bg-card">
                <div>
                  <p className="text-foreground">{repair.machine}</p>
                  <p className="text-muted-foreground mt-1">{repair.tech}</p>
                </div>
                <span className="text-muted-foreground">{repair.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
