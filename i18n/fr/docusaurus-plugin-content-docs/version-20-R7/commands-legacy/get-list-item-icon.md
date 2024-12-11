---
id: get-list-item-icon
title: GET LIST ITEM ICON
slug: /commands/get-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM ICON.Syntax-->**GET LIST ITEM ICON** ( {* ;} *liste* ; refElément | * ; *icône* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM ICON.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d’objet (chaîne) Si omis, liste est un numéro de référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Opérateur, Entier long | &#8594;  | Numéro de référence d’élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| icône | Picture | &#8592; | Icône associée à l'élément |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET LIST ITEM ICON.Summary-->La commande **GET LIST ITEM ICON** retourne dans *icône* l’icône associée à l’élément dont vous avez passé le numéro de référence dans *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d’objet dans *liste*.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

**Note :** Si vous utilisez le caractère @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes répondant à ce nom, la commande **GET LIST ITEM ICON** s'appliquera au premier objet dont le nom correspond.

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien. Vous pouvez également passer 0 dans *réfElément* afin de désigner le dernier élément ajouté à la liste (à l’aide de [APPEND TO LIST](append-to-list.md)).   
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien.

Passez dans *icône* une variable image. A l’issue de l’exécution de la commande, elle contiendra l’icône associée à l’élément, quelle que soit la source de l’icône (image statique, ressource ou expression image). 

Si aucune icône n’est associée à l’élément, la variable icône est retournée vide.

**Note :** Lorsque l'icône associée à un élément a été définie via une référence statique (références de ressources ou images de la bibliothèque), il est possible de connaître son numéro à l’aide de la commande [GET LIST ITEM PROPERTIES](get-list-item-properties.md).

#### Voir aussi 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 951 |
| Thread safe | &check; |
| Interdite sur le serveur ||


