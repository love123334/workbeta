// Generic helper to wrap SDK-style responses
export interface SdkResponse<TData, TMeta = Record<string, unknown>> {
  data: TData;
  meta: TMeta;
}

// Domain model for a workflow run
export interface WorkflowRun {
  id: string;
  status: "pending" | "running" | "completed" | "failed";
  createdAt: Date;
  finishedAt?: Date;
}

// Union type for possible error shapes
export type WorkflowError =
  | { type: "validation"; messages: string[] }
  | { type: "network"; retryAfterMs: number }
  | { type: "unknown"; message: string };

// Intersection type: successful run with attached metadata
export type SuccessfulWorkflowRun = WorkflowRun & {
  status: "completed";
  resultSummary: string;
};

// Utility types: pick and partial for update payloads
export type WorkflowRunSummary = Pick<
  WorkflowRun,
  "id" | "status" | "finishedAt"
>;

export type WorkflowRunUpdate = Partial<
  Pick<WorkflowRun, "status" | "finishedAt">
>;

// Generic function to build a typed SDK response
export function makeSdkResponse<TData, TMeta = Record<string, unknown>>(
  data: TData,
  meta: TMeta
): SdkResponse<TData, TMeta> {
  return { data, meta };
}

// Example: create a successful workflow run response
export function createSuccessfulRunResponse(
  run: SuccessfulWorkflowRun
): SdkResponse<WorkflowRunSummary, { source: "backend"; tookMs: number }> {
  const summary: WorkflowRunSummary = {
    id: run.id,
    status: run.status,
    finishedAt: run.finishedAt,
  };

  const meta = {
    source: "backend" as const,
    tookMs: 42,
  };

  return makeSdkResponse(summary, meta);
}

// Example: narrow union error type
export function formatWorkflowError(error: WorkflowError): string {
  switch (error.type) {
    case "validation":
      return `Validation error: ${error.messages.join(", ")}`;
    case "network":
      return `Network error, retry after ${error.retryAfterMs}ms`;
    case "unknown":
      return `Unknown error: ${error.message}`;
  }
}

