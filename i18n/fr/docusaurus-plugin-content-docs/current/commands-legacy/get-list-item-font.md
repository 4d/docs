---
id: get-list-item-font
title: Get list item font
slug: /commands/get-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.Get list item font.Syntax-->**Get list item font** ( {* ;} *liste* ; refElément | * ) : Text<!-- END REF-->
<!--REF #_command_.Get list item font.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d’objet (chaîne) Si omis, liste est un numéro de référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d’élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| Résultat | Text | &#8592; | Nom de police |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get list item font.Summary-->La commande **Get list item font** retourne le nom de la police de caractères courante de l’élément désigné par le paramètre *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d’objet dans *liste*.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

**Note :** Si vous utilisez le caractère @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes répondant à ce nom, la commande **Get list item font** s'appliquera au premier objet dont le nom correspond. 

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien. Vous pouvez également passer 0 dans *réfElément* afin de désigner le dernier élément ajouté à la liste (à l’aide de [APPEND TO LIST](append-to-list.md)).   
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien.

#### Voir aussi 

[SET LIST ITEM FONT](set-list-item-font.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 954 |
| Thread safe | &check; |
| Interdite sur le serveur ||


