---
id: ClassStoreClass
title: ClassStore
---

Les propriétés de la classe `4D.ClassStore` sont les classes et les class stores disponibles.

4D expose deux [class stores](../Concepts/classes.md#class-stores) :

- [`cs`](../commands/cs) pour les classes utilisateurs et les class stores des composants
- [`4D`](../commands/4d) pour les classes intégrées

### Sommaire

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE ClassStoreClass.classClassName.Syntax -->](#classclassname)<br/><!-- INCLUDE ClassStoreClass.classClassName.Summary --> |
| [<!-- INCLUDE ClassStoreClass.classStoreName.Syntax -->](#classstorename)<br/><!-- INCLUDE ClassStoreClass.classStoreName.Summary --> |

## *.classClassName*

<!-- REF ClassStoreClass.classClassName.Syntax -->***.classClassName*** : 4D.Class<!-- END REF -->

#### Description

Chaque <!-- REF ClassStoreClass.classClassName.Summary -->classe [`4D.Class`](./ClassClass.md) exposée dans le class store<!-- END REF --> est disponible en tant que propriété du class store.

#### Exemple

```4d
var $myclass:=cs.EmployeeEntity
	//$myclass est une classe du class store cs

```

## *.classStoreName*

<!-- REF ClassStoreClass.classStoreName.Syntax -->***.classStoreName*** : 4D.ClassStore<!-- END REF -->

#### Description

Chaque <!-- REF ClassStoreClass.classStoreName.Summary -->`4D.ClassStore` publié par un composant<!-- END REF --> est disponible en tant que propriété du class store.

Le nom du class store exposé par un composant est le namespace du composant tel qu'il est [déclaré dans la page Paramètres du composant](../Extensions/develop-components.md#declaring-the-component-namespace).

#### Exemple

```4d
var $classtore:=cs.AiKit
	//$classtore est le class store du composant 4D AIKit
```
