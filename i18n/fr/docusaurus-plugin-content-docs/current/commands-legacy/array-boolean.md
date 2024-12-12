---
id: array-boolean
title: ARRAY BOOLEAN
slug: /commands/array-boolean
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BOOLEAN.Syntax-->**ARRAY BOOLEAN** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BOOLEAN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY BOOLEAN.Summary-->La commande **ARRAY BOOLEAN** crée et/ou redimensionne un tableau d'éléments de type [Booléen](# "Peut être VRAI ou FAUX") en mémoire.<!-- END REF-->

* Le paramètre *nomTableau* est le nom du tableau.
* Le paramètre *taille* est le nombre d'éléments du tableau.
* Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* spécifie le nombre de lignes et *taille2* spécifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau.

Lorsque vous appliquez la commande **ARRAY BOOLEAN** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à Faux.
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

**Astuce :** Dans certaines circonstances, l'utilisation d'un tableau d'Entiers dans lequel chaque élément différent de zéro signifie "vrai" et chaque élément égal à zéro signifie "faux" est une alternative à l'utilisation d'un tableau de Booléens.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type [Booléen](# "Peut être VRAI ou FAUX") :

```4d
 ARRAY BOOLEAN(tabBooléens;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type Booléen : 

```4d
 ARRAY BOOLEAN($tabBooléens;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau interprocess de 50 éléments de type Booléen et affecte à chaque élément pair la valeur Faux :

```4d
 ARRAY BOOLEAN(◊tabBooléens;50)
 For($vElem;1;50)
    ◊tabBooléens{$vElem}:=(($vElem%2)=0)
 End for
```

#### Voir aussi 

[ARRAY INTEGER](array-integer.md)  