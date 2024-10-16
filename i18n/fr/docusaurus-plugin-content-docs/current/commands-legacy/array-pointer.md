---
id: array-pointer
title: ARRAY POINTER
slug: /commands/array-pointer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY POINTER.Syntax-->**ARRAY POINTER** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY POINTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY POINTER.Summary-->La commande **ARRAY POINTER** crée ou redimensionne un tableau d'éléments de type [Pointeur](# "A reference to another variable (including arrays and array elements), table, or field") en mémoire.<!-- END REF-->

* Le paramètre *nomTableau* est le nom du tableau.
* Le paramètre *taille* est le nombre d'éléments du tableau.
* Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* spécifie le nombre de lignes et *taille2* spécifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau.

Lorsque vous appliquez la commande **ARRAY POINTER** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à un pointeur nul (ce qui signifie que la fonction [Is nil pointer](is-nil-pointer.md) appliquée à l'un de ces éléments retourne Vrai).
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type [Pointeur](# "A reference to another variable (including arrays and array elements), table, or field") :

```4d
 ARRAY POINTER(tabPointeurs;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type [Pointeur](# "A reference to another variable (including arrays and array elements), table, or field") : 

```4d
 ARRAY POINTER($tabPointeurs;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau interprocess d'éléments de type [Pointeur](# "A reference to another variable (including arrays and array elements), table, or field") dont la taille est égale au nombre de tables dans la base et remplit chaque élément pointant vers la table dont le numéro est le même que celui de l'élément. Dans la cas d'une table supprimée, la ligne retournera Nil.

```4d
 ARRAY POINTER(<>tabPointeurs;Lire numero derniere table)
 For($vElem;Size of array(<>tabPointeurs);1;-1)
    If(Is table number valid($vElem))
       <>tabPointeurs{$vElem}:=Table($vElem)
    End if
 End for
```
