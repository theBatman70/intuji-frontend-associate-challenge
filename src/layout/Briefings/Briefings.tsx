import { ReactNode } from "react";

const Briefings = ({ children }: { children: ReactNode }) => {
  return <div className="briefingSection">{children}</div>;
};

export default Briefings;
