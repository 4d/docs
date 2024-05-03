---
id: glossary
title: Glossaire
---

## Aperçu des principaux concepts

![](../assets/en/ORDA/mainConcepts.png)

## Action

Every action that can be done on a [resource](#resource). Available actions are: create, read, update, drop, execute, promote, and describe.

## Attribut

An attribute is the smallest storage cell in a relational database (see also [Relation attribute](#relation-attribute)). Ne confondez pas les attributs de la dataclass et les attributs d'entités :

- Dans un objet dataclass, chaque propriété est un attribut de dataclass qui correspond à un champ dans la table correspondante (même nom et même type).
- Dans un objet entity, les attributs d'entités sont des propriétés qui contiennent les valeurs pour les attributs du datastore correspondants.

> _Attributes_ and _properties_ are similar concepts. "Attribut" est utilisé pour désigner les propriétés de la dataclass qui stockent les données, tandis que "propriété" est plus générique et définit une donnée stockée dans un objet.

## AttributePath

Un attributePath est le chemin d'un attribut à l'intérieur d'une dataclass ou d'une entité donnée. See also [PropertyPath](#propertyPath).

## Class code

Code pour la (les) fonction(s) de classe utilisateurs.

## Champ calculé

Un champ calculé ne stocke pas réellement d'informations. Il détermine plutôt sa valeur en fonction d'autres valeurs provenant de la même entité ou d'autres entités, champs ou fonctions. Lorsqu'un champ calculé est référencé, le "calcul" sous-jacent est évalué pour déterminer la valeur. Les champs calculés peuvent même se voir attribuer des valeurs où le code défini par l'utilisateur détermine ce qu'il faut faire pendant l'attribution.

## Data model class

Classe étendue disponible pour un objet modèle de données.

## Data model object

Objets de base de données disponibles via le concept ORDA, c'est-à-dire datastore, dataclasses, entities (entités) et entity selections (sélections d'entités).

## Data model function

Fonction d'une classe de modèle de données ORDA.

## Dataclass

Une dataclass est un objet qui décrit les données. Les tables de la base de données fournies par le datastore sont gérées via des dataclasses. Chaque table de la base de données fournie par le datastore possède une dataclass correspondante portant le même nom. Chaque champ de la table est un attribut de la dataclass.

Une dataclass est reliée à un seul datastore.

## DataClass class

Classe pour des objets dataclass spécifiques, dans laquelle vous pouvez ajouter des fonctions personnalisées.

## Datastore

Un datastore est l'objet d'interface fourni par ORDA pour référencer une structure et accéder à ses données. The main database, returned by the `ds` command, is available as a datastore (the main datastore).

Un datastore fournit :

- une connexion à la base de données 4D
- un ensemble de dataclasses pour travailler avec la base de données

La base peut être une base locale 4D (le datastore principal), ou une base 4D Server exposée en ressource REST (un datastore distant).

Un datastore ne référence qu'une seule base de données. Il est toutefois possible d'ouvrir plusieurs datastores pour accéder à plusieurs bases.

## DataStore class

Classe pour des objets datastore spécifiques, dans laquelle vous pouvez ajouter des fonctions personnalisées.

## DataStoreImplementation

Internal name of the generic DataStore class in the `4D` class store.

## Copie profonde

Une copie profonde (deep copy) duplique un objet et toutes les références qu'il contient. Après une deep copy, une collection copiée contient des éléments dupliqués et donc de nouvelles références de tous les éléments originaux. Voir également Copie superficielle.

## ds

`ds` is the 4D language command that returns a [datastore](dsMapping.md#datastore) object reference. Elle correspond au datastore disponible sur la base de données principale 4D.

## Entity

Une entité est un objet qui correspond à un modèle de dataclass. Une entité contient les mêmes attributs que la dataclass.

Une entité peut être vue comme une instance de la dataclass, comme un enregistrement de la table correspondante à la dataclass dans son datastore associé. Cependant, une entité contient également des données connexes. Le but de l'entité est de gérer les données (créer, mettre à jour, supprimer).

Pour plus d'informations, voir le chapitre Entités.

## Entity selection

Une sélection d'entités (entity selection) est un objet. Lorsqu'une requête est envoyée au datastore, une sélection d'entités est retournée. Une sélection d'entité est un ensemble de références à des entités liées à la même dataclass.

Une sélection d'entités contient :

- un ensemble de 0 à X références d'entités,
- une propriété length (toujours),
- les propriétés queryPlan et queryPath (si demandées lors de la requête).

Une sélection d'entités peut également être vide.

## Generic class

Classe intégrée pour les objets ORDA tels que les entités ou les dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. `EmployeeEntity`.

## Lazy loading

Commes les entités sont gérées comme des références, les données sont chargées uniquement lorsque cela est nécessaire, c'est-à-dire lorsqu'on y accède dans le code ou via des widgets d'interface. Ce principe d'optimisation est appelé lazy loading.

## Datastore principal

L'objet Datastore correspondant à la base 4D ouverte (autonome ou client/serveur). Le datastore principal est retourné par la commande ds.

## Méthode

Les objets ORDA tels que les "datastores", "dataclasses", "entity selections" et "entities" définissent les classes d'objets. Ils fournissent des méthodes spécifiques pour interagir directement avec eux. Ces méthodes sont aussi appelées des fonctions membres (member functions). Ces méthodes sont utilisées en étant appelées sur une instance de l'objet.

For example, the `query()` method is a dataclass member function. If you have stored a dataclass object in the `$myClass` variable, you can write:

```code4d
$myClass.query("name = smith")
```

## Type de données "Mixte"

Dans cette documentation, le type de données "Mixte" est utilisé pour désigner les différents types de valeurs qui peuvent être stockés dans les attributs d'une dataclass. Cela inclut :

- number
- text
- Null
- boolean
- date
- object
- collection
- image(\*)

_(\*) picture type is not supported by statistical methods such as_ `entitySelection.max( )`.

## Verrouillage optimiste

En mode "verrouillage optimiste", les entités ne sont pas verrouillées explicitement avant d'être mises à jour. Chaque entité a un marqueur interne qui est automatiquement incrémenté chaque fois que l'entité est enregistrée sur le disque. Les méthodes entity.save( ) ou entity.drop( ) retourneront une erreur si le marqueur de l'entité chargée en mémoire et le marqueur de l'entité sur le disque ne correspondent pas, ou si l'entité a été supprimée. Le verrouillage optimiste est uniquement disponible dans l'implémentation ORDA. Voir aussi "verrouillage pessimiste".

## Verrouillage pessimiste

Un "verrouillage pessimiste" signifie qu'une entité est verrouillée avant que l'on y accède, en utilisant la méthode entity.lock( ). Les autres process ne peuvent ni mettre à jour ni supprimer l'entité tant qu'elle n'est pas déverrouillée. Le langage 4D classique n'autorise que les verrouillages pessimistes. Voir "Verrouillage optimiste".

## Privilege

The ability to run one or more [actions](#actions) on [resources](#resource). Several privileges can be gathered in a [role](#role) according to the business logic.

## Propriété

See [Attribute](#attribute).

> \> Attributes and properties are similar concepts. "Attribut" est utilisé pour désigner les propriétés de la dataclass qui stockent les données, tandis que "propriété" est plus générique et définit une donnée stockée dans un objet.

## PropertyPath

Un propertyPath est le chemin vers une propriété dans un objet donné. Si la propriété est imbriquée à plusieurs niveaux, chaque niveau est séparé par un point (".").

## Regular class

Classe utilisateur non liée à un objet ORDA.

## Related dataclass

Ce sont des dataclasses liées par des attributs de relation.

## Attribut relationnel

Les attributs de relation sont utilisés pour conceptualiser les relations entre les dataclasses (N vers 1 et 1 vers N).

- Relation N vers 1 (la dataclassA fait référence à une occurrence de la dataclassB) : un attribut de relation est disponible dans dataclassA et fait référence à une instance de dataclassB.
- Relation 1 vers N (une occurrence de dataclassB fait référence à plusieurs occurrences de dataclassA) : un attribut de relation est disponible dans la dataclassB et fait référence à plusieurs instances de la dataclassA.

Une dataclass peut avoir des attributs de relation récursifs.

Dans une entité, la valeur d'un attribut de relation peut être une entité ou une sélection d'entité.

## Entités liées

Une entité associée peut être considérée comme l'instance d'un attribut de relation dans une dataclass.

Les sélections d'entités peuvent faire référence à des entités relatives selon les attributs de relation définis dans les dataclasses correspondantes.

## Remote datastore

Une base de données 4D ouverte sur 4D ou 4D Server (disponible via HTTP) et exposée en tant que ressource REST. Cette base de données peut être référencée localement en tant que Datastore à partir d'autres postes de travail, où un locaID lui est attribué. Le datastore distant peut être utilisé à travers les concepts ORDA (datastore, dataclass, sélection d'entités, etc.). Cette utilisation est soumise à un système de licence.

## Ressource

An ORDA element on which any [action](#action) can be allowed or not according to a [privilege](#privilege). Available resources are: the datastore, a dataclass, a dataclass attribute, an ORDA Data model function, or a project method.

## Role

A role is a published [privilege](#privilege) intended to be used by an administrator. It can contain one or more privileges.

## Session

Lorsque l'application 4D se connecte à un datastore distant, une session est créée sur le 4D Server (HTTP). Un cookie de session est généré et associé à l'ID du datastore local.

Chaque fois qu'une nouvelle session est ouverte, une licence est utilisée. Chaque fois qu'une session est fermée, la licence est libérée.

Les sessions inactives sont automatiquement fermées après un délai. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes).

## Copie superficielle (Shallow copy)

Une copie superficielle (shallow copy) ne fait que dupliquer la structure des éléments et conserve les mêmes références internes. Après une copie superficielle, deux collections partageront les éléments individuels. Voir également Copie profonde.

## Stamp

Utilisé dans la technologie du verrouillage "optimiste". Toutes les entités ont un compteur interne, le marqueur, qui est incrémenté chaque fois que l'entité est sauvegardée. En comparant automatiquement les marqueurs entre une entité sauvegardée et sa version stockée sur disque, 4D peut empêcher les modifications simultanées sur les mêmes entités.

## Attribut de stockage

Un attribut de stockage (parfois appelé attribut scalaire) est le type d'attribut le plus basique dans une classe de datastore et correspond le plus directement à un champ dans une base de données relationnelle. Un attribut de stockage contient une seule valeur pour chaque entité de la classe.
