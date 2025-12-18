# Example Apps Showcase

A web app that showcases example applications built with the [Livepeer](https://livepeer.org) BYOC workflow created by Muxxion Labs.

## Quick links

- Config: `data/apps.json`
- Contribution guide: `CONTRIBUTING.md`

## Apps

The site is driven from `data/apps.json`. The table below is generated from the same file.

<!-- APPS:START -->

| Name         | Description                                                         | Creator       | Tags                            | Repo                                              | Live                                           |
| ------------ | ------------------------------------------------------------------- | ------------- | ------------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| Flowforge    | Build and orchestrate compute workflows with declarative pipelines. | Livepeer Labs | Workflow, Automation, Developer | [Repo](https://github.com/livepeer/flowforge)     | [Live](https://flowforge.livepeer.example)     |
| Streamline   | Realtime media transforms powered by decentralized compute.         | Muxxion Labs  | Streaming, Media, AI            | [Repo](https://github.com/community/streamline)   | [Live](https://streamline.community.example)   |
| Vector Relay | Ship embeddings workflows from ingest to retrieval.                 | Muxxion Labs  | AI, Search, Infra               | [Repo](https://github.com/community/vector-relay) | [Live](https://vector-relay.community.example) |
| Pulseboard   | Operational dashboards for distributed task orchestration.          | Livepeer Labs | Observability, Ops, Workflow    | [Repo](https://github.com/livepeer/pulseboard)    | [Live](https://pulseboard.livepeer.example)    |
| Cache Mesh   | Edge caching layer for compute-heavy workloads.                     | Community     | Infra, Edge, Performance        | [Repo](https://github.com/community/cache-mesh)   | [Live](https://cachemesh.community.example)    |
| Agent Lane   | Coordinate agent swarms with policy-based routing.                  | Community     | AI, Agents, Automation          | [Repo](https://github.com/community/agent-lane)   | [Live](https://agent-lane.community.example)   |
| Stream Pilot | Adaptive routing for live video pipelines on BYOC.                  | Livepeer Labs | Streaming, Infra, Performance   | [Repo](https://github.com/livepeer/stream-pilot)  | [Live](https://stream-pilot.livepeer.example)  |
| Edgeboard    | Fleet telemetry for distributed edge workers.                       | Muxxion Labs  | Observability, Edge, Ops        | [Repo](https://github.com/muxxion/edgeboard)      | [Live](https://edgeboard.muxxion.example)      |
| Ingest Kit   | Starter kit for resilient ingest with autoscaling workers.          | Community     | Infra, Automation, Workflow     | [Repo](https://github.com/community/ingest-kit)   | [Live](https://ingest-kit.community.example)   |
| Agent Studio | Visual orchestrator for multi-agent media workflows.                | Livepeer Labs | AI, Workflow, Automation        | [Repo](https://github.com/livepeer/agent-studio)  | [Live](https://agent-studio.livepeer.example)  |

<!-- APPS:END -->

## Local development

```bash
npm install
npm run dev
```

## Updating the README table

```bash
npm run update-readme
```

## Notes

- Update `repoUrl` in `app/page.tsx` with the canonical GitHub URL once the repo is live.
- Keep logos in `public/logos` (SVG preferred, 80x80 or larger).
