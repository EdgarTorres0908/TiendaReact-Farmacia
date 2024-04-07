import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvMF0sVt8gmqF6gbGK3nSfl9VPC5iQluU",
  authDomain: "backend54045-9af05.firebaseapp.com",
  projectId: "backend54045-9af05",
  storageBucket: "backend54045-9af05.appspot.com",
  messagingSenderId: "282650497239",
  appId: "1:282650497239:web:bdad645431d0b098442092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);