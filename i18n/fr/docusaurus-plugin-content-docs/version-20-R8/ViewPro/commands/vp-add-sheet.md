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

La commande `VP ADD SHEET` <!-- REF #_method_.VP ADD SHEET.Summary -->insère une feuille dans le document chargé dans *vpAreaName*.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, vous pouvez passer le numéro de la nouvelle feuille. Si l'*index* passé est inférieur ou égal à 0, la commande insère la nouvelle feuille au début. Si l'*index* est supérieur au nombre de feuilles, la commande insère la nouvelle feuille après les feuilles existantes.

> La numérotation démarre à 0.

Dans *name*, vous pouvez passer un nom pour la nouvelle feuille. Le nouveau nom ne peut pas contenir les caractères suivants : `*, :, [, ], ?,\,/`

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
