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

La commande `VP SET BINDING PATH` <!-- REF #_method_.VP SET BINDING PATH.Summary -->lie un attribut du contexte de données d'une feuille à *rangeObj*<!-- END REF -->. Après avoir défini un contexte de données en utilisant la méthode [SET DATA CONTEXT](vp-set-data-context.md). Lors du chargement, si le contexte de données contient l'attribut, la valeur de *dataContextAttribute* est automatiquement affichée dans les cellules de *rangeObj*.

Dans *rangeObj*, passez un objet qui est soit une plage de cellules, soit une plage combinée de cellules.

- Si *rangeObj* est une plage avec plusieurs cellules, la commande lie l'attribut à la première cellule de la plage.
- Si *rangeObj* contient plusieurs plages de cellules, la commande lie l'attribut à la première cellule de chaque plage.

Dans *dataContextAttribute*, passez le nom de l'attribut à lier à *rangeObj*. Si *dataContextAttribute* est une chaîne vide, la fonction supprime la liaison courante.

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