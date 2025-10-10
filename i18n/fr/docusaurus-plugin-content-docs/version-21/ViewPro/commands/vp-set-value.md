---
id: vp-set-value
title: VP SET VALUE
---

<!-- REF #_method_.VP SET VALUE.Syntax -->

**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

| Paramètres | Type   |    | Description                                   |                  |
| ---------- | ------ | -- | --------------------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objet plage                                   |                  |
| valueObj   | Object | -> | Valeurs de la cellule et options de formatage | <!-- END REF --> |

## Description

La commande `VP SET VALUE` <!-- REF #_method_.VP SET VALUE.Summary -->attribue une valeur spécifiée à une plage de cellules désignée<!-- END REF -->.

Cette commande vous permet d'utiliser un code générique pour définir et formater les types de valeurs dans *rangeObj*, alors que d'autres commandes, telles que [`VP SET TEXT VALUE`](vp-set-text-value.md) et [`VP SET NUM VALUE`](vp-set-num-value.md), réduisent les valeurs à des types spécifiques.

Dans *rangeObj*, passez une plage de cellule(s) (créée par exemple avec [`VP Cell`](vp-cell) ou [`VP Column`](vp-column.md)) dont vous voulez spécifier la valeur. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *valueObj* est un objet qui comprend les propriétés de la valeur et le [format](../configuring.md#cell-format) à assigner à *rangeObj*. Il peut contenir les propriétés suivantes :

| Propriété | Type                                     | Description                                                                                                                                                                                                                       |
| --------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur à attribuer à *rangeObj* (sauf pour time). Passez null pour effacer le contenu de la cellule.                                                                           |
| time      | Real                                     | Valeur heure (en secondes) à assigner à *rangeObj*                                                                                                                                                             |
| format    | Text                                     | Modèle pour la propriété value/time. Pour plus d'informations sur les motifs et les caractères de formatage, veuillez consulter le paragraphe [Format de cellule](../configuring.md#cell-format). |

## Exemple

```4d
//Définir la valeur de la cellule comme False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
//Définissez la valeur de la cellule comme 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
//Définissez la valeur de la cellule comme $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))
 
//Définissez la valeur de la cellule comme Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))
 
//Définir la valeur de la cellule comme date actuelle
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
//Définir la valeur de la cellule comme heure actuelle
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))
 
//Définir la valeur de la cellule comme date et heure spécifiques
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
 
//Effacer le contenu de la cellule
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

## Voir également

[Cell Format](../configuring.md#cell-format)<br/>
[VP Get values](vp-get-value.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET BOOLEAN VALUE](vp-set-boolean-value.md)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET FIELD](vp-set-field.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET NUM VALUE](vp-set-num-value.md)<br/>
[VP SET TEXT VALUE](vp-set-text-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)


