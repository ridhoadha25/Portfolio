function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
