# mirianbatista.github.io

Site pessoal e blog. **HTML/CSS puro, zero build, zero dependência — de propósito**: sem supply chain de npm, auditável linha a linha, e o GitHub Pages serve direto da branch `master`.

Reescrito em 19/07/2026 substituindo o template React de 2022 (create-react-app 4 + libs abandonadas; a história completa está no git). O conteúdo do currículo veio do `resumeData.json` antigo.

## Estrutura

- `index.html` — sobre, experiência, projetos
- `blog/index.html` — índice do blog (cada post é uma página HTML própria em `blog/`)
- `css/style.css` — paleta derivada de Classic Blue `#0F4C81`, light/dark via `prefers-color-scheme`
- `images/` — fotos (herdadas do repo antigo)

## Como publicar um post

1. Criar `blog/<slug>.html` (copiar o `<head>` e o header de `blog/index.html`).
2. Adicionar o link do post na lista de `blog/index.html`.
3. Commit + push na `master`. Sem build, sem deploy — o Pages publica sozinho.
