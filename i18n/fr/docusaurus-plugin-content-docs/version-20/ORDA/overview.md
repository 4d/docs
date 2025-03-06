---
id: overview
title: ORDA
---

ORDA signifie **Object Relational Data Access** (Accès objet aux données relationnelles). C'est une technologie avancée permettant l'accès au modèle et aux données d'une base de données à l'aide d'objets.

Les relations font partie du concept de façon transparente, en combinaison avec le principe du [Lazy loading](glossary.md#lazy-loading), afin de supprimer toutes les problématiques spécifiques à la sélection ou au transfert de données.

Avec ORDA, les données sont accessibles via une couche d'abstraction, le [datastore](dsMapping.md#datastore). Un datastore est un objet fournissant une interface au modèle de base de données et aux données via des objets et des classes. Par exemple, une table correspond à un objet [dataclass](dsMapping.md#dataclass), un champ est un [attribut](dsMapping.md##attribute) d'une dataclass, et les enregistrements sont des [entités](dsMapping.md#entity) et des [sélections d'éntités](dsMapping.md#entity-selection).


## Pourquoi utiliser ORDA ?

Au lieu de représenter des informations sous forme de tables, d'enregistrements et de champs, ORDA utilise une autre approche qui permet de faire correspondre plus précisément les données aux concepts concrets.

Imaginez la possibilité de dénormaliser une structure relationnelle sans pour autant réduire l'efficacité. Imaginez que vous décriviez la totalité des objets métier dans votre application de telle sorte que l'utilisation des données devienne simple et directe, et supprime le besoin d'une compréhension complète de la structure relationnelle.

Dans un datastore, une seule dataclass peut incorporer tous les éléments qui composent une table de base de données relationnelle traditionnelle, mais peut également inclure des valeurs d'entités parentes liées et des références directes aux entités et aux sélections d'entités liées.

Une requête retourne une liste d'entités appelée sélection d'entités (entity selection), qui joue le rôle d'un ensemble de lignes d'une requête SQL. La différence est que chaque entité "sait" à quoi elle appartient dans le modèle de données et "comprend" sa relation avec toutes les autres entités. Cela signifie qu'un développeur n'a pas besoin d'expliquer, dans une requête, comment relier les différentes informations, ni comment écrire, dans une mise à jour, des valeurs modifiées dans la structure relationnelle.

En outre, les objets ORDA tels que les sélections d'entités ou les entités peuvent être facilement liés à des objets UI tels que des list box ou des variables. Combinés avec des fonctionnalités puissantes telles que les commandes `This` et `Form`, ils permettent de construire des interfaces modernes et modulaires basés sur des objets et des collections.

## Comment utiliser ORDA ?

Fondamentalement, ORDA gère des objets. Dans ORDA, tous les concepts principaux, y compris le datastore lui-même, sont disponibles via des objets. Dans 4D, le datastore est automatiquement [mappé sur la structure 4D](dsMapping.md).

Les objets dans ORDA peuvent être manipulés comme des objets standard 4D, mais ils bénéficient automatiquement de propriétés et de fonctions spécifiques.

Les objets ORDA sont créés et instanciés lorsque nécessaire par les méthodes 4D (vous n'avez pas besoin de les créer). Cependant, les objets du modèle de données ORDA sont associés à \[des classes où vous pouvez ajouter des fonctions personnalisées\](ordaClasses.md).



