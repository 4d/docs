---
id: super
title: Super
displayed_sidebar: docs
---

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->

| Paramètres | Type   |                             | Description                                                                   |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------------------------- |
| param      | any    | ->                          | Paramètre(s) à passer au constructeur de la classe parente |
| Résultat   | Object | <- | Parent de l'objet                                                             |

<!-- END REF -->

Le mot-clé `Super` <!-- REF #_command_.Super.Summary -->permet les appels à la `superclass`, c'est-à-dire à la classe parente<!-- END REF -->.

`Super` peut être utilisé de deux différentes manières :

1. A l'intérieur d'un [code constructeur](../Concepts/classes.md#classe-constructeur), `Super` est une commande qui permet d'appeler le constructeur de la superclasse. Dans une fonction constructor, la commande `Super` est utilisée seule et doit être appelée avant que le mot-clé `This` soit utilisé.

- Si tous les class constructors dans l'arbre des héritages ne sont pas appelés correctement, l'erreur -10748 et générée. Il est de la responsabilité du développeur 4D de s'assurer que tous les appels sont valides.
- Si la commande `This` est appelée sur un objet dont les superclasses n'ont pas été construites, l'erreur -10743 est générée.
- Si `Super` est appelée en dehors d'un contexte d'objet, ou sur un objet dont le constructeur de la superclasse a déjà été appelé, l'erreur -10746 est générée.

```4d
// dans la fonction constructor de myClass
var $text1; $text2 : Text
Super($text1) //appel du constructeur de la superclasse avec un paramètre text
This.param:=$text2 // utilisation d'un second param
```

2. A l'intérieur d'une [fonction de classe](../Concepts/classes.md#function), `Super` désigne le prototype de la [`superclass`](../API/ClassClass.md#superclass) et permet d'appeler une fonction de la hiérarchie de la superclasse.

```4d
Super.doSomething(42) //appelle la fonction "doSomething"   
//déclarée parmi les superclasses
```

## Exemple 1

Cet exemple illustre l'utilisation de `Super` dans un class constructor. La commande est appelée pour éviter de dupliquer les parties du constructeur qui sont communes aux classes `Rectangle` et `Square`.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea() : Integer

 return (This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

 // Appelle le constructeur de la classe parente avec les dimensions
 // fournies pour la largeur et la hauteur du Rectangle
 Super($side;$side)
 // Dans les classes dérivées, Super doit être appelé
 // avant que vous puissiez utiliser 'This'
 This.name:="Square"

Function getArea() : Integer
 return This.height*This.width
```

## Exemple 2

Cet exemple illustre l'utilisation de `Super` dans une fonction de classe. Vous avez créé la classe `Rectangle` contenant une fonction :

```4d
//Class: Rectangle

Function nbSides() : Text
 return "I have 4 sides"
```

Vous avez également créé la classe `Square` contenant une fonction qui appelle la fonction superclass :

```4d
//Class: Square

Class extends Rectangle

Function description() : Text
  return Super.nbSides()+" which are all equal"
```

Vous pouvez donc écrire dans une méthode projet :

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

## Voir également

[**Page de Concept pour les Classes**](../Concepts/classes.md).

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1706                        |
| Thread safe        | &check; |


