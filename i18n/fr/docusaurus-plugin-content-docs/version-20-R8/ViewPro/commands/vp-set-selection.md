---
id: vp-set-selection
title: VP SET SELECTION
---

<!-- REF #_method_.VP SET SELECTION.Syntax -->

**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET SELECTION.Params -->

| Paramètres | Type   |    | Description                        |                  |
| ---------- | ------ | -- | ---------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objet plage de toutes les cellules | <!-- END REF --> |

#### Description

La commande `VP SET SELECTION` <!-- REF #_method_.VP SET SELECTION.Summary -->définit les cellules spécifiées comme la sélection et la première cellule comme la cellule active<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de cellule(s) à désigner comme sélection courante.

#### Exemple

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](../../assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### Voir également

[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP ADD SELECTION](vp-add-selection)<br/>
[VP SHOW CELL](vp-show-cell.md)
