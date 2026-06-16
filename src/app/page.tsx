"use client";

import { useEffect } from "react";
import {
  myName,
  role,
  socialLinks,
  bio,
  backgroundItems,
  educationItems,
  footer,
} from "./constants";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Background from "../components/Background";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("motion-reduced");
      document.querySelectorAll(".reveal, .reveal-line, .reveal-stagger").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    document.querySelectorAll(".reveal, .reveal-line, .reveal-stagger").forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_60%)] opacity-5 dark:opacity-10 pointer-events-none z-0" />
      <Header myName={myName} />

      <main className="max-w-2xl mx-auto px-6 pt-12 pb-24 relative z-10">
        <Bio myName={myName} role={role} socialLinks={socialLinks} bio={bio} />

        <hr className="reveal-line border-t border-border-custom/30 my-12" aria-hidden="true" />

        <Background backgroundItems={backgroundItems} />

        <hr className="reveal-line border-t border-border-custom/30 my-12" aria-hidden="true" />

        <Education educationItems={educationItems} />

        <hr className="reveal-line border-t border-border-custom/30 my-12" aria-hidden="true" />

        <Footer footer={footer} socialLinks={socialLinks} />
      </main>
    </div>
  );
}
