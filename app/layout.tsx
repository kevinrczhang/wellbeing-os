import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wellbeing OS — A little more human",
  description: "An interactive personal operating system. Explore how connection, purpose, recovery, and environment shape a life beyond productivity.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
