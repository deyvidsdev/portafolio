import { useState } from 'react'
import { SectionLabel } from './ProfessionalPresentation'
import type { translations, Lang } from '../data/translations'
type Props = { content: (typeof translations)[Lang]['methodology']; lang: Lang }

export default function Methodology({ content }: Props) {
  const m = content
  const steps = m.steps.map((s, i) => ({ ...s, id: i + 1 }))
  const [active, setActive] = useState(1)
  const current = steps.find((s) => s.id === active)!

  return (
    <section id="metodologia" className="py-28 bg-[var(--primary)]" aria-labelledby="method-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative mb-16">
          <div className="absolute -top-4 left-0 chapter-num select-none" aria-hidden="true" style={{ color: 'rgba(237,232,223,0.06)' }}>VI</div>
          <div className="relative z-10 sr">
            <SectionLabel text={m.sectionLabel} chapter={m.chapter} />
            <h2 id="method-heading" className="font-display text-5xl xl:text-6xl text-[var(--primary-foreground)] mt-3 leading-tight">
              {m.heading1} <span className="text-[var(--accent)]">{m.heading2}</span>
            </h2>
          </div>
        </div>

        {/* Step navigator */}
        <div className="grid grid-cols-3 sm:grid-cols-6 border-2 mb-0 sr" style={{ borderColor: 'rgba(237,232,223,0.3)' }}>
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActive(step.id)}
              aria-current={active === step.id ? 'step' : undefined}
              className={`flex flex-col items-center gap-2 p-4 border-r-2 last:border-r-0 transition-colors duration-150 ${
                active === step.id
                  ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                  : 'text-[var(--primary-foreground)] hover:bg-[rgba(237,232,223,0.08)]'
              }`}
              style={{ borderColor: 'rgba(237,232,223,0.2)' }}
            >
              <span className={`font-mono text-xl ${active === step.id ? 'text-[var(--accent-foreground)]' : 'text-[var(--accent)]'}`}>{step.icon}</span>
              <span className="font-display text-sm leading-tight text-center">{step.label}</span>
              <span className={`font-mono text-[9px] ${active === step.id ? 'opacity-70' : 'opacity-30'}`}>{String(step.id).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="manga-panel bg-[var(--background)] sr" style={{ borderColor: 'rgba(237,232,223,0.3)', borderTopWidth: 0 }}>
          <div className="grid lg:grid-cols-[auto_1fr] gap-0">
            {/* Big step number */}
            <div className="hidden lg:flex items-center justify-center w-28 border-r-2 border-[var(--foreground)] bg-[var(--accent)]">
              <span className="font-display text-7xl text-[var(--accent-foreground)] opacity-80">{String(current.id).padStart(2, '0')}</span>
            </div>

            <div className="p-6 sm:p-8 lg:p-10" aria-live="polite">
              <h3 className="font-display text-4xl text-[var(--foreground)] mb-5 leading-tight">{current.label.toUpperCase()}</h3>
              <p className="text-[var(--foreground)] opacity-70 leading-relaxed mb-6 font-sans max-w-2xl">{current.desc}</p>
              <div className="flex items-start gap-3 border-l-4 border-[var(--accent)] pl-4">
                <span className="font-mono text-[10px] text-[var(--accent)] tracking-widest uppercase shrink-0 mt-0.5">{m.outputLabel}</span>
                <p className="text-sm text-[var(--foreground)] font-sans">{current.output}</p>
              </div>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="border-t-2 border-[var(--foreground)] px-4 sm:px-8 py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <button
              onClick={() => setActive((a) => Math.max(1, a - 1))}
              disabled={active === 1}
              className="font-display text-sm sm:text-lg text-[var(--accent)] hover:text-[var(--foreground)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              {m.prev}
            </button>
            <span className="font-mono text-[10px] sm:text-xs text-[var(--foreground)] opacity-70">
              {m.phaseLabel} {String(active).padStart(2,'0')} / {String(steps.length).padStart(2,'0')}
            </span>
            <button
              onClick={() => setActive((a) => Math.min(steps.length, a + 1))}
              disabled={active === steps.length}
              className="font-display text-sm sm:text-lg text-[var(--accent)] hover:text-[var(--foreground)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              {m.next}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
