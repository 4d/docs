---
id: get-list-item
title: GET LIST ITEM
slug: /commands/get-list-item
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM.Syntax-->**GET LIST ITEM** ( {* ;} *liste* ; positionElém | * ; *réfElément* ; *libelléElément* {; sous_Liste ; *déployée*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| positionElém &#124; * | Opérateur, Entier long | &#8594;  | Position de l'élément dans la ou les liste(s) déployée(s)/contractée(s) ou * pour l‘élément courant de la liste |
| réfElément | Integer | &#8592; | Numéro de référence de l'élément |
| libelléElément | Text | &#8592; | Libellé de l'élément |
| sous_Liste | Integer | &#8592; | Numéro de référence de sous-liste (s'il y en a) |
| déployée | Boolean | &#8592; | Si une sous-liste est rattachée à l'élément : Vrai = la sous-liste est déployée Faux = la sous-liste est contractée |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET LIST ITEM.Summary-->La commande **GET LIST ITEM** retourne des informations sur l'élément désigné par le paramètre *positionElém* de la liste dont vous avez passé le numéro de référence ou le nom d'objet dans *liste*.<!-- END REF--> 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste, vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste, la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de sa propre configuration déployée/contractée et de son propre élément courant. 

**Note :** Si vous utilisez le caractère @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes répondant à ce nom, la commande **GET LIST ITEM** s'appliquera au premier objet dont le nom correspond. 

La position doit être exprimée relativement à l'état déployé/contracté de la liste et de ses sous-listes. Vous devez passer une valeur de position comprise entre 1 et la valeur retournée par [Count list items](count-list-items.md). Si vous passez une valeur située hors de cet intervalle, **GET LIST ITEM** retourne des valeurs vides (0, "", etc.).  
Si vous passez \* dans *positionElém*, la commande s’applique à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande retourne des valeurs vides. 

Après l'appel, vous récupérez :

* Le numéro de référence de l'élément dans *réfElément*.
* Le libellé de l'élément dans *libelléElém*.

Si vous passez les paramètres optionnels *sous\_Liste* et *déployée* :

* *sous\_Liste* contient le numéro de référence de la sous-liste rattachée à l'élément. Si l'élément n'a pas de sous-liste associée, *sous\_Liste* retourne zéro.
* Si l'élément comporte une sous-liste, *déployée* retourne Vrai si la sous-liste est déployée, et Faux sinon.

#### Exemple 1 

En partant de l'hypothèse que *hList* est une liste dont les éléments ont des numéros de référence uniques, le code suivant inverse automatiquement l'état déployé/contracté de la sous-liste, si elle existe, rattachée à l'élément sélectionné : 

```4d
 var $vbDéployé : Boolean
 var $hSousListe;$vlElemRef : Integer
 C_STRING(31;$vsElemText)
  //La déclaration de ces variables est nécessaire si vous souhaitez compiler la méthode
 
 $vlElemPos:=Selected list items(hList)
 If($vlElemPos>0)
    GET LIST ITEM(hList;$vlElemPos;$vlElemRef;$vsElemText;$hSousListe;$vbDéployé)
    If(Is a list($hSousListe))
       SET LIST ITEM(hList;$vlElemRef;$vsElemText;$hSousListe;Not($vbDéployé))
    End if
 End if
```

#### Exemple 2 

Reportez-vous à l'exemple de la commande [APPEND TO LIST](append-to-list.md).

#### Voir aussi 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[List item parent](list-item-parent.md)  
[List item position](list-item-position.md)  
[Selected list items](selected-list-items.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  