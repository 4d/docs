---
id: size-of-array
title: Size of array
slug: /commands/size-of-array
displayed_sidebar: docs
---

<!--REF #_command_.Size of array.Syntax-->**Size of array** ( *tableau* ) : Integer<!-- END REF-->
<!--REF #_command_.Size of array.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau dont vous désirez connaître la taille |
| Résultat | Integer | &#8592; | Nombre d'éléments dans le tableau |

<!-- END REF-->

#### Description 

<!--REF #_command_.Size of array.Summary-->**Size of array** retourne le nombre d'éléments de *tableau*.<!-- END REF--> 

#### Exemple 1 

L'exemple suivant retourne la taille du tableau *monTableau* :

```4d
 vTaille:=Size of array(monTableau) // vTaille reçoit la taille de monTableau
```

#### Exemple 2 

L'exemple suivant retourne le nombre de lignes d'un tableau à deux dimensions :

```4d
 vlLignes:=Size of array(t2DTableau) // vlLignes reçoit la taille de t2DTableau
```

#### Exemple 3 

L'exemple suivant retourne le nombre de colonnes d'une ligne d'un tableau à deux dimensions :

```4d
 vlColonnes:=Size of array(t2DTableau{10}) // vlColonnes reçoit la taille de t2DTableau{10}
```

#### Voir aussi 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 274 |
| Thread safe | &check; |


