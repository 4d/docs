---
id: vp-insert-table-columns
title: VP INSERT TABLE COLUMNS
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R7 | Adicionado |

</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->

**VP INSERT TABLE COLUMNS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer {; _count_ : Integer {; _insertAfter_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Parâmetro   | Tipo    |    | Descrição                                                    |                  |
| ----------- | ------- | -- | ------------------------------------------------------------ | ---------------- |
| vpAreaName  | Text    | -> | Nome de objeto formulário área 4D View Pro                   |                  |
| tableName   | Text    | -> | Nome da tabela                                               |                  |
| column      | Integer | -> | Índice na tabela da coluna inicial a inserir                 |                  |
| count       | Text    | -> | Number of columns to add (must be >0)     |                  |
| insertAfter | Integer | -> | `vk table insert before` or `vk table insert after` _column_ |                  |
| sheet       | Integer | -> | Índice da folha (folha atual se omitida)  | <!-- END REF --> |

#### Descrição

The `VP INSERT TABLE COLUMNS` command <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserts one or _count_ empty column(s) in the specified _tableName_ at the specified _column_ index<!-- END REF -->.

When a column has been inserted with this command, you typically modify its contents using the [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) command.

In the _insertAfter_ parameter, you can pass one of the following constants to indicate if the column(s) must be inserted before or after the _column_ index:

| Parâmetros               | Valor | Descrição                                                                                       |
| ------------------------ | ----- | ----------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0     | Insert column(s) before the _column_ (default if omitted) |
| `vk table insert after`  | 1     | Inserir coluna(s) após a _coluna_                                            |

This command inserts some columns in the _tableName_ table, NOT in the sheet. O número total de colunas da folha não é impactado pelo  comando. Dados presentes à direita da tabela (se houver) são movidos para a direita automaticamente de acordo com o número de colunas adicionadas.

If _tableName_ does not exist or if there is not enough space in the sheet, nothing happens.

#### Exemplo

See examples for [VP INSERT TABLE ROWS](vp-insert-table-rows.md) and [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

#### Veja também

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
