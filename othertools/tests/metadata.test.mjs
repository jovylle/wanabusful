import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const routes = [
  ["camera", "Free online camera test — webcam preview & photo capture", "Camera test — online webcam tool", "Camera test — UFT1 Tools"],
  ["signature", "Free signature pad — draw & export PNG/SVG online", "Signature pad — draw & export online", "Signature pad — UFT1 Tools"],
  ["delayed-audio", "Delayed audio player — Web Audio delay online", "Delayed audio — online tool", "Delayed audio — UFT1 Tools"],
  ["audio-test", "Stereo audio test — left/right channel checker online", "Left/right audio channel test", "Audio channel test — UFT1 Tools"],
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;");

// Run after npm run build: inspect Next's prerendered HTML, not source metadata.
for (const [route, name, openGraphTitle, twitterTitle] of routes) {
  test(`/${route} renders one brand suffix and preserves social titles/canonical`, () => {
    const html = readFileSync(new URL(`../.next/server/app/${route}.html`, import.meta.url), "utf8");
    const titles = [...html.matchAll(/<title>(.*?)<\/title>/g)];
    assert.equal(titles.length, 1);
    assert.equal(titles[0][1], escapeHtml(`${name} | UFT1 Tools`));
    assert.equal(titles[0][1].split("UFT1 Tools").length - 1, 1);
    assert.ok(html.includes(`<link rel="canonical" href="https://other.uft1.com/${route}"/>`));
    assert.ok(html.includes(`<meta property="og:title" content="${escapeHtml(openGraphTitle)}"/>`));
    assert.ok(html.includes(`<meta name="twitter:title" content="${escapeHtml(twitterTitle)}"/>`));
  });
}

test("home retains its default title", () => {
  const html = readFileSync(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
  assert.ok(html.includes("<title>UFT1 Tools — free online utilities (camera, audio, signature)</title>"));
});
