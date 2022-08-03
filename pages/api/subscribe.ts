import { FieldValue } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebaseAdmin";
import generateSignedUrl from "../../lib/generateSignedUrl";
import { stripHtml } from "string-strip-html";
import { validate } from "email-validator";

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
  if (!validate(email)) {
    res.status(400).send("Invalid email");
    return;
  }

  const existing = await db
    .collection("subscribers")
    .where("email", "==", email)
    .limit(1)
    .get();
  if (!existing.empty) {
    res.status(200).send("You are already subscribed");
    return;
  }

  await db.collection("subscribers").doc().set({
    email,
    subscribedAt: FieldValue.serverTimestamp(),
  });

  if (!process.env.DOMAIN) {
    throw new Error("DOMAIN environment variable is not set");
  }
  const baseUnsubscribeUrl = new URL(process.env.DOMAIN);
  baseUnsubscribeUrl.pathname = "unsubscribe";
  baseUnsubscribeUrl.searchParams.set("email", email);

  const signedUrl = generateSignedUrl(baseUnsubscribeUrl);
  const htmlMessage = `<div>Hey there!</div>
<br />
<div>
  Thanks for registering for
  <a href="https://lelandhacks.com">Leland Hacks</a>!
  Leland Hacks will be held on Sunday September 18th, at the <a href="https://goo.gl/maps/wY6vCBqyEanwznf68">Vineland Branch Library</a>.
  For now, please join our Discord server (<a href="https://discord.gg/t7ZJ7SpFce">https://discord.gg/t7ZJ7SpFce</a>) to connect with other attendees and get updates on the hackathon.
  If you have any questions, feel free to email us at team@lelandhacks.com.
  We're looking forward to seeing you at Leland Hacks! 
</div>
<br />
<div>Happy hacking!</div>
<div>Leland Hacks Team</div>
`;

  const textMessage = stripHtml(htmlMessage, {
    dumpLinkHrefsNearby: {
      enabled: true,
      putOnNewLine: false,
      wrapHeads: "<",
      wrapTails: ">",
    },
  }).result;

  const response = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8787"
        : "https://mailinglist.lelandcs.workers.dev"
    }/sendEmail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + process.env.MAILINGLIST_AUTH_TOKEN,
      },
      body: JSON.stringify({
        email,
        htmlMessage,
        textMessage,
        subject: `${
          process.env.NODE_ENV === "development" ? "[Testing] " : ""
        }Thank You for Registering for Leland Hacks ⚡`,
      }),
    }
  );

  if (!response.ok) {
    res
      .status(400)
      .send(
        `We have added you to our mailing list, but there was an error in sending you an email: ${await response.text()}`
      );
    return;
  }
  res.send("Success");
  return;
};

export default handler;
