---
id: delete-from-array
title: DELETE FROM ARRAY
slug: /commands/delete-from-array
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM ARRAY.Syntax-->**DELETE FROM ARRAY** ( *tableau* ; *positionDépart* {; *combien*} )<!-- END REF-->
<!--REF #_command_.DELETE FROM ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau dans lequel supprimer des lignes |
| positionDépart | Integer | &#8594;  | Elément de départ de la suppression |
| combien | Integer | &#8594;  | Nombre d'éléments à supprimer ou 1 élément si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FROM ARRAY.Summary-->La commande **DELETE FROM ARRAY** supprime un ou plusieurs élément(s) de *tableau*.<!-- END REF--> Les éléments sont supprimés à partir de l'élément spécifié par *positionDépart*.

Le paramètre *combien* est le nombre d'éléments à supprimer. Si *combien* n'est pas spécifié, un seul élément est supprimé. La taille du tableau est réduite de *combien*.

#### Exemple 1 

L'exemple suivant supprime trois éléments en commençant à l'élément 5 :

```4d
 DELETE FROM ARRAY(unTableau;5;3)
```

#### Exemple 2 

L'exemple suivant supprime le dernier élément d'un tableau, s'il existe :

```4d
 $vlElem:=Size of array(unTableau)
 If($vlElem>0)
    DELETE FROM ARRAY(unTableau;$vlElem)
 End if
```

#### Voir aussi 

[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 228 |
| Thread safe | &check; |


