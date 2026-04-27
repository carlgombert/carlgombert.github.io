// Copies the reference HTML from repo root into public/architecture/ for static hosting (verbatim).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "EE4363-CSci4203-Reference(1).html");
const destDir = path.join(root, "public", "architecture");
const dest = path.join(destDir, "index.html");

fs.mkdirSync(destDir, { recursive: true });

if (!fs.existsSync(src)) {
  console.error(
    "sync-architecture-reference: EE4363-CSci4203-Reference(1).html not found at repo root.",
  );
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log("sync-architecture-reference: copied to public/architecture/index.html");
