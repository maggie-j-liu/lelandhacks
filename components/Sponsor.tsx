import { ReactNode } from "react";

const Sponsor = ({
  children,
  link,
  small = false,
}: {
  children: ReactNode;
  link?: string;
  small?: boolean;
}) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <div
          className={`flex ${
            small ? "h-20" : "h-32"
          } w-full items-center justify-center rounded-xl bg-yellow-50 px-4 py-4 duration-300 hover:scale-105 hover:duration-150 focus:bg-yellow-100`}
        >
          {children}
        </div>
      </a>
    );
  }
  return (
    <div className="flex h-32 w-full items-center justify-center rounded-xl bg-yellow-50 px-4 py-4 duration-300 hover:scale-105 hover:duration-150 focus:bg-yellow-100">
      {children}
    </div>
  );
};

export default Sponsor;
