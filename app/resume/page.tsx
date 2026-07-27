import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Abdullahi Olaiwon",
  description: "Resume of Abdullahi Olaiwon, Software Engineer.",
};

const RESUME_PATH = "/resume.docx";
const RESUME_URL = `https://abdullahiolaiwon.xyz${RESUME_PATH}`;

const ResumePage = () => {
  return (
    <main className="mx-auto flex max-w-[640px] flex-col gap-6 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-[28px] leading-[1.2] text-ink">Resume</h1>
        <a
          href={RESUME_PATH}
          download
          className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline px-3.5 py-1.5 text-[14px] leading-[1.4] text-ink-soft transition-colors duration-150 ease-in-out hover:border-ink-faint hover:text-ink"
        >
          Download .docx
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-hairline bg-paper">
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
            RESUME_URL
          )}`}
          className="h-[80vh] w-full"
          title="Abdullahi Olaiwon's Resume"
        />
      </div>

      <p className="text-[13px] leading-[1.5] text-ink-faint">
        If the preview doesn&apos;t load, download the file directly above.
      </p>
    </main>
  );
};

export default ResumePage;
