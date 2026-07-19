/* Light/dark theme: follows the system by default; the button pins the choice in localStorage. */
(function () {
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.dataset.theme = saved;
  }

  function currentTheme() {
    var pinned = document.documentElement.dataset.theme;
    if (pinned) return pinned;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    if (!button) return;

    function updateButton() {
      var dark = currentTheme() === 'dark';
      button.textContent = dark ? '☀️' : '🌙';
      button.setAttribute('aria-label', dark ? 'mudar para o tema claro' : 'mudar para o tema escuro');
    }

    button.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      updateButton();
    });

    updateButton();
    button.hidden = false;
  });
})();
