export default function Home() {
  return (
    <div className="px-6 py-14">
      <main className="mx-auto max-w-3xl text-lg">
        <h1 className="text-4xl font-bold">LelandHacks</h1>
        <div className="font-extralight">
          <p>⏰ September 2022</p>
          <p>📍 Leland High School</p>
        </div>

        <div className="my-6 space-y-4 text-2xl font-light">
          <p>
            LelandHacks will be an{" "}
            <span className="font-semibold text-accent-300">
              in-person hackathon
            </span>{" "}
            hosted at Leland High School in San Jose, CA.
          </p>
          <p>
            We'll bring together high school students for 12 hours of{" "}
            <span className="font-semibold text-accent-300">
              hacking, workshops, and forming connections
            </span>
            . Even if you've never programmed before, don't worry! You'll have
            plenty of support to learn to code, and will walk away with a new
            skill.
          </p>
          <p>
            Sign up on the interest form below to be notified of more
            information.
          </p>
        </div>
        <div className="text-2xl">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <div className="flex gap-4">
            <input
              className="w-96 rounded-md bg-gray-600 px-2"
              id="email"
              type="email"
              placeholder="email@example.com"
            />
            <button className="rounded-md bg-gradient-to-tr from-accent-400 to-fuchsia-400 px-4 py-1">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
