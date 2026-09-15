# Outreach tracking

Open **miABCTamil-Tracker.xlsx** in this folder. Use the Outreach tab for contacts and results, and Calendar for content drafts and publication status.

## Update it through chat

When you start a tracking run, the assistant asks only for missing details needed to identify the contact, campaign and event. You can also edit blue-text input cells directly in Excel.

Example requests below demonstrate the format; none has been recorded as actual activity:

- “Record that I sent the school introduction to [contact] at [organization] today.”
- “[Contact] replied today asking for a demo. Update their record.”
- “Our conversion goal is a booked demo. [Contact] booked one for [date].”
- “I checked [contact]'s thread today. There is still no reply.”
- “Set the next follow-up for [contact] to [date].”
- “Review this campaign's results and tell me what to try next.”

## What gets recorded

| Field | What it means |
|---|---|
| Record ID and Campaign | Stable identifiers for one recipient in one campaign |
| Recipient and Segment | The actual contact and audience group |
| Relationship | Cold or warm, based on the confirmed relationship |
| First sent and Last sent | Confirmed sending dates; follow-ups update Last sent |
| Replied | Yes or No after checking; blank means unknown |
| Converted | Yes or No against the defined goal; blank means unknown |
| Checked date | When the outcomes were last checked |
| Next follow-up | Your agreed follow-up date |
| Conversion definition | The event being measured, such as a booked demo |
| Draft file and Notes | The exact copy and dated notes about replies or events |

A draft is not a sent email. A reply requesting information is not automatically a booked demo or a paid customer. Keep follow-ups on the same recipient/campaign row. Log a new campaign separately.

## What the summary shows

- **Recipients sent:** records with an ID and a valid First sent date, not the total number of messages including follow-ups.
- **Replies measured:** sent records whose reply outcome is Yes or No.
- **Reply rate:** replies marked Yes divided by replies measured.
- **Conversions measured:** sent records whose conversion outcome is Yes or No.
- **Conversion rate:** conversions marked Yes divided by conversions measured.
- **Coverage:** the measured records divided by all sent records. Low coverage means many outcomes are still unknown.

Rates remain blank when there are no measured outcomes. The top summary covers all logged campaigns. Filtering rows helps inspect contacts but does not change these formula totals; ask the assistant for a campaign-specific review.

## Reviewing what works

The assistant compares segments or message versions only when dates, outcome definitions and observation windows are comparable. It reports counts alongside rates, highlights unknown outcomes, and suggests one practical next experiment. Different goals, such as a school meeting and an investor deck request, should be reviewed separately.

The workbook starts with 200 prepared rows per tab. Ask the assistant to extend formulas, tables and dropdowns together when the capacity is reached.

## Current state

Four content drafts are recorded. No recipients, sends, replies or conversions have been entered. There is not yet enough outreach data to identify a successful message or audience.

This is local tracking. It updates when you provide results or edit the workbook; it does not read your inbox or detect sends automatically.
