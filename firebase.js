// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDk-BkxVCxLt1hWdcnDrfC8s0S6NhaIg7E",
  authDomain: "virtual-3d-f89e0.firebaseapp.com",
  projectId: "virtual-3d-f89e0",
  storageBucket: "virtual-3d-f89e0.firebasestorage.app",
  messagingSenderId: "115401221206",
  appId: "1:115401221206:web:8c338b2de4e41a149d87f7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

