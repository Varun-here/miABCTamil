---
name: miabctamil-promotion
description: Run the owner's local miABCTamil promotion workflow on request, creating bilingual campaigns, personalized outreach drafts, promotional assets, and updates to the Excel outreach tracker.
---

# miABCTamil promotion

Run a local, owner-operated promotion workspace. The owner gives a brief; generate the requested deliverables and save them locally. This uses the current assistant session, with no separate API key. AI generation still needs a connection. A weekly campaign is produced when requested; this skill does not schedule background runs.

## Find the working files

Use the user's supplied folder and latest tracker. In the GitHub checkout, look in `promotion-workflow/`; in the original workspace, look in `outputs/miABCTamil-Offline/`. If unavailable, ask for its location or the latest files. Do not assume memory or access across chats. Read `BRAND-BRIEF.md` and `SESSION-STATE.md` there, then relevant materials in `sources/`. The packaged `references/brand-baseline.md` provides initial facts if no newer brief exists.

## Decide and deliver

Infer the mode from ordinary language: weekly content, outreach, assets, or results. Read [references/workflow.md](references/workflow.md) for deliverable details and tracker rules. Accept short briefs; ask only for missing inputs that change the requested output. Continue with usable drafts while explicitly identifying any missing source-dependent portions.

Default voice: warm, concrete, welcoming. Write natural Tamil and English separately, preserving meaning and the same call to action. Separate parents from adult learners. Tamil copy is a draft pending fluent review; do not claim that review occurred.

Only established baseline: miABCTamil is a Tamil-learning app intended for children and adults. Ya Se Leer, Tamil Sounds Module, Karunya pilot, investor deck, market analysis and SAFE round were mentioned in a proposal; their contents, results and status have not been supplied. Use them only after reading actual sources. Never invent product features, traction, quotes, partnerships, funding terms or endorsements. Cite source file and location in internal evidence notes; keep unsupported claims out of public copy.

Save each run under `runs/YYYY-MM-DD-short-topic/` with complete editable copy, source references, asset IDs/versions and a concise handoff. Update the latest tracker and `SESSION-STATE.md` when accessible. Preserve earlier runs and user edits. Keep approval tied to an exact version; copy edits reset it to Needs review. Never mark an asset sent or published without owner confirmation or actual evidence.

Drafting is authorized. Sending messages, posting publicly, or connecting accounts requires an explicit request for that action. This workflow has no installed Gmail/social integration. Do not claim `message_compose` or a media generator was used unless callable and actually used.
