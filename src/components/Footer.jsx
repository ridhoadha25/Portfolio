function Footer() {
  const currentYear = new Date().getFullYear();
  const socials = [
    { name: "GitHub", href: "https://github.com", iconClass: "bi bi-github" },
    { name: "Facebook", href: "https://facebook.com", iconClass: "bi bi-facebook" },
    { name: "Linkedln", href: "https://www.linkedin.com/in/m-ridho-adha-06b0502b1/", iconClass: "bi bi-linkedin" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#111315] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">
        <p className="text-sm text-slate-300">
          © {currentYear} M. Ridho Adha. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ name, href, iconClass }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:text-white"
              aria-label={name}
            >
              <i className={`${iconClass} text-base`} />
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-300">
          Built with React.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
