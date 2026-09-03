"use client";

import { KageLandingPage } from "@designcodeio/threeui";

/**
 * KageLandingPage renders the packaged page inside a sandboxed iframe served
 * from /landing-pages/kage.html, so its assets live in public/landing-pages/.
 * The frame is absolutely positioned inside its wrapper — give it a height.
 */
export default function KagePage() {
  return <KageLandingPage style={{ width: "100%", height: "100dvh" }} />;
}
