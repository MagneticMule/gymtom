import 'dotenv/config';
export default {
  "expo": {
    "sdkVersion": "47.0.0",
    "runtimeVersion": {
      "policy": "sdkVersion"
    },
    "name": "gymtom",
    "slug": "gymtom",
    "owner": "seventh_stage_creative",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#cacaca"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/8553682c-c5b8-4dbb-978e-63ca8a497f90"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "bundleIdentifier": "com.seventhstage.gymtom",
      "userInterfaceStyle": "light",
      "supportsTablet": false
    },
    "android": {
      "versionCode": 1,
      "package": "com.seventhstage.gymtom",
      "userInterfaceStyle": "light",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#252837"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      "eas": {
        "projectId": "8553682c-c5b8-4dbb-978e-63ca8a497f90"
      }
    },
    "description": ""
  },
  "name": "gymtom"
}