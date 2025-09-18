require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Allow requests from Vite frontend
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/openai-chat', async (req, res) => {
  console.log('Received POST /openai-chat', req.body);
  const { messages } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('API key missing!');
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }
  if (!messages || !Array.isArray(messages)) {
    console.error('Invalid request body:', req.body);
    return res.status(400).json({ error: 'Invalid request body' });
  }
  try {
    console.log('Sending request to OpenAI with model gpt-4o and messages:', messages);
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
      }),
    });
    console.log('Received response from OpenAI, status:', response.status);
    const data = await response.json();
    console.log('OpenAI response data:', data);
    if (data.error) {
      console.error('OpenAI API error:', data.error);
      console.error('Full OpenAI response:', data);
      return res.status(500).json({ error: data.error.message, details: data });
    }
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected OpenAI response:', data);
      return res.status(500).json({ error: 'Unexpected response from OpenAI', details: data });
    }
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error('Catch-all error in /openai-chat:', err);
    if (err && err.stack) {
      console.error('Error stack:', err.stack);
    }
    if (err && err.response && typeof err.response.text === 'function') {
      err.response.text().then(text => {
        console.error('Fetch error response body:', text);
      });
    }
    res.status(500).json({ error: 'Failed to fetch from OpenAI', details: err?.message || err });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
