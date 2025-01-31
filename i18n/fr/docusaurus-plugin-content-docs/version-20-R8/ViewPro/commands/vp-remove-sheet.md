---
id: vp-remove-sheet
title: VP REMOVE SHEET
---

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->

**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| index      | Integer | -> | Index of the sheet to remove            | <!-- END REF --> |

#### Description

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified *index* from the document loaded in *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *index*, pass the index of the sheet to remove. If the passed *index* does not exist, the command does nothing.

> La numérotation démarre à 0.

#### Exemple

Le document comporte actuellement 3 feuilles :

![](../../assets/en/ViewPro/vp-sheet-3.png)

Supprimer la troisième feuille :

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-2.png)

#### Voir également

[VP ADD SHEET](vp-add-sheet.md)
