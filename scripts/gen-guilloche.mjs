// Generates the engine-turned line work as static SVG files.
//
// These curves are thousands of points long. Inlined into JSX they were being
// serialised into the HTML once per instance — six rosettes and eight rules
// pushed the document past 1.7 MB. As files they are fetched once, cached, and
// gzipped, and the components tint them through mask-image so both lighting
// conditions still theme freely.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "img");
mkdirSync(OUT, { recursive: true });

const TAU = Math.PI * 2;
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function rosette(R, r, d, step = 0.012) {
  const end = TAU * (r / gcd(R, r));
  const k = (R - r) / r;
  const pts = [];
  for (let t = 0; t <= end; t += step) {
    pts.push(
      `${((R - r) * Math.cos(t) + d * Math.cos(k * t)).toFixed(1)},` +
        `${((R - r) * Math.sin(t) - d * Math.sin(k * t)).toFixed(1)}`,
    );
  }
  return `M${pts.join("L")}Z`;
}

function lathe(width, height, a1, f1, a2, f2, phase) {
  const pts = [];
  for (let x = 0; x <= width; x += 2) {
    const y =
      height / 2 +
      a1 * Math.sin((x / width) * TAU * f1 + phase) +
      a2 * Math.sin((x / width) * TAU * f2 + phase * 1.7);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return `M${pts.join("L")}`;
}

// White ink on transparent: the alpha channel is what mask-image consumes.
const ROSETTES = [rosette(92, 11, 38), rosette(74, 9, 27), rosette(56, 17, 20)];
// Stroke width is pre-divided by the render scale, not left to
// vector-effect="non-scaling-stroke": once an SVG is consumed as a CSS
// mask-image the UA rasterises it and the vector-effect no longer applies, so
// the hairlines scaled ~6x and the engine turning thickened into a net that
// swallowed the type. Every instance now renders the figure at roughly 6.5x
// this 200-unit viewBox, so 0.16px of ink means 0.025 user units here.
const rosetteSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200">` +
  `<g fill="none" stroke="#fff" stroke-width="0.025">` +
  ROSETTES.map((d, i) => `<path d="${d}" opacity="${1 - i * 0.22}"/>`).join("") +
  `</g></svg>`;

const BAND = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((p) =>
  lathe(1200, 26, 9, 3, 2.6, 13, p),
);
const latheSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 26" preserveAspectRatio="none">` +
  `<g fill="none" stroke="#fff" stroke-width="0.85">` +
  BAND.map((d, i) => `<path d="${d}" opacity="${0.9 - i * 0.16}"/>`).join("") +
  `</g></svg>`;

writeFileSync(join(OUT, "guilloche-rosette.svg"), rosetteSvg);
writeFileSync(join(OUT, "lathe-rule.svg"), latheSvg);

console.log(
  `guilloche-rosette.svg ${(rosetteSvg.length / 1024).toFixed(0)} KB`,
  `· lathe-rule.svg ${(latheSvg.length / 1024).toFixed(0)} KB`,
);
