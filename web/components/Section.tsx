import { PropsWithChildren } from "react";
export default function Section({ children }: PropsWithChildren) {
  return <section className="py-10 md:py-14">{children}</section>;
}