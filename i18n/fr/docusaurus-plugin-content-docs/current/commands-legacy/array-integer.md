---
id: array-integer
title: ARRAY INTEGER
slug: /commands/array-integer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY INTEGER.Syntax-->**ARRAY INTEGER** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY INTEGER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY INTEGER.Summary-->La commande **ARRAY INTEGER** crée et/ou redimensionne un tableau d'éléments de type [Entier](# "Nombre entre -32 768 et +32 767 (2^15 et (2^15)-1) (Entier sur deux octets)") (2 octets) en mémoire.<!-- END REF-->

* Le paramètre *nomTableau* est le nom du tableau.
* Le paramètre *taille* est le nombre d'éléments du tableau.
* Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* spécifie le nombre de lignes et *taille2* spécifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau.

Lorsque vous appliquez la commande **ARRAY INTEGER** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à 0.
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type [Entier](# "Nombre entre -32 768 et +32 767 (2^15 et (2^15)-1) (Entier sur deux octets)") :

```4d
 ARRAY INTEGER(tabEntiers;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type [Entier](# "Nombre entre -32 768 et +32 767 (2^15 et (2^15)-1) (Entier sur deux octets)") : 

```4d
 ARRAY INTEGER($tabEntiers;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau interprocess de 50 éléments de type [Entier](# "Nombre entre -32 768 et +32 767 (2^15 et (2^15)-1) (Entier sur deux octets)") et affecte à chaque élément son numéro :

```4d
 ARRAY INTEGER(◊tabEntiers;50)
 For($vElem;1;50)
    ◊tabEntiers{$vElem}:=$vElem
 End for
```

#### Voir aussi 

[ARRAY LONGINT](array-longint.md)  
[ARRAY REAL](array-real.md)  