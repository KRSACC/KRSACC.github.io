import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiN-aq7gRu9J0Pr3f0ufoTYdAeIzz0YE4",
  authDomain: "krsacc.firebaseapp.com",
  projectId: "krsacc",
  storageBucket: "krsacc.firebasestorage.app",
  messagingSenderId: "90486936988",
  appId: "1:90486936988:web:cd88491ebb12c9cdb96459"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
