
// Import the functions you need from the SDKs you need
// const admin = require("firebase/app")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
require("dotenv").config();
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    databaseURL: process.env.DB_URL,
    storageBucket: process.env.STORAGE,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
};

// Initialize Firebase
// const app = admin.initializeApp(firebaseConfig);
module.exports = firebaseConfig
