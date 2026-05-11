---
id: ClassStoreClass
title: ClassStore
---

`4D.ClassStore` properties are available classes and class stores.

4D exposes two [class stores](../Concepts/classes.md#class-stores):

- [`cs`](../commands/cs) for user classes and component class stores
- [`4D`](../commands/4d) for built-in classes

### Sommaire

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE ClassStoreClass.classClassName.Syntax -->](#classclassname)<br/><!-- INCLUDE ClassStoreClass.classClassName.Summary --> |
| [<!-- INCLUDE ClassStoreClass.classStoreName.Syntax -->](#classstorename)<br/><!-- INCLUDE ClassStoreClass.classStoreName.Summary --> |

## *.classClassName*

<!-- REF ClassStoreClass.classClassName.Syntax -->***.classClassName*** : 4D.Class<!-- END REF -->

#### Description

Each <!-- REF ClassStoreClass.classClassName.Summary -->exposed [`4D.Class`](./ClassClass.md) class in the class store<!-- END REF --> is available as a property of the class store.

#### Exemple

```4d
var $myclass:=cs.EmployeeEntity
	//$myclass is a class from the cs class store

```

## *.classStoreName*

<!-- REF ClassStoreClass.classStoreName.Syntax -->***.classStoreName*** : 4D.ClassStore<!-- END REF -->

#### Description

Each <!-- REF ClassStoreClass.classStoreName.Summary -->`4D.ClassStore` published by a component<!-- END REF --> is available as a property of the class store.

Le nom du class store publié par un composant correspond à l'espace de noms du composant, tel qu'il est [déclaré dans la page Paramètres du composant](../Extensions/develop-components.md#declaring-the-component-namespace).

#### Exemple

```4d
var $classtore:=cs.AiKit
	//$classtore is the class store of the 4D AIKit component
```
