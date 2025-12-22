# Example Apps Showcase

A web app that showcases example applications built with the [Livepeer](https://livepeer.org) BYOC workflow created by Muxion Labs.

## Quick links

- Config: `data/apps.json`
- Contribution guide: `CONTRIBUTING.md`

## Apps

The site is driven from `data/apps.json`. The table below is generated from the same file.

<!-- APPS:START -->
| Name | Description | Creator | Tags | Repo | Live |
| --- | --- | --- | --- | --- | --- |
| Soldar | Solder AI blocks into live video and audio workflows, designed for real-time performance and effortless scale. | Muxion Labs, @rickstaa | AI, Realtime, SaaS | [Repo](https://github.com/rickstaa/soldar) | [Live](https://soldar.vercel.app/) |
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
