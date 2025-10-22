import { Card } from "./ui/card";

export function MaintenancePage() {
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const events = [3, 7, 12, 18, 24, 28];

  const workOrders = [
    { id: "WO-1024", machine: "Paint System D4", priority: "High", status: "In Progress", assignee: "Team A" },
    { id: "WO-1025", machine: "Assembly Line B2", priority: "Medium", status: "Scheduled", assignee: "Team B" },
    { id: "WO-1026", machine: "Welding Robot A1", priority: "Low", status: "Pending", assignee: "Team C" },
    { id: "WO-1027", machine: "Quality Check C3", priority: "Medium", status: "In Progress", assignee: "Team A" },
  ];

  const parts = [
    { item: "Hydraulic Pump HX-220", qty: 2, status: "In Transit", eta: "Oct 24, 2025" },
    { item: "Servo Motor SM-450", qty: 1, status: "Ordered", eta: "Oct 26, 2025" },
    { item: "Sensor Array SA-100", qty: 4, status: "Pending", eta: "Oct 28, 2025" },
    { item: "Control Board CB-88", qty: 1, status: "In Stock", eta: "Available" },
  ];

  return (
    <div className="p-8 space-y-8 bg-background">
      {/* Main Area */}
      <div className="grid grid-cols-[1fr_420px] gap-6">
        {/* Repair Calendar */}
        <Card className="p-6 border-2 border-border rounded-xl bg-card">
          <h3 className="mb-5 text-foreground">Repair Calendar - October 2025</h3>
          <div className="border-2 border-border rounded-lg p-5 bg-muted">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>
            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day) => (
                <div
                  key={day}
                  className={`aspect-square flex items-center justify-center rounded-lg border-2 transition-colors ${
                    events.includes(day)
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Active Work Orders */}
        <Card className="p-6 border-2 border-border rounded-xl bg-secondary">
          <h3 className="mb-5 text-foreground">Active Work Orders</h3>
          <div className="space-y-3">
            {workOrders.map((order) => (
              <div key={order.id} className="p-4 rounded-lg border-2 border-border bg-card">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-foreground">{order.id}</span>
                  <span className="px-3 py-1 rounded-md border-2 border-foreground bg-foreground text-background">
                    {order.priority}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{order.machine}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{order.assignee}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">{order.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Parts Procurement Tracker */}
      <Card className="p-6 border-2 border-border rounded-xl bg-card">
        <h3 className="mb-5 text-foreground">Parts Procurement Tracker</h3>
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border bg-secondary">
                <th className="text-left p-4 text-foreground">Item</th>
                <th className="text-left p-4 text-foreground">Quantity</th>
                <th className="text-left p-4 text-foreground">Status</th>
                <th className="text-left p-4 text-foreground">ETA</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, idx) => (
                <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted">
                  <td className="p-4 text-foreground">{part.item}</td>
                  <td className="p-4 text-muted-foreground">{part.qty}</td>
                  <td className="p-4">
                    <span className="px-3 py-1.5 rounded-md border-2 border-border text-muted-foreground bg-muted">
                      {part.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{part.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Team Assignment Summary */}
      <Card className="p-6 border-2 border-border rounded-xl bg-card">
        <h3 className="mb-5 text-foreground">Team Assignment Summary</h3>
        <div className="grid grid-cols-3 gap-5">
          {[
            { team: "Team A", active: 2, scheduled: 3, available: 4 },
            { team: "Team B", active: 1, scheduled: 2, available: 6 },
            { team: "Team C", active: 0, scheduled: 1, available: 8 },
          ].map((team) => (
            <div key={team.team} className="p-5 rounded-lg border-2 border-border bg-muted">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-lg border-2 border-foreground bg-foreground" />
                <span className="text-foreground">{team.team}</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between p-2 rounded bg-card">
                  <span className="text-muted-foreground">Active Tasks</span>
                  <span className="text-foreground">{team.active}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-card">
                  <span className="text-muted-foreground">Scheduled</span>
                  <span className="text-foreground">{team.scheduled}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-card">
                  <span className="text-muted-foreground">Available</span>
                  <span className="text-foreground">{team.available}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
