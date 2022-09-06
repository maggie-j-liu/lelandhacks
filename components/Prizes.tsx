const PrizeCard = ({
  title,
  description,
  prizes,
  emoji,
}: {
  title: string;
  description?: string;
  prizes: string[];
  emoji?: string;
}) => {
  return (
    <div className="relative flex items-center justify-center rounded-md bg-gray-700 px-2 py-4">
      <div className="z-10">
        <h3 className="mb-1 text-center text-2xl font-semibold text-primary-200">
          {title}
        </h3>
        {description ? (
          <p className="text-center text-base text-gray-300">{description}</p>
        ) : null}
        <div className="mt-6 flex flex-col text-center leading-none">
          {prizes.map((prize, i) => (
            <>
              <div>{prize}</div>
              {i !== prizes.length - 1 ? (
                <div className="text-base text-gray-400">+</div>
              ) : null}
            </>
          ))}
        </div>
      </div>
      {emoji ? (
        <div className="absolute left-2 top-3 text-7xl opacity-25">{emoji}</div>
      ) : null}
    </div>
  );
};
const Prizes = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Prizes</h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <PrizeCard
          emoji="🥇"
          title="1st Place"
          prizes={[
            "💸 $75 Amazon Gift Card",
            "🥧 Raspberry Pi",
            "🐺 One year subscription to Wolfram|One Personal Edition and Wolfram|Alpha Pro",
          ]}
        />
        <PrizeCard
          emoji="🥈"
          title="2nd Place"
          prizes={[
            "💸 $60 Amazon Gift Card",
            "👕 Prisma T-shirt",
            "🐺 One year subscription to Wolfram|One Personal Edition and Wolfram|Alpha Pro",
          ]}
        />
        <PrizeCard
          emoji="🥉"
          title="3rd Place"
          prizes={["💸 $45 Amazon Gift Card"]}
        />
        <PrizeCard
          emoji="🏆"
          title="Best Beginner Project"
          description="A beginner team is one where at least half the team members have never attended a hackathon before."
          prizes={["💸 $20 Amazon Gift Card", "🐱 Squishmallow"]}
        />
        <PrizeCard
          emoji="✨"
          title="Best Design"
          prizes={["💸 $20 Amazon Gift Card", "✨ Figma T-shirt"]}
        />
        <PrizeCard
          emoji="🤣"
          title="Most Meme Project"
          prizes={["💸 $20 Amazon Gift Card", "🦕 Orpheus Plushie"]}
        />
        <PrizeCard
          emoji="💖"
          title="Most Referrals"
          prizes={["🐱 Squishmallow"]}
        />
        <div className="flex items-center justify-center rounded-md bg-gray-700 px-2 py-4 text-center">
          There'll be additional prizes for the 🐝&nbsp;Python/JavaScript Bee
          and 👾&nbsp;Game Tournament!
        </div>
      </div>
    </div>
  );
};

export default Prizes;
