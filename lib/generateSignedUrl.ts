import { createHmac } from "crypto";

const generateSignedUrl = (url: URL) => {
  const timestamp = Date.now();
  const data = `${url.searchParams.get("email")}@${timestamp}`;
  const hmac = createHmac("sha256", process.env.SIGNING_KEY as string);
  hmac.update(data);
  const mac = hmac.digest("base64");

  const signedUrl = new URL(url.toString());
  signedUrl.searchParams.set("mac", mac);
  signedUrl.searchParams.set("timestamp", timestamp.toString());
  return signedUrl;
};

export default generateSignedUrl;
