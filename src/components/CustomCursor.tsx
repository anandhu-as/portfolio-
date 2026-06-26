"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dot = dotRef.current;
    const ring = ringRef.current;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let rafId: number;

    const enable = () => finePointer.matches && !reducedMotion.matches;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animateRing = () => {
      if (!ring) return;
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const attach = () => {
      if (!enable() || !dot || !ring) {
        document.documentElement.classList.remove("custom-cursor-active");
        return;
      }

      document.documentElement.classList.add("custom-cursor-active");

      const move = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      };

      const onOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        setHovering(!!target.closest("a, button, [role='button'], input, textarea, .social-link"));
      };

      const onOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("a, button, [role='button'], input, textarea, .social-link")) {
          setHovering(false);
        }
      };

      rafId = requestAnimationFrame(animateRing);
      window.addEventListener("mousemove", move, { passive: true });
      window.addEventListener("mouseover", onOver);
      window.addEventListener("mouseout", onOut);

      return () => {
        document.documentElement.classList.remove("custom-cursor-active");
        cancelAnimationFrame(rafId);
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseover", onOver);
        window.removeEventListener("mouseout", onOut);
      };
    };

    let cleanup = attach();

    const onMediaChange = () => {
      cleanup?.();
      cleanup = attach();
    };

    finePointer.addEventListener("change", onMediaChange);
    reducedMotion.addEventListener("change", onMediaChange);

    return () => {
      cleanup?.();
      finePointer.removeEventListener("change", onMediaChange);
      reducedMotion.removeEventListener("change", onMediaChange);
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        ref={dotRef}
        className={`cursor-dot${hovering ? " cursor-dot--hover" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? " cursor-ring--hover" : ""}`}
        aria-hidden="true"
      />
    </>,
    document.body
  );
}
