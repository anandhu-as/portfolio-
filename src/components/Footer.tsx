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
    <footer className="reveal text-sm sm:text-base text-muted-foreground/80 leading-relaxed font-light" aria-label="Connect Info">
      <p>
        {footer.text}{" "}
        <Link
          href={`mailto:${footer.email}`}
          className="custom-link"
        >
          {footer.email}
        </Link>
        .
      </p>
      <p className="mt-2">
        Or you can{" "}
        <Link
          href={socialLinks.strava}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          come run with me
        </Link>{" "}
        on Strava and{" "}
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          connect on LinkedIn
        </Link>
        .
      </p>
    </footer>
  );
}
