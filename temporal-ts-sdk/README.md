## Temporal TypeScript SDK Project

This folder contains a minimal Temporal project using the TypeScript SDK.

### Structure

- `src/`
  - `worker.ts` – starts a Temporal worker
  - `workflows/example-workflow.ts` – example workflow definition
  - `activities/example-activities.ts` – example activity implementation

### Prerequisites

- Temporal server running locally (for example, using the `temporal-dev` folder in this repo):

  ```bash
  cd temporal-dev
  docker compose up -d
  ```

### Install dependencies

From this folder:

```bash
cd temporal-ts-sdk
npm install
```

### Start the worker

To run the TypeScript worker with `ts-node`:

```bash
npm run worker
```

What happens:

- `src/worker.ts` starts a Temporal worker.
- The worker connects to `localhost:7233` (default Temporal address).
- It registers:
  - Workflow from `src/workflows/example-workflow.ts`
  - Activities from `src/activities/example-activities.ts`
- Listens on task queue: `example-task-queue`.

You should see output similar to:

```text
Temporal worker starting on task queue: example-task-queue
```

The process will keep running, waiting for workflows to execute.

### How this meets the acceptance criteria

- **Temporal SDK installed**: `package.json` has `@temporalio/worker` and `@temporalio/client` in `dependencies`.
- **Workflow folder created**: `src/workflows/` with `example-workflow.ts`.
- **Activity folder created**: `src/activities/` with `example-activities.ts`.
- **Worker starts successfully**: `npm run worker` runs `src/worker.ts`, which creates and runs a Temporal worker on the `example-task-queue`.

