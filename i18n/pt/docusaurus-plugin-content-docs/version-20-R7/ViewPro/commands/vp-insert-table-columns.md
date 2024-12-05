---
id: vp-insert-table-columns
title: VP INSERT TABLE COLUMNS
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->

**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Parâmetro   | Tipo    |    | Descrição                                                        |                  |
| ----------- | ------- | -- | ---------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nome de objeto formulário área 4D View Pro                       |                  |
| tableName   | Text    | -> | Nome da tabela                                                   |                  |
| column      | Integer | -> | Índice na tabela da coluna inicial a inserir                     |                  |
| count       | Integer | -> | Número de colunas a adicionar (tem de ser >0) |                  |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` *coluna*     |                  |
| sheet       | Integer | -> | Índice da folha (folha atual se omitida)      | <!-- END REF --> |

#### Descrição

The `VP INSERT TABLE COLUMNS` command <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserts one or *count* empty column(s) in the specified *tableName* at the specified *column* index<!-- END REF -->.

When a column has been inserted with this command, you typically modify its contents using the [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) command.

In the *insertAfter* parameter, you can pass one of the following constants to indicate if the column(s) must be inserted before or after the *column* index:

| Parâmetros               | Valor | Descrição                                                                                       |
| ------------------------ | ----- | ----------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0     | Insert column(s) before the *column* (default if omitted) |
| `vk table insert after`  | 1     | Inserir coluna(s) após a *coluna*                                            |

This command inserts some columns in the *tableName* table, NOT in the sheet. O número total de colunas da folha não é impactado pelo  comando. Dados presentes à direita da tabela (se houver) são movidos para a direita automaticamente de acordo com o número de colunas adicionadas.

If *tableName* does not exist or if there is not enough space in the sheet, nothing happens.

#### Exemplo

Consulte os exemplos de [VP INSERT TABLE ROWS](vp-insert-table-rows.md) e [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

#### Veja também

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
