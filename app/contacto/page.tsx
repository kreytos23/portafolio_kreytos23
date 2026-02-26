import { SectionTitle } from "@/components/sections/section-title";

export default function ContactoPage() {
  return (
    <section className="section-stack">
      <SectionTitle title="Contacto" subtitle="Centraliza aquí canales de contacto profesional." />
      <div className="card section-stack">
        <p>
          Email: <a href="mailto:hola@kreytos23.dev">hola@kreytos23.dev</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/kreytos23</a>
        </p>
      </div>
    </section>
  );
}
