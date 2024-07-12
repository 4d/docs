---
id: vp-set-selection
title: VP SET SELECTION
---

<!-- REF #_method_.VP SET SELECTION.Syntax -->

**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET SELECTION.Params -->

| Parâmetro | Tipo   |    | Descrição                   |                  |
| --------- | ------ | -- | --------------------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo de células | <!-- END REF --> |

#### Descrição

The `VP SET SELECTION` command <!-- REF #_method_.VP SET SELECTION.Summary -->defines the specified cells as the selection and the first cell as the active cell<!-- END REF -->.

In *rangeObj*, pass a range object of cells to designate as the current selection.

#### Exemplo

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](../../assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### Veja também

[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP ADD SELECTION](vp-add-selection)<br/>
[VP SHOW CELL](vp-show-cell.md)
