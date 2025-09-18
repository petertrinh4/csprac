export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
      }),
    });
    const data = await response.json();
    if (data.error) {
      console.error('OpenAI API error:', data.error);
      return res.status(500).json({ error: data.error.message });
    }
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch from OpenAI', details: err?.message || err });
  }
}
