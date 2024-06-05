---
id: vp-get-current-sheet
title: VP Get current sheet
---

<!-- REF #_method_.VP Get current sheet.Syntax -->

**VP Get current sheet** ( _vpAreaName_ : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| Résultat   | Integer | <- | Indice de la feuille courante           | <!-- END REF --> |

#### Description

The `VP Get current sheet` command <!-- REF #_method_.VP Get current sheet.Summary -->returns the index of the current sheet in _vpAreaName_. The current sheet is the selected sheet in the document.<!-- END REF -->

In _vpAreaName_, pass the name of the 4D View Pro area.

> La numérotation démarre à 0.

#### Exemple

Lorsque la troisième feuille est sélectionnée :

![third-sheet](../../assets/en/ViewPro/vp-sheet-3-select.png)

La commande retourne 2 :

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### Voir également

[VP SET CURRENT SHEET](vp-set-current-sheet.md)
