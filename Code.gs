// Google Apps Script — deploy this as a Web App bound to your CryptG Google Sheet.
//
// Setup:
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1xPJb0tK3bUakJ1y56it-MLbyEiakraXJmmr_mlsGBh0/edit
// 2. Go to Extensions > Apps Script
// 3. Paste this entire file content into the editor (replace any existing code)
// 4. Click Deploy > New deployment
// 5. Type: Web app
// 6. Execute as: Me
// 7. Who has access: Anyone
// 8. Click Deploy, authorize when prompted, then copy the Web App URL
// 9. Paste that URL into the APPS_SCRIPT_URL constant in index.html

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');

  var phrase, numberCryptogram, letterCryptogram;

  if (e.parameter && e.parameter.phrase) {
    phrase = e.parameter.phrase;
    numberCryptogram = e.parameter.numberCryptogram;
    letterCryptogram = e.parameter.letterCryptogram;
  } else {
    var data = JSON.parse(e.postData.contents);
    phrase = data.phrase;
    numberCryptogram = data.numberCryptogram;
    letterCryptogram = data.letterCryptogram;
  }

  sheet.appendRow([phrase, numberCryptogram, letterCryptogram]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
