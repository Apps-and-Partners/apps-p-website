/* ============================================================
   Apps and Partners — Main JS
   ============================================================ */

(function () {
  'use strict';

  /* ── Active nav link ────────────────────────────────────── */
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Service tabs (service.html) ────────────────────────── */
  const tabs     = document.querySelectorAll('.svc-tab');
  const sections = document.querySelectorAll('.svc-section');

  if (tabs.length && sections.length) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        sections.forEach(function (s) { s.classList.remove('active'); });
        tab.classList.add('active');
        if (sections[i]) sections[i].classList.add('active');
      });
    });
  }

  /* ── Fade-up on scroll (Intersection Observer) ──────────── */
  if ('IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '.svc-card, .phil-card, .award-item, .policy-item, .svc-section.active .svc-header'
    );
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ── Smooth scroll for in-page anchor links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

}());
