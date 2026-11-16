"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useDragControls, useMotionValue, useReducedMotion } from "motion/react";
import { applications, type AppId, type JournalId } from "@/content/journal";
import { BrandMark, Icon } from "./Icon";
import Monitor from "./Monitor";
import Journal from "./Journal";
import Summary from "./Summary";
import ProjectDescription from "./ProjectDescription";

type WindowState = { id: AppId; minimized: boolean; z: number };
type Size = { width: number; height: number };
const titles: Record<AppId, string> = { connections: "Connections", purpose: "Purpose", recovery: "Recovery", environment: "Environment", monitor: "System Monitor", summary: "System Summary", about: "Project Description" };

function initialPosition(id: AppId, size: Size) {
  const width = id === "environment" ? 360 : id === "monitor" ? 600 : id === "about" ? 650 : 610;
  const height = id === "environment" ? 395 : id === "monitor" ? 620 : 570;
  const positions: Record<AppId, [number, number]> = {
    monitor: [Math.max(350, size.width * .315), Math.max(90, size.height * .16)],
    environment: [size.width - 420, size.height - 440],
    connections: [size.width * .32, 80],
    purpose: [size.width * .35, 110],
    recovery: [size.width * .30, 70],
    summary: [(size.width - width) / 2, 70],
    about: [(size.width - width) / 2, 45],
  };
  return { x: Math.max(12, Math.min(positions[id][0], size.width - width - 20)), y: Math.max(15, Math.min(positions[id][1], size.height - height - 22)), width, height };
}

function AppWindow({ window: state, size, desktopRef, active, resetKey, onFocus, onClose, onMinimize, children }: {
  window: WindowState; size: Size; desktopRef: React.RefObject<HTMLDivElement | null>; active: boolean; resetKey: number;
  onFocus: () => void; onClose: () => void; onMinimize: () => void; children: React.ReactNode;
}) {
  const drag = useDragControls();
  const reduceMotion = useReducedMotion();
  const [maximized, setMaximized] = useState(false);
  const position = initialPosition(state.id, size);
  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const next = initialPosition(state.id, size);
    x.set(maximized ? 16 : next.x);
    y.set(maximized ? 16 : next.y);
  }, [size, state.id, maximized, resetKey, x, y]);

  if (state.minimized) return null;
  return <motion.section
    className={`app-window app-window-${state.id} ${active ? "is-active" : ""} ${maximized ? "is-maximized" : ""}`}
    style={{ x, y, width: maximized ? size.width - 32 : position.width, height: maximized ? size.height - 32 : position.height, zIndex: state.z }}
    initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .16 }}
    drag={!maximized} dragListener={false} dragControls={drag} dragConstraints={desktopRef} dragElastic={0} dragMomentum={false}
    onPointerDownCapture={onFocus} onFocusCapture={onFocus} aria-label={`${titles[state.id]} application`}
  >
    <div className="window-titlebar" ref={headerRef} tabIndex={0} aria-label={`${titles[state.id]} window. Use arrow keys to move; Shift and arrows for larger steps.`}
      onPointerDown={event => { if (size.width > 900 && !(event.target as HTMLElement).closest("button")) { onFocus(); drag.start(event); } }}
      onDoubleClick={event => { if (!(event.target as HTMLElement).closest("button")) setMaximized(!maximized); }}
      onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key.startsWith("Arrow") && !maximized) {
          event.preventDefault(); const step = event.shiftKey ? 40 : 10;
          if (event.key === "ArrowLeft") x.set(Math.max(0, x.get() - step));
          if (event.key === "ArrowRight") x.set(Math.min(size.width - position.width, x.get() + step));
          if (event.key === "ArrowUp") y.set(Math.max(0, y.get() - step));
          if (event.key === "ArrowDown") y.set(Math.min(size.height - 45, y.get() + step));
        }
      }}>
      <div className="window-controls"><button onClick={onClose} aria-label={`Close ${titles[state.id]}`} title="Close"><svg viewBox="0 0 12 12"><path d="m3 3 6 6m0-6-6 6"/></svg></button><button onClick={onMinimize} aria-label={`Minimize ${titles[state.id]}`} title="Minimize"><svg viewBox="0 0 12 12"><path d="M2 8h8"/></svg></button></div>
      <span className="window-title"><Icon name={state.id} size={15}/>{titles[state.id]}</span>
      <button className="maximize-button" onClick={() => setMaximized(!maximized)} aria-label={`${maximized ? "Restore" : "Maximize"} ${titles[state.id]}`} title={maximized ? "Restore" : "Maximize"}><svg viewBox="0 0 12 12"><path d={maximized ? "M4 2h6v6M2 4h6v6H2z" : "M2 2h8v8H2z"}/></svg></button>
    </div>
    <div className="window-body">{children}</div>
  </motion.section>;
}

