---
id: vp-add-sheet
title: VP ADD SHEET
---

<!-- REF #_method_.VP ADD SHEET.Syntax -->

**VP ADD SHEET** ( *vpAreaName* : Text )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *sheet* : Integer ; *name* : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| sheet      | Integer | -> | Indice de la nouvelle feuille           |                  |
| name       | Text    | -> | Nom de la feuille                       | <!-- END REF --> |

#### Description

The `VP ADD SHEET` command <!-- REF #_method_.VP ADD SHEET.Summary -->inserts a sheet in the document loaded in *vpAreaName*.<!-- END REF -->

In *vpAreaName*, pass the name of the 4D View Pro area.

In *sheet*, you can pass an index for the new sheet. If the passed *index* is inferior to or equal to 0, the command inserts the new sheet at the beginning. If *index* exceeds the number of sheets, the command inserts the new sheet after the existing ones.

> La numérotation démarre à 0.

In *name*, you can pass a name for the new sheet. The new name cannot contain the following characters: `*, :, [, ], ?,\,/`

#### Exemple

Le document comporte actuellement 3 feuilles :

![vp-document-with-3-sheets](../../assets/en/ViewPro/vp-sheet-3.png)

Pour insérer une feuille à la troisième position (index 2) et la nommer "March" :

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../../assets/en/ViewPro/vp-add-sheet.png)

#### Voir également

[VP REMOVE SHEET](vp-remove-sheet.md)
