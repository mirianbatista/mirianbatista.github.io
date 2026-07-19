/* O link "experiência" do menu (e chegar na página com #experiencia) abre todos os cargos,
   e o marcador de página atual do menu acompanha a seção visível (início vs experiência). */
(function () {
  function abreTudo() {
    Array.prototype.forEach.call(document.querySelectorAll('details.item'), function (d) { d.open = true; });
  }

  /* A âncora fica exatamente a 1.1rem da barra (o mesmo respiro dos títulos de página),
     medindo a altura real da barra (fracionária) em vez de estimar. */
  function ajustaAncora() {
    var topo = document.querySelector('.topo');
    if (!topo) return;
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.setProperty('--ancora', (topo.getBoundingClientRect().height + 1.1 * rem) + 'px');
  }

  /* O scroll da âncora arredonda pra pixel inteiro; este ajuste fino zera o resto. */
  function corrigeAncora() {
    if (location.hash !== '#experiencia') return;
    var topo = document.querySelector('.topo');
    var secao = document.getElementById('experiencia');
    if (!topo || !secao) return;
    requestAnimationFrame(function () {
      var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      var delta = secao.getBoundingClientRect().top - (topo.getBoundingClientRect().bottom + 1.1 * rem);
      if (Math.abs(delta) > 0.05) window.scrollBy(0, delta);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    ajustaAncora();
    window.addEventListener('resize', ajustaAncora);

    if (location.hash === '#experiencia') { abreTudo(); corrigeAncora(); }
    Array.prototype.forEach.call(document.querySelectorAll('.topo a[href$="#experiencia"]'), function (a) {
      a.addEventListener('click', function () { abreTudo(); corrigeAncora(); });
    });

    var linkInicio = document.querySelector('.topo a[href="/"]');
    var linkExp = document.querySelector('.topo a[href$="#experiencia"]');
    var secao = document.getElementById('experiencia');
    if (linkInicio && linkExp && secao && 'IntersectionObserver' in window) {
      var marca = function (link) {
        linkInicio.removeAttribute('aria-current');
        linkExp.removeAttribute('aria-current');
        link.setAttribute('aria-current', 'page');
      };
      new IntersectionObserver(function (entradas) {
        marca(entradas[0].isIntersecting ? linkExp : linkInicio);
      }, { rootMargin: '-35% 0px -55% 0px' }).observe(secao);
    }
  });

  window.addEventListener('hashchange', function () {
    if (location.hash === '#experiencia') { abreTudo(); corrigeAncora(); }
  });
})();
