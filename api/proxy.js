import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: 'URL parameter is required' });
    return;
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the URL', details: error.message });
  }
}
