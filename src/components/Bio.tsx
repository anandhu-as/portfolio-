import Image from "next/image";
import Link from "next/link";
import blast from "../../public/2.jpg";
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
      <section className="mb-14" aria-label="Intro Header">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
          <div className="relative flex-shrink-0 group cursor-pointer transition-transform duration-500 hover:scale-105">
            <Image
              src={blast}
              alt={myName}
              className="site-photo entrance rounded-xl object-cover object-top border border-accent/30 shadow-md group-hover:border-accent/60 transition-all duration-500 w-[125px] h-[175px]"
              width={175}
              height={175}
              priority
            />
            <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="site-name entrance entrance-delay-1 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {myName}
            </h1>
            <p className="site-role entrance entrance-delay-2 text-sm sm:text-base text-muted-foreground mt-2 font-medium tracking-wide uppercase">
              {role}
            </p>
            <div className="entrance entrance-delay-3 flex items-center justify-center sm:justify-start gap-4 mt-4">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-[#0A66C2] dark:hover:text-[#3B82F6] transition-colors duration-300 transform hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href={socialLinks.strava}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Strava"
                className="text-muted-foreground hover:text-[#FC5200] transition-colors duration-300 transform hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l-3.32 6.55H6.28l4.743-9.37 4.742 9.37h-3.047" />
                </svg>
              </Link>
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-[#E1306C] transition-colors duration-300 transform hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bio reveal space-y-6 text-base sm:text-[1.0625rem] leading-relaxed text-foreground/90 font-light" aria-label="Biography">
        <p className="text-lg font-medium text-foreground  border-l-2 border-accent pl-4 py-0.5">
          {bio.quote}
        </p>
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
      </section>
    </>
  );
}
