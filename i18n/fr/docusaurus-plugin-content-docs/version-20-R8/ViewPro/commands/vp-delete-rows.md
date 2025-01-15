---
id: vp-delete-rows
title: VP DELETE ROWS
---

<!-- REF #_method_.VP DELETE ROWS.Syntax -->

**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE ROWS.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

La commande `VP DELETE ROWS` <!-- REF #_method_.VP DELETE ROWS.Summary -->supprime les lignes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de lignes à supprimer. Si la plage qui est passée contient :

- des lignes et des colonnes, seules les lignes sont supprimées.
- uniquement des colonnes, la commande ne fait rien.

> Les lignes sont supprimées du bas vers le haut.

#### Exemple

Pour supprimer les lignes sélectionnées par l'utilisateur (lignes 1, 2 et 3 de l'image ci-dessous) :

![](../../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

saisissez le code suivant :

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### Voir également

[VP DELETE ROWS](vp-delete-columns.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
