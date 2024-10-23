---
id: delete-from-list
title: DELETE FROM LIST
slug: /commands/delete-from-list
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM LIST.Syntax-->**DELETE FROM LIST** ( {* ;} *liste* ; réfElément | * {; *} )<!-- END REF-->
<!--REF #_command_.DELETE FROM LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| réfElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d'élément ou 0 pour le dernier élément ajouté à la liste ou * pour l'élément de la liste actuellement sélectionné |
| * | Operator |  &#8594;  | Si spécifié, effacer les sous-listes de la mémoire (le cas échéant) Si omis, ne pas effacer les sous-listes |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.DELETE FROM LIST.Summary-->La commande **DELETE FROM LIST** supprime l'élément désigné par le paramètre *réfElément* de la liste dont le numéro de référence ou le nom d'objet est passé dans *liste*.<!-- END REF--> 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

Si vous passez *\** dans *réfElément*, vous supprimez l'élément actuellement sélectionné de la liste. Vous pouvez également passer 0 dans ce paramètre afin de demander la suppression du dernier élément ajouté à la liste.   
Sinon, vous spécifiez le numéro de référence de l'élément à supprimer. Si le numéro ne correspond à aucun élément de la *liste*, la commande ne fait rien. 

Si vous travaillez avec les numéros de référence des éléments, veillez à construire une liste dans laquelle les éléments ont des numéros de référence uniques, sinon vous ne pourrez les différencier. Pour plus d'informations sur ce point, reportez-vous à la description de la commande [APPEND TO LIST](append-to-list.md).

Quel que soit l'élément que vous supprimez, vous pouvez passer un troisième paramètre optionnel, *\**, pour indiquer à 4D de supprimer automatiquement de la mémoire la sous-liste rattachée à l'élément, s'il en existe. Si vous ne passez pas ce paramètre, il est préférable de récupérer au préalable le numéro de référence de la sous-liste (éventuelle) rattachée à l'élément, de manière à pouvoir si besoin est supprimer cette sous-liste à l'aide de la commande [CLEAR LIST](clear-list.md).

#### Exemple 

L'exemple suivant supprime l'élément sélectionné de la liste *hList*. Si une sous-liste est rattachée à l'élément, elle est supprimée (ainsi que toute sous-sous-liste) :

```4d
 DELETE FROM LIST(hList;*;*)
```

#### Voir aussi 

[CLEAR LIST](clear-list.md)  
[GET LIST ITEM](get-list-item.md)  