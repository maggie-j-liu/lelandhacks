import { useState } from "react";
import emailValidator from "email-validator";
import Meta from "../components/Meta";
import Faq from "../components/Faq";
import Lightning from "../components/Lightning";
import sagacent from "../sponsors/sagacent.png";
import Image from "next/future/image";
import Sponsor from "../components/Sponsor";
import MailChannels from "../sponsors/MailChannels";
import beaverworks from "../sponsors/beaverworks.png";
import Prisma from "../sponsors/Prisma";
import bay_area_kids_clubs from "../sponsors/bay_area_kids_clubs.png";
import Footer from "../components/Footer";
import ottersec from "../sponsors/ottersec.png";

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
        <div className="mx-auto max-w-3xl">
          <main className="space-y-12 text-lg">
            <section>
              <h1 className="text-7xl font-bold text-secondary-300">
                Leland Hacks{" "}
                <span className="text-primary-300">
                  <Lightning />
                </span>
              </h1>
              <div className="font-extralight">
                <p>
                  <span className="hue-rotate-60 saturate-200">📅</span>{" "}
                  September 18, 2022
                </p>
                <p>
                  <span className="hue-rotate-60 saturate-200">⏰</span> 9:00 AM
                  - 9:00 PM
                </p>
                <p>
                  <span className="hue-rotate-60 saturate-200">📍</span>{" "}
                  Vineland Branch Library
                </p>
              </div>

              <div className="my-6 space-y-4 text-2xl font-[number:350]">
                <p>
                  Leland Hacks will be an{" "}
                  <span className="font-semibold text-primary-300">
                    in-person hackathon
                  </span>{" "}
                  hosted at the{" "}
                  <a
                    href="https://goo.gl/maps/wY6vCBqyEanwznf68"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-300 underline"
                  >
                    Vineland Branch Library
                  </a>{" "}
                  in San Jose, CA.
                </p>
                <p>
                  We'll bring together students for 12 hours of{" "}
                  <span className="font-semibold text-primary-300">
                    hacking
                  </span>
                  ,{" "}
                  <span className="font-semibold text-primary-300">
                    workshops
                  </span>
                  , and{" "}
                  <span className="font-semibold text-primary-300">
                    forming connections
                  </span>
                  . Even if you've never programmed before, don't worry! You'll
                  have plenty of support to learn to code, and will walk away
                  with a new skill.
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
                    receive a confirmation email shortly. If not, please email
                    us at{" "}
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
                Want to help make Leland Hacks possible and inspire dozens of
                students to code? Email us at{" "}
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
                <Sponsor link="https://www.sagacent.com">
                  <Image
                    className="h-full object-contain"
                    src={sagacent}
                    alt="Sagacent Technologies Logo"
                  />
                </Sponsor>
                <Sponsor link="https://mailchannels.com">
                  <MailChannels />
                </Sponsor>
                <Sponsor /* link="https://bayareakidsclub.com" */>
                  <Image
                    className="h-full object-contain"
                    src={bay_area_kids_clubs}
                    alt="Bay Area Kids Clubs Logo"
                  />
                </Sponsor>
                <Sponsor link="https://osec.io">
                  <Image
                    className="h-full object-contain invert"
                    src={ottersec}
                    alt="OtterSec Logo"
                  />
                </Sponsor>
              </div>
              <h3 className="mt-6">With support from</h3>
              <div className="mt-1 grid grid-cols-1 gap-4 text-black sm:grid-cols-3">
                <Sponsor small link="https://www.pandemonium.capital">
                  <div className="text-base font-semibold">
                    💥 Pandemonium Capital 💥
                  </div>
                </Sponsor>
                <Sponsor small link="https://beaverworks.ll.mit.edu">
                  <Image
                    className="h-full object-contain"
                    src={beaverworks}
                    alt="Beaver Works Logo"
                  />
                </Sponsor>
                <Sponsor small link="https://www.prisma.io">
                  <Prisma />
                </Sponsor>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
