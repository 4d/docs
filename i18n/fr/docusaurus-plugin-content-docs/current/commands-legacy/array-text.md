---
id: array-text
title: ARRAY TEXT
slug: /commands/array-text
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TEXT.Syntax-->**ARRAY TEXT** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TEXT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TEXT.Summary-->La commande **ARRAY TEXT** crée et/ou redimensionne un tableau d'éléments de type [Texte](# "Une chaine de caractères jusqu'à 2 Go") en mémoire.<!-- END REF-->est le nom du tableau.
* Le paramètre *taille* est le nombre d'éléments du tableau.
* Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* spécifie le nombre de lignes et *taille2* spécifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau.

Lorsque vous appliquez la commande **ARRAY TEXT** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à "" (chaîne vide).
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type [Texte](# "Une chaine de caractères jusqu'à 2 Go") :

```4d
 ARRAY TEXT(tabTexte;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type [Texte](# "Une chaine de caractères jusqu'à 2 Go") : 

```4d
 ARRAY TEXT($tabEntiersLongs;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau interprocess de 50 éléments de type [Texte](# "Une chaine de caractères jusqu'à 2 Go") et affecte à chaque élément la valeur "Elément No" suivie du numéro de l'élément :

```4d
 ARRAY TEXT(◊tabTexte;50)
 For($vElem;1;50)
    ◊tabTexte{$vElem}:="Elément n°"+String($vElem)
 End for
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 222 |
| Thread safe | &check; |
| Interdite sur le serveur ||


