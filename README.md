# Portafolio Kreytos23

Base inicial de un portafolio profesional construido con **Next.js**, **TypeScript**, **App Router** y **Tailwind CSS**.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `dev`: inicia el entorno de desarrollo en `http://localhost:3000`.
- `build`: genera el build de producción.
- `start`: levanta la aplicación en modo producción usando el build generado.
- `lint`: ejecuta reglas de lint configuradas para Next.js + TypeScript.

## Estructura mínima

```text
app/
  page.tsx
  proyectos/page.tsx
  contacto/page.tsx
components/
  layout/
  sections/
content/
  cv.json
  cv.mdx
  proyectos.json
```

## Despliegue

### Vercel (recomendado)

1. Sube este repositorio a GitHub/GitLab/Bitbucket.
2. Importa el proyecto desde [vercel.com](https://vercel.com/).
3. Define variables de entorno (si aplica).
4. Despliega. Vercel detecta Next.js automáticamente.

### Manual (Node.js)

```bash
npm install
npm run build
npm run start
```

La app quedará sirviendo en el puerto definido por `PORT` (por defecto `3000`).
