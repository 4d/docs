---
id: ClassStoreClass
title: ClassStore
---

`4D.ClassStore` properties are available classes and class stores.

4D expone dos [class stores](../Concepts/classes.md#class-stores):

- [`cs`](../commands/cs) for user classes and component class stores
- [`4D`](../commands/4d) para las clases integradas

### Resumen

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE ClassStoreClass.classClassName.Syntax -->](#classclassname)<br/><!-- INCLUDE ClassStoreClass.classClassName.Summary --> |
| [<!-- INCLUDE ClassStoreClass.classStoreName.Syntax -->](#classstorename)<br/><!-- INCLUDE ClassStoreClass.classStoreName.Summary --> |

## *.classClassName*

<!-- REF ClassStoreClass.classClassName.Syntax -->***.classClassName*** : 4D.Class<!-- END REF -->

#### Descripción

Each <!-- REF ClassStoreClass.classClassName.Summary -->exposed [`4D.Class`](./ClassClass.md) class in the class store<!-- END REF --> is available as a property of the class store.

#### Ejemplo

```4d
var $myclass:=cs.EmployeeEntity
	//$myclass es una clase del class store cs

```

## *.classStoreName*

<!-- REF ClassStoreClass.classStoreName.Syntax -->***.classStoreName***: 4D.ClassStore<!-- END REF -->

#### Descripción

Each <!-- REF ClassStoreClass.classStoreName.Summary -->`4D.ClassStore` published by a component<!-- END REF --> is available as a property of the class store.

The name of the class store exposed by a component is the component namespace as [declared in the component's Settings page](../Extensions/develop-components.md#declaring-the-component-namespace).

#### Ejemplo

```4d
var $classtore:=cs.AiKit
	//$classtore is the class store of the 4D AIKit component
```
