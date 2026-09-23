/** Progressive enhancement: content is visible even if observation or animation fails. */
export function setupScrollReveal() {
  if (!('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selector = '.sr, .sr-fade, .sr-left, [data-reveal]';
  const active = new Map<Element, Animation>();
  const seen = new WeakSet<Element>();
  let keyboardNavigation = false;

  function cancelAnimations() {
    active.forEach(animation => animation.cancel());
    active.clear();
  }

  const observer = new IntersectionObserver(entries => {
    let stagger = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target as HTMLElement;
      observer.unobserve(element);
      if (seen.has(element)) continue;
      seen.add(element);
      if (motion.matches || keyboardNavigation || element.contains(document.activeElement)) continue;

      // Preserve each block's own text opacity, and never leave an invisible fill state.
      const opacity = getComputedStyle(element).opacity;
      const distance = window.innerWidth < 640 ? 12 : 20;
      try {
        const animation = element.animate([
          { opacity: 0, transform: `translateY(${distance}px)` },
          { opacity, transform: 'translateY(0)' },
        ], {
          duration: 420,
          delay: Math.min(stagger++ * 55, 165),
          easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
          fill: 'backwards',
        });
        active.set(element, animation);
        animation.onfinish = animation.oncancel = () => active.delete(element);
      } catch { /* Keep the server-rendered content visible if animation is unavailable. */ }
    }
  }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

  // Do not hide or replay content already visible on load, including anchor destinations.
  document.querySelectorAll<HTMLElement>(selector).forEach(element => {
    if (element.parentElement?.closest(selector)) return;
    if (element.getBoundingClientRect().top < window.innerHeight) seen.add(element);
    else observer.observe(element);
  });

  function onMotionChange() {
    if (motion.matches) {
      observer.disconnect();
      cancelAnimations();
    }
  }
  function onKeyDown(event: KeyboardEvent) {
    if (['Tab', 'Enter', ' ', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End'].includes(event.key)) {
      keyboardNavigation = true;
      cancelAnimations();
    }
  }
  function onPointerInput() { keyboardNavigation = false; }
  function onFocus() { cancelAnimations(); }

  motion.addEventListener('change', onMotionChange);
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('focusin', onFocus);
  document.addEventListener('pointerdown', onPointerInput, { passive: true });
  document.addEventListener('wheel', onPointerInput, { passive: true });
  onMotionChange();

  return () => {
    observer.disconnect();
    cancelAnimations();
    motion.removeEventListener('change', onMotionChange);
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('focusin', onFocus);
    document.removeEventListener('pointerdown', onPointerInput);
    document.removeEventListener('wheel', onPointerInput);
  };
}
