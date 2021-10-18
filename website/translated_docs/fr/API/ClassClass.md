---
id: ClassClass
title: Class
---


Lorsqu'une classe utilisateur est [définie](Concepts/classes.md#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même, de la classe "Class", qui a des propriétés et une fonction.



### Sommaire


|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |

</details>

<!-- REF #ClassClass.name.Syntax -->
**.name** : Text<!-- END REF -->

#### Description

La propriété `.name` <!-- REF #ClassClass.name.Summary -->contient le nom de l'objet `4D.Class`<!-- END REF -->. Les noms de classe sont sensibles à la casse.

Cette propriété est en **lecture seule**. 

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |
</details>

<!-- REF #ClassClass.new().Syntax -->
**.new**( *param* : any { *;...paramN* } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->
| Paramètres | Type     |    | Description                                      |
| ---------- | -------- |:--:| ------------------------------------------------ |
| param      | any      | -> | Parameter(s) to pass to the constructor function |
| Résultat   | 4D.Class | <- | Nouvel objet de la classe                        |
<!-- END REF -->


#### Description

La fonction `.new()` <!-- REF #ClassClass.new().Summary -->crée et retourne un objet `cs.className` qui est une nouvelle instance de la classe sur laquelle il est appelé<!-- END REF -->. Cette fonction est automatiquement disponible sur toutes les classes à partir du class store [`cs`](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

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
| v18 R3  | Ajout         |

</details>

<!-- REF #ClassClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

La propriété `.superclass` <!-- REF #ClassClass.superclass.Summary -->retourne la classe parente de la classe<!-- END REF -->. Une superclasse peut être un objet `4D.Class`, ou un objet `cs.className`. Si la classe n'a pas de classe parente, la propriété renvoie **null**.

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

<style> h2 { background: #d9ebff;}</style>
