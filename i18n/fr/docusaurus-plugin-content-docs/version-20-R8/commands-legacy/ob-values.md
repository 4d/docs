---
id: ob-values
title: OB Values
slug: /commands/ob-values
displayed_sidebar: docs
---

<!--REF #_command_.OB Values.Syntax-->**OB Values** ( *objet* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Values.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet retournant les valeurs des propriétés |
| Résultat | Collection | &#8592; | Collection de valeurs des propriétés (variant) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Values.Summary-->La commande **OB Values** retourne une collection de variants contenant toutes les valeurs des propriétés énumérables de l'*objet*.<!-- END REF--> 

L'ordre des valeurs de la collection retournée suit l'ordre de définition des propriétés.

#### Exemple 

Vous souhaitez une collection avec toutes les valeurs des propriétés d'un objet : 

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Dupont"
 $person.firstName:="Jeanne"
 $person.children:=New object("Marie";12;"Marc";8)
 
 $col:=OB Values($person)
 
  //$col[0]="Dupont"
  //$col[1]="Jeanne"
  //$col[2]={"Mariey":12,"Marc":8}
```

#### Voir aussi 

[OB Entries](ob-entries.md)  
[OB Keys](ob-keys.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1718 |
| Thread safe | &cross; |


