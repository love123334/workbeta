import { Client } from "@temporalio/client";
import { exampleWorkflow } from "./workflows/example-workflow";

async function runClient(): Promise<void> {
  const client = new Client({
    namespace: "default",
  });

  const taskQueue = "example-task-queue";

  const runs = ["TypeScript-1", "TypeScript-2", "TypeScript-3"];

  console.log(`Starting ${runs.length} workflows on task queue "${taskQueue}"...`);

  for (let i = 0; i < runs.length; i++) {
    const name = runs[i];
    console.log(`\nRun #${i + 1}`);
    console.log(`Input: name="${name}"`);

    const handle = await client.workflow.start(exampleWorkflow, {
      taskQueue,
      args: [name],
      // Unique workflowId so multiple runs appear separately in the UI.
      workflowId: `example-workflow-${Date.now()}-${i + 1}`,
    });

    console.log("Workflow started:", {
      workflowId: handle.workflowId,
      runId: handle.firstExecutionRunId,
    });

    const result = await handle.result();
    if (typeof result !== "string") {
      throw new Error(`Unexpected workflow result type: ${typeof result}`);
    }

    console.log("Workflow result:", result);
  }
}

runClient().catch((err) => {
  console.error("Client failed:", err);
  process.exit(1);
});

