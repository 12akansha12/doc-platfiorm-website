// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
    update,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import {
    getAuth,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //yout config code
    apiKey: "AIzaSyAtQLoRJGQFE2pEnsQwRcIHjmHh18uRS3E",
    authDomain: "doc-platform.firebaseapp.com",
    databaseURL: "https://doc-platform-default-rtdb.firebaseio.com",
    projectId: "doc-platform",
    storageBucket: "doc-platform.appspot.com",
    messagingSenderId: "891182236330",
    appId: "1:891182236330:web:1700886bfd8f4fb36fc6d3",
    measurementId: "G-X9KGTMH6B7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signUp.addEventListener("click", (e) => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            set(ref(database, "users/" + user.uid), {
                username: username,
                email: email,
            });

            alert("user created!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (
                new String(errorMessage).valueOf() ==
                "Error (auth/email-already-in-use)."
            )
                window.location.href = "login.html";
            else alert(errorMessage);
        });
});
