---
id: find-in-sorted-array
title: Find in sorted array
slug: /commands/find-in-sorted-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in sorted array.Syntax-->**Find in sorted array** ( *tableau* ; *valeur* ; > ou < {; *posDébut* {; *posFin*}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Find in sorted array.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau dans lequel effectuer la recherche |
| valeur | Expression | &#8594;  | Valeur (de même type que le tableau) à rechercher dans le tableau |
| > ou < | Opérateur | &#8594;  | > si le tableau est trié par ordre croissant, < s'il est trié par ordre décroissant |
| posDébut | Integer | &#8592; | Si la valeur est trouvée, position de sa première occurrence ; sinon, position où la valeur devrait être insérée |
| posFin | Integer | &#8592; | Si la valeur est trouvée, position de sa dernière occurrence ; sinon, identique à posDébut |
| Résultat | Boolean | &#8592; | Vrai si au moins un élément du tableau correspond à la valeur recherchée, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find in sorted array.Summary-->La commande **Find in sorted array** retourne **vrai** si au moins un élément du *tableau* trié correspond à *valeur*, et optionnellement retourne la position du ou des élément(s) trouvé(s).<!-- END REF--> A la différence de [Find in array](find-in-array.md), **Find in sorted array** travaille uniquement avec un *tableau* trié et fournit des informations sur la position des occurrences, ce qui permet d'insérer des éléments si nécessaire.

Le *tableau* doit être déjà trié conformément au tri défini par le paramètre *\> ou <* (symbole "supérieur à" pour l'ordre croissant et symbole "inférieur à" pour l'ordre décroissant). La commande **Find in sorted array** tire pleinement parti de ce tri et utilise un algorithme de recherche par dichotomie, qui est généralement plus efficace pour les tableaux de grande taille (pour plus d'informations, vous pouvez consulter la [page consacrée à la dichotomie sur Wikipedia](http://fr.wikipedia.org/wiki/Dichotomie)). Cependant, si le tableau n'est pas correctement trié, le résultat pourra être incorrect.

**Note :** Lorsque vous utilisez cette commande avec un tableau trié de type Object, vous ne pouvez passer qu'une référence d'objet en valeur. 

La commande ne tiendra pas compte de l'indicateur de tri et se comportera comme une commande [Find in array](find-in-array.md) standard (recherche séquentielle, renvoi de -1 dans *posDébut* et *posFin* si *valeur* n'est pas trouvée) dans les cas suivants :

* si le type du tableau ne peut pas être trié (par exemple tableau de pointeurs),
* si le tableau est de type booléen (non pertinent pour une recherche par dichotomie),
* si la base de données n'est pas en Unicode (mode compatibilité) et si le tableau est un tableau alpha ou texte,
* lorsque vous recherchez, dans un tableau texte, une chaîne incluant un joker (@) au début ou au milieu de la chaîne (la recherche par dichotomie n'est pas utilisable car les éléments correspondants peuvent être non contigus dans le tableau).

Lorsque la commande renvoie **Faux**, la *valeur* retournée dans le paramètre *posDébut* peut être passée à [INSERT IN ARRAY](insert-in-array.md) afin de l'insérer à la "bonne" place dans le *tableau*, c'est-à-dire en respectant son tri courant. Cette séquence est plus rapide que l'ajout d'un nouvel élément à la fin du tableau suivi de l'appel à [SORT ARRAY](sort-array.md) afin de le placer au bon endroit.

La valeur retournée dans *posFin* peut être utilisée conjointement à celle retournée dans *posDébut* afin d'itérer sur chaque élément du tableau correspondant à la *valeur* (via une [ARRAY TO LIST](array-to-list.md)) ou pour trouver le nombre total d'occurrences (comme le ferait la commande [Count in array](count-in-array.md), mais plus rapidement).

#### Exemple 1 

Vous souhaitez insérer une valeur, si nécessaire, tout en conservant le tableau trié :

```4d
 var $pos : Integer
 If(Find in sorted array($array ;$valeur;>;$pos)
    ALERT("Trouvé à la position "+String($pos))
 Else
    INSERT IN ARRAY($array ;$pos)
    $array{$pos}:=$valeur
 End if
```

#### Exemple 2 

Vous souhaitez trouver le nombre d'occurrences de chaînes débutant par "test" et créer une chaîne qui concatène tous ces éléments : 

```4d
 var $posFirst ;$posLast : Integer
 var $output : Text
 If(Find in sorted array($array ;"test@";>;$posFirst ;$posLast))
    $output:="Trouvé "+String($posLast-$posFirst+1)+" résultats :\n"
 End if
 For($i ;$posFirst ;$posLast)
    $output:=$output+$array{$i}+"\n"
 End for
```

#### Voir aussi 

[Count in array](count-in-array.md)  
[Find in array](find-in-array.md)  
[SORT ARRAY](sort-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1333 |
| Thread safe | &check; |


