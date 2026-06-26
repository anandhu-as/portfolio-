interface EducationItem {
  degree: string;
  period: string;
  school: string;
  completed?: boolean;
}

interface EducationProps {
  educationItems: EducationItem[];
}
export default function Education({ educationItems }: EducationProps) {
  return (
    <section className="resume-section layer-depth-content" aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="resume-section-title layer-depth-title"
      >
        Education
      </h2>
      <div className="space-y-6 layer-depth-content preserve-3d">
        {educationItems.map((item, index) => {
          return (
            <div key={index} className="reveal-item preserve-3d layer-depth-content">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="font-serif text-base font-semibold text-foreground">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-2">
                  {item.completed && (
                    <span className="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                      Completed
                    </span>
                  )}
                  <span className="text-xs font-mono text-muted-foreground bg-border-custom/30 px-2.5 py-0.5 rounded w-fit sm:shrink-0">
                    {item.period}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {item.school}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

