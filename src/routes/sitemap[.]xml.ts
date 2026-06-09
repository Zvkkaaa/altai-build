import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const PAGES = ["", "/about", "/services", "/projects", "/news", "/social-duty", "/careers", "/contact"];
const LOCALES = ["mn", "en"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = LOCALES.flatMap((loc) =>
          PAGES.map((p) => `  <url>\n    <loc>${BASE_URL}/${loc}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`),
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
