---
id: select-list-items-by-reference
title: SELECT LIST ITEMS BY REFERENCE
slug: /commands/select-list-items-by-reference
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Syntax-->**SELECT LIST ITEMS BY REFERENCE** ( *liste* ; *réfElément* {; *tabRéfs*} )<!-- END REF-->
<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de liste |
| réfElément | Integer | &#8594;  | Numéro de référence d'élément ou 0 pour le dernier élément ajouté à la liste |
| tabRéfs | Integer array | &#8594;  | Tableau de numéros de référence d’éléments |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Summary-->La commande **SELECT LIST ITEMS BY REFERENCE** sélectionne le ou les élément(s) dont vous avez passé le numéro de référence dans *réfElément* et, facultativement, dans *tabRéfs*, parmi la liste dont vous avez passé la référence dans *liste*.<!-- END REF--> 

Si un élément n'est pas visible (car il est par exemple inclus dans une liste contractée), **SELECT LIST ITEMS BY REFERENCE** déploie la ou les sous-liste(s) correspondante(s) de manière à ce qu'il devienne visible. 

Si vous ne passez pas le paramètre *tabRéfs*, le paramètre *réfElément* représente la référence de l'élément à sélectionner. Si le numéro d'élément ne correspond à aucun élément de la liste, la commande ne fait rien. Vous pouvez également passer la valeur 0 dans ce paramètre afin de désigner le dernier élément ajouté à la liste.

Le paramètre facultatif *tabRéfs* permet de sélectionner simultanément plusieurs éléments au sein de la liste. Vous devez passer dans *tabRéfs* un tableau dont chaque ligne indique la référence absolue d’un élément à sélectionner.  
Dans ce cas, l’élément désigné par le paramètre *refElém* désigne parmi la sélection résultante le nouvel élément courant de la liste. Il peut appartenir ou non à l’ensemble d’éléments définis par le tableau. L’élément courant est notamment celui qui passe en mode édition si la commande [EDIT ITEM](../commands/edit-item) est utilisée. 

**Note :** Pour que plusieurs éléments puissent être sélectionnés simultanément dans une liste hiérarchique (manuellement ou par programmation), la propriété *multiSélection* doit avoir été activée pour cette liste. Cette propriété est définie via la commande [SET LIST PROPERTIES](../commands/set-list-properties). 

Lorsque vous travaillez avec les numéros de référence des éléments, assurez-vous d'utiliser des numéros uniques, sinon vous ne pourrez pas différencier les éléments. Pour plus d'informations sur ce point, reportez-vous à la description de la commande [APPEND TO LIST](../commands/append-to-list).

## Exemple 

En supposant que *hList* est une liste dont les éléments ont des numéros de référence uniques, la méthode objet de bouton suivante sélectionne l'élément parent (s'il existe) de l'élément actuellement sélectionné :

```4d
 $vlElémPos:=Selected list items(hList) // Récupérer la position de l'élément sélectionné
 GET LIST ITEM(hList;$vlElémPos;$vlElémRef;$vsElémText) // Numéro de référence de cet élément
 $vlParentElémRef:=List item parent(hList;$vlElémRef) // Numéro de l'élément parent (s'il existe)
 If($vlParentElémRef>0)
  // Sélection de l'élément parent
    SELECT LIST ITEMS BY REFERENCE(hList;List item parent(hList;$vlElémRef))
 End if
```

## Voir aussi 

[EDIT ITEM](../commands/edit-item)  
[SELECT LIST ITEMS BY POSITION](../commands/select-list-items-by-position)  
[Selected list items](../commands/selected-list-items)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 630 |
| Thread safe | no |


