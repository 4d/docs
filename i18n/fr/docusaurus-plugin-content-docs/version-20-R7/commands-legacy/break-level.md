---
id: break-level
title: BREAK LEVEL
slug: /commands/break-level
displayed_sidebar: docs
---

<!--REF #_command_.BREAK LEVEL.Syntax-->**BREAK LEVEL** ( *niveau* {; *sautPage*} )<!-- END REF-->
<!--REF #_command_.BREAK LEVEL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| niveau | Integer | &#8594;  | Nombre de niveaux de rupture |
| sautPage | Integer | &#8594;  | Niveau de saut de page |

<!-- END REF-->

#### Description 

<!--REF #_command_.BREAK LEVEL.Summary-->**BREAK LEVEL** spécifie le nombre de niveaux de rupture dans un état créé à l'aide de la commande [PRINT SELECTION](print-selection.md).<!-- END REF-->

Vous **devez** appeler **BREAK LEVEL** et [ACCUMULATE](accumulate.md) avant la génération de chaque état dans lequel vous voulez utiliser des ruptures. Ces commandes activent le traitement des ruptures pour un état. Pour plus d'informations, reportez-vous à la description de la commande [Subtotal](subtotal.md). 

Le paramètre *niveau* indique le dernier niveau de rupture pour lequel vous voulez utiliser des ruptures. Ce nombre doit être inférieur ou égal aux niveaux de tris que vous aurez effectués avant l'impression. Si vous avez effectué un tri sur davantage de niveaux, ces niveaux seront imprimés triés, mais ne comporteront pas de rupture.

Chaque niveau de rupture généré provoquera l'impression de zones de rupture et d'en-tête dans le formulaire. Il doit y avoir au moins autant de zones de rupture dans le formulaire que la valeur que vous avez passée dans *niveau*. S'il y a davantage de zones de rupture, elles seront ignorées et ne seront pas imprimées.

Le second paramètre (optionnel), *sautPage*, permet de provoquer un saut de page sur le niveau de rupture de votre choix.

#### Exemple 

L'exemple suivant imprime un état avec deux niveaux de rupture. La sélection est triée sur quatre champs, mais la commande **BREAK LEVEL** ne spécifie que deux niveaux de rupture. Seul un champ est cumulé à l'aide de la commande [ACCUMULATE](accumulate.md) :

```4d
 ORDER BY([Emp]Service;>;[Emp]Titre;>;[Emp]Nom;>;Emp]Prénom;>) // Trier sur quatre champs
 BREAK LEVEL(2) // Fixer 2 niveaux de rupture (Service et Titre)
 ACCUMULATE([Emp]Salaire) // Cumuler sur les salaires
 FORM SET OUTPUT([Emp];"ServiceRessHum") // Sélectionner le formulaire à imprimer
 PRINT SELECTION([Emp]) // Imprimer l'état
```

#### Voir aussi 

[ACCUMULATE](accumulate.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 302 |
| Thread safe | &check; |
| Interdite sur le serveur ||


