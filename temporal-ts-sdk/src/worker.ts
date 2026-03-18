import { Worker } from "@temporalio/worker";
import * as activities from "./activities/example-activities";

async function runWorker(): Promise<void> {
  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows/example-workflow"),
    activities,
    taskQueue: "example-task-queue",
  });

  console.log("Temporal worker starting on task queue: example-task-queue");
  await worker.run();
}

runWorker().catch((err) => {
  console.error("Worker failed:", err);
  process.exit(1);
});

