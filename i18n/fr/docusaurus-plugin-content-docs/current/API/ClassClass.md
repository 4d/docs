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

La propriété `.isShared` <!-- REF #ClassClass.isShared.Summary -->renvoie `true` si la classe utilisateur a été définie comme classe [partagée](../Concepts/classes.md#shared-classes)<!-- END REF -->, et `false` sinon.

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

La propriété `.isSingleton` <!-- REF #ClassClass.isSingleton.Summary -->renvoie `true` si la classe utilisateur a été définie comme une classe [singleton](../Concepts/classes.md#singleton-classes)<!-- END REF -->, et `false` sinon.

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

La propriété `.me` <!-- REF #ClassClass.me.Summary -->renvoie l'instance singleton de la classe singleton `cs.className`<!-- END REF -->. Si la classe singleton n'a jamais été instanciée au préalable, cette propriété appelle le constructeur de la classe sans paramètres et crée l'instance. Sinon, elle renvoie l'instance singleton existante.

Si `cs.className` n'est pas une [classe singleton](../Concepts/classes.md#singleton-classes), `.me` est **indéfini** par défaut.

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

Vous pouvez passer un ou plusieurs paramètre(s) optionnel(s) *param*, qui seront passés à la fonction [class constructor](Concepts/classes.md#class-constructor) (le cas échéant) dans la définition de la classe *className*. A l'intérieur de la fonction constructor, [`This`](Concepts/classes.md#this) est lié au nouvel objet en cours de construction.

:::note Notes

- Si `.new()` est appelé sur une [classe singleton](../Concepts/classes.md#singleton-classes) qui a déjà été instanciée, c'est l'instance singleton qui est renvoyée, et non une nouvelle instance.
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
