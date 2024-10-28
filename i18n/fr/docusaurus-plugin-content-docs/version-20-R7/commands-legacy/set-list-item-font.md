---
id: set-list-item-font
title: SET LIST ITEM FONT
slug: /commands/set-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM FONT.Syntax-->**SET LIST ITEM FONT** ( {* ;} *liste* ; refElément | * ; *police* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM FONT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d’objet (chaîne) Si omis, liste est un numéro de référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d’élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| police | Text, Integer | &#8594;  | Nom ou numéro de police |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET LIST ITEM FONT.Summary-->La commande **SET LIST ITEM FONT** modifie la police de caractères de l’élément désigné par le paramètre *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d’objet dans *liste*.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien.Vous pouvez également passer 0 dans *réfElément* afin de demander la modification du dernier élément ajouté à la liste (à l’aide de [APPEND TO LIST](append-to-list.md)).  
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien.

Passez dans le paramètre *police* le nom ou le numéro de la police à utiliser. Pour réappliquer la police par défaut de la liste hiérarchique, passez une chaîne vide dans *police*.

#### Exemple 

Appliquer la police Times à l’élément courant de la liste :

```4d
 SET LIST ITEM FONT(*;"Maliste";*;"Times")
```

#### Voir aussi 

[Get list item font](get-list-item-font.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  