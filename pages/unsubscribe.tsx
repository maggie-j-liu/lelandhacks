import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import verifySignedUrl from "../lib/verifySignedUrl";

const UnsubscribePage = ({ verified, ...props }: { verified: boolean }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  if (!verified) {
    return <p>Invalid unsubscribe link</p>;
  }
  const { mac, timestamp, email } = props as {
    mac: string;
    timestamp: string;
    email: string;
  };
  const unsubscribe = async () => {
    const res = await fetch(`/api/unsubscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mac, timestamp, email }),
    });
    if (res.ok) {
      setSuccess(true);
    } else {
      setError((await res.json()).error);
    }
  };
  if (error) {
    return <p>{error}</p>;
  }
  if (success) {
    return <p>You have been unsubscribed. Sorry to see you go :(</p>;
  }
  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          unsubscribe();
        }}
      >
        Unsubscribe
      </button>
    </div>
  );
};

export default UnsubscribePage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!("mac" in query) || !("timestamp" in query) || !("email" in query)) {
    return {
      props: {
        verified: false,
      },
    };
  }
  const { mac, timestamp, email } = query;
  const verified = verifySignedUrl({ mac, timestamp, email } as {
    mac: string;
    timestamp: string;
    email: string;
  });
  return {
    props: {
      verified,
      mac,
      timestamp,
      email,
    },
  };
};
