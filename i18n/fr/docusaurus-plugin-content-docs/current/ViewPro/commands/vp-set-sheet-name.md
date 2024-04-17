---
id: vp-set-sheet-name
title: VP SET SHEET NAME
---

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( _vpAreaName_ : Text ; _name_ : Text {; _sheet_: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| name       | Text    | -> | Nouveau nom de la feuille               |                  |
| sheet      | Integer | -> | Index of the sheet to be renamed        | <!-- END REF --> |

#### Description

The `VP SET SHEET NAME` command <!-- REF #_method_.VP SET SHEET NAME.Summary -->renames a sheet in the document loaded in _vpAreaName_<!-- END REF -->.

In _vpAreaName_, pass the name of the 4D View Pro area.

In _name_, pass a new name for the sheet.

In _sheet_, pass the index of the sheet to rename.

> La numérotation démarre à 0.

If no _sheet_ is passed, the command renames the current sheet.

The new name cannot contain the following characters: `*, :, [, ], ?,\,/`

La commande ne fait rien si :

- le nouveau nom contient des caractères interdits
- la valeur du nouveau nom est vide
- le nouveau nom existe déjà
- the passed _sheet_ index does not exist

#### Exemple

Le nom de la troisième feuille est "Total premier trimestre" :

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../../assets/en/ViewPro/vp-sheet-index-name.png)
