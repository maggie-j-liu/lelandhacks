import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  const response = await fetch(
    "https://mailinglist.lelandcs.workers.dev/subscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + process.env.MAILINGLIST_AUTH_TOKEN,
      },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok) {
    res.status(400).send(await response.text());
    return;
  }
  res.send("Success");
  return;
};

export default handler;
