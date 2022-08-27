import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert({
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      projectId: "leland-cs",
    }),
    databaseURL: "https://leland-cs.firebaseio.com",
  });
}

export const db = getFirestore();
