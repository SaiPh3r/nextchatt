import React, { useEffect, useState } from "react";
import {
  CometChatUIKit,
  UIKitSettingsBuilder,
} from "@cometchat/chat-uikit-react";
import CometChatBuilderApp from "../CometChatBuilderApp";
import { BuilderSettingsProvider } from "../context/BuilderSettingsContext";
import { setupLocalization } from "../utils/utils";
import { useUser } from "@clerk/clerk-react";

export const COMETCHAT_CONSTANTS = {
  APP_ID: "273531e4809f706a",
  REGION: "in",
  AUTH_KEY: "477575289f11a942383a41e129058f1ec3f96f14",
};

const CometChatNoSSR: React.FC = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isChatInitialized, setIsChatInitialized] = useState(false);
  const [isChatReady, setIsChatReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize CometChat
  useEffect(() => {
    const UIKitSettings = new UIKitSettingsBuilder()
      .setAppId(COMETCHAT_CONSTANTS.APP_ID)
      .setRegion(COMETCHAT_CONSTANTS.REGION)
      .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
      .subscribePresenceForAllUsers()
      .build();

    CometChatUIKit.init(UIKitSettings)
      ?.then(() => {
        setupLocalization();
        console.log("Initialization completed successfully");
        setIsChatInitialized(true);
      })
      .catch((error) => {
        console.error("Initialization failed", error);
        setError("Failed to initialize chat");
      });
  }, []);

  // Handle login when both CometChat is initialized and Clerk user is available
  useEffect(() => {
    if (isChatInitialized && isLoaded && isSignedIn && user) {
      const clerkUserId = user.id;
      
      // Check if user is already logged in to CometChat
      CometChatUIKit.getLoggedinUser()
        .then((cometUser) => {
          if (!cometUser) {
            // If not logged in to CometChat, use Clerk ID to log in
            CometChatUIKit.login(clerkUserId)
              .then((user) => {
                console.log("CometChat Login Successful:", { user });
                setIsChatReady(true);
              })
              .catch((error) => {
                console.error("CometChat Login Failed:", error);
                setError("Failed to log in to chat");
              });
          } else {
            console.log("User already logged in to CometChat:", cometUser);
            setIsChatReady(true);
          }
        })
        .catch((error) => {
          console.error("Error checking login status:", error);
          setError("Failed to check login status");
        });
    }
  }, [isChatInitialized, isLoaded, isSignedIn, user]);

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  if (!isLoaded || !isSignedIn) {
    return <div className="p-4">Loading or not signed in...</div>;
  }

  if (!isChatReady) {
    return <div className="p-4">Preparing chat...</div>;
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <BuilderSettingsProvider>
        <CometChatBuilderApp />
      </BuilderSettingsProvider>
    </div>
  );
};

export default CometChatNoSSR;