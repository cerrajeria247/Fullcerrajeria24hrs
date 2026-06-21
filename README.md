# Fullcerrajeria24hrs

Sitio web estático listo para subir a GitHub Pages.

## Datos incorporados desde la imagen

- Nombre: FullCerrajería 24Hrs / Fullcerrajeria24hrs
- Teléfono / WhatsApp: +56 9 9942 4235
- Servicios: aperturas, instalaciones, vehículos, cajas fuertes, llaves con chip y protecciones.
- Zonas: Viña del Mar, Concón, Quilpué, Valparaíso, Villa Alemana, El Belloto, Casablanca, Olmué y alrededores.
- Estética: negro, rojo, blanco, estilo seguridad, atención 24/7.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub, por ejemplo: `Fullcerrajeria24hrs`.
2. Sube todo el contenido de esta carpeta al repositorio, manteniendo `index.html` en la raíz.
3. En GitHub entra a **Settings > Pages**.
4. En **Build and deployment**, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guarda y espera unos minutos. GitHub entregará la URL pública.

## Archivos principales

- `index.html`: estructura completa del sitio.
- `assets/css/styles.css`: diseño responsive.
- `assets/js/main.js`: menú móvil y formulario que abre WhatsApp.
- `assets/img/`: imágenes optimizadas, favicon e imagen Open Graph.
- `.nojekyll`: evita problemas de publicación con GitHub Pages.

## Qué editar

- Para cambiar el teléfono, busca `56999424235` en `index.html` y `assets/js/main.js`.
- Para cambiar textos de servicios o comunas, edita directamente `index.html`.
- Para actualizar la imagen de vista previa social, reemplaza `assets/img/og-image.jpg`.
