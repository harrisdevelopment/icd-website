import "react";

// The ElevenLabs widget registers an <elevenlabs-convai> custom element.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-id": string;
      };
    }
  }
}
