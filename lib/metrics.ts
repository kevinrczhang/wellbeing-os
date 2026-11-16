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
    kind: "warning", label: "Overloaded",
    message: "WARNING: Productivity is high. Wellbeing is declining.",
    detail: "Sometimes I become so focused on the next exam, assignment, or opportunity that I forget to appreciate what I've already accomplished.",
  };
  if (workload <= 24) return {
    kind: "resting", label: "Quieter",
    message: "STATUS: A quieter pace. Space to rest and find direction.",
    detail: "Afterward, I usually feel calmer and more mentally refreshed.",
  };
  return {
    kind: "balanced", label: "Balanced",
    message: "STATUS: Balanced. Resources available for what matters.",
    detail: "I still value ambition and personal growth, but I no longer believe achievement alone determines whether I'm doing well.",
  };
}
