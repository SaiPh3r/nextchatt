import { CometChatUIKit } from "@cometchat/chat-uikit-react";

const COMETCHAT_CONSTANTS = {
  APP_ID: "YOUR_APP_ID",
  REGION: "YOUR_REGION",
  AUTH_KEY: "YOUR_AUTH_KEY"
};

export const initCometChat = async () => {
  try {
    const uiKitSettings = new CometChatUIKit.UIKitSettings({
      appId: COMETCHAT_CONSTANTS.APP_ID,
      region: COMETCHAT_CONSTANTS.REGION,
      authKey: COMETCHAT_CONSTANTS.AUTH_KEY
    });

    return await CometChatUIKit.init(uiKitSettings);
  } catch (error) {
    console.error("CometChat initialization failed:", error);
    throw error;
  }
};