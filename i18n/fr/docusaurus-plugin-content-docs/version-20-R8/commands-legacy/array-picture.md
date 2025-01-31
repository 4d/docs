---
id: array-picture
title: ARRAY PICTURE
slug: /commands/array-picture
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY PICTURE.Syntax-->**ARRAY PICTURE** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY PICTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY PICTURE.Summary-->La commande **ARRAY PICTURE** crée et/ou redimensionne un tableau d'éléments de type [Image](# "Can be any Windows or Macintosh picture") en mémoire.<!-- END REF-->est le nom du tableau.
* Le paramètre *taille* est le nombre d'éléments du tableau.
* Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* spécifie le nombre de lignes et *taille2* spécifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau.

Lorsque vous appliquez la commande **ARRAY PICTURE** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à une image vide (ce qui signifie que la fonction [Picture size](picture-size.md) appliquée à l'un de ces éléments retourne 0).
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type [Image](# "Can be any Windows or Macintosh picture") :

```4d
 ARRAY PICTURE(tabImages;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type [Image](# "Can be any Windows or Macintosh picture") : 

```4d
 ARRAY PICTURE($tabImages;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau interprocess d'éléments de type [Image](# "Can be any Windows or Macintosh picture"). La taille du tableau est égale au nombre de ressources *'PICT'* dont le nom commence par *"Utilisateur Intf/"* disponibles dans la base. Chaque image est chargée dans un élément du tableau :

```4d
 RESOURCE LIST("PICT";$aiResIDs;$asResNoms)
 ARRAY PICTURE(◊tabImages;Taille tableau($aiResIDs))
 $vlPictElem:=0
 For($vlElem;1;Size of array(◊tabImages))
    If($asResNoms{$vlElem}="Utilisateur Intf/@")
       $vlPictElem:=$vlPictElem+1
       GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgImage)
       ◊tabImages{$vlPictElem}:=$vgImage
    End if
 End for
 ARRAY PICTURE(◊tabImages;$vlPictElem)
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 279 |
| Thread safe | &check; |


