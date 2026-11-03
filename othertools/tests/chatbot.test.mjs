import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

// Inspect the actual Next script props emitted by the production build.
for (const route of ["camera", "signature", "delayed-audio", "audio-test"]) {
  test(`/${route} configures the supported optional chatbot before loading it`, () => {
    const html = readFileSync(new URL(`../.next/server/app/${route}.html`, import.meta.url), "utf8");
    const chunks = [];
    for (const [, script] of html.matchAll(/<script>(self\.__next_f.*?)<\/script>/gs)) {
      runInNewContext(script, { self: { __next_f: chunks } });
    }
    const payload = chunks.filter(([type]) => type === 1).map(([, text]) => text).join("");
    const scripts = [];
    const visit = (value) => {
      if (!value || typeof value !== "object") return;
      if (value.id === "chat-config" || value.src?.endsWith("/embed.js")) scripts.push(value);
      Object.values(value).forEach(visit);
    };
    for (const line of payload.split("\n")) {
      const json = line.slice(line.indexOf(":") + 1);
      if (json.startsWith("[")) visit(JSON.parse(json));
    }
    assert.equal(scripts.length, 2);
    const [config, embed] = scripts;
    assert.equal(config.id, "chat-config");
    assert.equal(config.type, "application/json");
    assert.equal(config.strategy, "afterInteractive");
    assert.equal(embed.strategy, "afterInteractive");
    assert.equal(embed.src, "https://chat-widget.uft1.com/embed.js");
    const { chatbot } = JSON.parse(config.dangerouslySetInnerHTML.__html);
    assert.equal(chatbot.siteID, "uft1-tools");
    assert.equal(chatbot.theme, "light");
    assert.equal(chatbot.position, "bottom-right");
    assert.equal(chatbot.instructions, "You're the assistant for UFT1 Tools, a collection of online utilities including camera testers, left/right audio checkers, signature pads, and delayed audio playback tools. Help users understand how to use the tools and answer basic questions. New tools are planned and coming soon. The site was built by Jovylle B., the main author — learn more at jovylle.com.");
  });
}
