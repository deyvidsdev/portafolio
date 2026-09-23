import type { Lang } from './translations';

type ProjectText = {
  name: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  contribution: string;
};
type Project = {
  id: string;
  version: string;
  stack: string[];
  featured?: boolean;
  content: Record<Lang, ProjectText>;
};

// Projects restored from the Figma brief at the owner's request.
// Add metrics, client references and delivery statuses only after confirmation.
export const projects: Project[] = [
  {
    id: 'detraction', version: 'Odoo 17', featured: true,
    stack: ['Python', 'Odoo ORM', 'PostgreSQL', 'XML', 'QWeb'],
    content: {
      es: {
        name: 'Módulo de Detracciones SUNAT', category: 'Localización peruana',
        context: 'Automatización del registro y validación de detracciones dentro de Odoo.',
        problem: 'El registro manual de detracciones complicaba el seguimiento y la revisión contable.',
        solution: 'Cálculo y registro de detracciones integrado con los documentos y procesos contables de Odoo.',
        contribution: 'Desarrollo de la lógica de cálculo, registro y validación dentro del módulo.',
      },
      en: {
        name: 'SUNAT Detraction Module', category: 'Peruvian localization',
        context: 'Automating the recording and validation of detractions in Odoo.',
        problem: 'Manual detraction entries complicated tracking and accounting review.',
        solution: 'Detraction calculation and recording integrated with Odoo accounting documents and workflows.',
        contribution: 'Development of calculation, recording and validation logic within the module.',
      },
    },
  },
  {
    id: 'electronic-invoicing', version: 'Odoo 16',
    stack: ['Python', 'l10n_pe', 'SUNAT', 'XML', 'UBL 2.1'],
    content: {
      es: {
        name: 'Facturación Electrónica OSE', category: 'Facturación electrónica',
        context: 'Integración de documentos electrónicos y seguimiento de respuestas del proveedor de emisión.',
        problem: 'Los tiempos de espera y los documentos sin respuesta dificultaban el control de la emisión electrónica.',
        solution: 'Adaptación del conector para gestionar documentos electrónicos UBL 2.1 y revisar las respuestas del servicio.',
        contribution: 'Trabajo en el conector y en el seguimiento de respuestas de la emisión electrónica.',
      },
      en: {
        name: 'OSE Electronic Invoicing', category: 'Electronic invoicing',
        context: 'Electronic document integration and tracking of responses from the invoicing provider.',
        problem: 'Timeouts and documents without a response made electronic invoicing harder to monitor.',
        solution: 'Connector adaptation to handle UBL 2.1 electronic documents and review service responses.',
        contribution: 'Work on the connector and electronic invoicing response tracking.',
      },
    },
  },
  {
    id: 'treasury', version: 'Odoo 17',
    stack: ['OWL', 'JavaScript', 'QWeb', 'Python', 'PostgreSQL'],
    content: {
      es: {
        name: 'Dashboard de Tesorería OWL', category: 'Tesorería',
        context: 'Una interfaz para consultar saldos bancarios y operaciones pendientes de conciliación.',
        problem: 'El equipo financiero necesitaba consultar la información de varias cuentas desde una misma vista.',
        solution: 'Panel OWL que reúne saldos por cuenta y operaciones pendientes de conciliación para facilitar su consulta.',
        contribution: 'Desarrollo de la interfaz de consulta de información de tesorería con OWL.',
      },
      en: {
        name: 'OWL Treasury Dashboard', category: 'Treasury',
        context: 'An interface for reviewing bank balances and transactions awaiting reconciliation.',
        problem: 'The finance team needed to review information from multiple accounts in one view.',
        solution: 'An OWL dashboard bringing together account balances and transactions awaiting reconciliation.',
        contribution: 'Development of the treasury information interface with OWL.',
      },
    },
  },
  {
    id: 'migration19', version: 'Odoo 17 → 19',
    stack: ['Python', 'OWL', 'PostgreSQL', 'Docker'],
    content: {
      es: {
        name: 'Migración de Módulos v17 → v19', category: 'Migración',
        context: 'Adaptación de módulos personalizados a Odoo 19 Enterprise.',
        problem: 'Los cambios de APIs, vistas y componentes entre versiones requerían revisar el código y sus dependencias.',
        solution: 'Adaptación de modelos Python, vistas y componentes OWL para la nueva versión, con revisión de las dependencias del código.',
        contribution: 'Análisis de compatibilidad y adaptación de módulos personalizados. El alcance descrito corresponde al código.',
      },
      en: {
        name: 'Module Migration v17 → v19', category: 'Migration',
        context: 'Adapting custom modules to Odoo 19 Enterprise.',
        problem: 'Changes to APIs, views and components across versions required a review of the code and its dependencies.',
        solution: 'Adaptation of Python models, views and OWL components for the new version, with a review of code dependencies.',
        contribution: 'Compatibility analysis and custom module adaptation. The scope described here covers code changes.',
      },
    },
  },
];
