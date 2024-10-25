---
id: get-list-item-parameter
title: GET LIST ITEM PARAMETER
slug: /commands/get-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER.Syntax-->**GET LIST ITEM PARAMETER** ( {* ;} *liste* ; refElément | * ; *sélecteur* ; *valeur* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d’objet (chaîne) Si omis, liste est un numéro de référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d’élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| sélecteur | Text | &#8594;  | Constante de paramètre |
| valeur | Text, Boolean, Real | &#8592; | Valeur courante du paramètre |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET LIST ITEM PARAMETER.Summary-->La commande **GET LIST ITEM PARAMETER** permet de connaître la *valeur* courante du paramètre *sélecteur* pour l’élément *réfElément* de la liste hiérarchique dont vous avez passé la référence ou le nom d’objet dans le paramètre *liste*.<!-- END REF--> 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

**Note :** Si vous utilisez le caractère @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes répondant à ce nom, la commande **GET LIST ITEM PARAMETER** s'appliquera au premier objet dont le nom correspond.

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien. Vous pouvez également passer 0 dans *réfElément* afin de désigner le dernier élément ajouté à la liste (à l’aide de [APPEND TO LIST](append-to-list.md)).   
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien. 

Vous pouvez passer dans *sélecteur* la constante Additional text ou Associated standard action (placées dans le thème “*Listes hiérarchiques*”) ou toute valeur personnalisée. Pour plus d’informations sur les paramètres *sélecteur* et *valeur*, reportez-vous à la description de la commande [SET LIST ITEM PARAMETER](set-list-item-parameter.md).

#### Voir aussi 

*Listes hiérarchiques*  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  