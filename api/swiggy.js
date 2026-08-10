export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { lat = "18.9690247", lng = "72.8205292" } = req.query;

  const targetUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
      },
    });

    const data = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch Swiggy data",
        details: data,
      });
    }

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
