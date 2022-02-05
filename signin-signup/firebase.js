
var firebaseConfig = {
    apiKey: "AIzaSyAtQLoRJGQFE2pEnsQwRcIHjmHh18uRS3E",
    authDomain: "doc-platform.firebaseapp.com",
    databaseURL: "https://doc-platform-default-rtdb.firebaseio.com",
    projectId: "doc-platform",
    storageBucket: "doc-platform.appspot.com",
    messagingSenderId: "891182236330",
    appId: "1:891182236330:web:1700886bfd8f4fb36fc6d3",
    measurementId: "G-X9KGTMH6B7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics(app);
firebase.getAuth();