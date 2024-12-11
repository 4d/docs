---
id: ob-keys
title: OB Keys
slug: /commands/ob-keys
displayed_sidebar: docs
---

<!--REF #_command_.OB Keys.Syntax-->**OB Keys** ( *objet* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Keys.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet dont on veut obtenir les noms des propriétés |
| Résultat | Collection | &#8592; | Collection de noms de propriété (chaines) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Keys.Summary-->La commande **OB Keys** retourne une collection de chaînes contenant tous les noms des propriétés énumérables de l'*objet*.<!-- END REF--> 

Seuls les noms de propriétés de premier niveau sont retournés (les noms des propriétés des sous-objets ne sont pas retournés). L'ordre des noms contenus dans la collection retournée suit l'ordre de défintion des propriétés.

#### Exemple 

Vous souhaitez une collection avec tous les noms de propriétés de premier niveau d'un objet :

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Dupont"
 $person.firstName:="Jeanne"
 $person.children:=New object("Marie";12;"Marc";8)
 
 $col:=OB Keys($person)
 
  //$col[0]="lastName"
  //$col[1]="firstName"
  //$col[2]="children"
```

#### Voir aussi 

[OB Entries](ob-entries.md)  
[OB Values](ob-values.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1719 |
| Thread safe | &check; |
| Interdite sur le serveur ||


