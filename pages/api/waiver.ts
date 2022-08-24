import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebaseAdmin";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }
  if (
    req.headers.authorization !== `Bearer ${process.env.GOOGLE_FORMS_TOKEN}`
  ) {
    res.status(401).send("Unauthorized");
    return;
  }

  if (!req.body?.email) {
    res.status(400).send("Email is required");
    return;
  }

  const { email } = req.body;

  const existing = await db
    .collection("subscribers")
    .where("email", "==", email)
    .limit(1)
    .get();
  if (existing.empty) {
    await db.collection("subscribers").doc().set({
      email,
      waiverSigned: true,
    });
  } else {
    const snap = existing.docs[0];
    await db.collection("subscribers").doc(snap.id).update({
      waiverSigned: true,
    });
  }

  res.send("Success");
  return;
};

export default handler;
