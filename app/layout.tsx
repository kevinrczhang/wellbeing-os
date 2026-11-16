import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wellbeing OS",
  description: "The website represents wellbeing through four themes: connection, purpose, recovery, and environment.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
