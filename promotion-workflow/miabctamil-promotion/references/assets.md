# Asset generator

This is the owner-operated asset mode of the miABCTamil workflow. Configure it without asking the owner for materials immediately. Collect inputs when an actual asset run begins. Use current-session tools to create files; this mode is not a background service.

## Start an asset run

### Local video transcription in the original workspace

The original Windows workspace now has Faster Whisper installed under work/transcription-deps and cached multilingual models under work/speech-models. Before asking the owner to type a transcript, check this local capability. The tested runner is work/offline-builder/transcribe-local.py; it transcribes the extracted audio in work/offline-builder/video-inspection/audio.wav and accepts a model name argument. Adapt its input/output paths for each new source, preserving previous transcripts. Faster Whisper's bundled PyAV dependency can also decode supported media files directly. Use the bundled Python runtime with the workspace dependency directory on its import path. Do not assume those dependencies exist in another workspace or in the portable ZIP.

For unclear speech or numbers, compare recognition passes and preserve uncertainty. Do not infer financial terms from a graphic or repair unclear source figures into a speaker quote. Save timestamps and distinguish the speaker's statements from any added analysis. Keep the recording local unless the owner authorizes an external transcription service.

Infer the requested asset when clear. Otherwise offer: one-pager, slide deck, module demo video, or testimonial graphic. Ask only for missing inputs in a compact intake, then wait for required source material. Reuse the latest brand brief, supplied sources, sender details and prior decisions.

Collect the audience, purpose, desired call to action, language and output format. Request source files by ordinary chat when attachments are needed; do not use a text-only question tool to request uploads. For flyers and demo outputs, read BRAND-STYLE.md and brand-tokens.json from the working folder and inspect the owner's Demo MiABC — Tamil.pdf and Flyer MiABC — Tamil.pdf references. Match their burgundy/pink/teal/amber palette, MiABC logo, Tamil typography and rounded card layouts. Keep matching flyers and demos visually consistent. These supplied references replace the earlier cobalt/ivory default for this scope. Preserve existing product UI colors in actual demo recordings.

Do not turn absent product evidence into fabricated copy. If one requested asset has enough sources and another does not, complete the supported asset and identify what the other requires. A request for a generic template or layout example may proceed without real product sources, clearly labeled as a template.

## Route 1: Shareable one-pager

Inputs: current investor deck or approved product brief; market analysis if market claims are wanted; audience; CTA; preferred DOCX or PPTX. Do not require a market report for a simple product overview that does not use market claims.

Read actual source files using the relevant available Documents, Presentations or PDF skill. Capture each used claim's file, slide/page, date, geography, population and limitations in an internal source map. If sources conflict, ask which version is current or omit the disputed claim. Preserve market scope and units; distinguish estimates from observed results.

Draft a concise page with: audience problem, verified product description, demonstrable features, available evidence and one next step. Include market data or fundraising details only when supported and relevant. Use short public-facing source attribution near statistics; keep private notes and editorial questions in the review file.

Produce an actual editable DOCX, or a one-slide PPTX if that is the requested format. Use the installed format-specific skill and its render/verification process. Do not deliver Markdown alone as the completed document. Provide a PDF companion only when requested or agreed. If the owner requests a longer deck, produce the requested deck length instead of forcing the one-page layout.

## Route 2: Tamil Sounds Module demo

Inputs: actual module recording or accessible working module; intended audience and scenario; preferred language; target duration and format. Default proposal: a 30-second vertical demo for social. Obtain only the access needed to show the actual module. Do not use the promotion-studio website as evidence of a Tamil-learning module.

Inspect the supplied recording or working flow. Choose one demonstrable task and write a timed shot list: screen action, narration, Tamil/English on-screen text, duration and CTA. Do not invent buttons, pronunciation scoring, progression or learning outcomes.

Check available recording, editing, encoding and audio tools before promising a playable video. With adequate footage and a working renderer, create an MP4, accurate captions and the editable script. Use owner-provided narration or an available authorized voice tool when narration is wanted; do not imitate a person's voice without an appropriate basis. If no narration is available, propose a clearly described silent captioned version.

If only screenshots exist, offer a labeled screenshot walkthrough, not a live interaction recording. If sources or rendering tools are unavailable, deliver a storyboard/script only when the owner accepts that output, and clearly state that the MP4 is still incomplete. Never call a storyboard a finished demo video.

For an MP4, verify playback, opening/middle/closing frames, caption timing and legibility, actual depicted actions, audio when present, and final duration/dimensions. Remove private account information from the recording before sharing. Keep Tamil wording and pronunciation review pending unless actually reviewed.

## Route 3: Karunya testimonial assets

Inputs: authentic quote or interview transcript, exact speaker/role and institution, confirmed pilot context and date, approved public attribution, and permission covering the intended channels. A name mentioned in a proposal does not confirm a partnership or participation.

Select an exact source-supported excerpt without altering its meaning. Do not rewrite an assistant-authored sentence as a participant quote. Translations must be labeled and reviewed before being represented as approved. Keep measured pilot outcomes separate from personal experiences and cite the underlying pilot report for numerical results.

Produce the requested quote graphic, document section or slide with appropriate attribution and accompanying caption. For image generation, use the Image Generation skill and verify quote text against the source. Use a real portrait only when supplied with permission. Never use a generated person as if they were the actual participant. A text-led design is sufficient when no portrait is available.

Without an approved quote, create a testimonial request/interview kit only if requested, and mark the testimonial itself as awaiting source and permission. The existing template is runs/2026-09-15-first-week/TESTIMONIAL-INTAKE.md.

## Deliver and record

Save each run under runs/YYYY-MM-DD-topic/ with actual requested assets, REVIEW.md and source-map.md. REVIEW.md should list asset IDs/versions, what was created, pending factual/language/owner reviews, and any missing deliverables. Keep confidential source material separate from public output files; do not automatically include the source deck or private market analysis in a shareable ZIP.

Update existing asset records, or add real new assets to the calendar when appropriate, using the Spreadsheets skill. Do not invent a publication date. Preserve source files and earlier versions. Editing approved copy resets its review status. Update SESSION-STATE.md with artifact locations and specific remaining inputs. Show the resulting asset previews and links, not just the instructions used to produce them.
