import type { translations, Lang } from '../data/translations'
type Props = { content: (typeof translations)[Lang]['hero']; lang: Lang }

export default function Hero({ content, lang }: Props) {
  const h = content
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[var(--primary)]" aria-label={lang === 'es' ? 'Presentación principal' : 'Introduction'}>
      {/* Speed lines background */}
      <div className="absolute inset-0 speed-lines pointer-events-none" />
      {/* Halftone overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.9), transparent)' }} />

      {/* Decorative chapter ghost */}
      <div className="absolute top-12 right-0 chapter-num select-none" aria-hidden="true">I</div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">

          {/* Left */}
          <div>
            {/* Chapter label */}
            <div className="inline-flex items-center gap-3 mb-6 sr" style={{ transitionDelay: '60ms' }}>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5">{h.chapter}</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--primary-foreground)] opacity-60">{h.subtitle}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl text-[var(--primary-foreground)] leading-tight mb-6 sr" style={{ transitionDelay: '140ms' }}>
              {h.h1a}{' '}
              <span className="text-[var(--accent)]">{h.h1b}</span>{' '}
              {h.h1c}{' '}
              <span className="relative inline-block">
                {h.h1d}.
                <span className="absolute bottom-0 left-0 right-0 h-[4px] bg-[var(--gold,#C9922A)]" style={{ bottom: '-2px' }} />
              </span>
            </h1>

            <p className="text-[var(--primary-foreground)] opacity-75 text-base leading-relaxed mb-10 max-w-lg font-sans sr" style={{ transitionDelay: '220ms' }}>
              {h.desc}
            </p>

            <div className="flex flex-wrap gap-4 sr" style={{ transitionDelay: '300ms' }}>
              <a href="#proyectos" className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] font-display text-xl tracking-wide border-2 border-[var(--accent-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors duration-150">
                {h.ctaPrimary}
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--primary-foreground)] font-display text-xl tracking-wide border-2 border-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors duration-150">
                {h.ctaSecondary}
              </a>
            </div>


          </div>

          {/* Right: TechMap */}
          <div className="flex items-center justify-center sr-fade" style={{ transitionDelay: '260ms' }}>
            <TechMapManga content={content} />
          </div>
        </div>
      </div>


    </section>
  )
}

/* ── Tech Map manga style ── */
type Node = { id: string; x: number; y: number; label: string; sublabel: string; main?: boolean }
type Edge = [string, string]

const nodes: Node[] = [
  { id: 'odoo',     x: 50, y: 48, label: 'Odoo',       sublabel: '16–19',    main: true },
  { id: 'owl',      x: 72, y: 22, label: 'OWL',        sublabel: 'Frontend'  },
  { id: 'python',   x: 22, y: 22, label: 'Python',     sublabel: 'Backend'   },
  { id: 'postgres', x: 14, y: 60, label: 'PostgreSQL', sublabel: 'Database'  },
  { id: 'sunat',    x: 50, y: 80, label: 'SUNAT',      sublabel: 'Fiscal PE' },
  { id: 'docker',   x: 80, y: 68, label: 'Docker',     sublabel: 'Deploy'    },
  { id: 'apis',     x: 88, y: 40, label: 'APIs',       sublabel: 'REST'      },
]

const edges: Edge[] = [
  ['odoo','owl'],['odoo','python'],['odoo','postgres'],
  ['odoo','sunat'],['odoo','docker'],['odoo','apis'],
  ['python','postgres'],['owl','apis'],['docker','apis'],
]

function TechMapManga({ content }: Pick<Props, 'content'>) {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]))
  const W = 110; const H = 100
  const tx = (p: number) => (p / 100) * W
  const ty = (p: number) => (p / 100) * H

  return (
    <div className="relative w-full max-w-md aspect-square manga-panel bg-[var(--primary)] p-2" style={{ borderColor: 'rgba(237,232,223,0.35)' }}>
      <span className="absolute top-2 left-3 font-mono text-[8px] text-[var(--primary-foreground)] opacity-30">ODOO · PYTHON · OWL</span>
      <span className="absolute bottom-2 right-3 font-mono text-[8px] text-[var(--primary-foreground)] opacity-30">{content.mapCorner}</span>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" role="img" aria-label={content.mapLabel}>
        <defs>
          <pattern id="mgrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(237,232,223,0.08)" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#mgrid)" />

        {edges.map(([a, b]) => {
          const na = map[a]; const nb = map[b]; if (!na || !nb) return null
          const mx = (na.x + nb.x) / 2; const my = (na.y + nb.y) / 2 - 5
          return (
            <path key={`${a}-${b}`}
              d={`M ${tx(na.x)} ${ty(na.y)} Q ${tx(mx)} ${ty(my)} ${tx(nb.x)} ${ty(nb.y)}`}
              fill="none" stroke="rgba(200,67,42,0.5)" strokeWidth="0.6" className="route-line" />
          )
        })}

        {nodes.map((node) => {
          const cx = tx(node.x); const cy = ty(node.y)
          const r = node.main ? 7 : 4.5
          return (
            <g key={node.id}>
              {node.main && <circle cx={cx} cy={cy} r={r + 3} fill="none" stroke="rgba(200,67,42,0.25)" strokeWidth="0.5" />}
              <circle cx={cx} cy={cy} r={r} fill={node.main ? '#C8432A' : 'rgba(237,232,223,0.12)'} stroke="rgba(237,232,223,0.5)" strokeWidth={node.main ? '1' : '0.5'} />
              <text x={cx} y={cy - r - 1.5} textAnchor="middle" fontSize="3.4" fontWeight="700" fill="rgba(237,232,223,0.9)" fontFamily="'Bangers', cursive" letterSpacing="0.05em">{node.label}</text>
              <text x={cx} y={cy + r + 3.5} textAnchor="middle" fontSize="2.3" fill="rgba(237,232,223,0.5)" fontFamily="'JetBrains Mono', monospace">{node.sublabel}</text>
              {node.main && <circle cx={cx} cy={cy} r="1.5" fill="rgba(237,232,223,0.9)" />}
            </g>
          )
        })}

        <g transform="translate(8,82)">
          <circle cx="0" cy="0" r="5.5" fill="none" stroke="rgba(237,232,223,0.2)" strokeWidth="0.4" />
          <path d="M0,-5 L0.9,-1 L0,0 L-0.9,-1Z" fill="#C8432A" />
          <path d="M0,5 L0.9,1 L0,0 L-0.9,1Z" fill="rgba(237,232,223,0.3)" />
          <path d="M-5,0 L-1,-0.8 L0,0 L-1,0.8Z" fill="rgba(237,232,223,0.3)" />
          <path d="M5,0 L1,-0.8 L0,0 L1,0.8Z" fill="rgba(237,232,223,0.3)" />
          <circle cx="0" cy="0" r="0.8" fill="rgba(237,232,223,0.8)" />
          <text x="0" y="-7" textAnchor="middle" fontSize="2.2" fill="rgba(237,232,223,0.5)" fontFamily="'JetBrains Mono',monospace">N</text>
        </g>
      </svg>
    </div>
  )
}
