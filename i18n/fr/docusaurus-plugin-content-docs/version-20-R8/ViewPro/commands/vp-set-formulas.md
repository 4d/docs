---
id: vp-set-formulas
title: VP SET FORMULAS
---

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Paramètres  | Type       |    | Description             |                  |
| ----------- | ---------- | -- | ----------------------- | ---------------- |
| rangeObj    | Object     | -> | Objet plage de cellules |                  |
| formulasCol | Collection | -> | Collection de formules  | <!-- END REF --> |

#### Description

The `VP SET FORMULAS` command <!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](vp-cell.md)) whose formula you want to specify. Si *rangeObj* comprend plusieurs plages, seule la première plage est utilisée.

The *formulasCol* is a two-dimensional collection:

- La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection définit une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs doivent être des éléments textuels contenant les formules à associer aux cellules.

> If the formula is a string, use the period `.` as numerical separator and the comma `,` as parameter separator.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md) command.

You remove the formulas in *rangeObj* by replacing them with an empty string ("").

#### Exemple 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row

 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](../../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### Exemple 2

Pour supprimer des formules :

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection
 
VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```

#### Voir également

[VP Get Formulas](vp-get-formulas.md)<br/>
[VP GET VALUES](vp-get-values.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET VALUES](vp-set-values.md)
