const experiences = [
  {
    start: "June 2025",
    end: "Present",
    role: "Frontend Engineer",
    company: "MyfitHub",
    link: "http://beta.myfithub.life",
  },
  {
    start: "Aug. 2025",
    end: "Jan. 2026",
    role: "Frontend Engineer",
    company: "Lanstellar",
    link: "http://lanstellar.com",
  },
  {
    start: "April 2025",
    end: "Nov. 2025",
    role: "Junior Frontend Developer",
    company: "Lumaara",
    link: "http://lumaara.org",
  },
];

const WorkExperience = () => {
  return (
    <section className="mt-20">
      <h2 className="text-[24px] leading-[1.2] text-ink">Experience</h2>
      <div className="mt-6 flex flex-col">
        {experiences.map((exp, i) => (
          <div key={exp.company}>
            {i > 0 && <hr className="border-t border-hairline" />}
            <div className="flex flex-col gap-2 py-4">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit cursor-pointer text-[18px] leading-[1.3] text-ink underline decoration-transparent underline-offset-4 transition-colors duration-150 ease-in-out hover:decoration-ink"
              >
                {exp.company}
              </a>
              <p className="text-[12px] uppercase leading-[1.2] tracking-[0.5px] text-ink-soft">
                {exp.role} · {exp.start} — {exp.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
