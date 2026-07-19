/* O link "experiência" do menu (e chegar na página com #experiencia) abre todos os cargos,
   e o marcador de página atual do menu acompanha a seção visível (início vs experiência). */
(function () {
  function abreTudo() {
    Array.prototype.forEach.call(document.querySelectorAll('details.item'), function (d) { d.open = true; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (location.hash === '#experiencia') abreTudo();
    Array.prototype.forEach.call(document.querySelectorAll('.topo a[href$="#experiencia"]'), function (a) {
      a.addEventListener('click', abreTudo);
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
    if (location.hash === '#experiencia') abreTudo();
  });
})();
