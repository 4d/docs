---
id: append-to-array
title: APPEND TO ARRAY
slug: /commands/append-to-array
displayed_sidebar: docs
---

<!--REF #_command_.APPEND TO ARRAY.Syntax-->**APPEND TO ARRAY** ( *tableau* ; *valeur* )<!-- END REF-->
<!--REF #_command_.APPEND TO ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau auquel ajouter une valeur |
| valeur | Expression | &#8594;  | Valeur à ajouter au tableau |

<!-- END REF-->

#### Description 

<!--REF #_command_.APPEND TO ARRAY.Summary-->La commande **APPEND TO ARRAY** ajoute une nouvelle ligne à la fin du *tableau* et lui affecte la valeur passée dans le paramètre *valeur*.<!-- END REF--> En mode interprété, si le *tableau* n’a pas été défini au préalable, la commande le crée et lui attribue un type en fonction de celui de *valeur*. 

Cette commande fonctionne avec tous les types de tableaux : chaîne, numérique, booléen, date, pointeur et image. 

Le type de *valeur* doit correspondre au type du tableau, sinon l’erreur de syntaxe 54 “Les arguments sont incompatibles” est générée. Les combinaisons suivantes sont toutefois possibles : 

* un *tableau* de type chaîne (Texte ou Alpha) accepte toute *valeur* de type Texte ou Alpha.
* un *tableau* de type numérique (Entier, Entier long ou Réel) accepte toute *valeur* de type Entier, Entier long, Numérique ou Heure.

#### Exemple 

Le code suivant :

```4d
 INSERT IN ARRAY($montableau;Size of array($montableau)+1)
 $montableau{Size of array($montableau)}:=$mavaleur
```

... peut être remplacé par :

```4d
 APPEND TO ARRAY($montableau;$mavaleur)
```

#### Voir aussi 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 911 |
| Thread safe | &check; |
| Interdite sur le serveur ||


