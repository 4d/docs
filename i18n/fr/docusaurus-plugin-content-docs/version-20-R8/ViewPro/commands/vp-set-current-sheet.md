---
id: vp-set-current-sheet
title: VP SET CURRENT SHEET
---

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Paramètres | Type    |                             | Description                             |                  |
| ---------- | ------- | --------------------------- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro |                  |
| sheet      | Integer | <- | Index of the new current sheet          | <!-- END REF --> |

#### Description

The `VP SET CURRENT SHEET` command <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->sets the current sheet in *vpAreaName*<!-- END REF --> . La feuille courante est la feuille sélectionnée dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *sheet*, pass the index of the sheet to be set as current sheet. If no index is specified or if you pass -1, the command applies to the current sheet.

> La numérotation démarre à 0.

#### Exemple

The document's current sheet is the first sheet:

![first-sheet-selected](../../assets/en/ViewPro/vp-sheet-3-select.png)

Set the current sheet to the third sheet:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### Voir également

[VP Get current sheet](vp-get-current-sheet.md)
