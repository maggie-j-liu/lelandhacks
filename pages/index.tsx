import Faq from "../components/Faq";
import Lightning from "../components/Lightning";
import sagacent from "../sponsors/sagacent.jpg";
import Image from "next/future/image";
import Sponsor from "../components/Sponsor";
import mailchannels from "../sponsors/mailchannels.png";
import beaverworks from "../sponsors/beaverworks.png";
import Prisma from "../sponsors/Prisma";
import bay_area_kids_clubs from "../sponsors/bay_area_kids_clubs.png";
import ottersec from "../sponsors/ottersec.png";
import wolfram from "../sponsors/wolfram.png";
import stickermule from "../sponsors/stickermule.png";
import lelandbridge from "../sponsors/lelandbridge.jpg";

export default function Home() {
  return (
    <>
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
              <span className="hue-rotate-60 saturate-200">📅</span> September
              18, 2022
            </p>
            <p>
              <span className="hue-rotate-60 saturate-200">⏰</span> 9:00 AM -
              9:00 PM
            </p>
            <p>
              <span className="hue-rotate-60 saturate-200">📍</span> Vineland
              Branch Library
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
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 gap-x-4 text-center text-xl font-semibold sm:flex-row">
            <a
              href="https://forms.gle/fRvdzhPejjmZ5yBC6"
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded bg-gradient-to-tr from-secondary-400 to-green-400 px-4 py-2 duration-300 hover:scale-105 hover:duration-150 sm:w-44"
            >
              Register
            </a>
            <a
              href="https://discord.gg/2HCbDFs35V"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded px-4 py-2 outline outline-2 outline-offset-[-2px] outline-[#5865f2] duration-300 hover:scale-105 hover:bg-[#5865f2] hover:duration-150 sm:w-44"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"
                ></path>
              </svg>
              Join Discord
            </a>
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
              <Image
                className="h-full object-contain"
                src={mailchannels}
                alt="MailChannels Logo"
              />
            </Sponsor>
            <Sponsor link="https://www.lelandbridge.org">
              <Image
                className="h-full object-contain"
                src={lelandbridge}
                alt="Leland Bridge Logo"
              />
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
            <Sponsor small link="https://wolfram.com">
              <Image
                className="h-full object-contain"
                src={wolfram}
                alt="Wolfram Logo"
              />
            </Sponsor>
            <Sponsor small link="https://stickermule.com">
              <Image
                className="h-full object-contain"
                src={stickermule}
                alt="Sticker Mule logo"
              />
            </Sponsor>
            <Sponsor small link="https://www.prisma.io">
              <Prisma />
            </Sponsor>
          </div>
        </section>
      </main>
    </>
  );
}
