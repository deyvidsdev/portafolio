import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../data/translations';

type Props = {
  lang: Lang;
  links: readonly { href: string; label: string }[];
  alternateHref: string;
};

export default function Nav({ lang, links, alternateHref }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
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

  function toggleTheme() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('portfolio-theme', next ? 'dark' : 'light'); } catch { /* Session-only fallback. */ }
  }

  return (
    <nav aria-label={es ? 'Navegación principal' : 'Main navigation'} className="fixed inset-x-0 top-0 z-50 bg-[var(--primary)] text-[var(--primary-foreground)] border-b-2 border-white/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-3">
        <a href="#inicio" className="font-display text-2xl tracking-wider shrink-0" aria-label={es ? 'deyvids.dev — Inicio' : 'deyvids.dev — Home'}>deyvids<span className="text-[var(--accent)]">.</span>dev</a>
        <ul className="hidden lg:flex items-center gap-5">
          {links.map(link => <li key={link.href}><a className="font-display text-lg hover:text-[var(--accent)] transition-colors" href={link.href}>{link.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={alternateHref} hrefLang={es ? 'en' : 'es'} aria-label={es ? 'Switch to English' : 'Cambiar a español'} className="min-w-11 min-h-11 flex items-center justify-center border border-white/50 font-mono text-sm">{es ? 'EN' : 'ES'}</a>
          <button onClick={toggleTheme} aria-label={es ? 'Alternar tema oscuro' : 'Toggle dark theme'} aria-pressed={darkMode} className="min-w-11 min-h-11 border border-white/50 text-xl">{darkMode ? '☀' : '☾'}</button>
          <button ref={menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label={es ? 'Menú' : 'Menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" className="lg:hidden min-w-11 min-h-11 border border-white/50 text-xl">{menuOpen ? '×' : '☰'}</button>
        </div>
      </div>
      <ul id="mobile-menu" hidden={!menuOpen} className="lg:hidden bg-[var(--background)] text-[var(--foreground)] border-t-2 border-[var(--border)]">
        {links.map(link => <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)} className="block px-5 py-3 font-display text-2xl border-b border-[var(--border)]">{link.label}</a></li>)}
      </ul>
    </nav>
  );
}
