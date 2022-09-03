import { db } from "./util/firebase";

(async () => {
  let query;
  query = await db
    .collection("subscribers")
    .where("waiverSigned", "==", false)
    .where("waitlist", "==", false)
    .get();
  let emailAddresses = [];

  for (const doc of query.docs) {
    const data = doc.data();
    emailAddresses.push(data.email);
  }
  console.log(emailAddresses.join("\n"));
})();
