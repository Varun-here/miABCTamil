# miABCTamil Promotion Studio

Private Sites application for bilingual campaign drafting, evidence review, approval, outreach drafts and manual results tracking.

## Runtime

- React/Vinext on Cloudflare Workers.
- D1 `DB` persists each signed-in user's workspace. Optimistic revisions prevent stale-tab overwrites.
- Private Sites access protects the app. API routes also require the platform-provided signed-in identity and check mutation origins.
- Claude Messages API generation uses a user-entered API key held only in client memory for the open page and passed to the server per request. It is never stored in D1, browser storage or source.
- A Claude account/key is required for live generation. Starter drafts and editing work without it.
- No external publishing or email sending is implemented. Publication records document actions the user performs elsewhere.

## Workflow

Add real app facts and source permissions in Brand & evidence. Generate or edit a draft, save it, then complete evidence and Tamil review in Review queue. Approve the exact version. Record actual publication URL/date, then enter metrics with reporting windows and sources. Editing draft content resets approval and increments its version; published copy is locked and can be duplicated.

## Development

Install with the locked `install:ci` script. Start `npm run dev`. Generate migrations with `npm run db:generate` after schema changes. Use the Sites build and packaging workflow for publication. Portable previews provide a loopback-only mock sign-in route; it is excluded from production.

## Validation performed

TypeScript and production build passed. Local API tests verified authentication, persistence, stale writes, approval gates, version changes, published-content locking and numeric zero preservation. Browser checks verified save feedback, disabled approval, mobile navigation, and WebMCP draft read/open behavior including invalid IDs.

Live Claude generation has not been tested with a paid key. The app handles missing keys, rejected keys, rate limits, unavailable models, timeouts and malformed model output. Tamil starter content still requires fluent review.
