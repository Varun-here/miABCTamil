# Tracking runs

Use the latest miABCTamil-Tracker.xlsx in the owner's working folder. Read it before changing any record. Follow the Spreadsheets skill for workbook edits and preserve existing tables, formulas, filters, validation, formatting and calendar records.

## Intake only when needed

During a tracking run, identify the event (sent, reply, conversion, follow-up, or review), recipient/campaign and event date. Reuse known sender/recipient details. Ask about ambiguity before changing records: identical recipient names across campaigns, an unclear event date, or a conversion with no defined outcome. Do not ask for these inputs while merely configuring the workflow.

Resolve “today” from the current local date, not an old run date. Keep one row per recipient per campaign. Search existing records before allocating a new unique Record ID. Repeating the same update should not create a duplicate recipient row or duplicate an event in Notes.

## Event mapping

- Draft created for an actual recipient: record identity, segment, relationship, campaign and draft path. Leave sending dates and all outcomes blank.
- Confirmed first send: set First sent and Last sent to the event date. A resend/follow-up preserves First sent and updates Last sent. No-reply status is not inferred merely because a message was sent.
- Reply received: set Replied to Yes and Checked date to the confirmed observation date. Add a short dated reply summary in Notes. Keep Converted unchanged unless the defined goal was met.
- Confirmed no reply: set Replied to No and Checked date to the owner's checked date. Do not change a prior Yes to No merely because the recipient has not answered a later follow-up; clarify whether the owner wants a correction.
- Conversion: establish the actual event and Conversion definition. Set Converted to Yes only when the supplied evidence meets that definition, record Checked date and the dated event in Notes. Do not automatically mark a reply Yes if conversion evidence came from another channel.
- Checked but not converted: set Converted to No only on a confirmed outcome check. Preserve a prior Yes unless explicitly correcting it.
- Follow-up plan: set Next follow-up to the agreed date. A past due date does not mean a message was sent. After a confirmed follow-up, ask for the next date only if needed; do not silently leave an obsolete date as an active plan.

The workbook's single Checked date records the most recent outcome check. If reply and conversion checks occurred on different dates, preserve their individual dates in Notes and use those in any time-sensitive review. The workbook has no automatic email synchronization or message-level delivery/bounce tracking. Do not label logged sends as verified deliveries.

## Results review

Read actual outcomes and first-sent dates. Report the period/cohort, recipient count, sent count, measured coverage, replies and conversions before interpreting rates. The existing top summary is all-time/all-campaign and does not respond to table filtering. Compute requested campaign or segment breakdowns from the relevant records without mislabeling the fixed totals.

Reply rate is Yes replies divided by sent records with a known Yes/No reply outcome. Conversion rate uses the analogous measured-conversion denominator. Coverage divides each measured count by all sent recipients. Blank outcomes are unknown, not failures; a confirmed No is a measured non-event as of its observation date. No eligible denominator means an unavailable rate, not 0%.

Compare the same conversion event, similar observation windows, and comparable audiences. Treat rates from small counts as directional, not proof of a winning message. Do not infer causal attribution from an outreach row alone. Explain missing data concisely and recommend one test supported by the observed pattern. When no outreach is logged, say no performance conclusion is available and identify the first event to record.

After an edit, verify affected counts and rates, render the affected view, and save the workbook. Return a short confirmation of the specific update. For larger reviews, save a dated review under runs/ and update SESSION-STATE.md. Do not add simulated activity to the owner's real tracker to demonstrate the formulas.
