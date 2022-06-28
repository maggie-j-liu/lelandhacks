import { createHmac, timingSafeEqual } from "crypto";

const verifySignedUrl = ({
  mac,
  timestamp,
  email,
}: {
  mac: string;
  timestamp: string;
  email: string;
}) => {
  const data = `${email}@${timestamp}`;
  const hmac = createHmac("sha256", process.env.SIGNING_KEY as string);
  hmac.update(data);
  const signature = hmac.digest("base64");
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(mac));
  } catch (e) {
    return false;
  }
};

export default verifySignedUrl;
