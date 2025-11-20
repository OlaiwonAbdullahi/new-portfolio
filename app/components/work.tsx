const experiences = [
  {
    start: "Aug. 2025",
    end: "Present",
    role: "Frontend Engineer",
    company: "Lanstellar",
    link: "http://lanstellar.com",
  },
  {
    start: "June 2025",
    end: "Present",
    role: "Frontend Engineer",
    company: "MyfitHub",
    link: "http://beta.myfithub.live",
  },
  {
    start: "April 2025",
    end: "Present",
    role: "Junior Frontend Developer",
    company: "Lumaara",
    link: "http://lumaara.org",
  },
];

const WorkExperience = () => {
  return (
    <section className=" border-t border-t-[#e6e6e6] py-22">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-start">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex justify-between items-start ">
            <div className="flex-1">
              <p className="text-base font-medium text-gray-500">
                {exp.start} - {exp.end}
              </p>
            </div>
            <div className="flex gap-2 text-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {exp.role} at
              </h3>
              <a href={exp.link}>
                <p className="text-[#3b82f6] flex items-center gap-1 bg-[#eef4ff] py-0.5 px-2  rounded-sm hover:underline font-medium">
                  <div className="border-2 border-[#3b82f6] bg-[#eef4ff] h-2 w-2 rounded-full"></div>{" "}
                  {exp.company}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