export default function Desktop() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef(12);
  const [size, setSize] = useState<Size>({width: 1440, height: 800});
  const [windows, setWindows] = useState<WindowState[]>([{id: "environment", minimized: false, z: 10}, {id: "monitor", minimized: false, z: 11}]);
  const [active, setActive] = useState<AppId>("monitor");
  const [visited, setVisited] = useState<AppId[]>(["monitor", "environment"]);
  const [workload, setWorkload] = useState(45);
  const [menu, setMenu] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const rect = entries[0]?.contentRect;
      if (rect) setSize({width: rect.width, height: rect.height});
    });
    if (desktopRef.current) observer.observe(desktopRef.current);
    const updateClock = () => setTime(new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false}));
    updateClock(); const interval = setInterval(updateClock, 30000);
    return () => { observer.disconnect(); clearInterval(interval); };
  }, []);

  const focusWindow = useCallback((id: AppId) => {
    setActive(id);
    setWindows(previous => {
      const top = previous.filter(w => !w.minimized).reduce((a,w) => Math.max(a,w.z), 0);
      if (previous.find(w => w.id === id)?.z === top) return previous;
      return previous.map(w => w.id === id ? {...w, z: ++orderRef.current} : w);
    });
  }, []);

  const openApp = useCallback((id: AppId) => {
    setActive(id); setMenu(false);
    setVisited(previous => previous.includes(id) ? previous : [...previous, id]);
    setWindows(previous => previous.some(w => w.id === id)
      ? previous.map(w => w.id === id ? {...w, minimized: false, z: ++orderRef.current} : w)
      : [...previous, {id, minimized: false, z: ++orderRef.current}]);
  }, []);

  const removeWindow = useCallback((id: AppId, minimize = false) => {
    setWindows(previous => {
      const next = minimize ? previous.map(w => w.id === id ? {...w, minimized: true} : w) : previous.filter(w => w.id !== id);
      const top = next.filter(w => !w.minimized).sort((a,b) => b.z-a.z)[0];
      if (top) setActive(top.id);
      return next;
    });
    requestAnimationFrame(() => document.querySelector<HTMLButtonElement>(`[data-launch="${id}"]`)?.focus({preventScroll: true}));
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { if (menu) setMenu(false); else removeWindow(active); }
    };
    const handleClick = (event: PointerEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenu(false); };
    document.addEventListener("keydown", handleKey); document.addEventListener("pointerdown", handleClick);
    return () => { document.removeEventListener("keydown", handleKey); document.removeEventListener("pointerdown", handleClick); };
  }, [active, menu, removeWindow]);

  function arrange() {
    setResetKey(k => k + 1); setMenu(false);
    setWindows(previous => previous.map(w => ({...w, minimized: false})));
  }

  const exploredCount = visited.filter(id => applications.some(a => a.id === id)).length;
  return <main className="os-shell">
    <a href="#application-launcher" className="skip-link">Skip to applications</a>
    <header className="menu-bar">
      <button className="brand" onClick={() => openApp("summary")} aria-label="Wellbeing OS system summary"><BrandMark/><span>Wellbeing OS</span></button>
      <nav className="menu-nav" aria-label="System navigation"><div className="explore-menu" ref={menuRef}><button aria-expanded={menu} aria-controls="explore-options" onClick={() => setMenu(!menu)}>Explore <span className="tiny-chevron">⌄</span></button>{menu && <div className="menu-dropdown" id="explore-options">{applications.map(app => <button key={app.id} onClick={() => openApp(app.id)}><Icon name={app.id} size={20}/>{app.name}<span>{app.number}</span></button>)}<hr/><button onClick={() => openApp("summary")}><Icon name="summary" size={20}/>System Summary<span>↗</span></button></div>}</div><button onClick={arrange} className="arrange-menu">Arrange</button><button onClick={() => openApp("about")}>About</button></nav>
      <span className="menu-tagline">AN OPERATING SYSTEM FOR BEING HUMAN</span><div className="menu-right"><Icon name="sun" size={17}/><span>TAKE YOUR TIME</span><time aria-label={`Local time ${time}`}>{time}</time></div>
    </header>
    <div className="desktop" ref={desktopRef}>
      <section className="desktop-intro" aria-label="Welcome to Wellbeing OS"><div className="edition-label"><span className="small-square"/> PERSONAL EDITION / VOL. 01</div><h1>Wellbeing<br/><span>OS.</span><span className="title-asterisk">✳</span></h1><p>A little less machine.<br/>A little more human.</p><div className="intro-rule"/><span className="intro-caption">A living exploration of what<br/>it means to be well.</span></section>
      <aside className="desktop-note"><div className="note-header"><span className="small-square"/>a note to self.txt<span>—</span></div><p>A system can be productive<br/>without being healthy.</p><span>YOU ARE MORE THAN YOUR OUTPUT.</span></aside>
      <nav className="application-launcher" id="application-launcher" aria-label="Applications"><div className="launcher-label"><span>YOUR EVERYDAY ESSENTIALS</span><span>↙ OPEN TO EXPLORE</span></div><div className="app-icon-grid">{applications.map(app => <button key={app.id} data-launch={app.id} onClick={() => openApp(app.id)} className={`desktop-app ${windows.some(w => w.id === app.id && !w.minimized) ? "app-open" : ""} ${active === app.id ? "app-active" : ""}`} aria-label={`Open ${app.name}`}><span className="desktop-app-icon"><Icon name={app.id}/></span><span className="desktop-app-name">{app.name}</span><span className="desktop-app-number">{app.number}{visited.includes(app.id) && <span className="visited-mark" aria-label="explored">·</span>}</span></button>)}<button className="desktop-app summary-shortcut" onClick={() => openApp("summary")} data-launch="summary" aria-label="Open System Summary"><span className="desktop-app-icon"><Icon name="summary"/></span><span className="desktop-app-name">System Summary</span><span className="desktop-app-number">READ THE WHOLE STORY ↗</span></button></div></nav>
      <div className="desktop-instructions"><span className="instruction-arrow">↖</span><p>Open a window. Move things around.<br/>There’s no single right arrangement.</p></div>
      {windows.map(state => <AppWindow key={state.id} window={state} size={size} desktopRef={desktopRef} active={active === state.id} resetKey={resetKey} onFocus={() => focusWindow(state.id)} onClose={() => removeWindow(state.id)} onMinimize={() => removeWindow(state.id, true)}>
        {state.id === "monitor" ? <Monitor workload={workload} setWorkload={setWorkload}/> : state.id === "summary" ? <Summary visited={visited} openApp={openApp} reset={() => {setWorkload(45); openApp("monitor");}}/> : state.id === "about" ? <ProjectDescription/> : <Journal id={state.id as JournalId} openApp={openApp}/>}
      </AppWindow>)}
      {!windows.some(w => w.id === active && !w.minimized) && <div className="mobile-empty"><Icon name="grid"/><p>A little space. Choose an application above.</p></div>}
      <span className="desktop-coordinate">HERE, NOT EVERYWHERE.</span>
    </div>
    <footer className="system-footer"><div className="footer-system"><span className="status-dot"/>SYSTEM ONLINE<span className="footer-divider">/</span><span className="footer-explored">{String(exploredCount).padStart(2,"0")} OF 05 EXPLORED</span></div><div className="taskbar" aria-label="Open windows">{windows.map(window => <button key={window.id} className={`${window.minimized ? "minimized" : ""} ${active === window.id && !window.minimized ? "active-task" : ""}`} onClick={() => openApp(window.id)} title={`${window.minimized ? "Restore" : "Switch to"} ${titles[window.id]}`}><Icon name={window.id} size={16}/><span>{titles[window.id]}</span>{window.minimized && <span>−</span>}</button>)}</div><button className="footer-summary" onClick={() => openApp("summary")}>IT ALL CONNECTS <span>↗</span></button></footer>
  </main>;
}
