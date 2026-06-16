interface EducationItem {
  degree: string;
  period: string;
  school: string;
}

interface EducationProps {
  educationItems: EducationItem[];
}

export default function Education({ educationItems }: EducationProps) {
  return (
    <section className="reveal" aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="section-title font-serif text-xs font-semibold uppercase tracking-widest text-accent mb-8"
      >
        Education
      </h2>
      <div className="space-y-6">
        {educationItems.map((item, index) => {
          const dotOpacityClass = index === 0 ? "bg-accent" : index === 1 ? "bg-accent/60" : "bg-accent/40";
          return (
            <div key={index} className="relative pl-6 border-l border-border-custom/60 hover:border-accent/50 transition-colors duration-300">
              <div className={`absolute w-2 h-2 rounded-full ${dotOpacityClass} -left-[4.5px] top-2`} />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="font-serif text-base font-medium text-foreground">
                  {item.degree}
                </h3>
                <span className="text-xs font-mono text-muted-foreground bg-border-custom/30 px-2 py-0.5 rounded w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {item.school}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
