import { db } from "./util/firebase";
import fetch from "node-fetch";
import { stripHtml } from "string-strip-html";

const devMode = false;

const htmlMessage = `<div>Hey hacker!</div>
<br />
<div>
  Thanks again for registering for
  <a href="https://lelandhacks.com">Leland Hacks</a>; we're excited to see you there!
  To participate in the hackathon, you'll need to sign a <b>mandatory</b> event liability waiver.
  Please print out the <a href="https://lelandhacks.com/waiver.pdf">waiver</a>, sign it (have your parent sign it if you are under 18), and submit a picture or scan to this form: https://forms.gle/kYC6MqJ8z9SB5s787.
</div>
<br />
<div>
  If you're unable to fill out the waiver for whatever reason, please email us at team@lelandhacks.com.
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

const sendEmail = async (addresses: string[]) => {
  console.log("emailing", addresses);
  await fetch("https://mailinglist.lelandcs.workers.dev/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + process.env.MAILINGLIST_AUTH_TOKEN,
    },
    body: JSON.stringify({
      email: addresses,
      htmlMessage,
      textMessage,
      subject: `${
        devMode ? "[Testing] " : ""
      }Leland Hacks Waiver -- Please Sign`,
      bccTeam: true,
    }),
  });
};

(async () => {
  let query;
  if (devMode) {
    query = await db
      .collection("subscribers")
      .where("email", "==", "maggie.j.liu@gmail.com")
      .get();
  } else {
    query = await db
      .collection("subscribers")
      .where("waiverSigned", "==", false)
      .get();
  }
  let emailAddresses = [];

  for (const doc of query.docs) {
    const data = doc.data();
    emailAddresses.push(data.email);
  }
  if (emailAddresses.length > 0) {
    sendEmail(emailAddresses);
  }
})();
