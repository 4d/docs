---
id: cs
title: cs
slug: /commands/cs
displayed_sidebar: docs
---

<!--REF #_command_.cs.Syntax-->**cs** -> Résultat<!-- END REF-->
<!--REF #_command_.cs.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Objet | &#x1F850; | Class Store contenant toutes les classes de la base courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.cs.Summary-->La commande **cs** retourne un objet *Class Store* contenant toutes les classes utilisateurs définies dans la base courante ou dans le composant.<!-- END REF--> Cette commande est nécessaire pour instancier un objet d'une classe utilisateur. 

**Note :** Cette commande fonctionne uniquement dans les bases projet. Dans les bases binaires, **cs** retourne un Class Store vide.

#### Exemple 

Vous avez créé la classe Polygon :

```4d
  //Classe : Polygon
 
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Puis, dans une méthode, vous pouvez saisir :

```4d
 var $poly : Object
 $poly:=cs.Polygon.new(4;3)
  // {area:12}
```

#### Voir aussi 

[4D](4d.md)  
[Super](super.md)  