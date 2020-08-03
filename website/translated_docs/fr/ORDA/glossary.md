---
id: glossary
title: Glossaire
---

## Aperçu des principaux concepts

![](assets/en/Orda/mainConcepts.png)

## Attribut

Un attribut est la plus petite cellule de stockage dans une base de données relationnelle (voir aussi [Attribut relationnel](#relation-attribute)). Ne confondez pas les attributs de la dataclass et les attributs d'entités :

* Dans un objet dataclass, chaque propriété est un attribut de dataclass qui correspond à un champ dans la table correspondante (même nom et même type).
* Dans un objet entity, les attributs d'entités sont des propriétés qui contiennent les valeurs pour les attributs du datastore correspondants.

> Les *attributs* et les *propriétés* sont des concepts similaires. "Attribut" est utilisé pour désigner les propriétés de la dataclass qui stockent les données, tandis que "propriété" est plus générique et définit une donnée stockée dans un objet.

## AttributePath

Un attributePath est le chemin d'un attribut à l'intérieur d'une dataclass ou d'une entité donnée. Voir aussi [propertyPath](#propertyPath).

## Class code

Code for the user class function(s).

## Data model class

Extended class available for a data model object.

## Data model object

Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections.

## Data model function

Function of an ORDA data model class.

## Dataclass

Une dataclass est un objet qui décrit les données. Les tables de la base de données fournies par le datastore sont gérées via des dataclasses. Chaque table de la base de données fournie par le datastore possède une dataclass correspondante et portant le même nom. Chaque champ de la table est un attribut de la dataclass.

Une dataclass est reliée à un seul datastore.

## DataClass class

Class for specific dataclass objects, in which you can add custom functions.

## Datastore

Un datastore est l'objet d'interface fourni par ORDA pour référencer une base de données et accéder à ses données. La base de données principale, retournée par la commande `ds`, est disponible en tant que datastore (le datastore principal).

Un datastore fournit :

* une connexion à la base de données 4D
* un ensemble de dataclasses pour travailler avec la base de données

La base peut être une base locale 4D (le datastore principal), ou une base 4D Server exposée en ressource REST (un datastore distant).

Un datastore ne référence qu'une seule base de données. Il est toutefois possible d'ouvrir plusieurs datastores pour accéder à plusieurs bases.

## DataStore class

Class for datastore objects, in which you can add custom functions.

## DataStoreImplementation

Internal name of the generic DataStore class in the `4D` class store.

## Copie profonde

Une copie profonde (deep copy) duplique un objet et toutes les références qu'il contient. Après une deep copy, une collection copiée contient des éléments dupliqués et donc de nouvelles références de tous les éléments originaux. Voir aussi Copie superficielle.

## ds

`ds` est la commande de langage 4D qui retourne une référence d'objet du [datastore](dsMapping.md#datastore). Elle correspond au datastore disponible sur la base de données principale 4D.

## Entité (entity)

Une entité est un objet qui correspond à un modèle de base de données. Une entité contient les mêmes attributs que la dataclass.

Une entité peut être vue comme une instance de la dataclass, comme un enregistrement de la table correspondante à la dataclass dans son datastore associé. Cependant, une entité contient également des données connexes. Le but de l'entité est de gérer les données (créer, mettre à jour, supprimer).

Pour plus d'informations, voir le chapitre Entités.

## Sélection d'entités (entity selection)

Une sélection d'entités (entity selection) est un objet. Lorsqu'une requête est envoyée au datastore, une sélection d'entités est retournée. Une sélection d'entité est un ensemble de références à des entités liées à la même dataclass.

Une sélection d'entités contient :

* un ensemble de 0 à X références d'entités
* une propriété length (toujours),
* les propriétés queryPlan et queryPath (si demandées lors de la requête).

Une sélection d'entités peut également être vide.

## Generic class

Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. `EmployeeEntity`.

## Lazy loading

Commes les entités sont gérées comme des références, les données sont chargées uniquement lorsque cela est nécessaire, c'est-à-dire lorsqu'on y accède dans le code ou via des widgets d'interface. Ce principe d'optimisation est appelé lazy loading.

## Datastore principal

L'objet Datastore correspondant à la base 4D ouverte (autonome ou client/serveur). Le datastore principal est retourné par la commande ds.

## Méthode

Les objets ORDA tels que les "datastores", "dataclasses", "entity selections" et "entities" définissent les classes d'objets. Ils fournissent des méthodes spécifiques pour interagir directement avec eux. Ces méthodes sont aussi appelées des fonctions membres (member functions). Ces méthodes sont utilisées en étant appelées sur une instance de l'objet.

Par exemple, la méthode `query()` est une "member function" de dataclass. Si vous avez stocké un objet dataclass dans la variable `$myClass`, vous pouvez écrire :

```code4d
$myClass.query("name = smith")
```

## Type de données "Mixte"

Dans cette documentation, le type de données "Mixte" est utilisé pour désigner les différents types de valeurs qui peuvent être stockés dans les attributs d'une dataclass. Cela inclut :

* nombre
* texte
* null
* booléen
* date
* objet
* collection
* image(\*)

*(*) picture type is not supported by statistical methods such as* `entitySelection.max( )`.

## Optimistic Lock

In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".

## Pessimistic Lock

A "pessimistic lock" means that an entity is locked prior to its being accessed, using the entity.lock( ) method. Other processes can neither update nor drop the entity until it is unlocked. The classic 4D language only allows pessimistic locks. See "Optimistic lock".

## Propriété

See [Attribute](#attribute).

> Attributes and properties are similar concepts. "Attribut" est utilisé pour désigner les propriétés de la dataclass qui stockent les données, tandis que "propriété" est plus générique et définit une donnée stockée dans un objet.

## PropertyPath

A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").

## Regular class

User class not related to an ORDA object.

## Related dataclass

These are dataclasses linked by relation attributes.

## Relation attribute

Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many).

* Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.
* One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.

A dataclass can have recursive relation attributes.

In an entity, the value of a relation attribute can be an entity or an entity selection.

## Related entities

A related entity can be seen as the instance of a relation attribute in a dataclass.

Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.

## Remote datastore

A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). This use is submitted to a licencing system.

## Session

When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). A session cookie is generated and associated to the local datastore id.

Each time a new session is opened, a license is used. Each time a session is closed, the license is freed.

Inactive sessions are automatically closed after a timeout. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes).

## Shallow copy

A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also Deep copy.

## Stamp

Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, 4D can prevent concurrent modifications on the same entities.