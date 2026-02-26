type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-stack">
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      {subtitle ? <p className="max-w-2xl text-lg">{subtitle}</p> : null}
    </div>
  );
}
