---
id: overview
title: Aperçu
---

## Que signifie ORDA ?

ORDA signifie **Object Relational Data Access** (Accès objet aux données relationnelles). C'est une technologie avancée permettant l'accès au modèle et aux données d'une base de données à l'aide d'objets.

Les relations font partie du concept de façon transparente, en combinaison avec le principe du [Lazy loading](glossary.md#lazy-loading), afin de supprimer toutes les problématiques spécifiques à la sélection ou au transfert de données.

Avec ORDA, les données sont accessibles via une couche d'abstraction, le [datastore](dsMapping.md#datastore). Un datastore est un objet fournissant une interface au modèle de base de données et aux données via des objets et des classes. Par exemple, une table correspond à un objet [dataclass](dsMapping.md#dataclass), un champ est un [attribut](dsMapping.md##attribute) d'une dataclass, et les enregistrements sont des [entités](dsMapping.md#entity) et des [sélections d'éntités](dsMapping.md#entity-selection).


## Pourquoi utiliser ORDA ?

Au lieu de représenter des informations sous forme de tables, d'enregistrements et de champs, ORDA utilise une autre approche qui permet de faire correspondre plus précisément les données aux concepts concrets.

Imaginez la possibilité de dénormaliser une structure relationnelle sans pour autant réduire l'efficacité. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure.

In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections.

A query returns a list of entities called an entity selection, which fulfills the role of a SQL query’s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.

In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combined with powerful features such as the `This` and `Form` commands, they allow the building modern and modular interfaces based upon objects and collections.

## How to use ORDA?

Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically [mapped upon the 4D structure](dsMapping.md).

ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with [classes where you can add custom functions](ordaClasses.md).



