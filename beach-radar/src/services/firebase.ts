// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get } from 'firebase/database';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO figure out how to use .env in expo
const firebaseConfig = {
  apiKey: "AIzaSyBA4tD3JiWJ2DSj4yaHIjRdUgWwzAI7JpQ",
  authDomain: "beach-radar.firebaseapp.com",
  projectId: "beach-radar",
  storageBucket: "beach-radar.appspot.com",
  messagingSenderId: "96232193553",
  appId: "1:96232193553:web:e8c13b719deeed15267bb0",
  measurementId: "G-N2BHYDF7FQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getDatabase(firebaseApp);
export const dbRef = ref(db);