---
id: ranges
title: Faixas
displayed_sidebar: docs
slug: /WritePro/user/ranges
---



4D Write Pro lhe permite selecionar e manipular por programação o conteúdo do documento. Dado que o conteúdo selecionado pode incluir texto, imagens, tabelas, etc., e também etiquetas de formato (invisíveis), 4D Write Pro funciona com objetos chamados **faixas** (ranges - faixas de seleção ou gama de objetos selecionados).

Uma faixa é um objeto que representa uma porção de um documento 4D Write Pro:

- uma faixa de caracteres, parágrafos, imagens ou de tabelas é definida através de posições de caracteres dentro do documento principal,
- uma faixa de células, colunas e filas são definidas através das posições das células e estão ancoradas à tabela principal.

Pode ser usado para designar elementos a selecionar ou manipular atributos em uma parte de documento (usando [`WP GET ATTRIBUTES`](../commands/wp-get-attributes) e [`WP SET ATTRIBUTES`](../commands/wp-set-attributes)).

| Constante   | Valor | Comentário |
|------------|-------|-------------|
| `wk end`   | `end` | (Atributo de faixa de só leitura) |
| `wk owner` | `owner` | (Atributo de faixa de só leitura) |
| `wk start` | `start` | (Atributo de faixa de só leitura) |
| `wk type`  | `type` | (Atributo faixa apenas Leitura) Tipo de faixa 4D Write Pro. Pode ser 0: faixa padrão (valor pré-determinado), 1: faixa parágrafo, 2: faixa imagem |

As faixas de filas, colunas e células possuem atributos privados específicos que permitem defini-las: veja [tables](./handling-tables.md)

| Constante              | Valor            | Comentário |
|------------------------|------------------|-------------|
| `wk cell count`        | `cellCount`      | Número Total de células na fila.<br>**Tipo de Valor**: Inteiro longo *(valor para `wk type table row`)* |
| `wk column count`      | `columnCount`    | *(Atributo de faixa somente leitura)* Número total de colunas na faixa.<br>**Valor**: inteiro longo |
| `wk first column`      | `firstColumn`    | *(Atributo de faixa somente leitura)* Número da primeira coluna na faixa.<br>**Valor**: inteiro longo |
| `wk first row`         | `firstRow`       | *(Atributo de faixa somente leitura)* Número da primeira linha na faixa.<br>**Valor**: inteiro longo |
| `wk header row count`  | `headerRowCount` | *(Leitura/Escrita)* Número de linhas da tabela com o atributo `wk header` definido como True.<br>O valor máximo é 5. Se passar um valor superior a 5, `wk header` se define como True só para as cinco primeiras linhas *(ver [Cabeçalho repetido](./handling-tables.md#repeated-headers))* |
| `wk row count`         | `rowCount`       | *(Atributo de faixa somente leitura)* Número total de linhas na faixa.<br>**Valor**: inteiro longo |
| `wk table`             | `table`          | *(Atributo apenas Leitura)* Tabela pai.<br>**Valor tipo**: Objeto |
| `wk table ID`          | `tableID`        | *(Atributo de faixa somente leitura)* ID da faixa da tabela pai.<br>**Valor**: String |



Vários comandos lhe permitem definir faixas:

- [WP Text range](../commands-legacy/wp-text-range.md): devolve uma nova faixa correspondente aos limites que passam como parâmetros.
- [WP Selection range](../commands-legacy/wp-selection-range): devolve uma nova faixa que corresponde à seleção usuário atual.
- [WP Picture range](../commands-legacy/wp-picture-range): devolve uma nova faixa que contém só as imagens.
- [WP Paragraph range](../commands-legacy/wp-paragraph-range): devolve uma nova faixa que contém só os parágrafos.
- [WP Table range](../commands-legacy/wp-table-range): devolve uma nova faixa que contém só as tabelas.

Você pode obter informações sobre a posição de uma faixa em um documento (número da página, número da coluna…) usando o comando [WP Get position](../commands-legacy/wp-get-position).


