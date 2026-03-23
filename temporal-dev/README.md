## Temporal Dev Server (Docker)

This folder contains a minimal setup to run a Temporal server locally for development.

### Prerequisites

- Docker Desktop (or any Docker engine) installed and running.

### Start the Temporal dev server

From this folder:

```bash
cd temporal-dev
docker compose up -d
```

This will:

- Start the Temporal server on `localhost:7233`.
- Expose the Temporal Web UI on `http://localhost:8234`.

You can check the status of containers:

```bash
docker compose ps
```

To see logs:

```bash
docker compose logs -f
```

### Stop the Temporal dev server

From this folder:

```bash
docker compose down
```

This stops and removes the containers (data is ephemeral by default).

### How this meets the acceptance criteria

- **Temporal dev server runs locally**: `docker compose up -d` starts Temporal on your machine.
- **Temporal UI is accessible**: open `http://localhost:8234` in a browser while the containers are running.
- **Instructions to start the server documented**: all start/stop commands are documented above in this `README.md`.

