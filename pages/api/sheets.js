import { google } from 'googleapis';

const sheets = google.sheets('v4');

async function appendDataToSheet(email) {
  const auth = new google.auth.GoogleAuth({
    // Path to your JSON key file
    keyFile: 'components\client_secret_897666385120-rcf2tp6d2rr24mi06pkrpm6bgiab4ds7.apps.googleusercontent.com.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();

  const spreadsheetId = '1FLb4U0fFgTOUckZ6sPtNfuMgUqPaZpPjUdywHxwxCQU'; // Replace with your actual spreadsheet ID
  const range = 'Sheet1!A:A'; // e.g., "Sheet1" tab and append to column A

  await sheets.spreadsheets.values.append({
    auth: client,
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[email]],
    },
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      await appendDataToSheet(email);
      res.status(200).json({ message: 'Email added to Google Sheet' });
    } catch (error) {
      console.error('Error adding email to Google Sheet', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
