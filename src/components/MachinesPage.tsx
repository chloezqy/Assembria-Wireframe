import { Card } from "./ui/card";

export function MachinesPage() {
  const machines = [
    { id: "MD-0303F-10", name: "Paint System D4", health: 33 },
    { id: "MD-0303F-11", name: "Assembly Line B2", health: 58 },
    { id: "MD-0303F-12", name: "Welding Robot A1", health: 85 },
    { id: "MD-0303F-13", name: "Quality Check C3", health: 92 },
    { id: "MD-0303F-14", name: "Inspection Unit E5", health: 78 },
    { id: "MD-0303F-15", name: "Packaging System F6", health: 65 },
  ];

  const sensors = [
    { name: "Temperature", value: 78, unit: "°C" },
    { name: "Sound Level", value: 65, unit: "dB" },
    { name: "Optical Sensor", value: 92, unit: "%" },
    { name: "Airflow", value: 45, unit: "m³/h" },
  ];

  return (
    <div className="p-8 bg-background">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-muted-foreground">
        <span>Machines</span>
        <span>›</span>
        <span className="text-foreground">MD-0303F-10</span>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-[340px_1fr] gap-6">
        {/* Machine List Panel */}
        <Card className="p-5 border-2 border-border rounded-xl h-fit bg-secondary">
          <h3 className="mb-5 text-foreground">Machine List</h3>
          <div className="space-y-2.5">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  machine.id === "MD-0303F-10"
                    ? "border-foreground bg-card"
                    : "border-border bg-muted hover:bg-card"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground">{machine.id}</span>
                  <span className="text-foreground">{machine.health}%</span>
                </div>
                <p className="text-muted-foreground mb-3">{machine.name}</p>
                <div className="h-2 rounded-full border-2 border-border relative overflow-hidden bg-card">
                  <div
                    className="absolute inset-y-0 left-0 bg-foreground rounded-full"
                    style={{ width: `${machine.health}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Machine Detail Panel */}
        <div className="space-y-6">
          {/* Health Trend */}
          <Card className="p-6 border-2 border-border rounded-xl bg-card">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-foreground">Health Trend (7 Days)</h3>
            </div>
            <div className="h-[260px] border-2 border-border rounded-xl p-8 flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">[ Line Chart Placeholder ]</span>
            </div>
          </Card>

          {/* Sensor Breakdown */}
          <Card className="p-6 border-2 border-border rounded-xl bg-card">
            <h3 className="mb-5 text-foreground">Sensor Breakdown</h3>
            <div className="grid grid-cols-2 gap-5">
              {sensors.map((sensor) => (
                <div key={sensor.name} className="p-5 rounded-lg border-2 border-border bg-muted">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-foreground">{sensor.name}</span>
                    <div className="w-3 h-3 rounded-full bg-foreground" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-foreground">{sensor.value}</span>
                    <span className="text-muted-foreground">{sensor.unit}</span>
                  </div>
                  <div className="h-2 rounded-full border-2 border-border relative overflow-hidden bg-card">
                    <div
                      className="absolute inset-y-0 left-0 bg-foreground rounded-full"
                      style={{ width: `${sensor.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Repair Forecast & Failure Probability */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-border rounded-xl bg-card">
              <h3 className="mb-5 text-foreground">Upcoming Repair Forecast</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted">
                  <span className="text-foreground">Estimated Date</span>
                  <span className="text-muted-foreground">Oct 30, 2025</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted">
                  <span className="text-foreground">Downtime</span>
                  <span className="text-muted-foreground">4-6 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted">
                  <span className="text-foreground">Parts Needed</span>
                  <span className="text-muted-foreground">3 items</span>
                </div>
              </div>
              <button className="w-full mt-5 px-5 py-3 rounded-lg border-2 border-foreground bg-foreground text-background hover:bg-card hover:text-foreground transition-colors">
                Schedule Repair
              </button>
            </Card>

            <Card className="p-6 border-2 border-border rounded-xl bg-card">
              <h3 className="mb-5 text-foreground">Failure Probability</h3>
              <div className="flex items-center justify-center h-36 rounded-lg border-2 border-border bg-muted">
                <div className="text-center">
                  <div className="text-foreground mb-2">67%</div>
                  <p className="text-muted-foreground">Next 14 Days</p>
                </div>
              </div>
              <div className="space-y-3 mt-5">
                <div className="flex justify-between p-3 rounded-lg bg-muted">
                  <span className="text-muted-foreground">7 days</span>
                  <span className="text-foreground">42%</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-card border border-border">
                  <span className="text-muted-foreground">14 days</span>
                  <span className="text-foreground">67%</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-card border border-border">
                  <span className="text-muted-foreground">30 days</span>
                  <span className="text-foreground">85%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
