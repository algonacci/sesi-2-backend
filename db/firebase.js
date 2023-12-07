const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

const firebaseConfig = {
  apiKey: "AIzaSyDyi19_gBhUjNzs7_NOe_wzTSsRWqmJIyM",
  authDomain: "democapstone-d300c.firebaseapp.com",
  projectId: "democapstone-d300c",
  storageBucket: "democapstone-d300c.appspot.com",
  messagingSenderId: "727721319185",
  appId: "1:727721319185:web:372fb7d11901c7c5504ab0",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const productRef = db.collection("products");

firebase.initializeApp(firebaseConfig);

module.exports = {
  admin,
  firebase,
  productRef,
  db,
};
