---
id: vp-insert-rows
title: VP INSERT ROWS
---

<!-- REF #_method_.VP INSERT ROWS.Syntax -->

**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT ROWS.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

La commande `VP INSERT ROWS` <!-- REF #_method_.VP INSERT ROWS.Summary -->insère les lignes définies dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de la ligne de début (la ligne qui indique où la nouvelle ligne sera insérée) et le nombre de lignes à insérer. Si le nombre de lignes à insérer est omis (non défini), une seule ligne est insérée.

De nouvelles lignes sont insérées directement avant la première ligne dans *rangeObj*.

#### Exemple

Pour insérer 3 lignes avant la première ligne :

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

Le résultat est le suivant :

![](../../assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### Voir également

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)
