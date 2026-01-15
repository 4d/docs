---
id: vp-set-current-sheet
title: VP SET CURRENT SHEET
---

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| sheet      | Integer | -> | Index de la nouvelle feuille courante   | <!-- END REF --> |

## Description

La commande `VP SET CURRENT SHEET` <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->définit la feuille courante dans *vpAreaName*<!-- END REF -->. La feuille courante est la feuille sélectionnée dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez l'index de la feuille à définir comme feuille courante. Si le nombre passé est inférieur à 0 ou dépasse le nombre de feuilles, la commande ne fait rien.

> La numérotation démarre à 0.

## Exemple

La feuille courante du document est la première feuille :

![first-sheet-selected](../../assets/en/ViewPro/vp-sheet-3-select.png)

Définit la feuille courante à la troisième feuille :

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

## Voir également

[VP Get current sheet](vp-get-current-sheet.md)