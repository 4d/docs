---
id: set-list-item
title: SET LIST ITEM
slug: /commands/set-list-item
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM.Syntax-->**SET LIST ITEM** ( {* ;} *liste* ; refElément | * ; *libelléElément* ; *nouvelRéf* {; sous_Liste ; *déployée*} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Opérateur, Entier long | &#8594;  | Numéro de référence d'élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| libelléElément | Text | &#8594;  | Nouveau libellé d'élément |
| nouvelRéf | Integer | &#8594;  | Nouveau numéro de référence d'élément |
| sous_Liste | Integer | &#8594;  | Nouvelle sous-liste rattachée à l'élément ou 0 = pas de sous-liste (détacher sous-liste courante) ou -1 = pas de changement |
| déployée | Boolean | &#8594;  | Indique si la sous-liste doit être déployée/contractée |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST ITEM.Summary-->La commande **SET LIST ITEM** modifie l'élément désigné par le paramètre *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d'objet dans *liste*.<!-- END REF--> 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien.   
Vous pouvez également passer *0* dans *réfElément* afin de désigner le dernier élément ajouté à la liste (à l'aide de [APPEND TO LIST](append-to-list.md)).   
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien.

Si vous travaillez avec les numéros de référence des éléments, assurez-vous d'utiliser des numéros uniques, sinon vous ne pourrez pas différencier les éléments. Pour plus d'informations sur ce point, reportez-vous à la section *Gestion des listes hiérarchiques*.

Vous pouvez passer le nouveau libellé de l'élément dans le paramètre *libelléElément*. Si vous souhaitez changer le numéro de référence de l'élément, passez la nouvelle valeur dans le paramètre *nouvelRéf*, sinon passez la même valeur que dans *réfElément*.

Si vous voulez associer une sous-liste à l'élément, passez le numéro de référence de la sous-liste dans le paramètre *sous\_Liste*. Dans ce cas, vous devez également spécifier si la nouvelle sous-liste devra apparaître déployée ou contractée en passant respectivement Vrai ou Faux dans le paramètre *déployée*.

Si vous voulez dissocier de l'élément une sous-liste qui lui est actuellement rattachée, passez *0* (zéro) dans *sous\_Liste*. Dans ce cas, il est conseillé d'avoir préalablement obtenu le numéro de référence de cette liste à l'aide de la commande [APPEND TO LIST](append-to-list.md), afin de pouvoir effacer la sous-liste avec la commande [CLEAR LIST](clear-list.md) si vous n'en avez plus besoin.

Si vous ne souhaitez pas modifier les propriétés de sous-liste de l'élément, passez *\-1* dans le paramètre *sous\_Liste*.

#### Exemple 1 

Nous supposons que *hList* est une liste dont les éléments ont des numéros de référence uniques. La méthode objet suivante d'un bouton ajoute une sous-liste à l'élément actuellement sélectionné dans la liste *hList* :  

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSouslist;$vbExpanded)
    $vbNouvSousList:=Not(Is a list($hSouslist))
    If($vbNouvSousList)
       $hSouslist:=New list
    End if
    vlUniqueRef:=vlUniqueRef+1
    APPEND TO LIST($hSousList;"Nouvel élément";vlUniqueRef)
    If($vbNouvSousList)
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSouslist;True)
    End if
    SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)
 End if
```

#### Exemple 2 

Reportez-vous à l'exemple de la commande [GET LIST ITEM](get-list-item.md).   

#### Exemple 3 

Reportez-vous à l'exemple de la commande [APPEND TO LIST](append-to-list.md).

#### Voir aussi 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 385 |
| Thread safe | &cross; |


