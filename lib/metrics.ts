/** Fictional resource model for storytelling. Not a scientific wellbeing measure. */
export function calculateMetrics(workload: number) {
  const w = Math.max(0, Math.min(100, workload));
  const productivity = Math.round(Math.min(98, 20 + w * 1.25 - Math.max(0, w - 72) * 1.45));
  const connection = Math.round(Math.max(12, 96 - w * 0.49 - Math.max(0, w - 55) * 0.72));
  const recovery = Math.round(Math.max(6, 100 - w * 0.78 - Math.max(0, w - 55) * 0.52));
  const purpose = Math.round(Math.min(92, Math.max(30, 35 + w * 0.85 - Math.max(0, w - 65) * 1.5)));
  const wellbeing = Math.round(connection * 0.28 + recovery * 0.27 + purpose * 0.25 + productivity * 0.20);
  return { productivity, connection, recovery, purpose, wellbeing };
}

export function getSystemStatus(workload: number) {
  if (workload >= 76) return {
    kind: "warning", label: "Resources under pressure",
    message: "WARNING: Productivity is high. Wellbeing is declining.",
    detail: "Less room for people. Less time to recover. Something has to give.",
  };
  if (workload <= 24) return {
    kind: "resting", label: "Room to reconnect",
    message: "STATUS: A quieter pace. Space to rest and find direction.",
    detail: "A lighter load can open up room for the things you've been missing.",
  };
  return {
    kind: "balanced", label: "System balanced",
    message: "STATUS: System balanced. Resources available for what matters.",
    detail: "There is room for meaningful work, and a life around it.",
  };
}
