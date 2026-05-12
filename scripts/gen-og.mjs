/*
 * Generate /static/og-default.png from scripts/og-default.svg
 *
 * Run with:  node scripts/gen-og.mjs
 *
 * Re-run whenever you edit the SVG or want to refresh the social card.
 * Embeds /static/logo-mark.png inline so resvg-js can render it.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const svgPath = resolve(root, "scripts", "og-default.svg");
const logoPath = resolve(root, "static", "logo-mark.png");
const outputPath = resolve(root, "static", "og-default.png");

// Embed the logo as a data URI so resvg can render it without external fetches.
const logoB64 = readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoB64}`;

const svg = readFileSync(svgPath, "utf-8").replace("__LOGO_MARK_DATA_URI__", logoDataUri);

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  background: "#2c313c",
  font: {
    loadSystemFonts: true,
    defaultFontFamily: "Georgia",
  },
});

const pngBuffer = resvg.render().asPng();
writeFileSync(outputPath, pngBuffer);

const sizeKb = (pngBuffer.length / 1024).toFixed(1);
console.log(`og-default.png written  -  ${sizeKb} KB  -  ${outputPath}`);
