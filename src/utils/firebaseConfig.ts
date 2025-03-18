"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCRh-sPdVzC8VMVgzVu5Hl16wu8tQ5e4TQ",
  authDomain: "bignlean-c415a.firebaseapp.com",
  databaseURL: "https://bignlean-c415a-default-rtdb.firebaseio.com",
  projectId: "bignlean-c415a",
  storageBucket: "bignlean-c415a.appspot.com",
  messagingSenderId: "819498599934",
  appId: "1:819498599934:web:a1dd8b044f852e3fff6caf",
  measurementId: "G-YRQ81RX7QW",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
