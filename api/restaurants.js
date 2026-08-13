export default async function handler(req, res) {
    // Allow CORS from your app
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    try {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            {
                headers: {
                    // Mimic a real browser request so Swiggy doesn't block
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Referer": "https://www.swiggy.com/",
                    "Origin": "https://www.swiggy.com",
                },
            }
        );
        if (!response.ok) {
            throw new Error(`Swiggy returned status ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Swiggy API error:", error.message);
        res.status(500).json({ error: "Failed to fetch from Swiggy", details: error.message });
    }
}
