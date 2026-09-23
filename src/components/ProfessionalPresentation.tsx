import type { translations, Lang } from '../data/translations'
type Props = { content: (typeof translations)[Lang]['presentation']; lang: Lang }

const areaIcons = ['◈', '⇢', '{}', '⬡', '≡', '✦']

export default function ProfessionalPresentation({ content, lang }: Props) {
  const p = content

  return (
    <section id="experiencia" className="py-28 bg-[var(--background)] parchment" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative mb-16">
          <div className="absolute -top-4 left-0 chapter-num select-none" aria-hidden="true">II</div>
          <div className="relative z-10">
            <SectionLabel text={p.sectionLabel} chapter={p.chapter} />
            <div className="grid lg:grid-cols-2 gap-10 mt-4">
              <h2 id="experience-heading" className="font-display text-5xl xl:text-6xl text-[var(--foreground)] leading-tight sr">
                {p.heading1} <span className="text-[var(--accent)]">{p.heading2}</span>
              </h2>
              <div className="flex items-center">
                <p className="text-base text-[var(--muted-foreground)] leading-relaxed sr" style={{ transitionDelay: '120ms' }}>
                  {p.intro}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-2 border-[var(--foreground)]">
          {p.areas.map((area, i) => (
            <div
              key={i}
              className="p-6 border-b-2 border-r-2 border-[var(--foreground)] group hover:bg-[var(--primary)] transition-colors duration-200 sr"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-2xl text-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-colors">{areaIcons[i]}</span>
                <span className="font-mono text-[10px] text-[var(--muted-foreground)] group-hover:text-[var(--primary-foreground)] opacity-50 transition-colors">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display text-xl text-[var(--foreground)] group-hover:text-[var(--primary-foreground)] mb-2 transition-colors leading-tight">{area.title}</h3>
              <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--primary-foreground)] leading-relaxed opacity-70 transition-colors">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-[var(--foreground)] flex flex-wrap items-center gap-x-6 gap-y-3 sr" style={{ transitionDelay: '500ms' }}>
          <span className="font-mono text-[10px] text-[var(--muted-foreground)] tracking-widest uppercase">
            {lang === 'es' ? 'Versiones:' : 'Versions:'}
          </span>
          {['Odoo 16', 'Odoo 17', 'Odoo 18', 'Odoo 19'].map((v) => (
            <span key={v} className="font-display text-base text-[var(--foreground)] border-2 border-[var(--border)] px-3 py-0.5 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors cursor-default">
              {v}
            </span>
          ))}
          <span className="ml-auto font-mono text-[10px] text-[var(--muted-foreground)] opacity-50">Enterprise · Community</span>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ text, chapter }: { text: string; chapter?: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      {chapter && <span className="font-mono text-[10px] text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 tracking-widest">{chapter}</span>}
      <span className="w-5 h-0.5 bg-[var(--accent)] inline-block" />
      <span className="font-mono text-xs text-[var(--accent)] tracking-[0.15em] uppercase">{text}</span>
    </div>
  )
}
