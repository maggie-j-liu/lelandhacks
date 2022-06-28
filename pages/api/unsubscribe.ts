import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebaseAdmin";
import verifySignedUrl from "../../lib/verifySignedUrl";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body?.email || !req.body?.timestamp || !req.body?.mac) {
    res.status(400).send("Invalid unsubscribe link");
    return;
  }

  const { email, timestamp, mac } = req.body;

  if (!verifySignedUrl({ email, timestamp, mac })) {
    res.status(400).send("Invalid unsubscribe link");
  }

  const snapshot = await db
    .collection("subscribers")
    .where("email", "==", email)
    .get();

  if (snapshot.empty) {
    res.status(400).send("You are already unsubscribed.");
    return;
  }

  snapshot.forEach((doc) => {
    try {
      doc.ref.delete();
    } catch (error) {
      console.log(error);
      res.status(500).send(`Error deleting from the database: ${error}`);
    }
  });

  res.send("Success");
  return;
};

export default handler;
