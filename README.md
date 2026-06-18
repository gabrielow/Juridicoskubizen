# Juridicoskubizen

Landing page estática para GitHub Pages.

## Despliegue
- El sitio está compuesto por archivos estáticos: `index.html`, `styles.css` y `script.js`.
- El workflow en [.github/workflows/deploy.yml](.github/workflows/deploy.yml) publica automáticamente el contenido al usar GitHub Pages.
- Para habilitarlo en GitHub:
  1. Ve a Settings > Pages.
  2. Elige "GitHub Actions" como fuente.
  3. Confirma que la rama `main` se despliega desde el workflow.
