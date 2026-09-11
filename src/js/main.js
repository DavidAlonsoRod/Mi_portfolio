(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Retardos escalonados dentro de cada grupo ---------- */
    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
        var step = Number(group.getAttribute('data-reveal-group')) || 90;
        group.querySelectorAll('[data-reveal]').forEach(function (el, i) {
            el.style.setProperty('--reveal-delay', i * step + 'ms');
        });
    });

    /* ---------- Aparición al entrar en pantalla ---------- */
    var revealEls = document.querySelectorAll('[data-reveal]');

    if (reducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(function (el) {
            el.classList.add('is-revealed');
        });
    } else {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );

        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ---------- Cabecera, progreso de scroll y volver arriba ---------- */
    var header = document.querySelector('[data-header]');
    var progress = document.querySelector('[data-progress]');
    var toTop = document.querySelector('[data-to-top]');
    var queued = false;

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        var max = document.documentElement.scrollHeight - window.innerHeight;

        if (header) header.classList.toggle('is-stuck', y > 8);
        if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
        if (toTop) toTop.classList.toggle('is-visible', y > 700);

        queued = false;
    }

    window.addEventListener(
        'scroll',
        function () {
            if (queued) return;
            queued = true;
            window.requestAnimationFrame(onScroll);
        },
        { passive: true }
    );

    onScroll();

    if (toTop) {
        toTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: reducedMotion ? 'auto' : 'smooth'
            });
        });
    }

    /* ---------- Enlace activo según la sección visible ---------- */
    var spyLinks = Array.prototype.slice.call(document.querySelectorAll('[data-spy]'));

    if (spyLinks.length && 'IntersectionObserver' in window) {
        var sections = spyLinks
            .map(function (link) {
                return document.querySelector(link.getAttribute('href'));
            })
            .filter(Boolean);

        var spy = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    spyLinks.forEach(function (link) {
                        link.classList.toggle(
                            'is-active',
                            link.getAttribute('href') === '#' + entry.target.id
                        );
                    });
                });
            },
            { threshold: 0, rootMargin: '-45% 0px -50% 0px' }
        );

        sections.forEach(function (section) {
            spy.observe(section);
        });
    }

    /* ---------- Cierra el menú móvil al navegar ---------- */
    var menuToggle = document.getElementById('menu');

    if (menuToggle) {
        document.querySelectorAll('[data-nav] a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuToggle.checked = false;
            });
        });
    }

    /* ---------- Luz que sigue al cursor sobre las tarjetas ---------- */
    if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.card').forEach(function (card) {
            card.addEventListener('pointermove', function (event) {
                var rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', event.clientX - rect.left + 'px');
                card.style.setProperty('--my', event.clientY - rect.top + 'px');
            });
        });
    }

    /* ---------- Año del footer ---------- */
    document.querySelectorAll('[data-year]').forEach(function (el) {
        el.textContent = String(new Date().getFullYear());
    });
})();
