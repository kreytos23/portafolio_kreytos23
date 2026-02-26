#!/usr/bin/env node

/**
 * Enriquecimiento manual de metadatos de repositorios.
 *
 * Este script está completamente desacoplado del runtime:
 * - Lee content/projects.json
 * - Combina datos manuales de repos (stars, forks, lenguaje principal)
 * - Escribe content/projects.enriched.json
 */

const fs = require('node:fs');
const path = require('node:path');

const projectsPath = path.resolve(__dirname, '..', 'content', 'projects.json');
const outputPath = path.resolve(__dirname, '..', 'content', 'projects.enriched.json');

/**
 * Fuente manual editable por humanos.
 * Mantener aquí evita depender de APIs en producción.
 */
const manualRepoData = {
  'https://github.com/kreytos23/portfolio': {
    stars: 21,
    forks: 4,
    primaryLanguage: 'TypeScript'
  },
  'https://github.com/kreytos23/sales-dashboard': {
    stars: 34,
    forks: 7,
    primaryLanguage: 'TypeScript'
  },
  'https://github.com/kreytos23/task-api': {
    stars: 16,
    forks: 3,
    primaryLanguage: 'TypeScript'
  }
};

function main() {
  const raw = fs.readFileSync(projectsPath, 'utf8');
  const projects = JSON.parse(raw);

  const enriched = projects.map((project) => ({
    ...project,
    repoStats: manualRepoData[project.repoUrl] ?? {
      stars: 0,
      forks: 0,
      primaryLanguage: 'Unknown'
    }
  }));

  fs.writeFileSync(outputPath, `${JSON.stringify(enriched, null, 2)}\n`);
  console.log(`Archivo enriquecido generado: ${path.relative(process.cwd(), outputPath)}`);
}

main();
