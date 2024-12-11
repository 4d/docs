---
id: ob-instance-of
title: OB Instance of
slug: /commands/ob-instance-of
displayed_sidebar: docs
---

<!--REF #_command_.OB Instance of.Syntax-->**OB Instance of** ( *objet* ; *classe* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Instance of.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet dont la classe doit être identifiée |
| classe | Object | &#8594;  | Classe dont l'appartenance est à identifier |
| Résultat | Boolean | &#8592; | Vrai si l'objet appartient à la classe ou classe enfant indiquée, sinon faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Instance of.Summary-->La commande **OB Instance of** retourne vrai si *objet* appartient à *classe* ou à l'une de ses classes enfant.<!-- END REF--> Sinon, elle retourne faux.

Si *classe* n'est pas un objet de classe valide, l'erreur -10745 est retournée.

#### Exemple 

Vous avez créé la classe Polygone :

```4d
  //Classe : Polygone
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Puis, dans une méthode, vous pouvez saisir :

```4d
 var $poly : Object
 var $instance : Boolean
 $poly:=cs.Polygone.new(4;3)
 $instance:=OB Instance of($poly;cs.Polygone) // vrai
 $instance:=OB Instance of($poly;4D.Object) // vrai
 $instance:=OB Instance of($poly;cs.Circle) // faux
```

#### Voir aussi 

[OB Class](ob-class.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1731 |
| Thread safe | &check; |
| Interdite sur le serveur ||


