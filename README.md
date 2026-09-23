# Portafolio · Deyvids Alvino

Portafolio profesional de desarrollo Odoo y OWL. Implementado con **Astro 6, React 19, TypeScript y Tailwind CSS 4**, a partir de un boceto de Figma Make.

## Ejecutar

Node.js 24 LTS recomendado; versión indicada en `.nvmrc`.

```sh
npm ci
npm run dev
```

Abre `http://localhost:4321/`. La versión en inglés está en `/en/`.

```sh
npm run check
npm run build
npm run preview
```

## Arquitectura

Astro genera HTML estático. React se utiliza en tres componentes interactivos: navegación/tema, especialidades y metodología. Las secciones estáticas reutilizan el diseño de Figma sin enviar su runtime de React al navegador. Los idiomas tienen rutas propias y el tema se conserva en el navegador.

```text
src/
  pages/              # Rutas en español e inglés
  layouts/            # Documento HTML, metadatos y composición
  components/         # Secciones Astro y componentes React
  data/
    profile.ts        # Identidad y enlaces profesionales
    projects.ts       # Proyectos del portafolio en español e inglés
    translations.ts   # Contenido traducido
  index.css           # Tokens de diseño y estilos globales
public/               # Recursos estáticos
.github/workflows/    # Verificación de tipos y build
```

Vite 7.3.6 se fija explícitamente porque Astro 6 usa Vite 7; permitir Vite 8 a través del peer de Tailwind causa un fallo `tsconfigPaths` en la compilación. Las versiones reproducibles se conservan en `package-lock.json`.

## Editar el contenido

- Perfil, enlaces, fotografía y CV: `src/data/profile.ts`.
- Formulario: `src/components/Contact.astro`; construcción del borrador en `src/lib/contact.ts`.
- Texto de las secciones: `src/data/translations.ts`.
- Proyectos y sus detalles: `src/data/projects.ts`; presentación en `src/components/Projects.astro`.
- Colores, fuentes y estilos: `src/index.css`.
- SEO: `src/layouts/Portfolio.astro`.

Se recuperaron los cuatro proyectos del boceto a petición del propietario, con una ficha destacada y tres tarjetas desplegables. Las métricas, los estados de producción no confirmados y los artículos ficticios del ZIP se retiraron. El contacto recupera el correo y las cinco vías de contacto del ZIP. El formulario valida los datos y genera un borrador `mailto:`; el visitante lo revisa y envía desde su aplicación de correo. No hay un servicio de envío directo ni una confirmación ficticia. La tarjeta de fotografía y el CV conservan sus estados pendientes. Las fuentes se incluyen localmente con Fontsource.

## Hosting

La salida `dist/` es estática y puede desplegarse en un hosting compatible. Crear este repositorio **no publica automáticamente la web**. El workflow solo valida; no despliega.

Cuando se decida el destino, configura las variables del entorno de compilación:

```sh
# Ejemplo para un proyecto de GitHub Pages:
SITE_URL=https://deyvidsdev.github.io BASE_PATH=/portafolio npm run build
```

Para un dominio propio utiliza su URL en `SITE_URL` y `BASE_PATH=/`. La URL canónica y las rutas de idiomas y recursos se construyen con esos valores. No existe todavía configuración DNS ni despliegue público.

## Siguientes contenidos

1. Revisar el texto de los proyectos restaurados y añadir resultados y estados solo cuando estén confirmados.
2. Incorporar la fotografía y el PDF del CV reales; configurar `photoPath` y `cvPath` en `src/data/profile.ts` con rutas relativas a `public/`.
3. Redactar casos o artículos antes de habilitar una bitácora.
4. Elegir dominio y hosting para publicar. Si se necesita envío directo desde la web, conectar un servicio de correo y validar su entrega.

Consulta `docs/01-auditoria-figma.md` y `docs/02-validacion.md` para el alcance de la adaptación y sus comprobaciones.
