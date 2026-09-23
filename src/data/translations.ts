export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      links: [
        {"href":"#experiencia","label":"Habilidades"},
        {"href":"#especialidades","label":"Especialidades"},
        {"href":"#proyectos","label":"Proyectos"},
        {"href":"#stack","label":"Stack"},
        {"href":"#metodologia","label":"Ruta"},
        {"href":"#contacto","label":"Contacto"}
      ]
    },
    hero: {
      chapter: "CAPÍTULO I",
      subtitle: "Desarrollador Odoo y OWL · Perú",
      h1a: "DESARROLLO",
      h1b: "SOLUCIONES",
      h1c: "ODOO QUE",
      h1d: "LLEGAN A BUEN PUERTO",
      desc: "Desarrollo y adapto módulos Odoo para contabilidad, tesorería y localización peruana. Trabajo con Python, OWL e integraciones para automatizar procesos y acompañar la evolución del sistema entre versiones.",
      ctaPrimary: "VER PROYECTOS →",
      ctaSecondary: "CONTACTAR",
      mapLabel: "Mapa tecnológico centrado en Odoo",
      mapCorner: "MAPA TÉCNICO"
    },
    presentation: {
      sectionLabel: "Experiencia",
      chapter: "CAP. II",
      heading1: "ÁREAS DE",
      heading2: "ESPECIALIZACIÓN",
      areas: [
        {"title":"Contabilidad y tesorería","desc":"Procesos de pagos, extractos bancarios, conciliación y letras dentro de Odoo."},
        {"title":"Localización peruana","desc":"Funcionalidades para documentos electrónicos, detracciones, percepciones, retenciones y registros contables."},
        {"title":"Módulos personalizados","desc":"Desarrollo y adaptación de funcionalidades a los procesos del negocio y a los módulos existentes."},
        {"title":"Migración de módulos","desc":"Adaptación entre versiones de Odoo, con revisión de dependencias y del comportamiento funcional."},
        {"title":"Interfaces OWL","desc":"Vistas y paneles para consultar información, revisar operaciones y guiar al usuario dentro de Odoo."},
        {"title":"Integraciones","desc":"Conexión con servicios externos para intercambiar documentos e información y dar seguimiento a las respuestas."}
      ],
      intro: "Analizo el proceso y la causa del problema para proponer cambios que el equipo pueda mantener y los usuarios puedan utilizar."
    },
    specialties: {
      sectionLabel: "Especialidades",
      chapter: "CAP. III",
      heading1: "EXPERIENCIA",
      heading2: "TÉCNICA",
      items: [
        {"title":"Odoo Backend","tag":"Python · ORM · XML","summary":"Extiendo modelos y procesos de Odoo con atención a las reglas del negocio, los permisos y la relación con los módulos existentes.","points":["Modelos y campos calculados","Herencia y extensión de módulos","Validaciones y acciones programadas","Reportes QWeb","Permisos y reglas de acceso"]},
        {"title":"OWL Frontend","tag":"JavaScript · OWL","summary":"Desarrollo interfaces para consultar información y revisar operaciones dentro de Odoo, conectadas con los modelos y servicios del sistema.","points":["Componentes y estado reactivo","Vistas y acciones de cliente","Servicios ORM y RPC","Paneles para procesos operativos","Guías contextuales para usuarios"]},
        {"title":"Localización PE","tag":"SUNAT · PSE / OSE · SIRE","summary":"Trabajo en funcionalidades de localización peruana y documentos electrónicos, coordinando la validación funcional con el equipo responsable.","points":["Integraciones de facturación electrónica","Detracciones, percepciones y retenciones","Registros SIRE y reportes PLE","Adaptación de procesos contables","Revisión de respuestas e incidencias"]},
        {"title":"Migración de módulos","tag":"Odoo 16 · 17 · 18 · 19","summary":"Reviso dependencias y adapto código entre versiones. La migración de datos históricos se define y valida como un alcance específico del proyecto.","points":["Inventario de módulos y dependencias","Adaptación de Python, XML y OWL","Comparación del comportamiento entre versiones","Pruebas de instalación y actualización","Registro de resultados y pendientes"]},
        {"title":"Integraciones API","tag":"APIs · Documentos · Servicios","summary":"Desarrollo y adapto conectores para intercambiar información con servicios externos, con seguimiento de respuestas y manejo de errores.","points":["Conectores con servicios externos","Integración con PSE / OSE","Validación de datos intercambiados","Manejo de errores y tiempos de espera","Trazabilidad de solicitudes y respuestas"]},
        {"title":"Entornos y despliegue","tag":"Docker · Odoo.sh · Linux","summary":"Trabajo con entornos locales, Odoo.sh y servidores Linux para revisar cambios, diagnosticar incidencias y preparar actualizaciones de Odoo.","points":["Docker Compose y PostgreSQL","Flujos de trabajo con Git","Entornos de pruebas y producción","Backups y restauración","Diagnóstico con logs y configuración"]}
      ]
    },
    stack: {
      sectionLabel: "Stack tecnológico",
      chapter: "CAP. V",
      heading1: "MI STACK",
      heading2: "TECNOLÓGICO"
    },
    methodology: {
      sectionLabel: "Cómo trabajo",
      chapter: "CAP. VI",
      heading1: "DEL PROBLEMA A UNA",
      heading2: "SOLUCIÓN VALIDADA",
      outputLabel: "Entregable →",
      prev: "← ANTERIOR",
      next: "SIGUIENTE →",
      phaseLabel: "FASE",
      steps: [
        {"label":"Análisis","icon":"◎","desc":"Reviso el proceso, el comportamiento actual y las dependencias. Defino qué debe cambiar y cómo comprobarlo.","output":"Alcance del cambio y criterios de validación."},
        {"label":"Diseño","icon":"⬡","desc":"Propongo los cambios necesarios en modelos, vistas e integraciones y reviso sus efectos sobre el flujo existente.","output":"Propuesta técnica y decisiones de implementación."},
        {"label":"Desarrollo","icon":"{}","desc":"Implemento cambios delimitados, con control de versiones y documentación de las decisiones relevantes.","output":"Código y documentación del cambio."},
        {"label":"Validación","icon":"◈","desc":"Compruebo los escenarios afectados, los permisos y la integración con el flujo existente. Registro resultados y pendientes para la revisión funcional.","output":"Resultados de pruebas y pendientes de validación."},
        {"label":"Despliegue","icon":"⇢","desc":"Preparo los pasos de instalación o actualización, las verificaciones y el mecanismo de recuperación que corresponda al entorno.","output":"Procedimiento de actualización y comprobaciones."},
        {"label":"Seguimiento","icon":"✦","desc":"Reviso las incidencias posteriores y documento los ajustes dentro del alcance acordado.","output":"Registro de incidencias y ajustes realizados."}
      ]
    },
    about: {
      sectionLabel: "Sobre mí",
      chapter: "CAP. VIII",
      cardTitle: "FICHA DE EXPEDICIÓN",
      photoPending: "Fotografía profesional pendiente",
      photoAlt: "Retrato de Deyvids Alvino",
      heading1: "EL DESARROLLADOR",
      heading2: "DETRÁS DEL CÓDIGO",
      bio1: "Soy Deyvids Alvino, desarrollador Odoo con foco en contabilidad, tesorería y localización peruana. Trabajo con Python y OWL en módulos personalizados, integraciones y adaptación de funcionalidades entre versiones de Odoo.",
      bio2: "Mi trabajo combina la lógica del negocio con su implementación técnica: entender cómo se registra una operación, cómo se relaciona con los demás procesos y qué necesita el usuario para revisarla. He trabajado en temas de facturación electrónica, extractos bancarios y procesos de tesorería.",
      bio3: "Antes de proponer un cambio, reviso el comportamiento existente y sus dependencias. Me interesa que la solución pueda comprobarse en el flujo de trabajo y que el equipo tenga claridad sobre su alcance y lo que falta validar.",
      values: [
        {"icon":"◈","label":"Claridad","desc":"Código organizado y documentado para facilitar su mantenimiento."},
        {"icon":"⇢","label":"Precisión","desc":"Cambios con un alcance claro y revisión de sus efectos sobre el flujo existente."},
        {"icon":"≡","label":"Contexto","desc":"Entender el proceso del negocio antes de proponer una solución."}
      ]
    },
    contact: {
      sectionLabel: "Conversemos",
      chapter: "CAP. IX",
      heading1: "¿TIENES UN",
      heading2: "DESAFÍO EN ODOO?",
      desc: "Cuéntame qué versión de Odoo utilizas, qué proceso necesitas mejorar y qué problema estás encontrando. Podemos revisar el alcance de un desarrollo, una integración o una migración de módulos.",
      formTitle: "PREPARAR UN MENSAJE",
      fields: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje"
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@correo.com",
        subject: "Tesorería, integración, migración de módulos…",
        message: "Versión de Odoo, proceso que necesitas mejorar y resultado esperado."
      },
      submit: "PREPARAR CORREO →",
      cvBtn: "↓ DESCARGAR CV",
      cvSoon: "próximamente",
      formHelp: "Completa el formulario para preparar un correo. Lo enviarás desde tu aplicación de correo.",
      draftReady: "Tu borrador está listo. Ábrelo en tu aplicación de correo para revisarlo y enviarlo.",
      openDraft: "ABRIR MI CORREO →",
      fallback: "Si no tienes una aplicación de correo configurada, copia los datos y escribe directamente a",
      noScript: "Para preparar el borrador, activa JavaScript o utiliza el enlace de correo.",
      requiredHint: "Los campos con * son obligatorios.",
      footer: "© 2026 · Deyvids Alvino · Odoo Developer · Perú",
      footerTag: "DESARROLLADO CON ODOO EN MENTE"
    }
  },
  en: {
    nav: {
      links: [
        {"href":"#experiencia","label":"Skills"},
        {"href":"#especialidades","label":"Specialties"},
        {"href":"#proyectos","label":"Projects"},
        {"href":"#stack","label":"Stack"},
        {"href":"#metodologia","label":"Route"},
        {"href":"#contacto","label":"Contact"}
      ]
    },
    hero: {
      chapter: "CHAPTER I",
      subtitle: "Odoo & OWL Developer · Peru",
      h1a: "I BUILD",
      h1b: "ODOO",
      h1c: "SOLUTIONS THAT",
      h1d: "REACH THEIR DESTINATION",
      desc: "I develop and adapt Odoo modules for accounting, treasury and Peruvian localization. I use Python, OWL and integrations to automate processes and support upgrades across Odoo versions.",
      ctaPrimary: "VIEW PROJECTS →",
      ctaSecondary: "CONTACT ME",
      mapLabel: "Technology map centered on Odoo",
      mapCorner: "TECH MAP"
    },
    presentation: {
      sectionLabel: "Professional experience",
      chapter: "CH. II",
      heading1: "AREAS OF",
      heading2: "EXPERTISE",
      areas: [
        {"title":"Accounting & treasury","desc":"Payment workflows, bank statements, reconciliation and bills of exchange within Odoo."},
        {"title":"Peruvian localization","desc":"Features for electronic documents, Peruvian tax collection mechanisms and accounting records."},
        {"title":"Custom modules","desc":"Development and adaptation of features to business workflows and existing modules."},
        {"title":"Module migration","desc":"Adapting modules across Odoo versions, reviewing dependencies and functional behavior."},
        {"title":"OWL interfaces","desc":"Views and dashboards for consulting data, reviewing operations and guiding users within Odoo."},
        {"title":"Integrations","desc":"Connecting external services to exchange documents and data, with response tracking."}
      ],
      intro: "I examine the workflow and the cause of the problem to propose changes the team can maintain and users can work with."
    },
    specialties: {
      sectionLabel: "Specialties",
      chapter: "CH. III",
      heading1: "TECHNICAL",
      heading2: "EXPERTISE",
      items: [
        {"title":"Odoo Backend","tag":"Python · ORM · XML","summary":"I extend Odoo models and workflows with attention to business rules, permissions and their relationship with existing modules.","points":["Models and computed fields","Module inheritance and extension","Validation and scheduled actions","QWeb reports","Permissions and access rules"]},
        {"title":"OWL Frontend","tag":"JavaScript · OWL","summary":"I build interfaces for consulting data and reviewing operations within Odoo, connected to its models and services.","points":["Components and reactive state","Views and client actions","ORM and RPC services","Operational dashboards","Contextual user guides"]},
        {"title":"Peruvian localization","tag":"SUNAT · PSE / OSE · SIRE","summary":"I work on Peruvian localization and electronic document features, coordinating functional validation with the responsible team.","points":["Electronic invoicing integrations","Peruvian tax collection and withholding workflows","SIRE records and PLE reports","Accounting workflow adaptations","Response and incident review"]},
        {"title":"Module migration","tag":"Odoo 16 · 17 · 18 · 19","summary":"I review dependencies and adapt code across versions. Historical data migration is defined and validated as a specific project scope.","points":["Module and dependency inventory","Python, XML and OWL adaptations","Behavior comparison across versions","Installation and update testing","Documented results and pending checks"]},
        {"title":"API integrations","tag":"APIs · Documents · Services","summary":"I develop and adapt connectors to exchange information with external services, track responses and handle errors.","points":["External service connectors","PSE / OSE integration","Validation of exchanged data","Error and timeout handling","Request and response traceability"]},
        {"title":"Environments & deployment","tag":"Docker · Odoo.sh · Linux","summary":"I work with local environments, Odoo.sh and Linux servers to review changes, diagnose issues and prepare Odoo updates.","points":["Docker Compose and PostgreSQL","Git workflows","Testing and production environments","Backups and restoration","Log and configuration diagnostics"]}
      ]
    },
    stack: {
      sectionLabel: "Technology stack",
      chapter: "CH. V",
      heading1: "MY TECHNOLOGY",
      heading2: "STACK"
    },
    methodology: {
      sectionLabel: "How I work",
      chapter: "CH. VI",
      heading1: "FROM PROBLEM TO A",
      heading2: "VALIDATED SOLUTION",
      outputLabel: "Deliverable →",
      prev: "← PREVIOUS",
      next: "NEXT →",
      phaseLabel: "PHASE",
      steps: [
        {"label":"Analysis","icon":"◎","desc":"I review the workflow, current behavior and dependencies. I define what needs to change and how to verify it.","output":"Change scope and validation criteria."},
        {"label":"Design","icon":"⬡","desc":"I propose the changes needed in models, views and integrations, and review their effects on the existing workflow.","output":"Technical proposal and implementation decisions."},
        {"label":"Development","icon":"{}","desc":"I implement scoped changes with version control and document the relevant decisions.","output":"Code and change documentation."},
        {"label":"Validation","icon":"◈","desc":"I check affected scenarios, permissions and integration with the existing workflow. I record results and pending checks for functional review.","output":"Test results and pending validation."},
        {"label":"Deployment","icon":"⇢","desc":"I prepare installation or update steps, verification checks and a recovery procedure suited to the environment.","output":"Update procedure and verification checks."},
        {"label":"Follow-up","icon":"✦","desc":"I review subsequent issues and document adjustments within the agreed scope.","output":"Issue log and completed adjustments."}
      ]
    },
    about: {
      sectionLabel: "About me",
      chapter: "CH. VIII",
      cardTitle: "EXPEDITION FILE",
      photoPending: "Professional photograph pending",
      photoAlt: "Portrait of Deyvids Alvino",
      heading1: "THE DEVELOPER",
      heading2: "BEHIND THE CODE",
      bio1: "I am Deyvids Alvino, an Odoo developer focused on accounting, treasury and Peruvian localization. I work with Python and OWL on custom modules, integrations and feature adaptations across Odoo versions.",
      bio2: "My work connects business logic with technical implementation: understanding how a transaction is recorded, how it relates to other processes and what users need to review it. My experience includes electronic invoicing, bank statements and treasury workflows.",
      bio3: "Before proposing a change, I review the existing behavior and its dependencies. I want the solution to be verifiable in the workflow, with a clear scope and a record of what still needs validation.",
      values: [
        {"icon":"◈","label":"Clarity","desc":"Organized, documented code that is easier to maintain."},
        {"icon":"⇢","label":"Precision","desc":"Clearly scoped changes and a review of their effects on the existing workflow."},
        {"icon":"≡","label":"Context","desc":"Understanding the business process before proposing a solution."}
      ]
    },
    contact: {
      sectionLabel: "Let’s connect",
      chapter: "CH. IX",
      heading1: "DO YOU HAVE AN",
      heading2: "ODOO CHALLENGE?",
      desc: "Tell me which Odoo version you use, which process you want to improve and what issue you are facing. We can review the scope of a development task, integration or module migration.",
      formTitle: "PREPARE A MESSAGE",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message"
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        subject: "Treasury, integration, module migration…",
        message: "Odoo version, process you want to improve and expected outcome."
      },
      submit: "PREPARE EMAIL →",
      cvBtn: "↓ DOWNLOAD CV",
      cvSoon: "coming soon",
      formHelp: "Complete the form to prepare an email. You will send it from your email application.",
      draftReady: "Your draft is ready. Open it in your email application to review and send it.",
      openDraft: "OPEN MY EMAIL APP →",
      fallback: "If no email application is configured, copy your message and write directly to",
      noScript: "Enable JavaScript to prepare a draft, or use the email link.",
      requiredHint: "Fields marked * are required.",
      footer: "© 2026 · Deyvids Alvino · Odoo Developer · Peru",
      footerTag: "BUILT WITH ODOO IN MIND"
    }
  }
} as const
