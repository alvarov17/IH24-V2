
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDLuMLg29WIj1ikk7qp_1GzBYW6XVl5YCg",
    authDomain: "irvinehackproject.firebaseapp.com",
    databaseURL: "https://irvinehackproject-default-rtdb.firebaseio.com",
    projectId: "irvinehackproject",
    storageBucket: "irvinehackproject.appspot.com",
    messagingSenderId: "824047788753",
    appId: "1:824047788753:web:f2ac8e701bd0d4ab411bf0",
    measurementId: "G-N8S5DJRWJ1"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = "en"
const provider = new GoogleAuthProvider();
const signOutBtn = document.getElementById('signOutBtn');

auth.onAuthStateChanged(user => {
  if(user){
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = '<h3>Welcome Back, ' + user.displayName + '!</h3>';
  }else{
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
  }
  });

document.addEventListener("DOMContentLoaded", function() {
  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      const user = result.user;
      console.log(user)
      window.location.href = "/home";
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
    });
    signOutBtn.addEventListener("click", function() {
      auth.signOut();
      window.location.href = "/";
    });
    

});

