export default async function handler(req, res) {
  const url = 'TU_URL_APP_SCRIPT'; // ← reemplazá con tu Web App Script

  if (req.method === 'OPTIONS') {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  const options = {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (req.method === 'POST') {
    options.body = JSON.stringify(req.body);
  }

  const response = await fetch(url, options);
  const body = await response.text();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(response.status).send(body);
}
