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

## Description

La commande `VP Find table` <!-- REF #_method_.VP Find table. ummary -->retourne le nom de la table à laquelle appartient la cellule *rangeObj* <!-- END REF -->.

Dans *rangeObj*, passez un objet de plage de cellules. Si les cellules désignées n'appartiennent pas à une table, la commande retourne une chaîne vide.

Si *rangeObj* n'est pas une plage de cellules ou contient plusieurs plages, la première cellule de la première plage est utilisée.

## Exemple

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("The "+$tableName+" table has been modified.")
     End if 
End if
```

## Voir également

[VP Get table range](vp-get-table-range.md)




