"use client";

import { applications, type AppId } from "@/content/journal";
import { Icon } from "./Icon";

export default function Summary({ visited, openApp, reset }: { visited: AppId[]; openApp: (id: AppId) => void; reset: () => void }) {
  return <article className="summary-content"><span className="eyebrow">SYSTEM SUMMARY / EVERYTHING IS CONNECTED</span><h2>Not maximum.<br/><span>Meaningful.</span></h2><div className="summary-network"><div className="network-line"/>{applications.slice(0,4).map(app => <button key={app.id} onClick={() => openApp(app.id)}><Icon name={app.id} size={34}/><span>{app.name}</span><span className="network-state">{visited.includes(app.id) ? "EXPLORED" : "OPEN TO EXPLORE"}</span></button>)}</div><blockquote>“Wellbeing isn't about running at maximum performance. It's about taking care of the things that make life worth experiencing.”</blockquote><p className="summary-note">Work can give life direction. People give it depth. Rest makes space. Our surroundings shape what is possible. No single number can tell the whole story.</p><div className="summary-actions"><button className="solid-button" onClick={reset}>Return to a balanced system <Icon name="arrow" size={20}/></button><button className="text-button" onClick={() => openApp("about")}>About this project ↗</button></div></article>;
}
