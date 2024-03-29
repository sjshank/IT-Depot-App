import fs from "fs";
import { globby } from "globby";

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace("src/", "")
    .replace(".tsx", "")
    .replace(".mdx", "");
  const route = path === "/index" ? "" : path;

  return `  <url>
    <loc>${`https://next-it-garage.vercel.app${route}`}</loc>
    <lastmod>${`${new Date()}`}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  //Ignore 404, 500, error files
  //Consider only app route
  const pages = await globby([
    "src/pages/**/*{.tsx,.mdx}",
    "!src/pages/_*.tsx",
    "!src/pages/api",
    "!src/pages/404.tsx",
    "!src/pages/500.tsx",
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
