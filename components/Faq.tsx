import NextLink from "next/link";
import { ReactNode } from "react";

const Q = ({ children }: { children: ReactNode }) => {
  return (
    <dt className="mt-4 text-2xl font-medium text-primary-100 underline">
      {children}
    </dt>
  );
};

const A = ({ children }: { children: ReactNode }) => {
  return <dd>{children}</dd>;
};

const Link = ({ children, href }: { children: ReactNode; href: string }) => {
  const linkStyles = "text-primary-300 hover:underline";
  if (href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a href={href} className={linkStyles}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href}>
      <a className={linkStyles}>{children}</a>
    </NextLink>
  );
};

const Faq = () => {
  return (
    <>
      <h2 className="text-3xl font-bold" id="faq">
        Frequently Asked Questions
      </h2>
      <dl>
        <Q>What is a hackathon?</Q>
        <A>
          A hackathon is an event where students gather to code! There'll be
          workshops and speakers, so don't worry if you don't know how to code.
          Everyone will create their own project in teams of up to 4, and will
          present their projects at the end. The best projects will be awarded
          prizes, and there'll be swag and food for everyone!
        </A>
        <Q>Who can participate in Leland Hacks?</Q>
        <A>
          All high school and middle school students are welcome to attend. Fill
          out <Link href="https://forms.gle/yhHKDeXijYn6NuVi8">this form</Link>{" "}
          to sign up for our waitlist!
        </A>
        <Q>Do I need to know how to code?</Q>
        <A>
          Nope! We welcome all students to participate, regardless of
          experience. We'll have plenty of workshops to teach you what you need
          to know.
        </A>
        <Q>How much will it cost?</Q>
        <A>
          Leland Hacks will be <b>completely free</b> to attend. Plus, we'll
          provide food, swag, and fun workshops :).
        </A>
        <Q>I have another question!</Q>
        <A>
          Send us an email at{" "}
          <Link href="mailto:team@lelandhacks.com">team@lelandhacks.com</Link>!
        </A>
      </dl>
    </>
  );
};
export default Faq;
