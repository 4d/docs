---
id: square-root
title: Square root
slug: /commands/square-root
displayed_sidebar: docs
---

<!--REF #_command_.Square root.Syntax-->**Square root** ( *nombre* ) : Real<!-- END REF-->
<!--REF #_command_.Square root.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Nombre duquel calculer la racine carrée |
| Résultat | Real | &#8592; | Racine carrée de nombre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Square root.Summary-->**Square root** retourne la racine carrée de *nombre*.<!-- END REF-->

#### Exemple 1 

La ligne :

```4d
 $vrRacineDeDeux :=Square root(2)
```

affecte la valeur *1,414213562373* à la variable *$vrRacineDeDeux*.

#### Exemple 2 

La méthode listée ci-dessous retourne l'hypoténuse du triangle rectangle dont les deux côtés sont passés en paramètres : 

```4d
  // Méthode Hypoténuse
  // Hypoténuse ( Réel ; Réel ) -> Réel
  // Hypoténuse ( côtéA ; côtéB ) -> Hypoténuse
 var $0;$1;$2 : Real
 $0:=Square root(($1^2)+($2^2))
```

Par exemple, Hypoténuse (4;3) retourne 5.
