import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../data/translations';

type Props = {
  lang: Lang;
  links: readonly { href: string; label: string }[];
  alternateHref: string;
};

const brandName = 'deyvids.dev';

export default function Nav({ lang, links, alternateHref }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const brand = useRef<HTMLAnchorElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const languageButton = useRef<HTMLButtonElement>(null);
  const languagePicker = useRef<HTMLDivElement>(null);
  const es = lang === 'es';

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      let stored: string | null = null;
      try { stored = localStorage.getItem('portfolio-theme'); } catch { /* Storage may be blocked. */ }
      const dark = stored ? stored === 'dark' : preference.matches;
      document.documentElement.classList.toggle('dark', dark);
      setDarkMode(dark);
    };
    preference.addEventListener('change', sync);
    return () => preference.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);

  useEffect(() => {
    if (!languageOpen) return;
    const close = (event: PointerEvent) => {
      if (!languagePicker.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const closeWithKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLanguageOpen(false);
        languageButton.current?.focus();
      }
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', closeWithKeyboard);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', closeWithKeyboard);
    };
  }, [languageOpen]);

  useEffect(() => {
    const root = brand.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let active = true;
    let timeline: { revert: () => unknown } | undefined;

    void import('animejs').then(({ createTimeline, stagger }) => {
      if (!active) return;
      const letters = root.querySelectorAll<HTMLElement>('.brand-letter');
      const hat = root.querySelector<HTMLElement>('.brand-straw-hat');
      const aura = root.querySelectorAll<HTMLElement>('.brand-aura__ring');
      const hakiBolts = root.querySelectorAll<HTMLElement>('.brand-haki__bolt');
      if (!letters.length || !hat || !aura.length || !hakiBolts.length) return;

      timeline = createTimeline()
        .add(letters, {
          opacity: [0, 1],
          y: [10, 0],
          scaleX: [.62, 1.08],
          scaleY: [1.55, .9],
          duration: 390,
          delay: stagger(32),
          ease: 'out(4)',
        }, 0)
        .add(letters, {
          scaleX: 1,
          scaleY: 1,
          duration: 430,
          delay: stagger(22),
          ease: 'outElastic(.85, .55)',
        }, 230)
        .add(hat, {
          opacity: [0, 1],
          y: [-18, 0],
          scaleX: [.5, 1.16],
          scaleY: [1.75, .86],
          rotate: [-14, 0],
          duration: 520,
          ease: 'out(4)',
        }, 80)
        .add(hat, {
          scaleX: 1,
          scaleY: 1,
          duration: 560,
          ease: 'outElastic(.9, .45)',
        }, 370)
        .add(aura, {
          opacity: [0, .92, 0],
          scale: [.25, 1.9],
          rotate: [0, 165],
          duration: 680,
          delay: stagger(65),
          ease: 'outExpo',
        }, 400)
        .add(hakiBolts, {
          opacity: [0, 1, 0],
          scaleX: [0, 1.15],
          duration: 460,
          delay: stagger(38),
          ease: 'outExpo',
        }, 430);
    });

    return () => {
      active = false;
      timeline?.revert();
    };
  }, []);

  function toggleTheme() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('portfolio-theme', next ? 'dark' : 'light'); } catch { /* Session-only fallback. */ }
  }

  return (
    <nav aria-label={es ? 'Navegación principal' : 'Main navigation'} className="fixed inset-x-0 top-0 z-50 bg-[var(--primary)] text-[var(--primary-foreground)] border-b-2 border-white/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-3">
        <a
          ref={brand}
          href="#inicio"
          className="brand-home font-display text-2xl tracking-wider shrink-0"
          aria-label={es ? 'deyvids.dev - Inicio' : 'deyvids.dev - Home'}
        >
          <span className="brand-wordmark" aria-hidden="true">
            {[...brandName].map((character, index) => (
              <span
                key={`${character}-${index}`}
                className={`brand-letter ${index === 0 ? 'brand-initial' : ''} ${character === '.' ? 'brand-letter--accent' : ''}`}
              >
                {character}
                {index === 0 && (
                  <>
                    <span className="brand-aura">
                      <span className="brand-aura__ring brand-aura__ring--outer" />
                      <span className="brand-aura__ring brand-aura__ring--inner" />
                    </span>
                    <span className="brand-haki">
                      <span className="brand-haki__ray brand-haki__ray--one"><span className="brand-haki__bolt" /></span>
                      <span className="brand-haki__ray brand-haki__ray--two"><span className="brand-haki__bolt" /></span>
                      <span className="brand-haki__ray brand-haki__ray--three"><span className="brand-haki__bolt" /></span>
                      <span className="brand-haki__ray brand-haki__ray--four"><span className="brand-haki__bolt" /></span>
                    </span>
                    <span className="brand-straw-hat-positioner">
                      <span className="brand-straw-hat">
                        <span className="brand-straw-hat__crown" />
                        <span className="brand-straw-hat__band" />
                        <span className="brand-straw-hat__brim" />
                      </span>
                    </span>
                  </>
                )}
              </span>
            ))}
          </span>
        </a>
        <ul className="hidden lg:flex items-center gap-5">
          {links.map(link => <li key={link.href}><a className="font-display text-lg hover:text-[var(--accent)] transition-colors" href={link.href}>{link.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <div ref={languagePicker} className="language-picker">
            <button
              ref={languageButton}
              type="button"
              aria-label={es ? 'Seleccionar idioma. Actual: español' : 'Select language. Current: English'}
              aria-expanded={languageOpen}
              aria-controls="language-menu"
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setMenuOpen(false);
              }}
              className="language-button"
            >
              <span>{es ? 'ES' : 'EN'}</span>
              <span className="language-button__chevron" aria-hidden="true">⌄</span>
            </button>
            <div id="language-menu" hidden={!languageOpen} className="language-menu">
              {es ? (
                <>
                  <span className="language-option is-current" lang="es" aria-current="page"><span>Español</span><span>ES</span></span>
                  <a className="language-option" href={alternateHref} hrefLang="en" lang="en"><span>English</span><span>EN</span></a>
                </>
              ) : (
                <>
                  <a className="language-option" href={alternateHref} hrefLang="es" lang="es"><span>Español</span><span>ES</span></a>
                  <span className="language-option is-current" lang="en" aria-current="page"><span>English</span><span>EN</span></span>
                </>
              )}
            </div>
          </div>
          <button onClick={toggleTheme} aria-label={es ? 'Alternar tema oscuro' : 'Toggle dark theme'} aria-pressed={darkMode} className="min-w-11 min-h-11 border border-white/50 text-xl">{darkMode ? '☀' : '☾'}</button>
          <button ref={menuButton} onClick={() => { setMenuOpen(!menuOpen); setLanguageOpen(false); }} aria-label={es ? 'Menú' : 'Menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" className="lg:hidden min-w-11 min-h-11 border border-white/50 text-xl">{menuOpen ? '×' : '☰'}</button>
        </div>
      </div>
      <ul id="mobile-menu" hidden={!menuOpen} className="lg:hidden bg-[var(--background)] text-[var(--foreground)] border-t-2 border-[var(--border)]">
        {links.map(link => <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)} className="block px-5 py-3 font-display text-2xl border-b border-[var(--border)]">{link.label}</a></li>)}
      </ul>
    </nav>
  );
}
