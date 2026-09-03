import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="about" data-reveal className="reveal-section px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="About Me"
          title="I turn ideas into practical, modern digital experiences."
        />

        <div className="max-w-4xl text-lg leading-relaxed text-text-secondary">
          <p>
            I am currently pursuing my studies in Information Systems at the Institute Technologi
            Rokan Hilir, Faculty of Science and Technology, and I have a strong interest in
            frontend development, UI/UX design, and creating interfaces that feel modern, clear,
            and easy to use.
          </p>

          <p className="mt-6">
            I enjoy turning ideas into practical digital experiences by combining design
            thinking, clean code, and user-friendly solutions that address real-world problems
            in a simple and effective way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
