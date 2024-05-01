---
id: vp-combine-ranges
title: VP Combine ranges
---

<!-- REF #_method_.VP Combine ranges.Syntax -->

**VP Combine ranges** ( _rangeObj_ : Object ; _otherRangeObj_ : Object {;..._otherRangeObjN_ : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

| Paramètres    | Type   |    | Description                        |                  |
| ------------- | ------ | -- | ---------------------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage                        |                  |
| otherRangeObj | Object | -> | Objet plage                        |                  |
| Résultat      | Object | <- | Objet contenant une plage combinée | <!-- END REF --> |

#### Description

The `VP Combine Ranges` command <!-- REF #_method_.VP Combine ranges.Summary -->returns a new range object that incorporates two or more existing range objects<!-- END REF -->. Toutes les plages doivent provenir de la même zone 4D View Pro.

In _rangeObj_, pass the first range object.

In _otherRangeObj_, pass another range object(s) to combine with _rangeObj_.

> The command incorporates _rangeObj_ and _otherRangeObj_ objects by reference.

#### Exemple

Vous souhaitez combiner des plages de type cellule, colonne et ligne dans une nouvelle plage distincte :

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // column D
 $row:=VP Row("ViewProArea";9) // row 10
 
 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Voir également

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
