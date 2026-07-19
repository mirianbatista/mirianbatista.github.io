# mirianbatista.github.io

Site pessoal em HTML/CSS/JS estático, servido pelo GitHub Pages a partir da branch `main`. O blog vive na pasta `blog/` deste repositório.

## Estrutura

- `index.html` — sobre e experiência
- `css/style.css` — paleta derivada de Classic Blue `#0F4C81`; tema segue o sistema e o botão da navegação fixa a escolha (`data-tema` + localStorage)
- `js/` — `tema.js` (alternador claro/escuro) e `blog.js` (menu de categorias, gerado a partir dos `data-categoria` dos posts listados); sem JS o site inteiro continua funcional
- `images/` — fotos
- `404.html` — página de erro própria

## Blog

Post novo: criar o HTML em `blog/`, adicionar o `<li data-categoria="...">` em `blog/index.html` e uma `<entry>` (com `<category term="..."/>`) em `blog/feed.xml`. Categoria nova vira filtro automaticamente.

Ao alterar conteúdo, atualizar o ano no rodapé das páginas quando virar o ano.
