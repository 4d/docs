---
id: vp-delete-columns
title: VP DELETE COLUMNS
---

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->

**VP DELETE COLUMNS** ( _rangeObj_ : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

The `VP DELETE COLUMNS` command <!-- REF #_method_.VP DELETE COLUMNS.Summary -->removes the columns in the _rangeObj_<!-- END REF -->.

In _rangeObj_, pass an object containing a range of columns to remove. Si la plage qui est passée contient :

- des lignes et des colonnes, seules les colonnes sont supprimées.
- uniquement des lignes, la commande ne fait rien.

> Les colonnes sont supprimées de droite à gauche.

#### Exemple

Pour supprimer les colonnes sélectionnées par l'utilisateur (colonnes B, C et D de l'image ci-dessous) :

![](../../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

saisissez le code suivant :

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### Voir également

[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
