import { useState } from "react";
import emailValidator from "email-validator";
import Meta from "../components/Meta";
import Faq from "../components/Faq";
import Lightning from "../components/Lightning";
import sagacent from "../sponsors/sagacent.png";
import Image from "next/future/image";

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
    <>
      <Meta />
      <div className="px-6 py-14">
        <main className="mx-auto max-w-3xl space-y-12 text-lg">
          <section>
            <h1 className="text-7xl font-bold text-secondary-300">
              Leland Hacks{" "}
              <span className="text-primary-300">
                <Lightning />
              </span>
            </h1>
            <div className="font-extralight">
              <p>
                <span className="hue-rotate-60 saturate-200">📅</span> September
                2022
              </p>
              <p>
                <span className="hue-rotate-60 saturate-200">📍</span> Leland
                High School
              </p>
            </div>

            <div className="my-6 space-y-4 text-2xl font-[number:350]">
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
                <span className="font-semibold text-primary-300">
                  workshops
                </span>
                , and{" "}
                <span className="font-semibold text-primary-300">
                  forming connections
                </span>
                . Even if you've never programmed before, don't worry! You'll
                have plenty of support to learn to code, and will walk away with
                a new skill.
              </p>
            </div>
            <div
              className="-mx-4 rounded-md bg-secondary-800/50 px-4 py-4 text-2xl"
              id="interest-form"
            >
              <p>
                Sign up on the interest form to be notified when registrations
                open.
              </p>
              <label htmlFor="email" className="mt-2 block font-semibold">
                Email
              </label>
              <div className="flex items-stretch gap-4">
                <input
                  className="w-96 rounded-md bg-gray-600 px-2 invalid:outline invalid:outline-2 invalid:outline-red-400"
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
                  className="rounded-md bg-gradient-to-tr from-primary-500 to-pink-400 px-4 pb-1 pt-2 font-semibold hover:saturate-150 focus:saturate-150 disabled:cursor-not-allowed disabled:saturate-50"
                >
                  Submit
                </button>
              </div>
              {success ? (
                <span className="mt-2 block text-base leading-snug text-secondary-200">
                  Success! You've been added to our interest form and should
                  receive a confirmation email shortly. If not, please email us
                  at{" "}
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
          </section>
          <section>
            <Faq />
          </section>
          <section>
            <h2 className="text-3xl font-bold" id="sponsors">
              Sponsors
            </h2>
            <p>Thank you to these companies for supporting Leland Hacks!</p>
            <p>
              Want to help make Leland Hacks possible and inspire dozens of high
              school students to code? Email us at{" "}
              <a
                href="mailto:team@lelandhacks.com"
                className="text-primary-300 hover:underline"
              >
                team@lelandhacks.com
              </a>{" "}
              to get involved!
            </p>
            <a
              href="/prospectus.pdf"
              className="mt-2 block w-max rounded-md bg-gradient-to-tr from-primary-500 to-pink-400 px-4 pb-1 pt-2 font-semibold hover:saturate-150 focus:saturate-150"
            >
              View Sponsorship Prospectus
            </a>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="https://www.sagacent.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-yellow-50 px-4 py-4 duration-300 hover:scale-105 hover:duration-150 focus:bg-yellow-100">
                  <Image src={sagacent} alt="Sagacent Technologies Logo" />
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
