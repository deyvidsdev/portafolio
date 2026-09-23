import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../data/translations';

type Props = {
  lang: Lang;
  links: readonly { href: string; label: string }[];
  alternateHref: string;
};

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
      const hat = root.querySelector<HTMLElement>('.brand-straw-hat');
      const aura = root.querySelectorAll<HTMLElement>('.brand-aura__ring');
      if (!hat || !aura.length) return;

      timeline = createTimeline()
        .add(hat, {
          opacity: [0, 1],
          y: [-14, 0],
          scaleX: [.5, 1.16],
          scaleY: [1.75, .86],
          rotate: [-14, 0],
          duration: 520,
          ease: 'out(4)',
        }, 0)
        .add(hat, {
          scaleX: 1,
          scaleY: 1,
          duration: 560,
          ease: 'outElastic(.9, .45)',
        }, 300)
        .add(aura, {
          opacity: [0, .78, 0],
          scale: [.35, 1.65],
          rotate: [0, 145],
          duration: 760,
          delay: stagger(65),
          ease: 'outExpo',
        }, 70);
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
            <span className="brand-initial">
              d
              <span className="brand-aura">
                <span className="brand-aura__ring brand-aura__ring--outer" />
                <span className="brand-aura__ring brand-aura__ring--inner" />
              </span>
              <span className="brand-straw-hat-positioner">
                <span className="brand-straw-hat">
                  <span className="brand-straw-hat__crown" />
                  <span className="brand-straw-hat__band" />
                  <span className="brand-straw-hat__brim" />
                </span>
              </span>
            </span>
            <span>eyvids<span className="text-[var(--accent)]">.</span>dev</span>
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
