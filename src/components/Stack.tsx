import { SectionLabel } from './ProfessionalPresentation'
import type { translations, Lang } from '../data/translations'
type Props = { content: (typeof translations)[Lang]['stack']; lang: Lang }

const stackGroupsEs = [
  {
    id: 'backend', label: 'Backend', icon: '{}',
    items: [
      { name: 'Python', note: 'Lógica de negocio, ORM, controladores' },
      { name: 'Odoo ORM', note: 'Modelos, constrains, compute fields' },
      { name: 'PostgreSQL', note: 'Queries, índices, diagnóstico' },
      { name: 'REST API', note: 'Integraciones, JSON-RPC, XML-RPC' },
    ],
  },
  {
    id: 'frontend', label: 'Frontend', icon: '⬡',
    items: [
      { name: 'OWL', note: 'Componentes reactivos, servicios, hooks' },
      { name: 'JavaScript', note: 'ES2022+, módulos, async/await' },
      { name: 'XML / QWeb', note: 'Vistas, reportes, plantillas' },
      { name: 'SCSS', note: 'Estilos compatibles con Odoo' },
    ],
  },
  {
    id: 'infra', label: 'Infraestructura', icon: '◻',
    items: [
      { name: 'Docker', note: 'Contenedores, Compose, entornos' },
      { name: 'Linux', note: 'Ubuntu, Debian, shell scripting' },
      { name: 'Nginx', note: 'Proxy inverso, SSL, rutas' },
      { name: 'Git', note: 'Branches, tags, flujos de trabajo' },
    ],
  },
  {
    id: 'fiscal', label: 'Localización PE', icon: '✦',
    items: [
      { name: 'SUNAT API', note: 'Consulta RUC, validaciones' },
      { name: 'PSE / OSE', note: 'Facturación electrónica UBL 2.1' },
      { name: 'Detracciones', note: 'Bienes y servicios afectos' },
      { name: 'l10n_pe', note: 'Módulo oficial + extensiones' },
    ],
  },
]

const stackGroupsEn = [
  { id: 'backend', label: 'Backend', icon: '{}', items: [
    { name: 'Python', note: 'Business logic, ORM, controllers' },
    { name: 'Odoo ORM', note: 'Models, constraints, compute fields' },
    { name: 'PostgreSQL', note: 'Queries, indexes, diagnostics' },
    { name: 'REST API', note: 'Integrations, JSON-RPC, XML-RPC' },
  ]},
  { id: 'frontend', label: 'Frontend', icon: '⬡', items: [
    { name: 'OWL', note: 'Reactive components, services, hooks' },
    { name: 'JavaScript', note: 'ES2022+, modules, async/await' },
    { name: 'XML / QWeb', note: 'Views, reports, templates' },
    { name: 'SCSS', note: 'Odoo-compatible styles' },
  ]},
  { id: 'infra', label: 'Infrastructure', icon: '◻', items: [
    { name: 'Docker', note: 'Containers, Compose, environments' },
    { name: 'Linux', note: 'Ubuntu, Debian, shell scripting' },
    { name: 'Nginx', note: 'Reverse proxy, SSL, routes' },
    { name: 'Git', note: 'Branches, tags, workflows' },
  ]},
  { id: 'fiscal', label: 'Peruvian Loc.', icon: '✦', items: [
    { name: 'SUNAT API', note: 'RUC lookup, validations' },
    { name: 'PSE / OSE', note: 'Electronic invoicing UBL 2.1' },
    { name: 'Detraction', note: 'Goods and services affected' },
    { name: 'l10n_pe', note: 'Official module + extensions' },
  ]},
]

export default function Stack({ content, lang }: Props) {
  const s = content
  const stackGroups = lang === 'es' ? stackGroupsEs : stackGroupsEn

  return (
    <section id="stack" className="py-28 bg-[var(--background)] parchment" aria-labelledby="stack-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="relative mb-16">
          <div className="absolute -top-4 left-0 chapter-num select-none" aria-hidden="true">V</div>
          <div className="relative z-10 sr">
            <SectionLabel text={s.sectionLabel} chapter={s.chapter} />
            <h2 id="stack-heading" className="font-display text-5xl xl:text-6xl text-[var(--foreground)] mt-3 leading-tight">
              {s.heading1} <span className="text-[var(--accent)]">{s.heading2}</span>
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)] max-w-lg font-sans">
              {lang === 'es' ? 'Herramientas para desarrollar, integrar y mantener soluciones Odoo.' : 'Tools for developing, integrating and maintaining Odoo solutions.'}
            </p>
          </div>
        </div>

        {/* Stack grid — manga panel style */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 border-2 border-[var(--foreground)]">
          {stackGroups.map((group, i) => (
            <div key={group.id} className="border-r-2 border-[var(--foreground)] last:border-r-0 sr" style={{ transitionDelay: `${100 + i * 80}ms` }}>
              {/* Group header */}
              <div className="flex items-center gap-3 p-5 border-b-2 border-[var(--foreground)] bg-[var(--card)]">
                <span className="font-mono text-xl text-[var(--accent)]">{group.icon}</span>
                <h3 className="font-display text-xl tracking-wide text-[var(--foreground)]">{group.label}</h3>
              </div>
              <ul className="p-5 space-y-4" role="list">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-0.5 border-b border-[var(--muted)] pb-3 last:border-b-0 last:pb-0">
                    <span className="font-display text-lg text-[var(--foreground)] leading-tight">{item.name}</span>
                    <span className="text-xs text-[var(--muted-foreground)] leading-relaxed font-sans">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className="mt-6 border-2 border-[var(--foreground)] p-5 flex flex-wrap gap-x-6 gap-y-2 items-center sr" style={{ transitionDelay: '450ms' }}>
          <span className="font-mono text-[10px] text-[var(--muted-foreground)] tracking-widest uppercase shrink-0">{lang === 'es' ? 'También uso:' : 'Also use:'}</span>
          {['VS Code', 'pgAdmin', 'Postman', 'OpenUpgrade', 'GitHub Actions', 'Figma', 'Notion'].map((t) => (
            <span key={t} className="font-sans text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-default">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
