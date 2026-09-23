import { useState } from 'react'
import { SectionLabel } from './ProfessionalPresentation'
import type { translations, Lang } from '../data/translations'
type Props = { content: (typeof translations)[Lang]['specialties']; lang: Lang }

const icons = ['◈', '⬡', '✦', '⇢', '⇋', '◻']

export default function Specialties({ content, lang }: Props) {
  const s = content
  const [activeIdx, setActiveIdx] = useState(0)
  const current = s.items[activeIdx]

  return (
    <section id="especialidades" className="py-28 bg-[var(--card)]" aria-labelledby="spec-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative mb-16">
          <div className="absolute -top-4 left-0 chapter-num select-none" aria-hidden="true">III</div>
          <div className="relative z-10 sr">
            <SectionLabel text={s.sectionLabel} chapter={s.chapter} />
            <h2 id="spec-heading" className="font-display text-5xl xl:text-6xl text-[var(--foreground)] mt-3 leading-tight">
              {s.heading1} <span className="text-[var(--accent)]">{s.heading2}</span>
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)] max-w-lg font-sans">
              {lang === 'es' ? 'Selecciona una especialidad para conocer mi enfoque técnico.' : 'Select a specialty to explore my technical approach.'}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0 border-2 border-[var(--foreground)]">
          {/* Left */}
          <div className="border-r-2 border-[var(--foreground)]">
            {s.items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left flex items-center gap-4 p-5 border-b-2 border-[var(--foreground)] last:border-b-0 transition-colors duration-150 ${
                  activeIdx === i
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                    : 'bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--card)]'
                }`}
                aria-current={activeIdx === i ? 'true' : undefined}
              >
                <span className="font-mono text-2xl shrink-0 text-[var(--accent)]">{icons[i]}</span>
                <div className="min-w-0">
                  <p className="font-display text-xl leading-tight">{item.title}</p>
                  <p className={`font-mono text-[10px] tracking-widest uppercase ${activeIdx === i ? 'text-[var(--primary-foreground)] opacity-60' : 'text-[var(--muted-foreground)]'}`}>{item.tag}</p>
                </div>
                <span className={`ml-auto font-mono text-[10px] shrink-0 ${activeIdx === i ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)]'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="bg-[var(--background)] flex flex-col" aria-live="polite">
            <div className="bg-[var(--accent)] px-6 py-4 flex items-center gap-3">
              <span className="font-mono text-2xl text-[var(--accent-foreground)]">{icons[activeIdx]}</span>
              <div>
                <p className="font-display text-2xl text-[var(--accent-foreground)] leading-tight">{current.title}</p>
                <p className="font-mono text-[10px] text-[var(--accent-foreground)] opacity-70 tracking-widest uppercase">{current.tag}</p>
              </div>
            </div>

            <div className="p-6 lg:p-8 flex flex-col gap-6 flex-1">
              <p className="text-[var(--foreground)] opacity-65 leading-relaxed font-sans">{current.summary}</p>

              <div>
                <p className="font-mono text-[10px] text-[var(--muted-foreground)] tracking-widest uppercase mb-3 border-b-2 border-[var(--foreground)] pb-1">
                  {lang === 'es' ? 'Áreas de trabajo' : 'Areas of work'}
                </p>
                <ul className="space-y-2">
                  {current.points.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-[var(--foreground)] opacity-80 font-sans">
                      <span className="text-[var(--accent)] font-mono shrink-0 mt-0.5">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
