import { SectionTitle } from "@/components/sections/section-title";

export default function HomePage() {
  return (
    <section className="section-stack">
      <SectionTitle
        title="Hola, soy Kreytos23"
        subtitle="Este proyecto es la base de un portafolio profesional con Next.js, TypeScript, App Router y Tailwind CSS."
      />
      <div className="card">
        <p>
          Organiza aquí tu CV, experiencia, stack técnico y casos de éxito. La estructura ya incluye rutas para
          proyectos y contacto, además de una carpeta de contenido para mantener datos desacoplados de la UI.
        </p>
      </div>
    </section>
  );
}
