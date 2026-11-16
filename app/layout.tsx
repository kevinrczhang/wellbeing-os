import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Wellbeing OS — A little more human",
  description: "A personal wellbeing journal and interactive experiment exploring connection, purpose, recovery, environment, and the wider circumstances of being well.",
  icons: { icon: assetPath("/favicon.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
