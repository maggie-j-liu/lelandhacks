import { useState } from "react";
import emailValidator from "email-validator";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const submit = async () => {
    setSubmitting(true);
    const isValid = emailValidator.validate(email);
    if (!isValid) {
      setError("Invalid email.");
      setSubmitting(false);
      return;
    }
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      setError(`Error: ${await res.text()}`);
    } else {
      setSuccess(true);
    }
    setEmail("");
    setSubmitting(false);
  };
  return (
    <div className="px-6 py-14">
      <main className="mx-auto max-w-3xl text-lg">
        <h1 className="text-4xl font-bold">Leland Hacks</h1>
        <div className="font-extralight">
          <p>📅 September 2022</p>
          <p>📍 Leland High School</p>
        </div>

        <div className="my-6 space-y-4 text-2xl font-light">
          <p>
            Leland Hacks will be an{" "}
            <span className="font-semibold text-primary-300">
              in-person hackathon
            </span>{" "}
            hosted at Leland High School in San Jose, CA.
          </p>
          <p>
            We'll bring together high school students for 12 hours of{" "}
            <span className="font-semibold text-primary-300">hacking</span>,{" "}
            <span className="font-semibold text-primary-300">workshops</span>,
            and{" "}
            <span className="font-semibold text-primary-300">
              forming connections
            </span>
            . Even if you've never programmed before, don't worry! You'll have
            plenty of support to learn to code, and will walk away with a new
            skill.
          </p>
          <p>
            Sign up on the interest form below to be notified when registrations
            open.
          </p>
        </div>
        <div className="text-2xl">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <div className="flex gap-4">
            <input
              className="w-96 rounded-md bg-gray-600 px-2 invalid:outline invalid:outline-2 invalid:outline-red-300"
              id="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSuccess(false);
                setError("");
              }}
            />
            <button
              disabled={!email || submitting}
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
              className="rounded-md bg-gradient-to-tr from-primary-400 to-fuchsia-400 px-4 py-1 font-semibold hover:saturate-150 focus:saturate-150 disabled:cursor-not-allowed disabled:saturate-50"
            >
              Submit
            </button>
          </div>
          {success ? (
            <span className="mt-2 block text-base leading-snug text-blue-200">
              Success! You've been added to our interest form and should receive
              a confirmation email shortly. If not, please email us at{" "}
              <a href="mailto:team@lelandhacks.com" className="underline">
                team@lelandhacks.com
              </a>
              .
            </span>
          ) : null}
          {error.length > 0 ? (
            <span className="text-base text-red-200">{error}</span>
          ) : null}
        </div>
      </main>
    </div>
  );
}
