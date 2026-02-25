---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *objet* {; *objet2* ; ... ; *objetN*} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Field, Variable | &#8594;  | Champ ou variable de type numérique à cumuler |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.ACCUMULATE.Summary-->**ACCUMULATE** désigne les champ(s) ou variable(s) à cumuler dans un état créé à l'aide de la commande [PRINT SELECTION](../commands/print-selection).<!-- END REF-->

Vous **devez** appeler [BREAK LEVEL](../commands/break-level) et **ACCUMULATE** avant la génération de chaque état dans lequel vous voulez utiliser des ruptures. Ces commandes activent le traitement des ruptures pour un état. Pour plus d'informations, reportez-vous à la description de la commande [Subtotal](../commands/subtotal). 

Utilisez **ACCUMULATE** si vous souhaitez calculer des sous-totaux pour des champs ou variables numériques dans un état. **ACCUMULATE** indique à 4D qu'il faut stocker les sous-totaux pour chaque élément spécifié dans *objet*. Les sous-totaux sont cumulés pour chaque niveau de rupture spécifié par la commande [Subtotal](../commands/subtotal).

Exécutez **ACCUMULATE** avant d'imprimer un état à l'aide de [PRINT SELECTION](../commands/print-selection).

Utilisez la fonction [Subtotal](../commands/subtotal) dans la méthode formulaire ou une méthode objet pour retourner le sous-total d'un des objets spécifié dans *objet*.

## Exemple 

Reportez-vous à l'exemple de la commande [BREAK LEVEL](../commands/break-level).

## Voir aussi 

[BREAK LEVEL](../commands/break-level)  
[ORDER BY](../commands/order-by)  
[PRINT SELECTION](../commands/print-selection)  
[Subtotal](../commands/subtotal)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 303 |
| Thread safe | no |


