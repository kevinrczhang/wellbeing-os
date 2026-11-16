"use client";

import { calculateMetrics, getSystemStatus } from "@/lib/metrics";
import { Icon } from "./Icon";

export default function Monitor({ workload, setWorkload }: { workload: number; setWorkload: (value: number) => void }) {
  const values = calculateMetrics(workload);
  const status = getSystemStatus(workload);
  const metrics = [
    { key: "productivity", label: "Productivity", value: values.productivity, note: "Getting things done" },
    { key: "connection", label: "Connection", value: values.connection, note: "Time for your people" },
    { key: "recovery", label: "Recovery", value: values.recovery, note: "Room to recharge" },
    { key: "purpose", label: "Purpose", value: values.purpose, note: "A sense of direction" },
  ];

  return <div className="monitor-content">
    <div className="monitor-heading"><div><span className="eyebrow">LIVE RESOURCE OVERVIEW</span><h2>How is your system doing?</h2></div><Icon name="monitor" size={32}/></div>
    <div className="monitor-overview">
      <div className="overall-number"><span>{values.wellbeing}</span><span className="overall-unit">/100</span><span className="overall-label">Overall wellbeing</span></div>
      <div className="overview-copy"><span className={`status-label ${status.kind}`}><span className="status-dot"/>{status.label}</span><p>Doing more isn’t always<br/>the same as doing well.</p></div>
    </div>
    <div className="metric-table">
      {metrics.map(metric => <div className="metric-row" key={metric.key}>
        <div className="metric-name">{metric.label}<span>{metric.note}</span></div>
        <div className={`segmented-meter ${metric.key}`} role="meter" aria-label={metric.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={metric.value}>
          {Array.from({length: 24}, (_, index) => <span key={index} className={index < Math.round(metric.value / 100 * 24) ? "filled" : ""}/>)}
        </div>
        <span className="metric-value">{metric.value}<span>%</span></span>
      </div>)}
    </div>
    <div className="workload-control">
      <div className="workload-label"><label htmlFor="workload">Adjust your workload</label><output htmlFor="workload">{workload}%</output></div>
      <input id="workload" type="range" min="0" max="100" value={workload} onChange={event => setWorkload(Number(event.target.value))} aria-describedby="workload-description"/>
      <div className="range-labels"><span>LESS ON YOUR PLATE</span><span>ALL SYSTEMS GO</span></div>
      <p id="workload-description">Move the slider. Notice what gets left behind.</p>
    </div>
    <div className={`system-message ${status.kind}`} role="status" aria-live="polite"><span className="message-symbol">{status.kind === "warning" ? "!" : ">"}</span><span>{status.message}</span></div>
    <div className="monitor-foot"><span>ILLUSTRATIVE MODEL · NOT A HEALTH ASSESSMENT</span><button className="text-button" onClick={() => setWorkload(45)} aria-label="Reset workload to balanced setting">Reset ↺</button></div>
  </div>;
}
