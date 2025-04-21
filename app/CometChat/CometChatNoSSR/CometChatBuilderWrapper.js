"use client";
import dynamic from "next/dynamic";

// Dynamically import CometChat component with SSR disabled
const CometChatComponent = dynamic(
  () => import("../CometChatNoSSR/CometChatNoSSR"),
  {
    ssr: false,
  }
);

export default function CometChatBuilderWrapper() {
  return (
    <div>
      <CometChatComponent />
    </div>
  );
}