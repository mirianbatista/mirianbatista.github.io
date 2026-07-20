# Mexer no Jekyll (layouts, config, templates) e testar local

Pra escrever post não precisa de nada disso — só o `.md` e push (ver o README). Isto é pra quando alterar `_layouts/`, `_config.yml` ou os templates (`blog/index.html`, `blog/feed.xml`) e quiser ver o resultado antes de publicar.

## Com um Ruby moderno (>= 3.0, ex.: `brew install ruby`)

```sh
export GEM_HOME=$(mktemp -d)   # env descartável; nada vai pro Ruby do sistema
gem install --no-document jekyll
$GEM_HOME/bin/jekyll build --destination /tmp/site-built
python3 -m http.server -d /tmp/site-built 8000   # http://localhost:8000
```

## Com o Ruby 2.6 do sistema (macOS)

`gem install jekyll` quebra numa dependência nativa (`ffi`, que exige Ruby >= 3.0) usada só pelo `serve --watch`. A saída que funciona: instalar o Jekyll 3.9 (mesma major que o GitHub Pages roda) com versões pinadas e stubs no lugar das três dependências de watch/livereload que não compilam:

```sh
export GEM_HOME=$(mktemp -d)
gem install --no-document colorator forwardable-extended pathutil safe_yaml kramdown kramdown-parser-gfm rexml
gem install --no-document liquid -v 4.0.4
gem install --no-document rouge -v 3.30.0
gem install --no-document mercenary -v 0.3.6
gem install --no-document i18n -v 0.9.5
gem install --no-document public_suffix -v 4.0.7
gem install --no-document addressable -v 2.8.7
gem install --no-document --ignore-dependencies sass -v 3.7.4
gem install --no-document --ignore-dependencies jekyll-sass-converter -v 1.5.2
gem install --no-document --ignore-dependencies jekyll -v 3.9.5
# stubs: o RubyGems exige esses gems na ativação do binário, mas o `build` nunca os carrega
stub() { echo "Gem::Specification.new { |s| s.name = \"$1\"; s.version = \"$2\"; s.summary = \"stub\"; s.authors = [\"stub\"] }" > "$GEM_HOME/specifications/$1-$2.gemspec"; }
stub em-websocket 0.5.3
stub jekyll-watch 2.2.1
stub sass-listen 4.0.0
$GEM_HOME/bin/jekyll build --destination /tmp/site-built
```

Nesse env o `jekyll serve` não funciona (os stubs cobrem exatamente as dependências de watch); use o `http.server` do bloco de cima pra ver o resultado.

## Validar que só mudou o que você queria

Depois do build, um `diff -r` do `/tmp/site-built` contra o build anterior (ou contra as páginas publicadas) mostra exatamente o que a mudança altera no site final — foi assim que a conversão pro Jekyll foi validada byte a byte contra o site artesanal original.
