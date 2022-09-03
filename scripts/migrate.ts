import { db } from "./util/firebase";

(async () => {
  const query = await db.collection("subscribers").get();
  for (const doc of query.docs) {
    const data = doc.data();
    if (!("waitlist" in data)) {
      await db.collection("subscribers").doc(doc.id).update({
        waitlist: false,
      });
    }
  }
})();
