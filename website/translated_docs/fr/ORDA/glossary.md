---
id: glossary
title: Glossaire
---

## Aperçu des principaux concepts

![](assets/en/ORDA/mainConcepts.png)



## Attribut

Un attribut est la plus petite cellule de stockage dans une base de données relationnelle (voir aussi [Attribut relationnel](#relation-attribute)). Ne confondez pas les attributs de la dataclass et les attributs d'entités :

*   Dans un objet dataclass, chaque propriété est un attribut de dataclass qui correspond à un champ dans la table correspondante (même nom et même type).
*   Dans un objet entity, les attributs d'entités sont des propriétés qui contiennent les valeurs pour les attributs du datastore correspondants.
> Les *attributs* et les *propriétés* sont des concepts similaires. "Attribut" est utilisé pour désigner les propriétés de la dataclass qui stockent les données, tandis que "propriété" est plus générique et définit une donnée stockée dans un objet.

## AttributePath

Un attributePath est le chemin d'un attribut à l'intérieur d'une dataclass ou d'une entité donnée. Voir aussi [propertyPath](#propertyPath).


## Class code

Code pour la (les) fonction(s) de classe utilisateurs.

## Data model class

Classe étendue disponible pour un objet de modèle de données.

## Data model object

Objets de base de données disponibles via le concept ORDA, c'est-à-dire datastore, dataclasses, entities (entités) et entity selections (sélections d'entités).

## Data model function

Fonction d'une classe de modèle de données ORDA.

## Dataclass

Une dataclass est un objet qui décrit les données. Les tables de la base de données fournies par le datastore sont gérées via des dataclasses. Chaque table de la base de données fournie par le datastore possède une dataclass correspondante portant le même nom. Chaque champ de la table est un attribut de la dataclass.

Une dataclass est reliée à un seul datastore.


## DataClass class

Class for specific dataclass objects, in which you can add custom functions.

## Datastore

Un datastore est l'objet d'interface fourni par ORDA pour référencer une structure et accéder à ses données. La base de données principale, retournée par la commande `ds`, est disponible en tant que datastore (le datastore principal).

Un datastore fournit :

*   une connexion à la base de données 4D
*   un ensemble de dataclasses pour travailler avec la base de données

La base peut être une base locale 4D (le datastore principal), ou une base 4D Server exposée en ressource REST (un datastore distant).

Un datastore ne référence qu'une seule base de données. Il est toutefois possible d'ouvrir plusieurs datastores pour accéder à plusieurs bases.

## DataStore class

Class for datastore objects, in which you can add custom functions.


## DataStoreImplementation

Internal name of the generic DataStore class in the `4D` class store.

## Deep copy

A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also Shallow copy.

## ds

`ds` is the 4D language command that returns a [datastore](dsMapping.md#datastore) object reference. It matches the datastore available upon the 4D main database.

## Entity

An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass.

An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete).

For more information, see Entities.

## Entity selection

An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass.

An entity selection contains:

*   un ensemble de 0 à X références d'entités
*   une propriété length (toujours),
*   les propriétés queryPlan et queryPath (si demandées lors de la requête).

An entity selection can also be empty.


## Generic class

Built-in class for ORDA objects such as entities, or dataclasses. Les fonctions et propriétés des classes génériques sont automatiquement disponibles dans les classes utilisateur étendues, telles que `EmployeeEntity`.


## Lazy loading

Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading.

## Main datastore

The Datastore object matching the opened 4D database (standalone or client/server). The main datastore is returned by the ds command.

## Méthode

ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. Ils fournissent des méthodes spécifiques pour interagir directement avec eux. Ces méthodes sont aussi appelées des fonctions membres (member functions). Ces méthodes sont utilisées en étant appelées sur une instance de l'objet.

Par exemple, la méthode `query()` est une "member function" de dataclass. If you have stored a dataclass object in the `$myClass` variable, you can write:

```code4d
$myClass.query("name = smith")
```

## Mixed data type

In this documentation, "Mixed" data type is used to designate the various type of values that can be stored within dataclass attributes. Par exemple :

*   number
*   Texte
*   null
*   boolean
*   date
*   object
*   collection
*   image(\*)

*(\*) picture type is not supported by statistical methods such as* `entitySelection.max( )`.

## Verrouillage optimiste

En mode "verrouillage optimiste", les entités ne sont pas verrouillées explicitement avant d'être mises à jour. Chaque entité a un marqueur interne qui est automatiquement incrémenté chaque fois que l'entité est enregistrée sur le disque. Les méthodes entity.save( ) ou entity.drop( ) retourneront une erreur si le marqueur de l'entité chargée en mémoire et le marqueur de l'entité sur le disque ne correspondent pas, ou si l'entité a été supprimée. Le verrouillage optimiste est uniquement disponible dans l'implémentation ORDA. Voir aussi "verrouillage pessimiste".

## Verrouillage pessimiste

Un "verrouillage pessimiste" signifie qu'une entité est verrouillée avant que l'on y accède, en utilisant la méthode entity.lock( ). Les autres process ne peuvent ni mettre à jour ni supprimer l'entité tant qu'elle n'est pas déverrouillée. Le langage 4D classique n'autorise que les verrouillages pessimistes. Voir "Verrouillage optimiste".

## Propriété

See [Attribute](#attribute).
> Les attributs et les propriétés sont des concepts similaires. "Attribut" est utilisé pour désigner les propriétés de la dataclass qui stockent les données, tandis que "propriété" est plus générique et définit une donnée stockée dans un objet.

## PropertyPath

Un propertyPath est le chemin vers une propriété dans un objet donné. Si la propriété est imbriquée à plusieurs niveaux, chaque niveau est séparé par un point (".").

## Regular class

Classe utilisateur non liée à un objet ORDA.

## Related dataclass

Ce sont des dataclasses liées par des attributs de relation.

## Relation attribute (attribut de relation)

Les attributs de relation sont utilisés pour conceptualiser les relations entre les dataclasses (N vers 1 et 1 vers N).

*   Relation N vers 1 (la dataclassA fait référence à une occurrence de la dataclassB) : un attribut de relation est disponible dans dataclassA et fait référence à une instance de dataclassB.
*   Relation 1 vers N (une occurrence de dataclassB fait référence à plusieurs occurrences de dataclassA) : un attribut de relation est disponible dans la dataclassB et fait référence à plusieurs instances de la dataclassA.

Une dataclass peut avoir des attributs de relation récursifs.

Dans une entité, la valeur d'un attribut de relation peut être une entité ou une sélection d'entité.

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