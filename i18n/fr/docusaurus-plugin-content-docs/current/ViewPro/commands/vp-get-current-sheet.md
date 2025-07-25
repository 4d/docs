---
id: vp-get-current-sheet
title: VP Get current sheet
---

<!-- REF #_method_.VP Get current sheet.Syntax -->

**VP Get current sheet** ( *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

| Paramètres | Type    |                             | Description                             |                  |
| ---------- | ------- | --------------------------- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro |                  |
| Résultat   | Integer | <- | Indice de la feuille courante           | <!-- END REF --> |

## Description

La commande `VP Get current sheet` <!-- REF #_method_.VP Get current sheet.Summary -->retourne l'index de la feuille courante dans *vpAreaName*. La feuille courante est la feuille sélectionnée dans le document.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

> La numérotation démarre à 0.

## Exemple

Lorsque la troisième feuille est sélectionnée :

![third-sheet](../../assets/en/ViewPro/vp-sheet-3-select.png)

La commande retourne 2 :

```4d
$index:=VP Get current sheet("ViewProArea")
```

## Voir également

[VP SET CURRENT SHEET](vp-set-current-sheet.md)
