---
id: set-list-item-icon
title: SET LIST ITEM ICON
slug: /commands/set-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM ICON.Syntax-->**SET LIST ITEM ICON** ( {* ;} *liste* ; réfElément | * ; *icône* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM ICON.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d’objet (chaîne) Si omis, liste est un numéro de référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| réfElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d’élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| icône | Picture | &#8594;  | Icône à associer à l'élément |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST ITEM ICON.Summary-->La commande **SET LIST ITEM ICON** permet de modifier l’icône associée à l’élément désigné par le paramètre *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d’objet dans *liste*.<!-- END REF-->

**Note :** Il est possible de modifier l’icône associée à un élément à l’aide de la commande [SET LIST ITEM PROPERTIES](set-list-item-properties.md). Toutefois, [SET LIST ITEM PROPERTIES](set-list-item-properties.md) accepte uniquement des références d’images statiques (références de ressources ou images de la bibliothèque).

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien. Vous pouvez également passer 0 dans *réfElément* afin de demander la modification du dernier élément ajouté à la liste (à l’aide de [APPEND TO LIST](append-to-list.md)).  
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien.

Passez dans le paramètre *icône* une expression image 4D valide (champ, variable, pointeur, etc.). L’image sera placée à gauche de l’élément. 

#### Exemple 

Affectation d'une même image à deux éléments différents. Ce code est optimisé car l'image est chargée une seule fois en mémoire :

```4d
 var $image : Picture
 READ PICTURE FILE("monImage.png";$image)
 SET LIST ITEM ICON(maliste;ref1;$image)
 SET LIST ITEM ICON(maliste;ref2;$image)
```

#### Voir aussi 

[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 950 |
| Thread safe | &cross; |


