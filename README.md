# VaccinePassport-ReactNativeWebView
React Native Companion App for Vaccine Passport using React Native Webview

Setup: 
1. git clone git@github.com:tvonhake/VaccinePassport-ReactNativeWebView.git [your project name here]
2. cd into cloned project folder
3. yarn
4. cd ios/
5. pod install
6. clone and setup Vaccine Passport Web Application: https://github.com/Derek229/vaccine-passport

7. open vaccine-passport web application project, rails s -p 3001 and yarn start for vaccine-passport web app
   (When running this app you must run vaccine-passport yarn start as well)
  
8. in vaccine-app-native folder: npx react-native run-ios

Note: This app is for demo purposes only. Vaccine Passport Web App was only designed to be mobile friendly for the "User" role. 
      Using this react-native app to login to "verifier", "issuer", or "admin" accounts in the Vaccine Passport system will not load components properly.
