import type { ReactNode } from 'react'
import type { translations, Lang } from '../data/translations'
type Props = { content: (typeof translations)[Lang]['hero']; lang: Lang; children: ReactNode }

export default function Hero({ content, lang, children }: Props) {
  const h = content
  return (
    <section id="inicio" className="hero-voyage" aria-label={lang === 'es' ? 'Presentación principal' : 'Introduction'}>
      <div className="hero-voyage__inner">
        <div className="hero-voyage__grid">

          {/* Left */}
          <div className="hero-voyage__copy">
            {/* Chapter label */}
            <div className="inline-flex items-center gap-3 mb-6 sr">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5">{h.chapter}</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--primary-foreground)] opacity-60">{h.subtitle}</span>
            </div>

            <h1 className="hero-voyage__title font-display text-[var(--primary-foreground)] leading-tight mb-6 sr">
              {h.h1a}{' '}
              <span className="text-[var(--accent)]">{h.h1b}</span>{' '}
              {h.h1c}{' '}
              <span className="relative inline-block">
                {h.h1d}.
                <span className="absolute bottom-0 left-0 right-0 h-[4px] bg-[var(--gold,#C9922A)]" style={{ bottom: '-2px' }} />
              </span>
            </h1>

            <p className="text-[var(--primary-foreground)] opacity-75 text-base leading-relaxed mb-10 max-w-lg font-sans sr">
              {h.desc}
            </p>

            <div className="flex flex-wrap gap-4 sr">
              <a href="#proyectos" className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] font-display text-xl tracking-wide border-2 border-[var(--accent-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors duration-150">
                {h.ctaPrimary}
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--primary-foreground)] font-display text-xl tracking-wide border-2 border-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors duration-150">
                {h.ctaSecondary}
              </a>
            </div>


          </div>

          {/* Right: TechMap */}
          <div className="hero-voyage__chart">{children}</div>
        </div>
      </div>


    </section>
  )
}
