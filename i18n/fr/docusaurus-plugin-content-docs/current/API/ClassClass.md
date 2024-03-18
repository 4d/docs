---
id: ClassClass
title: Classe
---


Lorsqu'une classe utilisateur est [définie](Concepts/classes.md#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même, de la classe "Class", qui a des propriétés et une fonction.



### Sommaire


|                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.isShared.Summary -->|
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.isSingleton.Summary -->|
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.me.Summary -->|
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.isShared.Desc -->
## .isShared

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v20 R5  | Ajout         |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### Description

The `.isShared` property <!-- REF #ClassClass.isShared.Summary -->returns `true` if the user class has been defined as [shared class](../Concepts/classes.md#shared-classes)<!-- END REF -->, and `false` otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->


<!-- REF ClassClass.isSingleton.Desc -->
## .isSingleton

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v20 R5  | Ajout         |

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### Description

The `.isSingleton` property <!-- REF #ClassClass.isSingleton.Summary -->returns `true` if the user class has been defined as a [singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->


<!-- REF ClassClass.me.Desc -->
## .me

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v20 R5  | Ajout         |

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### Description

The `.me` property <!-- REF #ClassClass.me.Summary -->returns the singleton instance of the `cs.className` singleton class<!-- END REF -->. If the singleton class was never instantiated beforehand, this property calls the class constructor without parameters and creates the instance. Otherwise, it returns the existing singleton instance.

If `cs.className` is not a [singleton class](../Concepts/classes.md#singleton-classes), `.me` is **undefined** by default.

Cette propriété est en **lecture seule**.

<!-- END REF -->


<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

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

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->



<!-- REF #ClassClass.new().Params -->
| Paramètres | Type     |    | Description                                      |
| ---------- | -------- |:--:| ------------------------------------------------ |
| param      | any      | -> | Paramètre(s) à passer à la fonction constructeur |
| Résultat   | 4D.Class | <- | Nouvel objet de la classe                        |
<!-- END REF -->


#### Description

La fonction `.new()` <!-- REF #ClassClass.new().Summary -->crée et retourne un objet `cs.className` qui est une nouvelle instance de la classe sur laquelle il est appelé<!-- END REF -->. Cette fonction est automatiquement disponible sur toutes les classes à partir du class store [`cs`](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the *className* class definition. A l'intérieur de la fonction constructor, [`This`](Concepts/classes.md#this) est lié au nouvel objet en cours de construction.

:::note Notes

- If `.new()` is called on a [singleton class](../Concepts/classes.md#singleton-classes) that has already been instantiated, the singleton instance is returned, not a new instance.
- Si `.new()` si appelé sur une classe qui n'existe pas, une erreur est retournée.

:::

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

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

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
