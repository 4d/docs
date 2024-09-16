---
id: vp-find-table
title: VP Find table
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Find table.Syntax -->

**VP Find table** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

| Paramètres | Type   |                             | Description      |                  |
| ---------- | ------ | --------------------------- | ---------------- | ---------------- |
| rangeObj   | Object | ->                          | Plage de cellule |                  |
| Résultat   | Text   | <- | Nom de table     | <!-- END REF --> |

#### Description

The `VP Find table` command <!-- REF #_method_.VP Find table.Summary -->returns the name of the table to which to the *rangeObj* cell belongs<!-- END REF -->.

In *rangeObj*, pass a cell range object. Si les cellules désignées n'appartiennent pas à une table, la commande retourne une chaîne vide.

If *rangeObj* is not a cell range or contains multiple ranges, the first cell of the first range is used.

#### Exemple

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("The "+$tableName+" table has been modified.")
     End if 
End if
```

#### Voir également

[VP Get table range](vp-get-table-range.md)
