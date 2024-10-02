---
id: vp-combine-ranges
title: VP Combine ranges
---

<!-- REF #_method_.VP Combine ranges.Syntax -->

**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

| Paramètres    | Type   |                             | Description                        |                  |
| ------------- | ------ | --------------------------- | ---------------------------------- | ---------------- |
| rangeObj      | Object | ->                          | Objet plage                        |                  |
| otherRangeObj | Object | ->                          | Objet plage                        |                  |
| Résultat      | Object | <- | Objet contenant une plage combinée | <!-- END REF --> |

#### Description

La commande `VP Combine Ranges` <!-- REF #_method_.VP Combine ranges.Summary -->retourne un nouvel objet de plage qui incorpore deux ou plusieurs objets de plage existants<!-- END REF -->. Toutes les plages doivent provenir de la même zone 4D View Pro.

Dans *rangeObj*, passez le premier objet de plage.

Dans *otherRangeObj*, passez un ou plusieurs autres objets de plage à combiner avec *rangeObj*.

> La commande incorpore les objets *rangeObj* et *otherRangeObj* par référence.

#### Exemple

Vous souhaitez combiner des plages de type cellule, colonne et ligne dans une nouvelle plage distincte :

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // colonne D
 $row:=VP Row("ViewProArea";9) // ligne 10
 
 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Voir également

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
