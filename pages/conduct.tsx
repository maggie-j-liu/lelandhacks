const Conduct = () => {
  return (
    <main>
      <div className="prose prose-invert max-w-none text-lg">
        <h1 className="text-primary-300">Code of Conduct</h1>
        <h2 className="text-secondary-300">Rules</h2>
        <p>
          The purpose of this hackathon is to strengthen the bond of the student
          community and to provide a space for students to collaborate over
          their shared passion of STEM. In order for us to be able to
          effectively carry out our purpose, it is a necessity for all staff,
          volunteers, and participants to follow some basic rules:
        </p>
        <ul>
          <li>
            <b>Be Respectful</b>
            <ul>
              <li>Always treat others with respect</li>
              <li>Do not insult or belittle anyone for any reason at all</li>
              <li>
                Always treat the property that we are hosting the hackathon on
                with respect
                <ul>
                  <li>Clean up after yourself</li>
                  <li>Don't damage the property</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <b>Be Mindful</b>
            <ul>
              <li>Be aware of what you say and how you treat others</li>
            </ul>
          </li>
          <li>
            <b>Treat every single person as an equal</b>
            <ul>
              <li>Do not discriminate against anyone</li>
              <li>Treat others the same way you would want to be treated</li>
            </ul>
          </li>
        </ul>
        <p>
          If any staff, volunteers, and participants violate these rules, they
          may be forced to leave the hackathon based on the decision of the
          staff.
        </p>
        <h2 className="text-secondary-300">Reporting Issues</h2>
        <p>
          If you see or experience any violations to the rules stated above,
          contact us as soon as possible to alert us of the situation.
        </p>
        <p className="font-bold">Possible methods of contacting us:</p>
        <ul>
          <li>
            Contact any of the organizers at{" "}
            <a
              href="mailto:team@lelandhacks.com"
              className="text-primary-300 no-underline hover:underline"
            >
              team@lelandhacks.com
            </a>
          </li>
          <li>
            Approach any staff at the hackathon
            <ul>
              <li>All staff prior the hackathon starting will be introduced</li>
            </ul>
          </li>
        </ul>
        <p className="text-center text-2xl font-bold text-primary-300">
          Thank you!
        </p>
      </div>
    </main>
  );
};

export default Conduct;
