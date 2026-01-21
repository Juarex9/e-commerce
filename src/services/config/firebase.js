import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPOmyunEG-lZ7_su6zwYcgK9AM_wPxG8U",
  authDomain: "coderhouse-react-89d1f.firebaseapp.com",
  projectId: "coderhouse-react-89d1f",
  storageBucket: "coderhouse-react-89d1f.appspot.com", // <-- recomendado
  messagingSenderId: "393611698838",
  appId: "1:393611698838:web:c1c657b9d0dc8289aa18b7",
  measurementId: "G-ZS9RG5EHKC",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Si querés analytics, mejor activarlo solo en prod (y en browser)
// export const analytics = getAnalytics(app);
