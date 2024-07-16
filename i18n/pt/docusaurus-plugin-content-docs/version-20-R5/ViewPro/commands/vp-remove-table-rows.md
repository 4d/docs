---
id: vp-remove-table-rows
title: VP REMOVE TABLE ROWS
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->

**VP REMOVE TABLE ROWS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _row_ : Integer {; _count_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                     |                  |
| ---------- | ------- | -- | ------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                    |                  |
| tableName  | Text    | -> | Nome da tabela                                                |                  |
| row        | Integer | -> | Índice na tabela da linha inicial a remover                   |                  |
| count      | Text    | -> | Número de linhas a remover (tem de ser >0) |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida)   | <!-- END REF --> |

#### Descrição

The `VP REMOVE TABLE ROWS` command <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->removes one or _count_ row(s) from the specified _tableName_ at the specified _row_ index<!-- END REF -->. O comando remove valores e estilos.

This command removes rows from the _tableName_ table, NOT from the sheet. O número total de linhas da folha não é impactado pelo  comando. Dados presentes abaixo da tabela (se houver) são movidos automaticamente de acordo com o número de linhas removidas.

If the _tableName_ table is bound to a [data context](vp-set-data-context.md), the command removes element(s) from the collection.

If _tableName_ does not exist, nothing happens.

#### Exemplo

Para remover duas linhas da 3.ª linha da tabela "dataTable":

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### Veja também

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
