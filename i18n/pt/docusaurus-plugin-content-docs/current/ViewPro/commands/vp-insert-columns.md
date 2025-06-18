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

## Descrição

O comando `VP INSERT COLUMNS` <!-- REF #_method_.VP INSERT COLUMNS.Summary -->insere colunas no objeto *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. Se o número de colunas a inseriri for omitido (não definido), uma única coluna é inserida.

Novas colunas são inseridas na esquerda, diretamente na coluna inicio em *rangeObj*.

## Exemplo

Para inserir três colunas antes da segunda coluna:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

O resultado é:

![](../../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

## Veja também

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)