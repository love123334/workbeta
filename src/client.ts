import { startWorkflow, WorkflowInput } from "./workflow";

function runClient() {
  const runs: WorkflowInput[] = [
    {
      workflowId: "payment-1",
      payload: { userId: "user-123", amount: 100 },
    },
    {
      workflowId: "payment-2",
      payload: { userId: "user-456", amount: 250.5 },
    },
    {
      workflowId: "refund-1",
      payload: { userId: "user-789", amount: -50 },
    },
  ];

  console.log("Starting workflows from client...\n");

  runs.forEach((input, index) => {
    console.log(`Run #${index + 1}`);
    console.log("Input:", input);

    const result = startWorkflow(input);

    console.log("Result:", result);
    console.log("-----");
  });

  console.log("\nAll workflow runs completed.");
}

runClient();

