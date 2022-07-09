import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import verifySignedUrl from "../lib/verifySignedUrl";

const UnsubscribePage = ({ verified, ...props }: { verified: boolean }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(() => {
    if (!verified) {
      return "Invalid unsubscribe link. Make sure you copied the full URL.";
    }
    return "";
  });
  const [submitting, setSubmitting] = useState(false);
  const { mac, timestamp, email } = props as {
    mac: string;
    timestamp: string;
    email: string;
  };
  const unsubscribe = async () => {
    setSubmitting(true);
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
      setError(await res.text());
    }
    setSubmitting(false);
  };
  return (
    <div className="px-8 py-14">
      <main className="mx-auto max-w-3xl text-lg">
        <Link href="/">
          <a className="text-primary-100 hover:text-primary-200 focus:text-primary-200">
            &larr; Go Home
          </a>
        </Link>
        <h1 className="mb-4 mt-6 text-3xl font-bold">
          Unsubscribe from the Leland Hacks mailing list
        </h1>
        {error ? (
          <p>{error}</p>
        ) : success ? (
          <>
            <p>
              {" "}
              {email} has been unsubscribed. Sorry to see you go :(. If you want
              to sign up again, you can do so at{" "}
              <Link href="/">
                <a className="font-semibold text-primary-300">
                  lelandhacks.com
                </a>
              </Link>
              .
            </p>
          </>
        ) : (
          <>
            <p>
              Are you sure you want to unsubscribe? This will unsubscribe{" "}
              <span className="font-semibold text-primary-300">{email}</span>{" "}
              from our mailing list, and you won't receive any more emails.
            </p>
            <button
              disabled={submitting}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                unsubscribe();
              }}
              className="mt-6 rounded-md bg-primary-600 px-4 py-1 font-semibold hover:bg-primary-700 focus:bg-primary-700 disabled:cursor-not-allowed disabled:saturate-50"
            >
              {submitting ? "Unsubscribing" : "Unsubscribe"}
            </button>
          </>
        )}
      </main>
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
