import type { AppId } from "@/content/journal";

export function Icon({ name, size = 44, className = "" }: { name: AppId | "arrow" | "sun" | "grid"; size?: number; className?: string }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
    {name === "connections" && <><circle cx="18" cy="15" r="6"/><path d="M7 37v-6a11 11 0 0 1 22 0v6H7Z"/><path d="M31 9a6 6 0 0 1 0 12m2 4a10 10 0 0 1 8 10v2h-7"/><path d="M13 42h12"/></>}
    {name === "purpose" && <><path d="M10 42V7h26l-5 8 5 8H10"/><path d="M5 42h17M16 11h13M16 16h8"/></>}
    {name === "recovery" && <><path d="M8 19h27v11a12 12 0 0 1-12 12h-3A12 12 0 0 1 8 30V19ZM35 21h4a5 5 0 0 1 0 10h-4M5 44h34M15 12V6M23 12V3M31 12V7"/></>}
    {name === "environment" && <><path d="M3 38 16 15l9 16 6-10 14 17H3Z"/><path d="m11 24 5 3 4-4M27 27l4 3 4-3M4 43h40"/><circle cx="34" cy="10" r="5"/></>}
    {name === "monitor" && <><rect x="4" y="6" width="40" height="29" rx="0"/><path d="M17 42h14M24 35v7M8 23h7l5-9 7 15 5-8h8"/></>}
    {name === "summary" && <><circle cx="24" cy="24" r="16"/><path d="M24 2v10M24 36v10M2 24h10M36 24h10m-9-13-7 7m-19-7 7 7m-7 19 7-7m19 7-7-7"/></>}
    {name === "about" && <><path d="M10 4h20l9 9v31H10V4Z"/><path d="M29 4v11h10M17 23h15M17 29h15M17 35h9"/></>}
    {name === "arrow" && <path d="M8 24h30M27 13l11 11-11 11"/>}
    {name === "sun" && <><circle cx="24" cy="24" r="7"/><path d="M24 4v7M24 37v7M4 24h7M37 24h7M10 10l5 5m18 18 5 5M10 38l5-5m18-18 5-5"/></>}
    {name === "grid" && <><path d="M7 7h13v13H7zM28 7h13v13H28zM7 28h13v13H7zM28 28h13v13H28z"/></>}
  </svg>;
}

export function BrandMark({ size = 23 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 0h6v5l3-3 4 4-3 3h5v6h-5l3 3-4 4-3-3v5H9v-5l-3 3-4-4 3-3H0V9h5L2 6l4-4 3 3V0Z"/><rect x="9" y="9" width="6" height="6" fill="var(--paper)"/></svg>;
}
