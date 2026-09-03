function Contact() {
  const contactLinks = [
    {
      name: "WhatsApp",
      value: "+62 823-6192-2285",
      iconClass: "bi bi-whatsapp",
      href: "https://wa.me/qr/R4OEZRTCQGJXE1",
    },
    {
      name: "Email",
      value: "mridhoadha25@gmail.com",
      iconClass: "bi bi-envelope",
      href: "mailto:mridhoadha25@gmail.com",
    },
    {
      name: "Address",
      value: "Tanah Putih, Rokan Hilir, Riau",
      iconClass: "bi bi-geo-alt",
      href: "https://maps.google.com/?q=Tanah+Putih+Rokan+Hilir+Riau",
    },
  ];

  return (
    <section id="contact" data-reveal className="reveal-section px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-4xl border border-thirdary bg-background p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
            Contact
          </p>

          <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-text-primary md:text-4xl">
            Let&apos;s build something great together.
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-text-secondary">
            I&apos;m open to collaboration, freelance work, and new opportunities in front-end
            development and digital product design.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactLinks.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group rounded-2xl border border-thirdary bg-foreground p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-text-primary/20 hover:bg-background hover:shadow-[0_18px_38px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-thirdary text-text-primary transition-transform duration-200 group-hover:scale-105">
                    <i className={`${contact.iconClass} text-xl`} />
                  </div>

                  <p className="mt-4 font-medium text-text-primary">{contact.name}</p>

                  <p className="mt-1 text-sm text-text-secondary">{contact.value}</p>
                </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
