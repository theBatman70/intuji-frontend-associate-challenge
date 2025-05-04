import { ReactNode } from "react";

export default function Briefings({ children }: { children: ReactNode }) {
  return <div className="briefingSection">{children}</div>;
}
