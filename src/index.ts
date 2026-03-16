import {
  SuccessfulWorkflowRun,
  createSuccessfulRunResponse,
  formatWorkflowError,
} from "./ts-features";

const message: string = "Hello from TypeScript backend!";
console.log(message);

const startTime = new Date().toISOString();
console.log(`[backend] TypeScript app started at ${startTime}`);

// Practice: create a successful workflow run and log typed SDK-style response
const run: SuccessfulWorkflowRun = {
  id: "demo-run-1",
  status: "completed",
  createdAt: new Date(startTime),
  finishedAt: new Date(),
  resultSummary: "Demo workflow completed successfully",
};

const response = createSuccessfulRunResponse(run);
console.log("Typed SDK response:", response);

// Practice: format a few different workflow errors (union type)
const errors: import("./ts-features").WorkflowError[] = [
  { type: "validation", messages: ["amount must be positive"] },
  { type: "network", retryAfterMs: 1000 },
  { type: "unknown", message: "Something went wrong" },
];

errors.forEach((err) => {
  const formatted = formatWorkflowError(err);
  console.log("Formatted error:", formatted);
});

