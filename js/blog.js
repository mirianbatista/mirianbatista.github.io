/* Blog category menu: generated from the data-category attributes of the listed posts.
   Without JS, every post is simply shown. */
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('categories');
  var posts = Array.prototype.slice.call(document.querySelectorAll('.posts [data-category]'));
  if (!menu || posts.length === 0) return;

  var categories = [];
  posts.forEach(function (p) {
    var c = p.dataset.category;
    if (categories.indexOf(c) === -1) categories.push(c);
  });

  function createButton(label, category) {
    var b = document.createElement('button');
    b.textContent = label;
    b.setAttribute('aria-pressed', category === null ? 'true' : 'false');
    b.addEventListener('click', function () {
      Array.prototype.forEach.call(menu.querySelectorAll('button'), function (other) {
        other.setAttribute('aria-pressed', 'false');
      });
      b.setAttribute('aria-pressed', 'true');
      posts.forEach(function (p) {
        p.hidden = category !== null && p.dataset.category !== category;
      });
    });
    return b;
  }

  var byCategory = {};
  menu.appendChild(createButton('todas', null));
  categories.forEach(function (c) { byCategory[c] = createButton(c, c); menu.appendChild(byCategory[c]); });
  menu.hidden = false;

  /* /blog/?categoria=X (the category chip links) arrives with the filter already active.
     The URL param stays in pt-BR on purpose: URLs are a user-facing surface. */
  var target = null;
  try { target = new URLSearchParams(location.search).get('categoria'); } catch (e) {}
  if (target && byCategory[target]) byCategory[target].click();
});
