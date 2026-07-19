/* Menu de categorias do blog: gerado a partir dos data-categoria dos posts listados. Sem JS, todos os posts aparecem. */
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('categorias');
  var posts = Array.prototype.slice.call(document.querySelectorAll('.posts [data-categoria]'));
  if (!menu || posts.length === 0) return;

  var categorias = [];
  posts.forEach(function (p) {
    var c = p.dataset.categoria;
    if (categorias.indexOf(c) === -1) categorias.push(c);
  });

  function criaBotao(rotulo, categoria) {
    var b = document.createElement('button');
    b.textContent = rotulo;
    b.setAttribute('aria-pressed', categoria === null ? 'true' : 'false');
    b.addEventListener('click', function () {
      Array.prototype.forEach.call(menu.querySelectorAll('button'), function (outro) {
        outro.setAttribute('aria-pressed', 'false');
      });
      b.setAttribute('aria-pressed', 'true');
      posts.forEach(function (p) {
        p.hidden = categoria !== null && p.dataset.categoria !== categoria;
      });
    });
    return b;
  }

  menu.appendChild(criaBotao('todas', null));
  categorias.forEach(function (c) { menu.appendChild(criaBotao(c, c)); });
  menu.hidden = false;
});
