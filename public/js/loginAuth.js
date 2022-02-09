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
        createUserWithEmailAndPassword,
        sendPasswordResetEmail,
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

    login.addEventListener("click", (e) => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                const dt = new Date();
                update(ref(database, "users/" + user.uid), {
                    last_login: dt,
                });

                alert("User loged in!");
                window.location.href = '/';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });
    });

    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
        }
    });

    forgotPass.addEventListener("click", (e) => {
        //to prevent anchor from refreshing the tab
        e.preventDefault();
        const email = document.getElementById("email").value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Reset link sent to your email id");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById("error").innerHTML = error.message;
            });
    });