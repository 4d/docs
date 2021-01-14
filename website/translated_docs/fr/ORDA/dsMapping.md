---
id: dsmapping
title: Data Model Objects
---

La technologie ORDA est fondée sur une cartographie automatique d'une structure 4D sous-jacente. Elle permet également d'accéder aux données via des objets sélection d'entités (entity selection) et entité (entity). Par conséquent, ORDA expose la base de données entière comme un ensemble d'objets de modèle de données.


## Cartographie de la structure

Lorsque vous appelez un datastore à l'aide de la commande `ds` ou `Open datastore`, 4D référence automatiquement les tables et les champs de la structure 4D correspondante en tant que propriétés de l'objet [datastore](#datastore) retourné :

*   Les tables sont mappées aux classes de données (dataclasses).
*   Les champs sont mappés aux attributs de stockage.
*   Les relations sont mappées aux attributs de relation - les noms de relation, définis dans l'éditeur de structure, sont utilisés comme noms d'attribut de relation.

![](assets/en/ORDA/datastoreMapping.png)


### Règles générales

Les règles suivantes s'appliquent à toutes les conversions :

* Les noms de table, de champ et de relation sont mappés aux noms de propriété d'objet. Assurez-vous que ces noms sont conformes aux règles générales de dénomination des objets, comme expliqué dans la section [Conventions de dénomination des objets](Concepts/identifiers.md).
*   Un datastore ne référence que les tables avec une seule clé primaire. Les tables suivantes ne sont pas référencées :
    *   Tables sans clé primaire
    *   Tables avec clés primaires composites.
*   Les attributs de type [BLOB](Concepts/dt_blob.md) ne sont pas gérés dans le datastore. Les attributs de type BLOB sont retournés comme Null dans les entités et ne peuvent pas être affectés.

> ORDA mapping does not take into account:  
> - the "Invisible" option for tables or fields, - the virtual structure defined through `SET TABLE TITLES` or `SET FIELD TITLES`, - the "Manual" or "Automatic" property of relations.


### Rules for remote access control

When accessing a remote datastore through the `Open datastore` command or [REST requests](REST/gettingStarted.md), only tables and fields with the **Expose as REST resource** property are available remotely.

This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:

![](assets/en/ORDA/ExposeDataclass.png)


### Mise à jour des données

Toute modification apportée à la structure de la base invalide la couche courante de données ORDA. Ces modifications incluent :

*   l'ajout ou la suppression d'une table, d'un champ ou d'une relation
*   le renommage d'une table, d'un champ ou d'une relation
*   la modification d'une propriété principale d'un champ (type, unique, index, autoincrement, valeur null)

Lorsque la couche courante de données ORDA est invalidée, elle est automatiquement rechargée et mise à jour dans les prochains appels du datastore local `ds` vers 4D et 4D Server. A noter que les références existantes vers des objets ORDA tels que des entités ou des sélections d'entités continueront d'utiliser les données à partir desquelles elles ont été créées, et ce jusqu'à ce qu'elles soient regénérées.

Toutefois, la couche de données ORDA mise à jour n'est pas automatiquement disponible dans les contextes suivants :

*   une application 4D distante connectée à 4D Server -- l'application distante doit être reconnectée au serveur.
*   un datastore distant ouvert à l'aide de `Ouvrir datastore` ou des [appels REST](REST/gettingStarted.md) -- une nouvelle session doit être ouverte.


## Object definition

### Datastore

Un datastore est l'objet d'interface d'une base de données. It builds a representation of the whole database as object. Un datastore est constitué d'un **modèle** et à de **données** :

- Le modèle contient et décrit toutes les dataclasses qui composent le datastore. Il est indépendant de la base de données sous-jacente.
- Les données se réfèrent à l'information qui va être utilisée et stockée dans ce modèle. Par exemple, les noms, adresses et dates de naissance des employés sont des éléments de données que vous pouvez utiliser dans un datastore.

Lorsqu'il est géré via le code, le datastore est un objet dont les propriétés sont toutes les [dataclasses](#dataclass) ayant été spécifiquement exposées.

4d vous permet de gérer les datastores suivants :

- le datastore local, fondé sur la base 4D courante, retourné par la commande `ds` (le datastore principal).
- un ou plusieurs datastores distants, exposés en tant que ressources RESET dans des bases 4D distantes, retournés par la commande `Ouvrir datastore`.

Un datastore ne référence qu'une seule base de données locale ou distante.

L'objet datastore lui-même ne peut pas être copié en tant qu'objet :

```4d 
$mydatastore:=OB Copy(ds) //retourne null
```


Les propriétés du datastore sont toutefois énumérables :


```4d 
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  //$prop contient les noms de toutes les dataclasses
```



Le datastore principal (par défaut) est toujours disponible via la commande `ds`, mais la commande `Ouvrir datastore` permet de référencer n'importe quel datastore distant.

### Dataclass

A dataclass is the equivalent of a table. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Relational attributes can be used in queries like any other attribute.

Toutes les dataclasses d'un projet 4D sont disponibles en tant que propriété du datastore `ds`. For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore.

For example, consider the following table in the 4D structure:

![](assets/en/ORDA/companyTable.png)

The `Company` table is automatically available as a dataclass in the `ds` datastore. Vous pouvez écrire :

```4d 
var $compClass : cs.Company //declares a $compClass object variable of the Company class
$compClass:=ds.Company //assigns the Company dataclass reference to $compClass
```

Un objet dataclass peut contenir :

*   attributes
*   des attributs relationnels

La dataclass offre une abstraction de la base de données physique et permet de gérer un modèle de données conceptuel. La dataclass est le seul moyen d'interroger le datastore. Une requête est effectuée à partir d'une seule dataclass. Les requêtes sont construites autour des attributs et des noms d'attributs relationnels des dataclasses. Les attributs relationnels sont ainsi les moyens d'impliquer plusieurs tables liées dans une requête.

L'objet dataclass lui-même ne peut pas être copié en tant qu'objet :

```4d 
$mydataclass:=OB Copy(ds.Employee) //retourne null
```

Les propriétés de la dataclass sont toutefois énumérables :

```code4d 
ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
//$prop contient les noms de tous les attributs de la dataclass
```


### Attribut

Dataclass properties are attribute objects describing the underlying fields or relations. Par exemple:

```4d 
 $nameAttribute:=ds.Company.name //reference to class attribute
 $revenuesAttribute:=ds.Company["revenues"] //alternate way
```

This code assigns to `$nameAttribute` and `$revenuesAttribute` references to the name and revenues attributes of the `Company` class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through [Entities](#entity).

All eligible fieds in a table are available as attributes of their parent [dataclass](#dataclass). For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute.


#### Attributs de stockage et relationnels

Les attributs de la Dataclass sont de plusieurs types : storage, relatedEntity et relatedEntities. Les attributs scalaires (c'est-à-dire qui ne fournissent qu'une seule valeur) prennent en charge le type de données standard (Entier long, texte, objet, etc.).

*   Un **attribut de stockage** (storage) est équivalent à un champ dans la base de données 4D et peut être indexé. Les valeurs affectées à un attribut de stockage sont stockées en tant que partie de l'entité lors de son enregistrement. Lorsqu'on accède à un attribut de stockage, sa valeur provient directement du datastore. Les attributs de stockage sont le bloc de construction le plus élémentaire d'une entité et sont définis par un nom et un type de données.
*   Un **attribut relationnel** (relatedEntity et relatedEntities) donne accès à d'autres entités. Les attributs relationnels peuvent aboutir soit à une entité unique (ou à aucune entité), soit à une sélection d'entité (0 à N entités). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.

For example, consider the following partial database structure and the relation properties:

![](assets/en/ORDA/relationProperties.png)

All storage attributes will be automatically available:

*   in the Project dataclass: "ID", "name", and "companyID"
*   in the Company dataclass: "ID", "name", and "discount"

In addition, the following relation attributes will also be automatically available:

*   in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
*   in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.
> The Manual or Automatic property of a database relation has no effect in ORDA.

All dataclass attributes are exposed as properties of the dataclass:

![](assets/en/ORDA/dataclassProperties.png)

Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through [entity objects](entities.md#using-entity-attributes).

### Entity

An entity is the equivalent of a record. It is actually an object that references a record in the database. It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore.

The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection.

The entity object itself cannot be copied as an object:

```4d
 $myentity:=OB Copy(ds.Employee.get(1)) //returns null
```

The entity properties are however enumerable:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  //$prop contains the names of all the entity attributes
```


### Entity selection

An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

Exemple :

```4d
var $e : cs.EmployeeSelection //déclare une variable objet $e de type de classe EmployeeSelection
$e:=ds.Employee.all() //assigne la référence de la sélection d'entité résultante à la variable $e
```

Les sélections d'entités peuvent être :

- "partageables" or "non partageables",
- "triées" ou "non triées".

Ces points sont décrits ci-dessous.

L'objet sélection d'entités lui-même ne peut pas être copié en tant qu'objet :

```4d
 $myentitysel:=OB Copy(ds.Employee.all()) //retourne null
```

Les propriétés des sélections d'entités sont toutefois énumérables :

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.all();$prop)
  //$prop contient les noms des propriétés des sélections d'entités
  //("length", "00", "01"...)
```


#### Sélections d'entités triées vs Sélections d'entités non-triées

Pour des raisons d'optimisation, par défaut, 4D ORDA crée généralement des sélections d'entités non-ordonnées, sauf lorsque vous utilisez la méthode `orderBy( )` ou si vous utilisez les options appropriées. Dans cette documentation, sauf indication contraire, "sélection d'entités" fait généralement référence à une "sélection d'entités non-ordonnée".

Les sélections d'entités ordonnées sont créées uniquement lorsque cela est nécessaire ou lorsqu'elles sont spécifiquement demandées à l'aide d'options, c'est-à-dire dans les cas suivants :

*   résultat d'un `orderBy( )` sur une sélection (de n'importe quel type) ou un `orderBy( )` sur une dataclass,
*   résultat de la méthode `newSelection( )` avec l'option `dk keep ordered`

Les sélections d'entités non-triées sont créées dans les cas suivants :

*   résultat d'un `query()` standard sur une sélection (de n'importe quel type) ou un `query()` sur une dataclass,
*   résultat de la méthode `newSelection()` sans option,
*   résultat de l'une des méthodes de comparaison, quel que soit le type de sélection saisi : `or()`, `and()`, `minus()`.
> Les sélections d'entités suivantes sont toujours **triées** :
> 
> * sélections d'entités retournées par 4D Server vers un client distant
> * sélections d'entités fondées sur des datastores distants.

Notez que lorsqu'une sélection d'entités ordonnée devient une sélection non-ordonnée, toute référence d'entité répétée est supprimée.
