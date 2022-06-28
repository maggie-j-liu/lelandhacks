import { FieldValue } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebaseAdmin";
import generateSignedUrl from "../../lib/generateSignedUrl";
import { stripHtml } from "string-strip-html";
import verifySignedUrl from "../../lib/verifySignedUrl";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body?.email || !req.body?.timestamp || !req.body?.mac) {
    res.status(400).json({ error: "Invalid unsubscribe link" });
    return;
  }

  const { email, timestamp, mac } = req.body;

  if (!verifySignedUrl({ email, timestamp, mac })) {
    res.status(400).json({ error: "Invalid unsubscribe link" });
  }

  const snapshot = await db
    .collection("subscribers")
    .where("email", "==", email)
    .get();

  if (snapshot.empty) {
    res.status(400).json({ error: "You are already unsubscribed." });
    return;
  }

  snapshot.forEach((doc) => {
    try {
      doc.ref.delete();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });

  res.send("Success");
  return;
};

export default handler;
