---
id: list-item-position
title: List item position
slug: /commands/list-item-position
displayed_sidebar: docs
---

<!--REF #_command_.List item position.Syntax-->**List item position** ( {* ;} *liste* ; *réfElément* ) : Integer<!-- END REF-->
<!--REF #_command_.List item position.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| réfElément | Integer | &#8594;  | Numéro de référence d'élément |
| Résultat | Integer | &#8592; | Position de l'élément parmi la ou les liste(s) déployée(s)/contractée(s) |

<!-- END REF-->

#### Description 

<!--REF #_command_.List item position.Summary-->La commande **List item position** retourne la position de l'élément dont vous avez passé le numéro de référence dans *réfElément* parmi la liste dont vous avez passé le numéro de référence ou le nom d'objet dans *liste*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste, vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste, la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de sa propre configuration déployée/contractée.

**Note :** Si vous utilisez le caractère @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes répondant à ce nom, la commande **List item position** s'appliquera au premier objet dont le nom correspond. 

**Note :** A la différence des autres commandes de ce thème, cette commande ne permet pas de passer la valeur 0 dans *réfElément* pour désigner le dernier élément ajouté. 

La position est exprimée relativement à l'élément supérieur de la liste, en tenant compte de l'état déployé/contracté de la liste et de ses sous-listes. 

Le résultat est donc compris entre 1 et la valeur retournée par [Count list items](count-list-items.md). 

Si l'élément n'est pas visible car il est inclus dans une liste contractée, **List item position** déploie la liste correspondante de manière à ce que l'élément devienne visible. 

Si l'élément n'existe pas, **List item position** retourne *0*.

#### Voir aussi 

[Count list items](count-list-items.md)  
[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 629 |
| Thread safe | &check; |
| Interdite sur le serveur ||


