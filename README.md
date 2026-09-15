# miABCTamil Promotion Studio

Private Sites application for bilingual campaign drafting, evidence review, approval, outreach drafts and manual results tracking.

## Runtime

- React/Vinext on Cloudflare Workers.
- D1 `DB` persists each signed-in user's workspace. Optimistic revisions prevent stale-tab overwrites.
- Private Sites access protects the app. API routes also require the platform-provided signed-in identity and check mutation origins.
- Claude Messages API generation uses the owner’s server-side ANTHROPIC_API_KEY secret. Viewers never enter or receive the key.
- The owner must configure the server secret before live generation is available. Starter drafts and editing work without it.
- No external publishing or email sending is implemented. Publication records document actions the user performs elsewhere.

## Workflow

Add real app facts and source permissions in Brand & evidence. Generate or edit a draft, save it, then complete evidence and Tamil review in Review queue. Approve the exact version. Record actual publication URL/date, then enter metrics with reporting windows and sources. Editing draft content resets approval and increments its version; published copy is locked and can be duplicated.

## Development

Install with the locked `install:ci` script. Start `npm run dev`. Generate migrations with `npm run db:generate` after schema changes. Use the Sites build and packaging workflow for publication. Portable previews provide a loopback-only mock sign-in route; it is excluded from production.

## Validation performed

TypeScript and production build passed. Local API tests verified authentication, persistence, stale writes, approval gates, version changes, published-content locking and numeric zero preservation. Browser checks verified save feedback, disabled approval, mobile navigation, and WebMCP draft read/open behavior including invalid IDs.

Live Claude generation has not been tested with a paid key. The app handles missing keys, rejected keys, rate limits, unavailable models, timeouts and malformed model output. Tamil starter content still requires fluent review.

## Owner-only AI setup

For local development, fill ANTHROPIC_API_KEY in the ignored .env file and restart the server. Do not prefix secrets with VITE_ or NEXT_PUBLIC_. ANTHROPIC_MODEL is optional. For hosting, configure ANTHROPIC_API_KEY as a secret in the hosting environment, then deploy. No viewer-facing key form exists. Never commit the actual .env file.

## Local promotion workflow

Open [promotion-workflow/START-HERE.md](promotion-workflow/START-HERE.md) for the on-request assistant workflow:

- Bilingual content and generated image posts.
- Outreach drafts with recipient intake when an outreach run starts.
- Asset-generation instructions, examples, and video-summary output.
- [Excel tracker](promotion-workflow/miABCTamil-Tracker.xlsx) for confirmed sends, replies and conversions.

Ask your assistant to read [the workflow skill](promotion-workflow/miabctamil-promotion/SKILL.md), then give it a task. Generated files are stored in `promotion-workflow/runs/`. This workflow is separate from the website; it does not send emails, publish posts, or execute weekly without a request. The source machine's transcription dependencies and downloaded models are local workspace tools and are not included in this repository.
