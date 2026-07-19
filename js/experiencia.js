/* O link "experiência" do menu (e chegar na página com #experiencia) abre todos os cargos. */
(function () {
  function abreTudo() {
    Array.prototype.forEach.call(document.querySelectorAll('details.item'), function (d) { d.open = true; });
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (location.hash === '#experiencia') abreTudo();
    Array.prototype.forEach.call(document.querySelectorAll('.topo a[href$="#experiencia"]'), function (a) {
      a.addEventListener('click', abreTudo);
    });
  });
  window.addEventListener('hashchange', function () {
    if (location.hash === '#experiencia') abreTudo();
  });
})();
