# Quadreiros

Aplicativo web estatico para:

- cadastrar quadreiros com nome, chave Pix, observacoes e clube sede
- selecionar um arbitro ja vinculado a uma sede
- registrar hora e quantidade de quadras trabalhadas

## Como preencher os dados iniciais

Edite o arquivo `app.js` no bloco `seedData`:

- `sedes`: lista dos clubes sede
- `arbitros`: lista com `nome` e `sede`

## Como publicar no GitHub Pages

1. Suba estes arquivos para um repositorio no GitHub.
2. No GitHub, abra `Settings -> Pages`.
3. Em `Build and deployment`, escolha `Deploy from a branch`.
4. Selecione a branch principal e a pasta `/ (root)`.
5. Salve e aguarde a publicacao.

Como o app e estatico, ele funciona sem backend. Os dados de quadreiros e registros ficam salvos no `localStorage` do navegador.
