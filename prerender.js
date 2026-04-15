// prerender.js — runs after `vite build` to pre-render each route into its own HTML file.
// Usage: node prerender.js (invoked automatically by the build script)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routesToRender = ["/", "/cv", "/projects"];

async function prerender() {
  const distDir = path.resolve(__dirname, "dist");
  const templatePath = path.resolve(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(" dist/index.html not found. Run `vite build` first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  // Load the SSR-built server bundle
  const serverBundlePath = path.resolve(distDir, "server/entry-server.js");
  if (!fs.existsSync(serverBundlePath)) {
    console.error(" Server bundle not found at dist/server/entry-server.js");
    process.exit(1);
  }

  const { render } = await import(serverBundlePath);

  for (const route of routesToRender) {
    console.log(`⚡ Pre-rendering: ${route}`);

    let appHtml;
    try {
      appHtml = render(route);
    } catch (err) {
      console.error(`   Failed to render ${route}:`, err.message);
      continue;
    }

    // Inject rendered HTML into the template
    const html = template.replace(
      `<div id="root"></div>`,
      `<div id="root">${appHtml}</div>`
    );

    // Write output
    const outDir =
      route === "/"
        ? distDir
        : path.resolve(distDir, route.slice(1)); // strip leading "/"

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.resolve(outDir, "index.html"), html);
    console.log(`   Written: ${path.relative(distDir, outDir)}/index.html`);
  }

  console.log("\n Pre-rendering complete");
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
