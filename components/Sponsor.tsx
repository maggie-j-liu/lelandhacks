import { ReactNode } from "react";

const Sponsor = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-yellow-50 px-4 py-4 duration-300 hover:scale-105 hover:duration-150 focus:bg-yellow-100">
        {children}
      </div>
    </a>
  );
};

export default Sponsor;
