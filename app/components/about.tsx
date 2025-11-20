const About = () => {
  return (
    <div>
      <div className="space-y-2">
        <h2 className="leading-tight text-[2.75rem] sm:text-[3rem] font-semibold">
          About
        </h2>
        <p className="text-lg text-neutral-600 max-w-xl flex flex-col gap-6">
          <span>
            I love building clean, scalable, and user-focused digital products
            that solve real problems. My work blends creativity, functionality,
            and innovation to deliver meaningful experiences.
          </span>
          <span>
            I&apos;m Abdullahi Olaiwon, a Nigerian frontend developer passionate
            about crafting seamless user experiences with modern web
            technologies. Over the years, I’ve built and contributed to a
            diverse range of projects.
          </span>
          <span>
            A self-driven developer, I’ve grown through consistent learning,
            real-world projects, and community-focused training like Web3Bridge
            Cohort XI. With over 15+ production-ready projects, I enjoy solving
            complex problems, understanding how things work, and bringing ideas
            to life through code.
          </span>
        </p>
      </div>

      <div className="mt-10">
        <div className="w-full flex justify-center items-center py-12">
          <div className="relative w-[420px] h-[220px]">
            {/* Left polaroid */}
            <figure
              className="absolute left-0 top-0 w-[220px] h-[250px] bg-white border border-neutral-300/30 rounded-xl shadow-xs flex flex-col items-center justify-start p-4 transform"
              style={{
                transform: "rotate(-10deg)",
              }}
            >
              <div className="overflow-hidden rounded-lg w-full h-[250px] bg-gray-100 flex items-center justify-center">
                <img
                  src={"/dp2.jpg"}
                  alt="left"
                  className="object-cover w-full h-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-center text-gray-700 w-full font-medium">
                Abdullahi.0x
              </figcaption>
            </figure>

            {/* Right polaroid */}
            <figure
              className="absolute right-0 bottom-0 w-[220px] h-[250px] bg-white border border-neutral-300/30 rounded-xl shadow-xs flex flex-col items-center justify-start p-4 transform"
              style={{
                transform: "rotate(6deg)",
              }}
            >
              <div className="overflow-hidden rounded-lg w-full h-[250px] bg-gray-100 flex items-center justify-center">
                <img
                  src={"/pic1.jpg"}
                  alt="right"
                  className="object-cover w-full h-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-center text-gray-700 w-full font-medium">
                404 Dev
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
