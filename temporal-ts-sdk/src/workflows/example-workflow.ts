import { proxyActivities } from "@temporalio/workflow";

// Activity type definition
export interface ExampleActivities {
  greet(name: string): Promise<string>;
}

// Create a typed activity proxy usable inside workflows
const { greet } = proxyActivities<ExampleActivities>({
  startToCloseTimeout: "1 minute",
});

// Workflow function
export async function exampleWorkflow(name: string): Promise<string> {
  const greeting = await greet(name);
  return `Workflow received: ${greeting}`;
}

