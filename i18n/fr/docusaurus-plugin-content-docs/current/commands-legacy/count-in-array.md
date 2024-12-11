---
id: count-in-array
title: Count in array
slug: /commands/count-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Count in array.Syntax-->**Count in array** ( *tableau* ; *valeur* ) : Integer<!-- END REF-->
<!--REF #_command_.Count in array.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau dans lequel effectuer le comptage |
| valeur | Expression | &#8594;  | Valeur à compter |
| Résultat | Integer | &#8592; | Nombre d’occurrences trouvées |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count in array.Summary-->La commande **Count in array** retourne le nombre d’occurrences de *valeur* dans *tableau*.<!-- END REF-->

Cette commande peut être utilisée avec des tableaux de type Texte, Numérique, Date, Pointeur, Objet et Booléen. Les paramètres *tableau* et *valeur* doivent être du même type ou d’un type compatible.

**Note :** Avec les tableaux d'objets, vous ne pouvez utiliser que des références d'objets dans le paramètre valeur. 

Si aucun élément de *tableau* ne correspond à *valeur*, la commande retourne 0.

#### Exemple 1 

L’exemple suivant permet d’afficher le nombre de lignes sélectionnées dans une list box : 

```4d
  //tBList est le nom d’un tableau de colonne List box
 ALERT(String(Compter dans tableau(tBList;Vrai))+" ligne(s) sélectionnée(s) dans la list box")
```

#### Exemple 2 

Vous voulez compter les références d'objets dans un tableau d'objets :

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 $objects{21}:=$o1
 $objects{22}:=$o1
 
 var $n : Integer
 
 $n:=Count in array($objects;$o1) // n = 3 
 $n:=Count in array($objects;$o2) // n = 0
```

#### Voir aussi 

[Find in array](find-in-array.md)  
[Find in sorted array](find-in-sorted-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 907 |
| Thread safe | &check; |
| Interdite sur le serveur ||


