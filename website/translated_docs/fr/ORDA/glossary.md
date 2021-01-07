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

## Attribut relationnel

Les attributs de relation sont utilisés pour conceptualiser les relations entre les dataclasses (N vers 1 et 1 vers N).

*   Relation N vers 1 (la dataclassA fait référence à une occurrence de la dataclassB) : un attribut de relation est disponible dans dataclassA et fait référence à une instance de dataclassB.
*   Relation 1 vers N (une occurrence de dataclassB fait référence à plusieurs occurrences de dataclassA) : un attribut de relation est disponible dans la dataclassB et fait référence à plusieurs instances de la dataclassA.

Une dataclass peut avoir des attributs de relation récursifs.

Dans une entité, la valeur d'un attribut de relation peut être une entité ou une sélection d'entité.

## Related entities

Une entité associée peut être considérée comme l'instance d'un attribut de relation dans une dataclass.

Les sélections d'entités peuvent faire référence à des entités relatives selon les attributs de relation définis dans les dataclasses correspondantes.

## Remote datastore

Une base de données 4D ouverte sur 4D ou 4D Server (disponible via HTTP) et exposée en tant que ressource REST. Cette base de données peut être référencée localement en tant que Datastore à partir d'autres postes de travail, où un locaID lui est attribué. Le datastore distant peut être utilisé à travers les concepts ORDA (datastore, dataclass, sélection d'entités, etc.). Cette utilisation est soumise à un système de licence.

## Session

Lorsque l'application 4D se connecte à un datastore distant, une session est créée sur le 4D Server (HTTP). Un cookie de session est généré et associé à l'ID du datastore local.

Chaque fois qu'une nouvelle session est ouverte, une licence est utilisée. Chaque fois qu'une session est fermée, la licence est libérée.

Les sessions inactives sont automatiquement fermées après un délai. Le timeout par défaut est de 48 heures, il peut être défini par le développeur (il doit être >= 60 minutes).

## Copie superficielle (Shallow copy)

Une copie superficielle (shallow copy) ne fait que dupliquer la structure des éléments et conserve les mêmes références internes. Après une copie superficielle, deux collections partageront les éléments individuels. Voir également Copie profonde.

## Stamp

Utilisé dans la technologie du verrouillage "optimiste". Toutes les entités ont un compteur interne, le marqueur, qui est incrémenté chaque fois que l'entité est sauvegardée. En comparant automatiquement les marqueurs entre une entité sauvegardée et sa version stockée sur disque, 4D peut empêcher les modifications simultanées sur les mêmes entités.