"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
import Footer from "../components/Footer";
import BlurText from "../components/BlurText";
import TiltedCard from "../components/TiltedCard";
import CustomCursor from "../components/CustomCursor";
import SocialIconLinks from "../components/SocialIconLinks";
import Education from "../components/Education";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".reveal-section, .reveal-item, .reveal-line, .reveal-stagger, .facts-list-item, .header-logo, .theme-toggle-btn, .site-photo, .site-name, .site-role, .site-socials-link, .bio p, .reveal-education, .education-item, .education-dot, .education-degree, .education-period, .education-school", {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        scaleX: 1,
        rotation: 0,
        transform: "none",
        borderLeftWidth: "1px",
      });
      gsap.set(".reveal-line", { opacity: 0.3 });
      gsap.set("[data-card-3d], [data-resume-sheet-3d], [data-resume-sheet-wrapper], .resume-section, main", {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        z: 0,
        y: 0,
        transform: "none",
        opacity: 1,
      });
    });

    let handlePhotoMouseMove: ((e: MouseEvent) => void) | null = null;
    let handlePhotoMouseLeave: (() => void) | null = null;
    let photoWrapperEl: HTMLElement | null = null;
    let handleOrbsMouseMove: ((e: MouseEvent) => void) | null = null;
    let handleLogoMouseEnter: (() => void) | null = null;
    let logoEl: HTMLElement | null = null;
    let factsCleanups: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];
    let magneticCleanups: Array<{ el: HTMLElement; move: EventListener; leave: EventListener }> = [];
    let cardCleanups: Array<{ el: HTMLElement; move: EventListener; leave: EventListener }> = [];

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const magnetics = container.current?.querySelectorAll(".site-socials-link, .theme-toggle-btn, .header-logo");
      magnetics?.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const handleMove = (e: MouseEvent) => {
          const rect = htmlEl.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(htmlEl, {
            x: x * 0.35,
            y: y * 0.35,
            duration: 0.5,
            ease: "power3.out",
          });
        };
        const handleLeave = () => {
          gsap.to(htmlEl, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power4.out",
          });
        };
        htmlEl.addEventListener("mousemove", handleMove as EventListener);
        htmlEl.addEventListener("mouseleave", handleLeave as EventListener);
        magneticCleanups.push({ el: htmlEl, move: handleMove as EventListener, leave: handleLeave as EventListener });
      });

      const glow = document.querySelector(".ambient-glow");
      if (glow) {
        gsap.fromTo(
          glow,
          {
            opacity: 0.05,
            scale: 0.95,
            xPercent: -50,
            y: 0,
          },
          {
            opacity: 0.12,
            scale: 1.05,
            xPercent: -48,
            y: 12,
            duration: 10,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      const orb1 = document.querySelector(".orb-1");
      const orb2 = document.querySelector(".orb-2");
      const orb1Wrapper = document.querySelector(".orb-1-wrapper");
      const orb2Wrapper = document.querySelector(".orb-2-wrapper");

      if (orb1Wrapper) {
        gsap.to(orb1Wrapper, {
          yPercent: 35,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });
      }
      if (orb2Wrapper) {
        gsap.to(orb2Wrapper, {
          yPercent: -35,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });
      }

      if (orb1) {
        gsap.to(orb1, {
          xPercent: 15,
          yPercent: 8,
          duration: 16,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (orb2) {
        gsap.to(orb2, {
          xPercent: -12,
          yPercent: -15,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      handleOrbsMouseMove = (e: MouseEvent) => {
        const xOffset = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const yOffset = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        if (orb1) {
          gsap.to(orb1, {
            x: xOffset * 35,
            y: yOffset * 35,
            duration: 1.2,
            ease: "power2.out",
          });
        }

        if (orb2) {
          gsap.to(orb2, {
            x: xOffset * -40,
            y: yOffset * -40,
            duration: 1.5,
            ease: "power2.out",
          });
        }

      };

      window.addEventListener("mousemove", handleOrbsMouseMove, { passive: true });


      const photoWrapper = container.current?.querySelector(".site-photo-wrapper") as HTMLElement;
      const photo = photoWrapper?.querySelector(".site-photo") as HTMLElement;
      if (photoWrapper && photo) {
        gsap.to(photoWrapper, {
          y: -6,
          duration: 2.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        photoWrapperEl = photoWrapper;
        handlePhotoMouseMove = (e: MouseEvent) => {
          const rect = photoWrapper.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const tiltX = (y / (rect.height / 2)) * -10;
          const tiltY = (x / (rect.width / 2)) * 10;

          gsap.to(photo, {
            rotateX: tiltX,
            rotateY: tiltY,
            transformPerspective: 600,
            scale: 1.03,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        handlePhotoMouseLeave = () => {
          gsap.to(photo, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.7,
            ease: "power4.out",
          });
        };

        photoWrapper.addEventListener("mousemove", handlePhotoMouseMove);
        photoWrapper.addEventListener("mouseleave", handlePhotoMouseLeave);
      }

      const logo = container.current?.querySelector(".header-logo") as HTMLElement;
      if (logo) {
        logoEl = logo;
        const letters = logo.querySelectorAll(".logo-letter");
        handleLogoMouseEnter = () => {
          const tl = gsap.timeline();
          tl.to(letters, {
            y: -5,
            scaleY: 1.15,
            duration: 0.15,
            stagger: 0.04,
            ease: "power2.out",
          }).to(letters, {
            y: 0,
            scaleY: 1,
            duration: 0.35,
            stagger: 0.04,
            ease: "elastic.out(1.2, 0.4)",
          }, 0.1);
        };
        logo.addEventListener("mouseenter", handleLogoMouseEnter);
      }

      const entryTl = gsap.timeline({
        defaults: { ease: "power4.out" }
      });

      entryTl
        .fromTo(".header-logo", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2 })
        .fromTo(".theme-toggle-btn", { opacity: 0, scale: 0.7, rotation: -90 }, { opacity: 1, scale: 1, rotation: 0, duration: 1.2 }, "-=0.9")
        .fromTo(".site-photo", { opacity: 0, scale: 0.8, rotation: -4 }, { opacity: 1, scale: 1, rotation: 0, duration: 1.4, ease: "elastic.out(1, 0.75)" }, "-=0.8")
        .fromTo(".site-name", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 }, "-=1.0")
        .fromTo(".site-role", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.9")
        .fromTo(".site-socials-link", { opacity: 0, y: 15, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 1.0, stagger: 0.12, ease: "power3.out" }, "-=0.8")
        .fromTo(".bio p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 }, "-=0.7");

      const reveals = gsap.utils.toArray<HTMLElement>(".reveal-section");
      reveals.forEach((section) => {
        const items = section.querySelectorAll(".reveal-item");
        const title = section.querySelector(".resume-section-title");
        const mobile = window.matchMedia("(max-width: 768px)").matches;

        gsap.fromTo(
          section,
          { opacity: 0.3, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: mobile ? "top 95%" : "top 90%",
              end: mobile ? "top 70%" : "top 65%",
              scrub: 1.5,
            },
          }
        );

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: mobile ? 16 : 24 },
            {
              opacity: 1,
              y: 0,
              duration: mobile ? 0.8 : 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: mobile ? "top 93%" : "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, y: mobile ? 18 : 28 },
            {
              opacity: 1,
              y: 0,
              duration: mobile ? 0.8 : 1.0,
              stagger: mobile ? 0.1 : 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: mobile ? "top 92%" : "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            opacity: 0.3,
            duration: 1.5,
            ease: "power4.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: line,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const heroSection = container.current?.querySelector(".hero-section") as HTMLElement;
      if (heroSection) {
        gsap.to(heroSection, {
          yPercent: -15,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    });

    return () => {
      if (handleOrbsMouseMove) {
        window.removeEventListener("mousemove", handleOrbsMouseMove);
      }
      if (logoEl && handleLogoMouseEnter) {
        logoEl.removeEventListener("mouseenter", handleLogoMouseEnter);
      }
      if (photoWrapperEl) {
        if (handlePhotoMouseMove) photoWrapperEl.removeEventListener("mousemove", handlePhotoMouseMove);
        if (handlePhotoMouseLeave) photoWrapperEl.removeEventListener("mouseleave", handlePhotoMouseLeave);
      }
      factsCleanups.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      magneticCleanups.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      cardCleanups.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      mm.revert();
    };
  }, { scope: container });

  const projects = backgroundItems.filter((item) => item.type === "project");

  return (
    <div ref={container} className="relative min-h-screen bg-background text-foreground transition-colors duration-500 perspective-viewport preserve-3d">
      <CustomCursor />
      <div className="orb-1-wrapper absolute top-[10%] left-[5%] pointer-events-none z-0 dark:hidden">
        <div className="orb-1 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-3 dark:opacity-5 blur-[90px]" />
      </div>
      <div className="orb-2-wrapper absolute top-[40%] right-[5%] pointer-events-none z-0 dark:hidden">
        <div className="orb-2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#8B5CF6_0%,transparent_70%)] opacity-2 dark:opacity-4 blur-[100px]" />
      </div>
      <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_60%)] opacity-5 dark:opacity-10 pointer-events-none z-0 dark:hidden" />

      <Header myName={myName} />

      <section className="hero-section px-4 sm:px-6">
        <div className="mb-4 sm:mb-6 flex justify-center items-center">
          <img
            src="/3.jpg"
            alt={myName}
            className="rounded-[15px] object-cover"
            style={{ width: '150px', height: '200px' }}
          />
        </div>
        <h1 className="hero-title">
          {myName}
        </h1>
        <div className="hero-subtitle-container max-w-2xl mx-auto px-4 mt-4">
          <BlurText
            text="Hello! I'm your friendly neighborhood developer, a 20-year-old software developer dedicated to building clean, accessible, and high-performance user interfaces that balance technical precision with polished design."
            delay={35}
            animateBy="words"
            direction="bottom"
            className="text-sm md:text-base font-normal leading-relaxed text-foreground opacity-90"
          />
        </div>
        <SocialIconLinks links={socialLinks} variant="plain" className="justify-center mt-6" />
      </section>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24 relative z-10 space-y-12 sm:space-y-16 md:space-y-24">
        <section id="about" className="reveal-section space-y-4 sm:space-y-6 pt-6 sm:pt-8 md:pt-12" aria-labelledby="about-heading">
          <h2 id="about-heading" className="resume-section-title">
            About Me
          </h2>
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-foreground/75 font-normal">
            {bio.paragraphs.map((paragraph, index) => (
              <p key={index} className="reveal-item">{paragraph}</p>
            ))}
          </div>

          <div className="reveal-item border border-border-custom/30 rounded-2xl p-3 sm:p-4 md:p-6 bg-zinc-900/5 dark:bg-zinc-950/20 hover:border-accent/30 transition-all duration-500 space-y-4 sm:space-y-6">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent border-b border-border-custom/20 pb-2">
              Technical Skills
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <span className="font-semibold text-foreground uppercase text-xs tracking-wider block mb-2">Languages & Frameworks</span>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "Redux", "Zustand", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag inline-flex items-center px-2.5 py-1 text-xs font-mono bg-accent/5 dark:bg-zinc-900/40 text-foreground border border-accent/15 hover:border-accent/40 rounded-md transition-all duration-300 hover:scale-105 cursor-default hover:text-accent hover:shadow-accent-glow select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-semibold text-foreground uppercase text-xs tracking-wider block mb-2">Databases & Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Upstash", "SQL Querying", "Git", "Linux", "Kali Linux"].map((tool) => (
                    <span
                      key={tool}
                      className="skill-tag inline-flex items-center px-2.5 py-1 text-xs font-mono bg-accent/5 dark:bg-zinc-900/40 text-foreground border border-accent/15 hover:border-accent/40 rounded-md transition-all duration-300 hover:scale-105 cursor-default hover:text-accent hover:shadow-accent-glow select-none"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-semibold text-foreground uppercase text-xs tracking-wider block mb-2">Passions & Interests</span>
                <div className="flex flex-wrap gap-2">
                  {["Software Development", "Calisthenics", "Long-Distance Running", "Reading"].map((interest) => (
                    <span
                      key={interest}
                      className="skill-tag inline-flex items-center px-2.5 py-1 text-xs font-mono bg-accent/5 dark:bg-zinc-900/40 text-foreground border border-accent/15 hover:border-accent/40 rounded-md transition-all duration-300 hover:scale-105 cursor-default hover:text-accent hover:shadow-accent-glow select-none"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="reveal-section space-y-4 sm:space-y-6 pt-6 sm:pt-8 md:pt-12">
          <Education educationItems={educationItems} />
        </section>

        <section id="work" className="reveal-section space-y-4 sm:space-y-6 pt-6 sm:pt-8 md:pt-12" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="resume-section-title">
            Selected Projects
          </h2>
          <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4 md:mt-6">
            {projects.map((item, index) => (
              <div
                key={index}
                className="reveal-item p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl shadow-md border border-border-custom/30 bg-zinc-900/5 dark:bg-zinc-950/20 hover:border-accent/40 hover:bg-accent/[0.01] transition-all duration-300 hover:shadow-accent-glow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                  <h3 className="font-serif text-base font-semibold text-foreground flex items-center gap-2">
                    {item.url ? (
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link text-base font-semibold"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                    {item.liveUrl && (
                      <span className="text-xs font-normal opacity-60">
                        (
                        <Link
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="custom-link text-xs font-normal"
                        >
                          Live Demo
                        </Link>
                        )
                      </span>
                    )}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Project
                  </span>
                </div>
                <ul className="resume-bullet-list mt-2">
                  <li className="resume-bullet-item text-sm leading-relaxed">
                    {item.descriptionBefore}
                    <span className="font-semibold text-foreground">{item.name}</span>
                    {item.descriptionAfter}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="reveal-section pt-6 sm:pt-8 md:pt-10">
          <Footer footer={footer} socialLinks={socialLinks} />
        </div>
      </main>
    </div>
  );
}
