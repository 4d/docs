---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *objet* {; *objet2* ; ... ; *objetN*} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Field, Variable | &#8594;  | Champ ou variable de type numérique à cumuler |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.ACCUMULATE.Summary-->**ACCUMULATE** désigne les champ(s) ou variable(s) à cumuler dans un état créé à l'aide de la commande [PRINT SELECTION](print-selection.md).<!-- END REF-->

Vous **devez** appeler [BREAK LEVEL](break-level.md) et **ACCUMULATE** avant la génération de chaque état dans lequel vous voulez utiliser des ruptures. Ces commandes activent le traitement des ruptures pour un état. Pour plus d'informations, reportez-vous à la description de la commande [Subtotal](subtotal.md). 

Utilisez **ACCUMULATE** si vous souhaitez calculer des sous-totaux pour des champs ou variables numériques dans un état. **ACCUMULATE** indique à 4D qu'il faut stocker les sous-totaux pour chaque élément spécifié dans *objet*. Les sous-totaux sont cumulés pour chaque niveau de rupture spécifié par la commande [Subtotal](subtotal.md).

Exécutez **ACCUMULATE** avant d'imprimer un état à l'aide de [PRINT SELECTION](print-selection.md).

Utilisez la fonction [Subtotal](subtotal.md) dans la méthode formulaire ou une méthode objet pour retourner le sous-total d'un des objets spécifié dans *objet*.

#### Exemple 

Reportez-vous à l'exemple de la commande [BREAK LEVEL](break-level.md).

#### Voir aussi 

[BREAK LEVEL](break-level.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  