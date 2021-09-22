---
id: ClassClass
title: Class
---


Lorsqu'une classe utilisateur est [définie](Concepts/classes.md#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même, de la classe "Class", qui a des propriétés et une fonction.



### Sommaire


|                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the name of the `4D.Class` object                                                                                                 |
| [**.new**( *param* : any { *;...paramN* } ) : 4D.Class](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates and returns a `cs.className` object which is a new instance of the class on which it is called |
| [**.superclass** : 4D.Class](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the parent class of the class                                                                                      |



## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>

**.name** : Text
#### Description

The `.name` property contains the name of the `4D.Class` object. Les noms de classe sont sensibles à la casse.

Cette propriété est en **lecture seule**.




## .new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

**.new**( *param* : any { *;...paramN* } ) : 4D.Class
| Paramètres | Type     |    | Description                                      |
| ---------- | -------- |:--:| ------------------------------------------------ |
| param      | any      | -> | Parameter(s) to pass to the constructor function |
| Résultat   | 4D.Class | <- | Nouvel objet de la classe                        |


#### Description

The `.new()` function creates and returns a `cs.className` object which is a new instance of the class on which it is called. Cette fonction est automatiquement disponible sur toutes les classes à partir du class store [`cs`](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

#### Exemples

Pour créer une nouvelle instance de la classe Person :

```4d
var $person : cs.Person  
$person:=cs.Person.new() //create the new instance  
//$person contains functions of the class
```

To create a new instance of the Person class with parameters:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
    This.firstName:=$firstname
    This.lastName:=$lastname
    This.age:=$age
```

```4d
//In a method
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```





## .superclass

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>

**.superclass** : 4D.Class
#### Description

The `.superclass` property returns the parent class of the class. Une superclasse peut être un objet `4D.Class`, ou un objet `cs.className`. Si la classe n'a pas de classe parente, la propriété renvoie **null**.

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

<style> h2 { background: #d9ebff;}</style>
