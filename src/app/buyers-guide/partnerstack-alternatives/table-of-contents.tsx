"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import styles from "./page.module.css";

type Vendor = { slug: string; name: string };
export function TableOfContents({ vendors }: { vendors: Vendor[] }) {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const aside = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const links = [
    { slug: "key-takeaways", name: "Key takeaways", sub: false },
    { slug: "picks", name: "The 8 alternatives", sub: false },
    ...vendors.map((vendor) => ({ ...vendor, sub: true })),
    { slug: "comparison", name: "Side-by-side comparison", sub: false },
    { slug: "how-to-choose", name: "What to look for", sub: false },
    { slug: "verdict", name: "Which one fits best?", sub: false },
    { slug: "faq", name: "FAQs", sub: false },
  ];
  useEffect(() => {
    const article = document.querySelector<HTMLElement>("article");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("article section[id]:not(#guide-cta)"));
    const header = document.querySelector<HTMLElement>("header");
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerHeight = header?.getBoundingClientRect().height ?? 72;
      const offset = headerHeight + (window.innerWidth < 1024 ? 112 : 44);
      const root = document.getElementById("guide-content");
      root?.style.setProperty("--guide-header-height", `${headerHeight}px`);
      let current = "";
      for (const section of sections) if (section.getBoundingClientRect().top <= offset) current = section.id;
      setActive(current);
      if (article) {
        const rect = article.getBoundingClientRect();
        const start = rect.top + window.scrollY - offset;
        const end = rect.bottom + window.scrollY - window.innerHeight;
        setProgress(Math.round(100 * Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, end - start)))));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    if (article) observer.observe(article);
    if (header) observer.observe(header);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    const container = panel.current;
    const item = container?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!container || !item) return;
    const itemBox = item.getBoundingClientRect();
    const box = container.getBoundingClientRect();
    if (itemBox.top < box.top + 70) container.scrollTop -= box.top + 70 - itemBox.top;
    else if (itemBox.bottom > box.bottom - 20) container.scrollTop += itemBox.bottom - box.bottom + 20;
  }, [active]);
  const navigate = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = document.getElementById(slug);
    if (!target) return;
    event.preventDefault();
    const details = event.currentTarget.closest("details");
    if (details) details.open = false;
    history.pushState(null, "", `#${slug}`);
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
    const offset = headerHeight + (window.innerWidth < 1024 ? 90 : 30);
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  };
  const nav = <nav className={styles.tocLinks} aria-label="Guide sections">
    {links.map((link) => <a key={link.slug} href={`#${link.slug}`} className={link.sub ? styles.tocSub : undefined}
      aria-current={active === link.slug ? "location" : undefined} onClick={(event) => navigate(event, link.slug)}>{link.name}</a>)}
  </nav>;
  return <>
    <div className={styles.readingProgress} role="progressbar" aria-label="Article reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
    <aside ref={aside} className={styles.toc} aria-label="Table Of Contents">
      <div ref={panel} className={styles.tocInner}><p>Table Of Contents</p>{nav}</div>
      <details className={styles.mobileToc}><summary><span>Table Of Contents<small>{links.find((link) => link.slug === active)?.name ?? "Key takeaways"}</small></span><b aria-hidden="true">+</b></summary>{nav}</details>
    </aside>
  </>;
}
