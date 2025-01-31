---
id: array-time
title: ARRAY TIME
slug: /commands/array-time
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TIME.Syntax-->**ARRAY TIME** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TIME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TIME.Summary-->La commande **ARRAY TIME** crée et/ou redimensionne un tableau d’éléments de type Heure en mémoire.<!-- END REF-->Dans 4D, les heures peuvent être traitées en tant que valeurs numériques. Dans les versions de 4D antérieures à la v14, il était nécessaire de combiner un tableau d’entiers longs et un format d’affichage pour gérer un tableau d’heures. 

Le paramètre *nomTableau* est le nom du tableau.

Le paramètre *taille* est le nombre d'éléments du tableau.

Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, taille définit le nombre de lignes et taille2 le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau. 

Lorsque vous appliquez la commande **ARRAY TIME** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à la valeur d’heure nulle (00:00:00).
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

A noter que les commandes [SELECTION TO ARRAY](selection-to-array.md) et [SELECTION RANGE TO ARRAY](selection-range-to-array.md) appliquées à un champ de type Heure créent un tableau de type Heure uniquement si le tableau n’a pas déjà été défini dans un autre type, par exemple en entier long. 

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type Heure :

```4d
 ARRAY TIME(tabHeures;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type Heure :

```4d
 ARRAY TIME($tabHeures;100;50)
```

#### Exemple 3 

Comme les tableaux d’heures acceptent des valeurs numériques, le code suivant est valide :

```4d
 ARRAY TIME($tHValeurs;10)
 $CrtHeure:=Current time+1
 APPEND TO ARRAY($tHValeurs;$CrtHeure)
 $Found:=Find in array($tHValeurs;$CrtHeure)
```

#### Voir aussi 

*Créer des tableaux*  
[Time](time.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1223 |
| Thread safe | &check; |


