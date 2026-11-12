"use client";

import { useEffect } from "react";
import { site } from "@content/site";

const WAKE_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

/**
 * ElevenLabs chat agent. The widget bundle is large, so it is not loaded with
 * the page. It loads on the visitor's first interaction (scroll, tap, key
 * press), or after 15 seconds as a fallback. This keeps it out of the initial
 * load and out of Lighthouse's measurements. Set `chatAgentId` to "" in
 * content/site.ts to remove the widget.
 *
 * `enabled` is set in the layout from LEAD_WEBHOOK_SECRET, so the chat only
 * appears once lead delivery is configured and visitors' details cannot be lost.
 */
export function ChatWidget({ enabled }: { enabled: boolean }) {
  const agentId = enabled ? site.chatAgentId : "";

  useEffect(() => {
    if (!agentId) return;

    let loaded = false;
    const stop = () => {
      WAKE_EVENTS.forEach((e) => window.removeEventListener(e, load));
      window.clearTimeout(timer);
    };
    const load = () => {
      if (loaded) return;
      loaded = true;
      stop();
      // Side-effect import: registers the <elevenlabs-convai> element.
      import("@elevenlabs/convai-widget-embed").catch((err) =>
        console.error("[chat] Could not load the chat widget:", err),
      );
    };
    const timer = window.setTimeout(load, 15000);
    WAKE_EVENTS.forEach((e) => window.addEventListener(e, load, { passive: true }));
    return stop;
  }, [agentId]);

  if (!agentId) return null;
  return <elevenlabs-convai agent-id={agentId} />;
}
