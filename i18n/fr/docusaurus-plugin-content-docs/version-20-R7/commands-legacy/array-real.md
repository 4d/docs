---
id: array-real
title: ARRAY REAL
slug: /commands/array-real
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY REAL.Syntax-->**ARRAY REAL** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY REAL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY REAL.Summary-->La commande **ARRAY REAL** crée et/ou redimensionne un tableau d'éléments de type Réel en mémoire.<!-- END REF-->est le nom du tableau.
* Le paramètre *taille* est le nombre d'éléments du tableau.
* Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, taille spécifie le nombre de lignes et *taille2* spécifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau.

Lorsque vous appliquez la commande **ARRAY REAL** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à 0.
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type [Réel](# "Number between ±1.7e±308 (15 digits)") :

```4d
 ARRAY REAL(tabRéel;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type Réel : 

```4d
 ARRAY REAL($tabRéel;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau interprocess de 50 éléments de type [Réel](# "Number between ±1.7e±308 (15 digits)") et affecte à chaque élément son numéro :

```4d
 ARRAY REAL(◊tabRéel;50)
 For($vElem;1;50)
    ◊tabRéel{$vElem}:=$vElem
 End for
```

#### Voir aussi 

[ARRAY INTEGER](array-integer.md)  
[ARRAY LONGINT](array-longint.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 219 |
| Thread safe | &check; |


