const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

const CLIENT_ID = 'Ov23lir5KA9TDEFvlOK9';
const CLIENT_SECRET = '9369efa0a91fd5f43e1e6a8dc11cdb1c84d1d951';

app.post('/api/github/callback', async (req, res) => {
  const { code } = req.body;
  try {
    // Exchange code for access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    });
    const tokenData = await tokenRes.json();
    const access_token = tokenData.access_token;

    if (!access_token) {
      return res.status(401).json({ success: false, error: 'No access token received.' });
    }

    // Fetch user info
    const userRes = await fetch('https://api.github.com/user', {
      headers: { Authorization: `token ${access_token}` },
    });
    const user = await userRes.json();

    // Save user info to session/db here
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(4000, () => console.log('GitHub OAuth server running on http://localhost:4000'));
