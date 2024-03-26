---
id: vp-remove-table-columns
title: VP REMOVE TABLE COLUMNS
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R7 | Adicionado |

</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->

**VP REMOVE TABLE COLUMNS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer {; _count_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                      |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                     |                  |
| tableName  | Text    | -> | Nome da tabela                                                 |                  |
| column     | Integer | -> | Índice na tabela da coluna inicial a remover                   |                  |
| count      | Text    | -> | Número de colunas a remover (tem de ser >0) |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida)    | <!-- END REF --> |

#### Descrição

The `VP REMOVE TABLE COLUMNS` command <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->removes one or _count_ column(s) in the specified _tableName_ at the specified _column_ index<!-- END REF -->. O comando remove valores e estilos.

The command removes columns from the _tableName_ table, NOT from the sheet. O número total de colunas da folha não é impactado pelo  comando. The total number of columns of the sheet is not impacted by the command.

If _tableName_ does not exist, nothing happens.

#### Exemplo

Para remover duas colunas da 3.ª coluna da tabela "dataTable":

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

#### Veja também

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
