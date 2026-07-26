const links = [
  { label: "Email", href: "mailto:olaiwonabdullahi@gmail.com" },
  { label: "GitHub", href: "https://github.com/OlaiwonAbdullahi" },
  { label: "Twitter", href: "https://x.com/abdullahiola_05" },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1PmtyGVVcy9xQnzoNNcAow_dvKYMAbac32cX0d1jitcM/edit?usp=sharing",
  },
];

const Connect = () => {
  return (
    <section className="mt-20">
      <h2 className="text-[24px] leading-[1.2] text-ink">Connect</h2>
      <nav aria-label="Contact links" className="mt-6 flex flex-wrap gap-6 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-block w-fit cursor-pointer text-[14px] leading-[1.4] text-ink-faint underline decoration-hairline underline-offset-4 transition-colors duration-150 ease-in-out hover:text-ink hover:decoration-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mt-12 text-[11px] leading-[1.2] text-ink-faint">
        © MMXXVI · Abdullahi Olaiwon
      </p>
    </section>
  );
};

export default Connect;
