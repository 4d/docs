---
id: vp-insert-columns
title: VP INSERT COLUMNS
---

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->

**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

La commande `VP INSERT COLUMNS` <!-- REF #_method_.VP INSERT COLUMNS.Summary -->insère les colonnes définies dans l'objet *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passer un objet contenant une plage de la colonne de début (la colonne qui indique l'emplacement de la nouvelle colonne à insérer) et le nombre de colonnes à insérer. Si le nombre de colonnes à insérer est omis (non défini), une seule colonne est insérée.

De nouvelles colonnes sont insérées sur la gauche, directement avant la première colonne de *rangeObj*.

#### Exemple

Pour insérer 3 colonnes avant la deuxième colonne :

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

Le résultat est le suivant :

![](../../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### Voir également

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
