# mirianbatista.github.io

Site pessoal servido pelo GitHub Pages a partir da branch `main`, gerado pelo Jekyll embutido do Pages (nada pra rodar local: push na `main` publica). O blog vive em `blog/` e os posts em `_posts/`.

## Estrutura

- `index.html` — sobre e experiência
- `_layouts/default.html` — casca única de todas as páginas (head, topbar com `aria-current`, footer); `_layouts/post.html` — estrutura de um post (data em pt-BR, chip de categoria, título, tagline)
- `_posts/` — um `.md` por post (fonte); o Jekyll gera o HTML, o índice `blog/index.html` e o `blog/feed.xml` a partir deles
- `css/style.css` — paleta derivada de Classic Blue `#0F4C81`; tema segue o sistema e o botão da navegação fixa a escolha (`data-theme` + localStorage)
- `js/` — `theme.js` (alternador claro/escuro), `blog.js` (menu de categorias gerado a partir dos `data-category` dos posts; `/blog/?categoria=X` chega com o filtro ativo) e `experience.js` (o link "experiência" do menu abre todos os cargos); sem JS o site inteiro continua funcional
- `images/` — fotos
- `404.html` — página de erro própria

## Blog

Post novo = **um arquivo só**: `_posts/AAAA-MM-DD-slug.md` (a URL final é `/blog/slug.html`), com o texto em Markdown e este front matter:

```yaml
---
layout: post
title: Título do post
date: 2026-07-19 22:00:00 +0000   # data e hora da publicação (UTC)
categoria: engenharia de dados
tagline: "Subtítulo que aparece sob o título do post."
summary: "Resumo curto: vai pro índice do blog, pro feed/email e pra meta description."
---
```

Índice, feed e filtros de categoria são gerados no push — nada mais é editado à mão. Categoria nova vira filtro automaticamente.

Ao alterar conteúdo, atualizar o ano no rodapé quando virar o ano (agora só em `_layouts/default.html`).

Pra mexer no Jekyll em si (layouts, `_config.yml`, templates do índice/feed) e testar local antes de publicar: [docs/alterar-jekyll.md](docs/alterar-jekyll.md).
