import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-container py-4">
        <Link href="/" className="font-display text-xl font-bold text-slate-950">
          Kreytos23
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
