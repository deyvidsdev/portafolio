import { useState } from 'react'
import type { Lang } from '../data/translations'

const destinations = [
  { id: 'odoo', label: 'Odoo', x: 50, y: 49, tag: ['Ecosistema · 16–19', 'Ecosystem · 16–19'], title: ['Todo conectado a Odoo', 'Everything connected to Odoo'], description: ['Conecto módulos, interfaces y servicios alrededor de los procesos contables y de tesorería. Selecciona una tecnología para conocer su función.', 'I connect modules, interfaces and services around accounting and treasury workflows. Select a technology to explore its role.'] },
  { id: 'python', label: 'Python', x: 25, y: 17, tag: ['Backend', 'Backend'], title: ['La lógica detrás del negocio', 'The logic behind the business'], description: ['Modelos, validaciones y acciones programadas para adaptar los procesos del negocio, respetando permisos y dependencias entre módulos.', 'Models, validation and scheduled actions that adapt business workflows while respecting permissions and module dependencies.'] },
  { id: 'owl', label: 'OWL', x: 74, y: 16, tag: ['Frontend', 'Frontend'], title: ['Interfaces para el trabajo diario', 'Interfaces for everyday work'], description: ['Vistas, paneles y guías contextuales para consultar información y revisar operaciones dentro de Odoo.', 'Views, dashboards and contextual guides for consulting information and reviewing operations within Odoo.'] },
  { id: 'postgres', label: 'PostgreSQL', x: 14, y: 51, tag: ['Datos', 'Data'], title: ['Una base para cada proceso', 'A foundation for every process'], description: ['Consultas y diagnóstico de datos para investigar incidencias y comprobar información, teniendo en cuenta la lógica del ORM de Odoo.', 'Queries and data diagnostics to investigate issues and verify information while taking Odoo ORM logic into account.'] },
  { id: 'apis', label: 'APIs', x: 87, y: 49, tag: ['Integraciones', 'Integrations'], title: ['Sistemas que conversan', 'Systems that work together'], description: ['Conectores para intercambiar documentos e información con servicios externos, validar respuestas y dar seguimiento a errores.', 'Connectors for exchanging documents and data with external services, validating responses and tracking errors.'] },
  { id: 'sunat', label: 'SUNAT', x: 30, y: 83, tag: ['Localización PE', 'Localization PE'], title: ['Odoo en el contexto peruano', 'Odoo in the Peruvian context'], description: ['Funcionalidades de localización peruana y documentos electrónicos, con integraciones PSE/OSE y revisión del flujo contable.', 'Peruvian localization and electronic document features, with PSE/OSE integrations and accounting workflow review.'] },
  { id: 'docker', label: 'Docker', x: 74, y: 81, tag: ['Despliegue', 'Deployment'], title: ['Del desarrollo al despliegue', 'From development to deployment'], description: ['Entornos con Docker y PostgreSQL para desarrollar y probar cambios. Git, backups y logs acompañan la preparación de actualizaciones.', 'Docker and PostgreSQL environments for development and testing. Git, backups and logs support update preparation.'] },
]
const paths = [
  'M300 235 C205 230 245 100 150 82',
  'M300 235 C405 220 345 90 444 77',
  'M300 235 C225 310 175 198 84 245',
  'M300 235 C398 165 433 275 522 235',
  'M300 235 C208 260 279 376 180 398',
  'M300 235 C401 245 347 384 444 389',
]

export default function NavigationChart({ lang }: { lang: Lang }) {
  const [selected, setSelected] = useState('odoo')
  const language = lang === 'es' ? 0 : 1
  const active = destinations.find((node) => node.id === selected)!

  return (
    <div className="navigation-chart" aria-label={lang === 'es' ? 'Mapa tecnológico interactivo' : 'Interactive technology map'}>
      <div className="navigation-chart__heading">
        <span className="navigation-chart__eyebrow">{lang === 'es' ? 'Bitácora técnica / 01' : 'Technical log / 01'}</span>
        <h2>{lang === 'es' ? 'Carta de navegación' : 'Navigation chart'}</h2>
        <p>{lang === 'es' ? 'Cada tecnología, una parte del recorrido.' : 'Every technology, part of the journey.'}</p>
      </div>
      <div className="navigation-chart__stage" role="group" aria-label={lang === 'es' ? 'Selecciona una tecnología' : 'Select a technology'}>
        <svg className="navigation-chart__routes" viewBox="0 0 600 480" aria-hidden="true">
          <g className="navigation-chart__contours" fill="none">
            <path d="M-80 130 C40 -80 455 -70 601 86 S714 320 530 430 S100 560 3 349 S149 68 337 91 S541 265 454 363 S179 426 132 287 S251 121 349 163 S414 304 341 333" />
            <path d="M-60 165 C56 -52 438 -44 576 109 S672 316 510 406 S128 520 28 344 S158 93 332 117 S514 263 433 342 S202 399 162 285 S254 147 337 184" />
            <path d="M-41 202 C65 -22 423 -19 553 130 S630 313 490 382 S149 478 56 339 S170 119 329 143" />
          </g>
          <circle cx="300" cy="235" r="185" className="navigation-chart__bearing" />
          <path d="M300 22 V448 M65 235 H535" className="navigation-chart__axis" />
          {paths.map((path, index) => (
            <path key={path} d={path} className={`navigation-chart__route${selected === destinations[index + 1].id ? ' is-active' : ''}`} />
          ))}
          <g transform="translate(553 425)" className="navigation-chart__compass">
            <circle r="19" fill="none" />
            <path d="M0 -28 L5 0 L0 28 L-5 0 Z" fill="currentColor" stroke="none" />
            <path d="M-28 0 H28" />
            <text x="0" y="-35" textAnchor="middle">N</text>
          </g>
        </svg>
        {destinations.map((node) => (
          <button key={node.id} type="button"
            className={`navigation-chart__node${node.id === 'odoo' ? ' navigation-chart__node--center' : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            aria-pressed={selected === node.id} aria-controls="navigation-log"
            onClick={() => setSelected(node.id)}>
            <span className="navigation-chart__node-name">{node.label}</span>
            <span className="navigation-chart__node-tag">{node.id === 'odoo' ? '16–19' : node.id === 'sunat' ? 'Fiscal PE' : node.tag[language]}</span>
          </button>
        ))}
      </div>
      <div className="navigation-chart__log" id="navigation-log" aria-live="polite" aria-atomic="true">
        <span className="navigation-chart__log-index" aria-hidden="true">{String(destinations.indexOf(active) + 1).padStart(2, '0')}</span>
        <div>
          <p className="navigation-chart__log-label">{active.label} / {active.tag[language]}</p>
          <h3>{active.title[language]}</h3>
          <p className="navigation-chart__description">{active.description[language]}</p>
        </div>
      </div>
      <p className="navigation-chart__hint">{lang === 'es' ? 'Selecciona una tecnología y explora su ruta.' : 'Select a technology and explore its route.'}</p>
    </div>
  )
}
