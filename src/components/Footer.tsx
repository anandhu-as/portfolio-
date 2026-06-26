import Link from "next/link";

interface FooterProps {
  footer: {
    email: string;
    text: string;
  };
  socialLinks: {
    linkedin: string;
    strava: string;
  };
}

export default function Footer({ footer, socialLinks }: FooterProps) {
  return (
    <footer
      className="reveal text-sm sm:text-base text-muted-foreground/80 leading-relaxed font-light preserve-3d"
      aria-label="Connect Info"
    >
      <div className="bg-border-custom/5 dark:bg-zinc-950/40 border border-border-custom/25 rounded-lg px-4 py-3 font-mono text-xs text-foreground/85 flex flex-wrap items-center gap-2 mb-4 preserve-3d layer-depth-content">
        <span className="text-accent font-bold select-none">❯</span>
        <span>contact --email</span>
        <Link
          href={`mailto:${footer.email}`}
          className="text-accent hover:text-accent-hover font-semibold underline decoration-accent/30 decoration-2 transition-colors duration-300"
        >
          {footer.email}
        </Link>
      </div>
      <p className="mt-2">
        Or you can come run with me on{" "}
        <Link href={socialLinks.strava} className="underline">
          Strava{" "}
        </Link>
        and connect on{" "}
        <Link href={socialLinks.strava} className="underline">
          LinkedIn.
        </Link>
      </p>
    </footer>
  );
}
