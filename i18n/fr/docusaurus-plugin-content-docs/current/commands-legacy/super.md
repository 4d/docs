---
id: super
title: Super
slug: /commands/super
displayed_sidebar: docs
---

<!--REF #_command_.Super.Syntax-->**Super** {( *param* {; *param2* ; ... ; *paramN*} )} -> Résultat<!-- END REF-->
<!--REF #_command_.Super.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| param | any | &#x1F852; | Paramètre(s) à passer au constructeur parent |
| Résultat | Object | &#x1F850; | Parent de l'objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.Super.Summary-->La commande **Super** appelle la "superclass" (classe parente).<!-- END REF--> 

**Super** a été introduite pour deux raisons : 

* dans un **code de constructeur**, la commande **Super** permet d'appeler le constructeur de la superclass. Lorsque la commande **Super** est utilisée dans un constructeur, elle apparait seule et doit être utilisée avant le mot-clé [This](this.md).
   * Si tous les constructeurs de classe de l'arbre d'héritage ne sont pas appelés correctement, l'erreur -10748 est générée. C'est au développeur 4D de s'assurer que les appels sont valides.
   * Si la commande [This](this.md) est appelée sur un objet dont les superclass n'ont pas été construites, l'erreur -10743 est générée.
   * Si **Super** est appelée hors de la portée d'un objet, ou si elle est appelée sur un objet dont le constructeur de la superclass a déjà été appelé, l'erreur -10746 est générée.

```4d
  // dans le constructeur myClass
 var $1;$2 : Text
 Super($1) //appelle le constructeur de la superclass avec un paramètre texte
 This.param:=$2 // utilise le second paramètre
```

* dans une **fonction membre d'une classe**, **Super** désigne le prototype de la superclass et permet d'appeler une fonction de la hiérarchie de la superclass.

```4d
 Super.doSomething(42) //appelle la fonction "doSomething" déclarée dans les superclass
```

#### Exemple 1 

Cet exemple illustre l'utilisation de **Super** dans un constructeur de classe. La commande est appelée pour éviter la duplication des parties du constructeur qui sont communes aux classes Rectangle et Square.

```4d
  //Classe : Rectangle
 
 Class constructor
 var $1;$2 : Integer
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2
 
 Function sayName
 ALERT("Bonjour, Je m'appelle "+This.name+".")
 
 Function getArea
 var $0 : Integer
 $0:=This.height*This.width
```

```4d
  //Classe : Square
 
 Class extends Rectangle
 
 Class constructor
 var $1 : Integer
 
  // Il appelle le class constructor parent avec les longueurs
  // fourni pour la largeur et la hauteur du Rectangle
 Super($1;$1)
 
  // Dans les classes dérivées, Super doit être appelée avant de 
  // pouvoir utiiser 'This'
 This.name:="Square"
```

#### Exemple 2 

Cet exemple illustre l'utilisation de **Super** dans une méthode membre de classe.

Vous avez créé la classe Rectangle avec une fonction :

```4d
  //Classe : Rectangle
 
 Function nbSides
 var $0 : Text
 $0:="Je possède 4 côtés"
```

Vous avez également créé la classe Square avec une fonction qui appelle la fonction superclass :

```4d
  //Classe : Square
 
 Class prolonge Rectangle
 
 Function description
 var $0 : Text
 $0:=Super.nbSides()+" qui sont tous égaux"
```

Vous pouvez ensuite saisir, dans une méthode projet :

```4d
 var $square : Object
 var $message : Text
 $square:=cs.Square.new()
 $message:=$square.description() //Je possède 4 côtés qui sont tous égaux
```

#### Voir aussi 

[cs](cs.md)  
[This](this.md)  