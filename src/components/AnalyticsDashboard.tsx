import { Card } from "./ui/card";

export function AnalyticsDashboard() {
  const kpis = [
    { metric: "92%", label: "Downtime Reduced", trend: "up" },
    { metric: "$458K", label: "Cost Savings", trend: "up" },
    { metric: "3.2x", label: "Prediction Accuracy", trend: "up" },
    { metric: "24min", label: "Avg Response Time", trend: "down" },
  ];

  const modelVersions = [
    { version: "v3.2.1", accuracy: "94.2%", deployed: "Oct 20, 2025", status: "Active" },
    { version: "v3.1.8", accuracy: "91.5%", deployed: "Sep 15, 2025", status: "Archived" },
    { version: "v3.0.4", accuracy: "88.7%", deployed: "Aug 10, 2025", status: "Archived" },
    { version: "v2.9.2", accuracy: "85.1%", deployed: "Jul 05, 2025", status: "Archived" },
  ];

  return (
    <div className="p-8 space-y-8 bg-background">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <Card key={idx} className="p-6 border-2 border-border rounded-xl bg-card">
            <div className="space-y-4">
              <div className="text-foreground">{kpi.metric}</div>
              <p className="text-muted-foreground">{kpi.label}</p>
              <div className="h-12 border-2 border-border rounded-lg p-2 flex items-end justify-between bg-muted">
                {/* Mini trend line placeholder */}
                {[3, 2, 4, 5, 3, 6, 7, 6, 8].map((height, i) => (
                  <div
                    key={i}
                    className="w-1 bg-foreground rounded-sm"
                    style={{ height: `${height * 4}px` }}
                  />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Two Charts Side by Side */}
      <div className="grid grid-cols-2 gap-6">
        {/* Downtime Reduction Line Chart */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Downtime Reduction Over Time</h3>
          <div className="h-[280px] border-2 border-border rounded-xl p-8 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">[ Line Chart Placeholder ]</span>
          </div>
        </Card>

        {/* Cost vs Savings Bar Chart */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Cost vs Savings</h3>
          <div className="h-[280px] border-2 border-border rounded-xl p-8 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">[ Bar Chart Placeholder ]</span>
          </div>
        </Card>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Bottom Section: Donut Chart + Table */}
      <div className="grid grid-cols-[1fr_1.2fr] gap-6">
        {/* Sensor Contribution Breakdown */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Sensor Contribution Breakdown</h3>
          <div className="h-[240px] border-2 border-border rounded-xl p-8 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">[ Donut Chart Placeholder ]</span>
          </div>
          <div className="mt-5 space-y-2.5">
            {[
              { label: "Temperature", value: "35%" },
              { label: "Sound Level", value: "28%" },
              { label: "Optical", value: "22%" },
              { label: "Airflow", value: "15%" },
            ].map((item, idx) => (
              <div key={item.label} className="flex items-center justify-between p-2 rounded-lg">
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-4 h-4 rounded ${
                      idx === 0 ? 'bg-foreground' : 
                      idx === 1 ? 'bg-chart-2' : 
                      idx === 2 ? 'bg-chart-3' : 'bg-chart-4'
                    }`} 
                  />
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
                <span className="text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Model Version Comparison Table */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Model Version Comparison</h3>
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border bg-secondary">
                  <th className="text-left p-4 text-foreground">Version</th>
                  <th className="text-left p-4 text-foreground">Accuracy</th>
                  <th className="text-left p-4 text-foreground">Deployed</th>
                  <th className="text-left p-4 text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {modelVersions.map((model, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted">
                    <td className="p-4 text-foreground">{model.version}</td>
                    <td className="p-4 text-foreground">{model.accuracy}</td>
                    <td className="p-4 text-muted-foreground">{model.deployed}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1.5 rounded-md border-2 ${
                          model.status === "Active"
                            ? "border-foreground bg-foreground text-background"
                            : "border-border bg-muted text-muted-foreground"
                        }`}
                      >
                        {model.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* System ROI Summary Footer */}
      <Card className="p-6 border-2 border-foreground rounded-xl bg-card">
        <h3 className="mb-5 text-foreground">System ROI Summary</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="p-4 rounded-lg border-2 border-border bg-muted">
            <p className="text-muted-foreground mb-2">Total Investment</p>
            <p className="text-foreground">$1.2M</p>
          </div>
          <div className="p-4 rounded-lg border-2 border-border bg-muted">
            <p className="text-muted-foreground mb-2">Annual Savings</p>
            <p className="text-foreground">$458K</p>
          </div>
          <div className="p-4 rounded-lg border-2 border-border bg-muted">
            <p className="text-muted-foreground mb-2">Payback Period</p>
            <p className="text-foreground">2.6 years</p>
          </div>
          <div className="p-4 rounded-lg border-2 border-border bg-muted">
            <p className="text-muted-foreground mb-2">5-Year ROI</p>
            <p className="text-foreground">92%</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
