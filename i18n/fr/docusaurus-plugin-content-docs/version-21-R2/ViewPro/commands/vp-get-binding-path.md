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

| Paramètres | Type   |                             | Description                            |                  |
| ---------- | ------ | --------------------------- | -------------------------------------- | ---------------- |
| rangeObj   | Object | ->                          | Objet plage                            |                  |
| Résultat   | Text   | <- | Nom de l'attribut associé à la cellule | <!-- END REF --> |

## Description

La commande `VP Get binding path` <!-- REF #_method_.VP Get binding path.Summary -->retourne le nom de l'attribut lié à la cellule spécifiée dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet qui est soit une plage de cellules, soit une plage combinée de cellules. A noter que :

- Si *rangeObj* est une plage avec plusieurs cellules, la commande retourne le nom de l'attribut lié à la première cellule de l'intervalle.
- Si *rangeObj* contient plusieurs plages de cellules, la commande retourne le nom de l'attribut lié à la première cellule de la première plage.

## Exemple

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

## Voir également

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
