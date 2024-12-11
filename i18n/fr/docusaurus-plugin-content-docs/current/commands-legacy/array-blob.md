---
id: array-blob
title: ARRAY BLOB
slug: /commands/array-blob
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BLOB.Syntax-->**ARRAY BLOB** ( *nomTableau* ; *taille* {; *taille2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nom du tableau |
| taille | Integer | &#8594;  | Nombre d'éléments du tableau ou Nombre de tableaux si taille2 est spécifié |
| taille2 | Integer | &#8594;  | Nombre d'éléments des tableaux à deux dimensions |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY BLOB.Summary-->La commande **ARRAY BLOB** crée ou redimensionne un tableau d’éléments de type Blob en mémoire.<!-- END REF-->

Le paramètre *nomTableau* est le nom du tableau.

Le paramètre *taille* est le nombre d'éléments du tableau.

Le paramètre *taille2* est optionnel. Si vous le spécifiez, cette commande crée un tableau à deux dimensions. Dans ce cas, *taille* définit le nombre de lignes et *taille2* le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau à deux dimensions peut être traitée à la fois comme un élément et comme un tableau. Cela signifie que vous pouvez insérer et supprimer des tableaux entiers dans un tableau à deux dimensions, par l'intermédiaire des autres commandes de ce thème, lorsque vous travaillez avec la première dimension du tableau. 

Lorsque vous appliquez la commande **ARRAY BLOB** à un tableau existant :

* Si vous agrandissez sa taille, les éléments existants ne sont pas modifiés, les nouveaux éléments sont initialisés à un BLOB vide ([BLOB size](blob-size.md) \= 0).
* Si vous réduisez sa taille, les éléments du "bas" du tableau sont supprimés et perdus.

#### Exemple 1 

Cet exemple crée un tableau process contenant 100 éléments de type BLOB :

```4d
 ARRAY BLOB(tabBlob;100)
```

#### Exemple 2 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type BLOB :

```4d
 ARRAY BLOB($tabBlob;100;50)
```

#### Exemple 3 

Cet exemple crée un tableau local de 100 lignes contenant chacune 50 éléments de type BLOB. La variable *$vByteValue* reçoit le 10e octet du BLOB placé dans la 7e colonne et la 5e ligne du tableau BLOB :

```4d
 C_INTEGER($vByteValue)
 ARRAY BLOB($abValues;100;50)
 ...
 $vByteValue:=$abValues{5}{7}{9}
```

#### Voir aussi 

*Créer des tableaux*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1222 |
| Thread safe | &check; |
| Interdite sur le serveur ||


