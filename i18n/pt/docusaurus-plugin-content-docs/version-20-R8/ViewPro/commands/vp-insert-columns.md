---
id: vp-insert-columns
title: VP INSERT COLUMNS
---

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->

**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

The `VP INSERT COLUMNS` command <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserts columns into the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. Se o número de colunas a inseriri for omitido (não definido), uma única coluna é inserida.

New columns are inserted on the left, directly before the starting column in the *rangeObj*.

#### Exemplo

Para inserir três colunas antes da segunda coluna:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

O resultado é:

![](../../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### Veja também

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
