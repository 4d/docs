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
| index      | Integer | -> | Index de la feuille à supprimer         | <!-- END REF --> |

## Description

La commande `VP REMOVE SHEET` <!-- REF #_method_.VP REMOVE SHEET.Summary -->supprime la feuille avec l'*index* spécifié du document chargé dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *index*, passez l'index de la feuille à supprimer. Si le *index* passé n'existe pas, la commande ne fait rien.

> La numérotation démarre à 0.

## Exemple

Le document comporte actuellement 3 feuilles :

![](../../assets/en/ViewPro/vp-sheet-3.png)

Supprimer la troisième feuille :

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-2.png)

## Voir également

[VP ADD SHEET](vp-add-sheet.md)