import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { url } = req.query;
    if (!url) {
        res.status(400).json({ error: 'URL parameter is required' });
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.text();

        // Set response Content-Type header to XML
        res.setHeader("Content-Type", "application/xml");
        res.status(200).send(data);
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Error fetching the URL', details: error.toString() });
    }
}
