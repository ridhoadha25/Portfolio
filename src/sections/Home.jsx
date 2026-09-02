import heroImage from "../assets/images/Hero.jpeg";

function Home() {
  const socials = [
    { name: "GitHub", href: "https://github.com/ridhoadha25", iconClass: "bi bi-github" },
    { name: "Facebook", href: "https://web.facebook.com/ridho.adha.226418", iconClass: "bi bi-facebook" },
    { name: "linkedin", href: "https://www.linkedin.com/in/m-ridho-adha-06b0502b1/", iconClass: "bi bi-linkedin" },
  ];

  return (
    <section
      id="home"
      data-reveal
      className="home-grid reveal-section relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 py-10 md:grid-cols-[1.3fr_0.9fr] md:items-center md:gap-10 md:py-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.22em] text-text-secondary">
            HELLO, I'M 👋
          </p>

          <h1 className="text-4xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-5xl md:text-[4.5rem] md:leading-[0.94]">
            <span className="gradient-text">M. Ridho</span>
            <span className="mt-1 block gradient-text">Adha.</span>
          </h1>

          <h2 className="mt-4 text-lg font-semibold text-text-primary md:text-xl">
            Frontend Developer &amp; Information System Student
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
            I craft modern, responsive, and user-friendly digital experiences that
            turn ideas into clean, engaging interfaces with real product value.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-button-hero px-6 py-3 font-medium text-background shadow-[0_10px_30px_rgba(17,24,39,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-button-hero-hover hover:shadow-[0_16px_35px_rgba(17,24,39,0.22)]"
            >
              View Projects
              <i className="bi bi-arrow-up-right transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-thirdary bg-foreground/80 px-6 py-3 font-medium text-text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-button-hover hover:shadow-[0_12px_25px_rgba(15,23,42,0.08)]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
            {socials.map(({ name, href, iconClass }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-thirdary bg-foreground/90 text-text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-button-hover hover:shadow-[0_12px_25px_rgba(15,23,42,0.08)]"
              >
                <i className={`${iconClass} text-lg`} />
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="mt-8 flex w-fit items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            <i className="bi bi-arrow-down" />
            Scroll to explore
          </a>
        </div>

        <div className="relative w-full max-w-[26rem] justify-self-end md:-mt-2 lg:-mt-4">
          <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-text-primary/8 via-transparent to-text-primary/4 blur-lg opacity-70" />

          <div className="relative overflow-hidden rounded-4xl border border-thirdary bg-foreground p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between border-b border-thirdary bg-background/40 px-4 py-3">
              <span className="text-sm text-text-secondary">profile.jpg</span>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-text-secondary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-text-secondary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-text-secondary/40" />
              </div>
            </div>

            <img
              src={heroImage}
              alt="Ridho hero"
              className="mt-[-0.25rem] h-80 w-full rounded-[1.4rem] object-cover object-[center_65%] sm:h-88 md:h-[26rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
