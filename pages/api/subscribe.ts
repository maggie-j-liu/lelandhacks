import { FieldValue } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebaseAdmin";
import generateSignedUrl from "../../lib/generateSignedUrl";
import { stripHtml } from "string-strip-html";
import { validate } from "email-validator";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
    res.status(400).send("You are already subscribed");
    return;
  }

  await db.collection("subscribers").doc().set({
    email,
    subscribedAt: FieldValue.serverTimestamp(),
  });

  if (!process.env.DOMAIN) {
    throw new Error("DOMAIN environment variable is not set");
  }
  const baseUnsubscribeUrl = new URL(process.env.DOMAIN as string);
  baseUnsubscribeUrl.pathname = "unsubscribe";
  baseUnsubscribeUrl.searchParams.set("email", email);

  const signedUrl = generateSignedUrl(baseUnsubscribeUrl);
  const htmlMessage = `<div>Hey there!</div>
<br/>
<div>Thanks for signing up for the <a href="https://lelandhacks.com">LelandHacks</a> interest form! We'll notify you when registrations are open.</div>
<br />
<div>Happy hacking!</div>
<div>LelandHacks Team</div>
<br />
<small><a href="${signedUrl}">Unsubscribe</a></small>`;

  // mailchannels dkim currently not working with multiple content-types :(
  // const textMessage = stripHtml(htmlMessage, {
  //   dumpLinkHrefsNearby: {
  //     enabled: true,
  //     putOnNewLine: false,
  //     wrapHeads: "<",
  //     wrapTails: ">",
  //   },
  // }).result;

  const response = await fetch(
    "https://mailinglist.lelandcs.workers.dev/sendEmail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + process.env.MAILINGLIST_AUTH_TOKEN,
      },
      body: JSON.stringify({
        email,
        htmlMessage,
        subject: `${
          process.env.NODE_ENV === "development" ? "[Testing] " : ""
        }LelandHacks Interest Form`,
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
