// Shared Firebase setup — imported by every page
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuAqXdoVvl-ieqckf1xNNY8rDoyJPRM7Q",
  authDomain: "eliteqna1.firebaseapp.com",
  projectId: "eliteqna1",
  storageBucket: "eliteqna1.firebasestorage.app",
  messagingSenderId: "465841707011",
  appId: "1:465841707011:web:f99e1b051939950f069636"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
