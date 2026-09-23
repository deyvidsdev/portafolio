# Validación de la primera implementación

Validado localmente el 22/09/2026, con Node 24.14.0.

- `npm ci --no-audit --no-fund` en la carpeta definitiva: instalación limpia completada.
- `npm run check`: 0 errores, 0 advertencias, 0 sugerencias.
- `npm run build`: genera `/index.html` y `/en/index.html`.
- HTML generado: idioma correcto y tres componentes con hidratación React por página.
- Build con `BASE_PATH=/portafolio` y `SITE_URL=https://deyvidsdev.github.io`: enlaces canónicos y scripts con el prefijo correcto. No implica que GitHub Pages esté publicado.
- Navegador: especialidad OWL seleccionable, actualización del panel y avance de Análisis a Diseño.
- Menú móvil: apertura, cierre con Escape y devolución del foco al botón.
- Tema: cambio a claro y persistencia al recargar.
- Inglés: títulos y contenido de secciones traducidos, atributo `lang=en` y título propio.
- Vista inglesa a 1440, 1024, 768 y 390 px: sin desbordamiento horizontal y sin anclas internas inexistentes.
- Vista española a 390 px: sin desbordamiento horizontal.
- Inspección visual de portada, menú móvil y metodología. Corrección de un punto que saltaba a una línea independiente en el título móvil.
- Sin errores ni advertencias de consola en las interacciones inspeccionadas.
- Fuentes locales; no hay peticiones a Google Fonts en el HTML generado.

Alcance: estas comprobaciones no equivalen a una auditoría WCAG completa, métricas Lighthouse ni pruebas en dispositivos físicos. Faltan contenido de proyectos confirmado, fotografía/CV si se desean y una decisión de hosting para publicar.

## Restauración de proyectos solicitada por el propietario

- Recuperados cuatro proyectos del boceto: Detracciones SUNAT, Facturación Electrónica OSE, Dashboard de Tesorería OWL y Migración v17 → v19.
- Una ficha destacada y tres tarjetas con detalles HTML nativos, accesibles sin añadir JavaScript.
- Contenido español/inglés centralizado en `src/data/projects.ts`. No se reincorporan métricas ni estados de entrega sin confirmar.
- `npm run check`: 0 errores, advertencias o sugerencias. `npm run build`: ambas rutas generadas.
- Navegador: cuatro fichas presentes; apertura con ratón y cierre con Enter; vista de 390 px sin desbordamiento; nombres de los cuatro proyectos traducidos; sin errores de consola.
