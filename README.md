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
| Realtime Transcription | Real-time video transcription pipeline that generates SRT subtitles and optinally integrates them back into the stream. | @JJassonn69, Muxion Labs | AI, Realtime, Transcription | [Repo](https://github.com/JJassonn69/project-transcript) | - |
| Video Understanding | PyTrickle streaming server for google/gemma-3n-E4B-it multimodal understanding outputs using vLLM | @JJassonn69, Muxion Labs | AI, Video Understanding, Multimodal | [Repo](https://github.com/JJassonn69/gemma3n-pytrickle-app) | - |
<!-- APPS:END -->

## Local development

```bash
pnpm install
pnpm run dev
```

## Updating the README table

```bash
pnpm run update-readme
```

## Notes

- Update `repoUrl` in `app/page.tsx` with the canonical GitHub URL once the repo is live.
- Keep logos in `public/logos` (SVG preferred, 80x80 or larger).
