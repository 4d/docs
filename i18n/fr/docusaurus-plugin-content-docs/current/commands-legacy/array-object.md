---
id: array-object
title: ARRAY OBJECT
slug: /commands/array-object
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY OBJECT.Syntax-->**ARRAY OBJECT** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY OBJECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY OBJECT.Summary-->La commande **ARRAY OBJECT** crée et/ou redimensionne un tableau d’éléments de type Objet de langage en mémoire.<!-- END REF-->

Le paramètre *nomTableau* est le nom du tableau. Vous pouvez utiliser tout nom conforme aux conventions de 4D.

Le paramètre *taille* est le nombre d’éléments du tableau.

Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* définit le nombre de lignes et *taille2* le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes du thème "Tableaux", lorsque vous travaillez avec la première dimension du tableau. 

Lorsque vous appliquez la commande **ARRAY OBJECT** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont indéfinis. Vous pouvez tester si un élément est défini à l’aide de la commande [OB Is defined](ob-is-defined.md).
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Création d’un tableau process de 100 éléments de type Objet :

```4d
 ARRAY OBJECT(tabObjets;100)
```

#### Exemple 2 

Création d’un tableau local de 100 lignes contenant chacune 50 éléments de type Objet :

```4d
 ARRAY OBJECT($tabObjets;100;50)
```

#### Exemple 3 

Création et remplissage d’un tableau local d’objets :

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 OB SET($ref_richard;"nom";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"nom";"Susan";"age";4)
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"nom";"James";"age";3)
 APPEND TO ARRAY($arrayChildren;$ref_james)
     //$arrayChildren{1} -> {"nom":"Richard","age":7}
     //$arrayChildren{2} ->  {"nom":"Susan","age":4}
     //$arrayChildren{3}  -> {"nom":"James","age":3}
```

#### Voir aussi 

[C\_OBJECT](c-object.md)  
*Créer des tableaux*  
*Objets (Langage)*  