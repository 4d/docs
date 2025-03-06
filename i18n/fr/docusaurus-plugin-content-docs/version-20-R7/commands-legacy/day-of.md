---
id: day-of
title: Day of
slug: /commands/day-of
displayed_sidebar: docs
---

<!--REF #_command_.Day of.Syntax-->**Day of** ( *date* ) : Integer<!-- END REF-->
<!--REF #_command_.Day of.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| date | Date | &#8594;  | Date dont vous voulez extraire le jour |
| Résultat | Integer | &#8592; | Jour du mois de date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Day of.Summary-->**Day of** retourne le jour du mois de *laDate*.<!-- END REF-->**Day of** retourne une valeur entre 1 et 31\. Pour obtenir le numéro du jour de la semaine pour une date, vous devez utiliser la commande [Day number](day-number.md).

#### Exemple 1 

L'exemple suivant illustre l'utilisation de **Day of**. Les valeurs retournées sont stockées dans la variable *Résultat*. Les commentaires décrivent la valeur de *Résultat* : 

```4d
 Résultat:=Day of(!25/12/96!) // Résultat vaut 25
 Résultat:=Day of(Current date) // Résultat prend la valeur du jour d'aujourd'hui
```

#### Exemple 2 

Reportez-vous à l'exemple de la fonction [Current date](current-date.md).

#### Voir aussi 

[Day number](day-number.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 23 |
| Thread safe | &check; |


