import { db } from "./util/firebase";

(async () => {
  const query = await db.collection("subscribers").get();
  for (const doc of query.docs) {
    await db.collection("subscribers").doc(doc.id).update({
      waiverSigned: false,
    });
  }
})();
