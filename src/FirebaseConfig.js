// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1ne2rPG4IftxgqlklGTR7asfIMMtFjEI",
    authDomain: "chatting-app-1aaac.firebaseapp.com",
    projectId: "chatting-app-1aaac",
    storageBucket: "chatting-app-1aaac.appspot.com",
    messagingSenderId: "397515025429",
    appId: "1:397515025429:web:7f03f4d1bc317982b8f21c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig