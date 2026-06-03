---
id: ClassStoreClass
title: ClassStore
---

Las propiedades de la clase `4D.ClassStore` son las clases y los almacenes de clases disponibles.

4D expone dos [class stores](../Concepts/classes.md#class-stores):

- [`cs`](../commands/cs) para las clases de usuario y las class stores de los componentes
- [`4D`](../commands/4d) para las clases integradas

### Resumen

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE ClassStoreClass.classClassName.Syntax -->](#classclassname)<br/><!-- INCLUDE ClassStoreClass.classClassName.Summary --> |
| [<!-- INCLUDE ClassStoreClass.classStoreName.Syntax -->](#classstorename)<br/><!-- INCLUDE ClassStoreClass.classStoreName.Summary --> |

## *.classClassName*

<!-- REF ClassStoreClass.classClassName.Syntax -->***.classClassName*** : 4D.Class<!-- END REF -->

#### Descripción

Cada clase expuesta en <!-- REF ClassStoreClass.classClassName.Summary -->[`4D.Class`](./ClassClass.md) en el class store<!-- END REF --> está disponible como una propiedad del class store.

#### Ejemplo

```4d
var $myclass:=cs.EmployeeEntity
	//$myclass es una clase del class store cs

```

## *.classStoreName*

<!-- REF ClassStoreClass.classStoreName.Syntax -->***.classStoreName***: 4D.ClassStore<!-- END REF -->

#### Descripción

Cada <!-- REF ClassStoreClass.classStoreName.Summary -->`4D.ClassStore` publicado por un componente<!-- END REF --> está disponible como propiedad del class store.

The name of the class store published by a component is the component namespace as [declared in the component's Settings page](../Extensions/develop-components.md#declaring-the-component-namespace).

#### Ejemplo

```4d
var $classtore:=cs.AiKit
	//$classtore es el class store del componente 4D AIKit
```
