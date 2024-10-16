---
id: insert-in-array
title: INSERT IN ARRAY
slug: /commands/insert-in-array
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN ARRAY.Syntax-->**INSERT IN ARRAY** ( *tableau* ; *positionDépart* {; *combien*} )<!-- END REF-->
<!--REF #_command_.INSERT IN ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Nom du tableau dans lequel insérer des éléments |
| positionDépart | Integer | &#8594;  | Position de départ du ou des élément(s) à insérer |
| combien | Integer | &#8594;  | Nombre d'éléments à insérer ou 1 élément si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.INSERT IN ARRAY.Summary-->**INSERT IN ARRAY** insère un ou plusieurs éléments ou "lignes" dans le tableau *tableau*.<!-- END REF--> Les nouveaux éléments sont insérés avant l'élément spécifié par *positionDépart*, et initialisés à la valeur vide du type du tableau. Tous les éléments situés au-delà de *positionDépart* sont décalés vers le bas d'un offset ou de la valeur spécifiée par *combien*.

Si *positionDépart* est supérieur à la taille du tableau, les éléments sont insérés à la fin du tableau.

Le paramètre *combien* représente le nombre de lignes à insérer. Si *combien* n'est pas spécifié, un seul élément est inséré. La taille du tableau est augmentée de *combien*.

#### Exemple 1 

L'exemple suivant insère cinq nouveaux éléments à partir de l'élément 10 :

```4d
 INSERT IN ARRAY(unTableau;10;5)
```

#### Exemple 2 

L'exemple suivant ajoute un élément à un tableau :

```4d
 $vlElem:=Size of array(unTableau)+1
 INSERT IN ARRAY(unTableau;$vlElem)
 unTableau{$vlElem}:=...
```

#### Voir aussi 

[DELETE FROM ARRAY](delete-from-array.md)  
[Size of array](size-of-array.md)  