import Link from "next/link";

interface BackgroundItem {
  type: string;
  name?: string;
  url?: string;
  liveUrl?: string;
  descriptionBefore?: string;
  descriptionAfter?: string;
  text?: string;
}

interface BackgroundProps {
  backgroundItems: BackgroundItem[];
}

export default function Background({ backgroundItems }: BackgroundProps) {
  const projects = backgroundItems.filter((item) => item.type === "project");

  return (
    <div className="space-y-10 preserve-3d">
      <section className="resume-section layer-depth-content" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="resume-section-title layer-depth-title"
        >
          Technical Skills
        </h2>
        <div className="space-y-4 text-sm text-foreground/85 font-normal">
          <div className="preserve-3d layer-depth-content">
            <span className="font-semibold text-foreground uppercase text-xs tracking-wider block mb-2">Languages & Frameworks</span>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "Redux", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono bg-accent/5 dark:bg-zinc-900/40 text-foreground border border-accent/15 hover:border-accent/40 rounded-md transition-all duration-300 hover:scale-105 cursor-default hover:text-accent hover:shadow-accent-glow select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="preserve-3d layer-depth-content">
            <span className="font-semibold text-foreground uppercase text-xs tracking-wider block mb-2">Databases & Tools</span>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Supabase", "Firebase", "Upstash", "SQL Querying", "Git", "Linux", "Kali Linux"].map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono bg-accent/5 dark:bg-zinc-900/40 text-foreground border border-accent/15 hover:border-accent/40 rounded-md transition-all duration-300 hover:scale-105 cursor-default hover:text-accent hover:shadow-accent-glow select-none"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="preserve-3d layer-depth-content">
            <span className="font-semibold text-foreground uppercase text-xs tracking-wider block mb-2">Passions & Interests</span>
            <div className="flex flex-wrap gap-2">
              {["Software Development", "Calisthenics", "Long-Distance Running", "Reading"].map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono bg-accent/5 dark:bg-zinc-900/40 text-foreground border border-accent/15 hover:border-accent/40 rounded-md transition-all duration-300 hover:scale-105 cursor-default hover:text-accent hover:shadow-accent-glow select-none"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section layer-depth-content" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="resume-section-title layer-depth-title"
        >
          Selected Projects
        </h2>
        <div className="space-y-6">
          {projects.map((item, index) => (
            <div key={index} className="preserve-3d layer-depth-content">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <h3 className="font-serif text-base font-semibold text-foreground flex items-center gap-2">
                  {item.url ? (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
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
                        className="custom-link text-xs"
                      >
                        Live Demo
                      </Link>
                      )
                    </span>
                  )}
                </h3>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Independent Project
                </span>
              </div>
              <ul className="resume-bullet-list">
                <li className="resume-bullet-item text-sm">
                  {item.descriptionBefore}
                  <span className="font-semibold text-foreground">{item.name}</span>
                  {item.descriptionAfter}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

