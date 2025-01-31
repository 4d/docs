---
id: vp-insert-table-rows
title: VP INSERT TABLE ROWS
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->

**VP INSERT TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

| Parâmetro   | Tipo    |    | Descrição                                                             |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nome de objeto formulário área 4D View Pro                            |                  |
| tableName   | Text    | -> | Nome da tabela                                                        |                  |
| row         | Integer | -> | Índice na tabela da linha inicial a inserir                           |                  |
| count       | Integer | -> | Número de linhas a serem adicionadas (deve ser >0) |                  |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` *row*             |                  |
| sheet       | Integer | -> | Índice da folha (folha atual se omitida)           | <!-- END REF --> |

#### Descrição

The `VP INSERT TABLE ROWS` command <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->inserts one or *count* empty row(s) in the specified *tableName* at the specified *row* index<!-- END REF -->.

In the *insertAfter* parameter, you can pass one of the following constants to indicate if the row(s) must be inserted before or after the *row* index:

| Parâmetros               | Valor | Descrição                                                                                 |
| ------------------------ | ----- | ----------------------------------------------------------------------------------------- |
| `vk table insert before` | 0     | Inserir linha(s) antes de *row* (padrão se omitido) |
| `vk table insert after`  | 1     | Inserir linha(s) após a *row*                                          |

Este comando insere algumas linhas na tabela *tableName*, NÂO na folha. O número total de linhas da folha não é impactado pelo  comando. Dados presentes abaixo da tabela (se houver) são movidos para baixo automaticamente de acordo com o número de linhas adicionadas.

If the *tableName* table is bound to a [data context](vp-set-data-context.md), the command inserts new, empty element(s) in the collection.

If *tableName* does not exist or if there is not enough space in the sheet, nothing happens.

#### Exemplo

Você cria uma tabela com um contexto de dados:

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500)) VP SET DATA CONTEXT("ViewProArea"; $context) VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../../assets/en/ViewPro/table-base.png)

Se quiser inserir duas linhas e duas colunas na tabela, pode escrever:

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../../assets/en/ViewPro/table-insert.png)

#### Veja também

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
