export interface WorkflowInput {
  workflowId: string;
  payload: {
    userId: string;
    amount: number;
  };
}

export interface WorkflowResult {
  workflowId: string;
  success: boolean;
  processedAt: string;
  message: string;
}

export function startWorkflow(input: WorkflowInput): WorkflowResult {
  const processedAt = new Date().toISOString();

  const message = `Processed workflow ${input.workflowId} for user ${input.payload.userId} with amount ${input.payload.amount}`;

  return {
    workflowId: input.workflowId,
    success: true,
    processedAt,
    message,
  };
}

