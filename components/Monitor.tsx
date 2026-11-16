"use client";

import { useState } from "react";
import { calculateMetrics, getSystemStatus } from "@/lib/metrics";

export default function Monitor() {
  const [workload, setWorkload] = useState(45);
  const values = calculateMetrics(workload);
  const status = getSystemStatus(workload);
  const metrics = [
    { key: "productivity", label: "Productivity", value: values.productivity },
    { key: "connection", label: "Connection", value: values.connection },
    { key: "recovery", label: "Recovery", value: values.recovery },
    { key: "purpose", label: "Purpose", value: values.purpose },
  ];
  return <div className="balance-experiment">
    <div className="experiment-titlebar"><span>SYSTEM MONITOR</span><span>AN ILLUSTRATIVE EXPERIMENT</span></div>
    <div className="experiment-grid">
      <div className="experiment-controls">
        <div className="experiment-intro"><span className="eyebrow">TRY CHANGING THE PACE</span><h3>What does your workload<br/>leave room for?</h3></div>
        <div className="workload-label"><label htmlFor="workload">Workload</label><output htmlFor="workload">{workload}%</output></div>
        <input id="workload" type="range" min="0" max="100" value={workload} onChange={event => setWorkload(Number(event.target.value))} aria-describedby="workload-description"/>
        <div className="range-labels"><span>A QUIETER PACE</span><span>A FULL PLATE</span></div>
        <div className="workload-presets" aria-label="Example workloads">{[{ value: 15, label: "Quieter" }, { value: 45, label: "Balanced" }, { value: 90, label: "Overloaded" }].map(preset => <button key={preset.value} onClick={() => setWorkload(preset.value)} aria-pressed={workload === preset.value}>{preset.label}</button>)}</div>
        <p id="workload-description">Move the slider or choose an example. Watch what happens to the other parts of the system.</p>
      </div>
      <div className="experiment-resources"><span className="eyebrow">AVAILABLE RESOURCES</span>
        {metrics.map(metric => <div className="resource-row" key={metric.key}><div className="resource-label"><span>{metric.label}</span><span>{metric.value}<small> / 100</small></span></div><div className={`resource-meter resource-${metric.key}`} role="meter" aria-label={metric.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={metric.value}>{Array.from({ length: 30 }, (_, index) => <span key={index} className={index < Math.round(metric.value / 100 * 30) ? "filled" : ""}/>)}</div></div>)}
        <div className="wellbeing-index"><span>Overall wellbeing<span>Illustrative index</span></span><strong>{values.wellbeing}<small> / 100</small></strong></div>
      </div>
    </div>
    <div className={`experiment-status ${status.kind}`} role="status" aria-live="polite"><span className="status-symbol" aria-hidden="true">{status.kind === "warning" ? "!" : "→"}</span><div><strong>{status.label}</strong><p>{status.detail}</p></div></div>
    <p className="experiment-disclaimer">Fictional values for creative reflection. This is not a scientific model, personal score, or health assessment.</p>
  </div>;
}
