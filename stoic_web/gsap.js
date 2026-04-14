// GSAP entrance animation
window.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl
    .to('#topOrnament', { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
    .from('#topOrnament .line', { scaleX: 0, transformOrigin: 'center', duration: 0.7, stagger: 0.1 }, '<+0.2')
    .to('#brand', { opacity: 1, y: 0, duration: 0.6 }, '<+0.3')
    .to('#statueLeft', { opacity: 1, x: 0, duration: 0.7 }, '<+0.2')
    .to('#statueRight', { opacity: 1, x: 0, duration: 0.7 }, '<')
    .to('#dayLabel', { opacity: 1, y: 0, duration: 0.6 }, '<+0.1')
    .to('#divider1', { opacity: 1, duration: 0.5 }, '<+0.2')
    .from('#divider1 hr', { scaleX: 0, transformOrigin: 'center', duration: 0.6 }, '<')
    .to('#quoteWrap', { opacity: 1, y: 0, duration: 0.8 }, '<+0.3')
    .to('#authorWrap', { opacity: 1, y: 0, duration: 0.7 }, '<+0.25')
    .to('#divider2', { opacity: 1, duration: 0.5 }, '<+0.2')
    .to('#bottomOrnament', { opacity: 1, duration: 0.5 }, '<+0.1')
    .to('#navDots', { opacity: 1, duration: 0.5 }, '<')
    .to('#navArrows', { opacity: 1, duration: 0.5 }, '<');

  // Set initial states for GSAP
  gsap.set('#topOrnament', { y: -10 });
  gsap.set('#brand', { y: 8 });
  gsap.set(['#statueLeft'], { x: -20 });
  gsap.set(['#statueRight'], { x: 20 });
  gsap.set('#dayLabel', { y: 8 });
  gsap.set('#quoteWrap', { y: 16 });
  gsap.set('#authorWrap', { y: 12 });
});

// Ambient quote mark float
gsap.to('.quote-mark', {
  y: -5,
  duration: 3.5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
  delay: 2,
});

// Subtle statue breathe
gsap.to('#statueLeft', {
  y: -4,
  duration: 4,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
  delay: 1,
});
gsap.to('#statueRight', {
  y: -4,
  duration: 4.3,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
  delay: 1.5,
});

// Keyboard nav
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate(-1);
});
