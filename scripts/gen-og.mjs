/*
 * Generate /static/og-default.png from scripts/og-default.svg
 *
 * Run with:  node scripts/gen-og.mjs
 *
 * Re-run whenever you edit the SVG or want to refresh the social card.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const inputPath = resolve(root, "scripts", "og-default.svg");
const outputPath = resolve(root, "static", "og-default.png");

const svg = readFileSync(inputPath, "utf-8");

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
