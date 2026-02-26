import { SectionTitle } from "@/components/sections/section-title";

export default function ProyectosPage() {
  return (
    <section className="section-stack">
      <SectionTitle title="Proyectos" subtitle="Espacio inicial para listar proyectos destacados y estudios de caso." />
      <article className="card">
        <h2 className="text-2xl font-semibold">Proyecto destacado</h2>
        <p className="mt-3">Conecta esta vista con datos en `content/proyectos.json` o con contenido MDX.</p>
      </article>
    </section>
  );
}
