---
id: ClassStoreClass
title: ClassStore
---

`4D.ClassStore` properties are available classes and class stores.

4D exposes two [class stores](../Concepts/classes.md#class-stores):

- [`cs`](../commands/cs) for user classes and component class stores
- [`4D`](../commands/4d) for built-in classes

### 概要

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE ClassStoreClass.classClassName.Syntax -->](#classclassname)<br/><!-- INCLUDE ClassStoreClass.classClassName.Summary --> |
| [<!-- INCLUDE ClassStoreClass.classStoreName.Syntax -->](#classstorename)<br/><!-- INCLUDE ClassStoreClass.classStoreName.Summary --> |

## *.classClassName*

<!-- REF ClassStoreClass.classClassName.Syntax -->***.classClassName*** : 4D.Class<!-- END REF -->

#### 説明

Each <!-- REF ClassStoreClass.classClassName.Summary -->exposed [`4D.Class`](./ClassClass.md) class in the class store<!-- END REF --> is available as a property of the class store.

#### 例題

```4d
var $myclass:=cs.EmployeeEntity
	//$myclass is a class from the cs class store

```

## *.classStoreName*

<!-- REF ClassStoreClass.classStoreName.Syntax -->***.classStoreName*** : 4D.ClassStore<!-- END REF -->

#### 説明

Each <!-- REF ClassStoreClass.classStoreName.Summary -->`4D.ClassStore` published by a component<!-- END REF --> is available as a property of the class store.

The name of the class store published by a component is the component namespace as [declared in the component's Settings page](../Extensions/develop-components.md#declaring-the-component-namespace).

#### 例題

```4d
var $classtore:=cs.AiKit
	//$classtore is the class store of the 4D AIKit component
```
