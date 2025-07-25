---
id: vp-set-binding-path
title: VP SET BINDING PATH
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP SET BINDING PATH.Syntax -->

**VP SET BINDING PATH** ( *rangeObj* : Object  ; *dataContextAttribute*  : Text) <!-- END REF -->

<!-- REF #_method_.VP SET BINDING PATH.Params -->

| Paramètres           | Type   |    | Description                           |                  |
| -------------------- | ------ | -- | ------------------------------------- | ---------------- |
| rangeObj             | Object | -> | Objet plage                           |                  |
| dataContextAttribute | Text   | -> | Nom de l'attribut à lier à *rangeObj* | <!-- END REF --> |

## Description

The `VP SET BINDING PATH` command <!-- REF #_method_.VP SET BINDING PATH.Summary -->binds an attribute from a sheet's data context to *rangeObj*<!-- END REF -->. After you set a data context using the [SET DATA CONTEXT](vp-set-data-context.md) method. When loaded, if the data context contains the attribute, the value of *dataContextAttribute* is automatically displayed in the cells in *rangeObj*.

Dans *rangeObj*, passez un objet qui est soit une plage de cellules, soit une plage combinée de cellules.

- If *rangeObj* is a range with several cells, the command binds the attribute to the first cell of the range.
- If *rangeObj* contains several ranges of cells, the command binds the attribute to the first cell of each range.

In *dataContextAttribute*, pass the name of the attribute to bind to *rangeObj*. If *dataContextAttribute* is an empty string, the function removes the current binding.

> Les attributs de type collection ne sont pas pris en charge. Lorsque vous passez le nom d'un attribut de collection, la commande ne fait rien.

## Exemple

Définir un contexte de données et lier les attributs `firstName` et `lastName` aux cellules :

```4d
var $p : Object

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")
```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

## Voir également

[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)