// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/7.15.0/firebase-app.js');
// importScripts('/__/firebase/7.15.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');



 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
    apiKey: "AIzaSyAiqo_98KDYGdD6OzbOQQxoLupebhR2cDo",
    authDomain: "mqtttestapplication.firebaseapp.com",
    databaseURL: "https://mqtttestapplication.firebaseio.com",
    projectId: "mqtttestapplication",
    storageBucket: "mqtttestapplication.appspot.com",
    messagingSenderId: "1030960605375",
    appId: "1:1030960605375:web:d78549c26c185f3ab4fe0a",
    measurementId: "G-58TESX7FPJ"
  });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();



// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]
