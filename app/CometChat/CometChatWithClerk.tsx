import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript"; // needed for createUser

const APP_ID = "273531e4809f706a";
const REGION = "in";
const AUTH_KEY = "477575289f11a942383a41e129058f1ec3f96f14"; // NOT the REST API key

const CometChatWithClerk = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  React.useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const clerkUserId = user.id;
    const name = user.fullName || "Unnamed";

    const createAndLogin = async () => {
      try {
        const cometUser = new CometChat.User(clerkUserId);
        cometUser.setName(name);

        // Try creating the user (will fail if already exists, that's okay)
        try {
          await CometChat.createUser(cometUser, AUTH_KEY);
          console.log("CometChat user created");
        } catch (createError) {
          console.warn("CometChat user might already exist", createError);
        }

        // Login the user
        await CometChatUIKit.login(clerkUserId);
        console.log("CometChat Login Successful");

      } catch (loginError) {
        console.error("CometChat Login Failed:", loginError);
      }
    };

    // Check if already logged in
    CometChatUIKit.getLoggedinUser().then((loggedInUser) => {
      if (!loggedInUser) {
        createAndLogin();
      } else {
        console.log("Already logged in to CometChat:", loggedInUser);
      }
    });
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded || !isSignedIn) {
    return <div>Loading or not signed in...</div>;
  }

  return (
    <div>
      {/* Add CometChat UIKit component here */}
      {/* Example: <CometChatUIKit.CometChatUI /> */}
    </div>
  );
};

export default CometChatWithClerk;
