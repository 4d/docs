---
id: vp-remove-table-columns
title: VP REMOVE TABLE COLUMNS
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->

**VP REMOVE TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                      |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                     |                  |
| tableName  | Text    | -> | Nome da tabela                                                 |                  |
| column     | Integer | -> | Índice na tabela da coluna inicial a remover                   |                  |
| count      | Integer | -> | Número de colunas a remover (tem de ser >0) |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida)    | <!-- END REF --> |

## Descrição

The `VP REMOVE TABLE COLUMNS` command <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->removes one or *count* column(s) in the specified *tableName* at the specified *column* index<!-- END REF -->. O comando remove valores e estilos.

O comando remove colunas da tabela *tableName*, NÃO da folha. O número total de colunas da folha não é impactado pelo  comando. Os dados presentes à direita da tabela (se houver) são automaticamente movidos para a esquerda conforme o número de colunas removidas.

Se *tableName* não existir, não acontece nada.

## Exemplo

Para remover duas colunas da 3.ª coluna da tabela "dataTable":

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

## Veja também

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
