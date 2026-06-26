import Link from "next/link";
interface BioProps {
  myName: string;
  role: string;
  socialLinks: {
    github: string;
    linkedin: string;
    strava: string;
    instagram: string;
  };
  bio: {
    quote: string;
    paragraphs: string[];
  };
}

export default function Bio({ myName, role, socialLinks, bio }: BioProps) {
  return (
    <>
      <section className="mb-10 resume-section preserve-3d" aria-label="Resume Header">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 preserve-3d pb-6 border-b border-border-custom/20">
          <div className="flex-1 min-w-0 text-center md:text-left preserve-3d">
            <h1 className="site-name font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight layer-depth-title">
              {myName}
            </h1>
            <p className="site-role text-sm sm:text-base text-accent mt-1 font-semibold tracking-wider uppercase layer-depth-content">
              {role}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 mt-3 text-xs text-muted-foreground font-mono layer-depth-content">
              <a href="mailto:anandhuas010203@gmail.com" className="resume-contact-link">
                anandhuas010203@gmail.com
              </a>
              <span className="opacity-30">•</span>
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="resume-contact-link">
                GitHub
              </Link>
              <span className="opacity-30">•</span>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="resume-contact-link">
                LinkedIn
              </Link>
              <span className="opacity-30">•</span>
              <span className="text-muted-foreground opacity-90">Bangalore, India</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bio resume-section mb-10 layer-depth-content" aria-label="Professional Summary">
        <h2 className="resume-section-title layer-depth-title">Professional Summary</h2>
        <p className="text-base leading-relaxed text-foreground/80 font-medium mb-4">
          {bio.quote}
        </p>
        <div className="space-y-4 text-sm leading-relaxed text-foreground/75 font-normal">
          {bio.paragraphs.map((paragraph, index) => {
            const techStack = "TypeScript, React, Next.js, and the MERN stack";
            if (paragraph.includes(techStack)) {
              const parts = paragraph.split(techStack);
              return (
                <p key={index}>
                  {parts[0]}
                  <strong>{techStack}</strong>
                  {parts[1]}
                </p>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </section>
    </>
  );
}

