---
id: int
title: Int
slug: /commands/int
displayed_sidebar: docs
---

<!--REF #_command_.Int.Syntax-->**Int** ( *nombre* ) : Real<!-- END REF-->
<!--REF #_command_.Int.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Valeur dont vous voulez obtenir la partie entière |
| Résultat | Real | &#8592; | Partie entière de nombre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Int.Summary-->**Int** retourne la partie entière de *nombre* en l'arrondissant à l'entier inférieur.<!-- END REF-->

#### Exemple 

L'exemple suivant illustre le fonctionnement de **Int** pour les nombres positifs et négatifs. Notez que la partie décimale du nombre est supprimée :

```4d
 x:=Int(123,4) // x vaut 123
 y:=Int(-123,4) // y vaut –124
```

#### Voir aussi 

[Dec](dec.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 8 |
| Thread safe | &check; |


