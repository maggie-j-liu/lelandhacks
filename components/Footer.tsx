import { ReactNode } from "react";

const Link = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <a
      className="hover:text-gray-300 focus:text-gray-300"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
const Footer = () => {
  return (
    <footer className="space-y-4 text-gray-400">
      <div className="flex flex-wrap gap-x-4 text-lg">
        <Link href="/">Home</Link>
        {/* <Link href="https://forms.gle/fRvdzhPejjmZ5yBC6">Register</Link> */}
        <Link href="https://forms.gle/yhHKDeXijYn6NuVi8">Waitlist</Link>
        <Link href="https://discord.gg/2HCbDFs35V">Discord</Link>
        <Link href="/conduct">Code of Conduct</Link>
        <Link href="/prospectus.pdf">Sponsorship Prospectus</Link>
      </div>
      <div>
        Leland Hacks is fiscally sponsored by The Hack Foundation.
        <br />
        Nonprofit EIN: 81-2908499.
      </div>
    </footer>
  );
};

export default Footer;
