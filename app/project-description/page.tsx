import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/Icon";
import ProjectDescription from "@/components/ProjectDescription";

export const metadata: Metadata = { title: "Project Description — Wellbeing OS" };

export default function DescriptionPage() {
  return <main className="standalone-description"><header className="document-menu"><Link href="/"><BrandMark size={22}/> Wellbeing OS</Link><span className="eyebrow">PROJECT NOTES / 001</span></header><ProjectDescription standalone/><footer className="document-footer">A little less machine. A little more human.</footer></main>;
}
