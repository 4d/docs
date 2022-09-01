---
id: ClassClass
title: Classe
---


Lorsqu'une classe utilisateur est [définie](Concepts/classes.md#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même, de la classe "Class", qui a des propriétés et une fonction.

### Sommaire

|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |

<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>

<!-- REF #ClassClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Description

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. .

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>

<!-- REF #ClassClass.new().Syntax -->

**.new**( *param* : any { *;...paramN* } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->
| Paramètres | Type     |    | Description                                          |
| ---------- | -------- |:--:| ---------------------------------------------------- |
| param      | any      | -> | Paramètre(s) à passer à la fonction constructeur     |
| Result     | 4D.Class | <- | Nouvel objet de la classe|<!-- END REF -->

|

#### Description

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. Cette fonction est automatiquement disponible sur toutes les classes à partir du class store [`cs`](Concepts/classes.md#cs).

Vous pouvez passer un ou plusieurs paramètre(s) optionnel(s) *param*, qui seront passés à la fonction [class constructor](Concepts/classes.md#class-constructor) (le cas échéant) dans la définition de la classe className. A l'intérieur de la fonction constructor, [`This`](Concepts/classes.md#this) est lié au nouvel objet en cours de construction.

Si `.new()` si appelé sur une classe qui n'existe pas, une erreur est retournée.

#### Exemples

Pour créer une nouvelle instance de la classe Person :

```4d
var $person : cs.Person  
$person:=cs.Person.new() //créer la nouvelle instance  
//$person contient les fonctions de la classe
```

Pour créer une nouvelle instance de la classe Person avec des paramètres :

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
 This.firstName:=$firstname
 This.lastName:=$lastname
 This.age:=$age
```

```4d
//Dans une méthode
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```

<!-- END REF -->

<!-- REF ClassClass.superclass.Desc -->
## .superclass

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>

<!-- REF #ClassClass.superclass.Syntax -->

**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. Une superclasse peut être un objet `4D.Class`, ou un objet `cs.className`. Si la classe n'a pas de classe parente, la propriété renvoie **null**.

Une superclasse de classe utilisateur est déclarée dans une classe à l'aide du mot-clé [`Class extend<superclass>`](Concepts/classes.md#class-extends-classname).

Cette propriété est en **lecture seule**.

#### Exemples

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// Si vous avez créé une classe MyFile 
// avec `Class extends File`
$sup:=cs.MyFile.superclass //File

```

**Voir également :** [Super](Concepts/classes.md#super)
<!-- END REF -->
