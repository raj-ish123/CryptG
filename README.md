# CryptG

This repo has **three files**:

| File | Purpose |
|------|---------|
| [`index.html`](index.html) | The app: generates number and letter cryptograms, clipboard copy, and “Send to Google Sheet” via `APPS_SCRIPT_URL`. |
| [`Code.gs`](Code.gs) | Paste into **Extensions → Apps Script** on your Sheet, deploy as **Web app** (Execute as: **Me**, access as you need). |
| [`README.md`](README.md) | This overview. |

**Run:** Open `index.html` in a browser → enter phrase → **Generate**.

**Sheets:** Deploy `Code.gs`, copy the web app `/exec` URL → set `APPS_SCRIPT_URL` in `index.html`. Each send appends one row on `Sheet1`: original phrase → number cryptogram → letter cryptogram.

**Redeploy script after edits:** Manage deployments → New version → Deploy.
