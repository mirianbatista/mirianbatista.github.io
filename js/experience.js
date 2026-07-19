/* The "experiência" menu link (and arriving with #experiencia in the URL) opens every job entry,
   and the current-page marker in the menu follows the visible section (home vs experience). */
(function () {
  function openAll() {
    Array.prototype.forEach.call(document.querySelectorAll('details.item'), function (d) { d.open = true; });
  }

  /* The anchor lands exactly 1.1rem below the bar (same breathing room as page titles),
     measuring the bar's real fractional height instead of estimating it. */
  function setAnchor() {
    var topbar = document.querySelector('.topbar');
    if (!topbar) return;
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.setProperty('--anchor', (topbar.getBoundingClientRect().height + 1.1 * rem) + 'px');
  }

  /* Anchor scrolling rounds to whole pixels; this nudge zeroes out the remainder. */
  function fixAnchorRounding() {
    if (location.hash !== '#experiencia') return;
    var topbar = document.querySelector('.topbar');
    var section = document.getElementById('experiencia');
    if (!topbar || !section) return;
    requestAnimationFrame(function () {
      var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      var delta = section.getBoundingClientRect().top - (topbar.getBoundingClientRect().bottom + 1.1 * rem);
      if (Math.abs(delta) > 0.05) window.scrollBy(0, delta);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setAnchor();
    window.addEventListener('resize', setAnchor);

    if (location.hash === '#experiencia') { openAll(); fixAnchorRounding(); }
    Array.prototype.forEach.call(document.querySelectorAll('.topbar a[href$="#experiencia"]'), function (a) {
      a.addEventListener('click', function () { openAll(); fixAnchorRounding(); });
    });

    var homeLink = document.querySelector('.topbar a[href="/"]');
    var expLink = document.querySelector('.topbar a[href$="#experiencia"]');
    var section = document.getElementById('experiencia');
    if (homeLink && expLink && section && 'IntersectionObserver' in window) {
      var setCurrent = function (link) {
        homeLink.removeAttribute('aria-current');
        expLink.removeAttribute('aria-current');
        link.setAttribute('aria-current', 'page');
      };
      new IntersectionObserver(function (entries) {
        setCurrent(entries[0].isIntersecting ? expLink : homeLink);
      }, { rootMargin: '-35% 0px -55% 0px' }).observe(section);
    }
  });

  window.addEventListener('hashchange', function () {
    if (location.hash === '#experiencia') { openAll(); fixAnchorRounding(); }
  });
})();
