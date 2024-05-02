---
id: overview
title: ORDA
---

ORDA stands for **Object Relational Data Access**. C'est une technologie avancée permettant l'accès au modèle et aux données d'une base de données à l'aide d'objets.

Relations are transparently included in the concept, in combination with [lazy loading](glossary.md#lazy-loading), to remove all the typical hassles of data selection or transfer from the developer.

With ORDA, data is accessed through an abstraction layer, the [datastore](dsMapping.md#datastore). Un datastore est un objet fournissant une interface au modèle de base de données et aux données via des objets et des classes. For example, a table is mapped to a [dataclass](dsMapping.md#dataclass) object, a field is an [attribute](dsMapping.md##attribute) of a dataclass, and records are accessed through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection).

## Pourquoi utiliser ORDA ?

Au lieu de représenter des informations sous forme de tables, d'enregistrements et de champs, ORDA utilise une autre approche qui permet de faire correspondre plus précisément les données aux concepts concrets.

Imaginez la possibilité de dénormaliser une structure relationnelle sans pour autant réduire l'efficacité. Imaginez que vous décriviez la totalité des objets métier dans votre application de telle sorte que l'utilisation des données devienne simple et directe, et supprime le besoin d'une compréhension complète de la structure relationnelle.

Dans un datastore, une seule dataclass peut incorporer tous les éléments qui composent une table de base de données relationnelle traditionnelle, mais peut également inclure des valeurs d'entités parentes liées et des références directes aux entités et aux sélections d'entités liées.

Une requête retourne une liste d'entités appelée sélection d'entités (entity selection), qui joue le rôle d'un ensemble de lignes d'une requête SQL. La différence est que chaque entité "sait" à quoi elle appartient dans le modèle de données et "comprend" sa relation avec toutes les autres entités. Cela signifie qu'un développeur n'a pas besoin d'expliquer, dans une requête, comment relier les différentes informations, ni comment écrire, dans une mise à jour, des valeurs modifiées dans la structure relationnelle.

En outre, les objets ORDA tels que les sélections d'entités ou les entités peuvent être facilement liés à des objets UI tels que des list box ou des variables. Combined with powerful features such as the `This` and `Form` commands, they allow the building modern and modular interfaces based upon objects and collections.

## Comment utiliser ORDA ?

Fondamentalement, ORDA gère des objets. Dans ORDA, tous les concepts principaux, y compris le datastore lui-même, sont disponible via des objets. In 4D, the datastore is automatically [mapped upon the 4D structure](dsMapping.md).

Les objets dans ORDA peuvent être manipulés comme des objets standard 4D, mais ils bénéficient automatiquement de propriétés et de méthodes spécifiques.

ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with [classes where you can add custom functions](ordaClasses.md).
