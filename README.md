# mirianbatista.github.io

Site pessoal em HTML/CSS/JS estático, servido pelo GitHub Pages a partir da branch `main`. O blog vive na pasta `blog/` deste repositório.

## Estrutura

- `index.html` — sobre e experiência
- `css/style.css` — paleta derivada de Classic Blue `#0F4C81`; tema segue o sistema e o botão da navegação fixa a escolha (`data-theme` + localStorage)
- `js/` — `theme.js` (alternador claro/escuro), `blog.js` (menu de categorias gerado a partir dos `data-category` dos posts; `/blog/?categoria=X` chega com o filtro ativo) e `experience.js` (o link "experiência" do menu abre todos os cargos); sem JS o site inteiro continua funcional
- `images/` — fotos
- `404.html` — página de erro própria

## Blog

Post novo: criar o HTML em `blog/`, adicionar o `<li data-category="...">` em `blog/index.html` e uma `<entry>` (com `<category term="..."/>`) em `blog/feed.xml`. Categoria nova vira filtro automaticamente.

Ao alterar conteúdo, atualizar o ano no rodapé das páginas quando virar o ano.
