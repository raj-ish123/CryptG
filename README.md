# CryptG — Cryptogram Generator

A simple, single-page cryptogram generator that creates two types of substitution cipher puzzles from any phrase and optionally logs them to a Google Sheet.

## Features

- **Number Cryptogram** — Each letter A–Z maps to a unique random number 1–26
- **Letter Cryptogram** — Each letter A–Z maps to a different letter (no letter maps to itself)
- **Copy to Clipboard** — One-click copy for either cryptogram
- **Send to Google Sheet** — Append the phrase and both cryptograms to a connected Google Sheet

## Usage

1. Open `index.html` in any browser
2. Type a phrase and click **Generate**
3. Use the copy buttons or send directly to Google Sheets

No build step, no dependencies, no framework — just a single HTML file.

## Google Sheets Integration

The app sends data to a Google Sheet via a Google Apps Script web app endpoint. This keeps credentials out of the frontend entirely.

### Setup

1. Open your target Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste the contents of `Code.gs` into the script editor
4. Click **Deploy > New deployment**
5. Set type to **Web app**
6. Set "Execute as" to **Me**
7. Set "Who has access" to **Anyone** (or "Anyone within [org]" for internal use)
8. Click **Deploy** and copy the Web App URL
9. Paste the URL into the `APPS_SCRIPT_URL` constant in `index.html`

### What gets written to the Sheet

| Column A | Column B | Column C |
|----------|----------|----------|
| Original phrase | Number cryptogram (letters + numbers) | Letter cryptogram (letters + substituted letters) |

Each click of "Send to Google Sheet" appends one new row.

## File Structure

```
CryptG/
├── index.html       # The entire app (HTML + CSS + JS)
├── Code.gs          # Google Apps Script to deploy on your Sheet
├── deployment.txt   # Your current Apps Script deployment ID and URL
└── README.md
```

## Redeploying the Apps Script

If you modify `Code.gs`, you must redeploy for changes to take effect:

1. Open the Apps Script editor (Extensions > Apps Script in your Sheet)
2. Paste the updated code
3. **Deploy > Manage deployments > Edit (pencil icon) > Version: New version > Deploy**

The URL stays the same if you edit the existing deployment.

## License

Free to use and modify.
