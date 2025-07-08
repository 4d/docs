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

**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                     |                  |
| ---------- | ------- | -- | ------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                    |                  |
| tableName  | Text    | -> | Nome da tabela                                                |                  |
| row        | Integer | -> | Índice na tabela da linha inicial a remover                   |                  |
| count      | Integer | -> | Número de linhas a remover (tem de ser >0) |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida)   | <!-- END REF --> |

## Descrição

O comando `VP REMOVER TABLE ROWS` <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->remove uma ou *count* fileira(s) do *tableName* especificado no índice *row* especificado<!-- END REF -->. O comando remove valores e estilos.

Este comando remove linhas da tabela *tableName*, não da folha. O número total de linhas da folha não é impactado pelo  comando. Dados presentes abaixo da tabela (se houver) são movidos automaticamente de acordo com o número de linhas removidas.

If the *tableName* table is bound to a [data context](vp-set-data-context.md), the command removes element(s) from the collection.

Se *tableName* não existir, não acontece nada.

## Exemplo

Para remover duas linhas da 3.ª linha da tabela "dataTable":

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

## Veja também

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
