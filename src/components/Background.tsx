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
  return (
    <section className="reveal-stagger" aria-labelledby="background-heading">
      <h2
        id="background-heading"
        className="section-title font-serif text-xs font-semibold uppercase tracking-widest text-accent mb-8"
      >
        Background
      </h2>
      <ol className="facts-list space-y-5">
        {backgroundItems.map((item, index) => {
          if (item.type === "project") {
            return (
              <li key={index} className="facts-list-item text-sm sm:text-base leading-relaxed text-foreground/80 hover:text-foreground transition-colors duration-200">
                {item.descriptionBefore}
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
                  <span className="font-semibold text-foreground">{item.name}</span>
                )}
                {item.liveUrl && (
                  <>
                    {" "}
                    (
                    <Link
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link text-xs opacity-85"
                    >
                      live
                    </Link>
                    )
                  </>
                )}
                {item.descriptionAfter}
              </li>
            );
          }
          return (
            <li key={index} className="facts-list-item text-sm sm:text-base leading-relaxed text-foreground/80 hover:text-foreground transition-colors duration-200">
              {item.text}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
