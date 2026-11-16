import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

// Exercise the actual TypeScript model without another runtime dependency.
const source = readFileSync(new URL("../lib/metrics.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { calculateMetrics, getSystemStatus } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("work initially supports productivity and purpose", () => {
  const resting = calculateMetrics(0);
  const balanced = calculateMetrics(45);
  assert.ok(balanced.productivity > resting.productivity);
  assert.ok(balanced.purpose > resting.purpose);
  assert.ok(balanced.wellbeing > resting.wellbeing);
});

test("a high workload can look productive while wellbeing declines", () => {
  const balanced = calculateMetrics(45);
  const overloaded = calculateMetrics(90);
  assert.ok(overloaded.productivity > balanced.productivity);
  assert.ok(overloaded.connection < balanced.connection);
  assert.ok(overloaded.recovery < balanced.recovery);
  assert.ok(overloaded.wellbeing < balanced.wellbeing);
  assert.equal(getSystemStatus(90).kind, "warning");
});

test("every slider position produces bounded, finite resource values", () => {
  for (let w = 0; w <= 100; w++) {
    for (const value of Object.values(calculateMetrics(w))) {
      assert.ok(Number.isFinite(value) && value >= 0 && value <= 100);
      assert.equal(value, Math.round(value));
    }
  }
});

test("slider extremes are clamped and status boundaries are consistent", () => {
  assert.deepEqual(calculateMetrics(-10), calculateMetrics(0));
  assert.deepEqual(calculateMetrics(110), calculateMetrics(100));
  assert.equal(getSystemStatus(24).kind, "resting");
  assert.equal(getSystemStatus(25).kind, "balanced");
  assert.equal(getSystemStatus(75).kind, "balanced");
  assert.equal(getSystemStatus(76).kind, "warning");
});
