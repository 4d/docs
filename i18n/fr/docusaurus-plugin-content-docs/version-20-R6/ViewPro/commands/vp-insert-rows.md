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

The `VP INSERT ROWS` command <!-- REF #_method_.VP INSERT ROWS.Summary -->inserts rows defined by the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. Si le nombre de lignes à insérer est omis (non défini), une seule ligne est insérée.

New rows are inserted directly before the first row in the *rangeObj*.

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
