---
id: vp-get-binding-path
title: VP Get binding path
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP Get binding path.Syntax -->

**VP Get binding path** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get binding path.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objet plage                             |                  |
| Résultat   | Text   | <- | Name of the attribute bound to the cell | <!-- END REF --> |

#### Description

The `VP Get binding path` command <!-- REF #_method_.VP Get binding path.Summary -->returns the name of the attribute bound to the cell specified in *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object that is either a cell range or a combined range of cells. A noter que :

- If *rangeObj* is a range with several cells, the command returns the attribute name linked to the first cell in the range.
- If *rangeObj* contains several ranges of cells, the command returns the attribute name linked to the first cell of the first range.

#### Exemple

```4d
var $p; $options : Object
var $myAttribute : Text

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

$myAttribute:=VP Get binding path(VP Cell("ViewProArea"; 1; 0)) // "lastName"
```

#### Voir également

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
