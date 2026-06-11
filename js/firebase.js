import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD26YA6F6g0ln9o53hyTUkDYglmaa91RG4",
  authDomain: "school-quiz-maker-60a6b.firebaseapp.com",
  projectId: "school-quiz-maker-60a6b",
  storageBucket: "school-quiz-maker-60a6b.firebasestorage.app",
  messagingSenderId: "275618095678",
  appId: "1:275618095678:web:b3e3c2118c01d48436276f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db =
    getFirestore(app);
