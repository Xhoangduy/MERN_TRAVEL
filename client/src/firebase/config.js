// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwIXaAHlWofTHFZoPKDDAWdMY9lvzGqaY",
    authDomain: "travel-357d9.firebaseapp.com",
    projectId: "travel-357d9",
    storageBucket: "travel-357d9.appspot.com",
    messagingSenderId: "214401455961",
    appId: "1:214401455961:web:d23739939d1a582b105e48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
