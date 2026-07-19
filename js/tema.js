/* Tema claro/escuro: segue o sistema por padrão; o botão fixa a escolha em localStorage. */
(function () {
  var salvo = null;
  try { salvo = localStorage.getItem('tema'); } catch (e) {}
  if (salvo === 'claro' || salvo === 'escuro') {
    document.documentElement.dataset.tema = salvo;
  }

  function temaAtual() {
    var fixado = document.documentElement.dataset.tema;
    if (fixado) return fixado;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('alternar-tema');
    if (!botao) return;

    function atualizaBotao() {
      var escuro = temaAtual() === 'escuro';
      botao.textContent = escuro ? '☀️' : '🌙';
      botao.setAttribute('aria-label', escuro ? 'mudar para o tema claro' : 'mudar para o tema escuro');
    }

    botao.addEventListener('click', function () {
      var novo = temaAtual() === 'escuro' ? 'claro' : 'escuro';
      document.documentElement.dataset.tema = novo;
      try { localStorage.setItem('tema', novo); } catch (e) {}
      atualizaBotao();
    });

    atualizaBotao();
    botao.hidden = false;
  });
})();
