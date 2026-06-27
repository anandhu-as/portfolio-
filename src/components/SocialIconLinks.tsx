import Link from "next/link";

interface SocialIconLinksProps {
  links: {
    github: string;
    linkedin: string;
    instagram: string;
    strava: string;
  };
  className?: string;
  variant?: "plain" | "boxed";
}

export default function SocialIconLinks({ links, className = "", variant = "plain" }: SocialIconLinksProps) {
  const items = [
    {
      href: links.github,
      label: "github",
      colorClass: "hover:text-[#24292e] dark:hover:text-[#f0f6fc]",
    },
    {
      href: links.linkedin,
      label: "linkedin",
      colorClass: "hover:text-[#0A66C2]",
    },
    {
      href: links.instagram,
      label: "instagram",
      colorClass: "hover:text-[#E4405F]",
    },
    {
      href: links.strava,
      label: "strava",
      colorClass: "hover:text-[#FC4C02]",
    },
  ];

  const itemClass =
    variant === "boxed"
      ? "px-3 py-1.5 text-xs font-semibold rounded-xl border border-border-custom/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
      : "text-sm font-medium opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 custom-link";

  return (
    <div className={`flex flex-wrap items-center gap-5 sm:gap-6 ${className}`.trim()}>
      {items.map(({ href, label, colorClass }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`social-link site-socials-link text-muted-foreground ${colorClass} inline-flex items-center justify-center ${itemClass}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
