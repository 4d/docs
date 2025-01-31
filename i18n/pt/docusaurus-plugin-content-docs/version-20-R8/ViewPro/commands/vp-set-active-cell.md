---
id: vp-set-active-cell
title: VP SET ACTIVE CELL
---

<!-- REF #_method_.VP SET ACTIVE CELL.Syntax -->

**VP SET ACTIVE CELL** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ACTIVE CELL.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

O comando `VP SET ACTIVE CELL` <!-- REF #_method_.VP SET ACTIVE CELL.Summary -->define uma célula especificada como ativa<!-- END REF -->.

Em *rangeObj*, passe um intervalo contendo uma única célula como um objeto (consulte [VP Cell](vp-cell.md)). If *rangeObj* is not a cell range or contains multiple ranges, the first cell of the first range is used.

#### Exemplo

Para definir a célula na coluna D, linha 5 como a célula ativa:

```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

![](../../assets/en/ViewPro/cmd_vpSetActiveCell.PNG)

#### Veja também

[VP ADD SELECTION](vp-add-selection.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
