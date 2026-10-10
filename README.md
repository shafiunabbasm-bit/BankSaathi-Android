# BankSaathi Android starter

This is an Android Studio starter project that opens the existing BankSaathi website:
https://shafiunabbas.hatchable.site/

## What's included
- Android WebView app shell branded BankSaathi
- Opens BankSaathi pages in-app
- Opens third-party payment/banking URLs in the device browser, since some gateways block embedded WebViews
- Back navigation and basic network-error handling
- GitHub Actions workflow to build a **debug APK** and upload it as an Actions artifact

## Important status
This is source code, not a compiled APK. A build runner must compile it. The workflow builds a debug APK for testing; it is not a Play Store release and is not signed with a private release key.

## Build on GitHub
1. Create a new GitHub repository (for example `banksaathi-android`).
2. Upload all files from this folder, preserving their paths.
3. Open **Actions** and run **Build BankSaathi Android APK** (or push a commit to `main`).
4. Open the completed workflow run and download the `BankSaathi-debug-apk` artifact.
5. Extract it and install `app-debug.apk` on an Android phone. You may need to allow installation from that source.

## Before public release
- Confirm the final app identity and privacy policy.
- Test login, Apply Forms, agent flows, transaction history and external payment redirects on a real device.
- Test Wallet Deposit and Withdrawal with approved provider sandbox/live credentials. The app shell does not activate or certify payments.
- For Google Play, create a release signing key securely, configure Play App Signing, and prepare store assets and disclosures. Do not commit signing keys or provider secrets to this repository.
