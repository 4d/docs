---
id: dsmapping
title: Objets Data Model
---

La technologie ORDA est fondée sur une cartographie automatique d'une structure de base sous-jacente. Elle permet également d'accéder aux données via des objets sélection d'entités (entity selection) et entité (entity). Par conséquent, ORDA expose la base de données entière comme un ensemble d'objets de modèle de données.

## Correspondance de la structure

When you call a datastore using the [`ds`](API/DataStoreClass.md#ds) or the [`Open datastore`](API/DataStoreClass.md#open-datastore) command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned [datastore](#datastore) object:

- Les tables correspondent à des dataclasses.
- Les champs correspondent à des attributs de stockage.
- Les relations correspondent à des attributs de relation - les noms de relation, définis dans l'éditeur de structure, sont utilisés comme noms d'attribut de relation.

![](../assets/en/ORDA/datastoreMapping.png)

### Règles générales

Les règles suivantes s'appliquent à toutes les conversions :

- Les noms de table, de champ et de relation correspondent à des noms de propriété d'objet. Make sure that such names comply with general object naming rules, as explained in the [object naming conventions](Concepts/identifiers.md) section.
- Un datastore ne référence que les tables avec une seule clé primaire. Les tables suivantes ne sont pas référencées :
  - Tables sans clé primaire
  - Tables avec clés primaires composites.
- BLOB fields are automatically available as attributes of the [Blob object](Concepts/dt_blob.md#blob-types) type.

> ORDA mapping does not take into account:
>
> - the "Invisible" option for tables or fields,
> - the virtual structure defined through `SET TABLE TITLES` or `SET FIELD TITLES`,
> - the "Manual" or "Automatic" property of relations.

### Règles de contrôle d'accès à distance

When accessing a remote datastore through the `Open datastore` command or [REST requests](REST/gettingStarted.md), only tables and fields with the **Expose as REST resource** property are available remotely.

Cette option doit être choisie au niveau de la structure 4D pour chaque table et chaque champ que vous souhaitez voir apparaître comme dataclass et attribut dans le datastore :

![](../assets/en/ORDA/ExposeDataclass.png)

### Mise à jour des données

Toute modification apportée à la structure de la base invalide la couche courante de données ORDA. Ces modifications incluent :

- l'ajout ou la suppression d'une table, d'un champ ou d'une relation
- le renommage d'une table, d'un champ ou d'une relation
- la modification d'une propriété principale d'un champ (type, unique, index, autoincrement, valeur null)

When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local `ds` datastore on 4D and 4D Server. A noter que les références existantes vers des objets ORDA tels que des entités ou des sélections d'entités continueront d'utiliser les données à partir desquelles elles ont été créées, et ce jusqu'à ce qu'elles soient regénérées.

Toutefois, la couche de données ORDA mise à jour n'est pas automatiquement disponible dans les contextes suivants :

- une application 4D distante connectée à 4D Server -- l'application distante doit être reconnectée au serveur.
- a remote datastore opened using `Open datastore` or through [REST calls](REST/gettingStarted.md) -- a new session must be opened.

## Définitions des objets

### Datastore

Un datastore est l'objet d'interface d'une base de données. Il crée une représentation de toute la base sous forme d'objet. A datastore is made of a **model** and **data**:

- Le modèle contient et décrit toutes les dataclasses qui composent le datastore. Il est indépendant de la base de données sous-jacente.
- Les données se réfèrent à l'information qui va être utilisée et stockée dans ce modèle. Par exemple, les noms, adresses et dates de naissance des employés sont des éléments de données que vous pouvez utiliser dans un datastore.

When handled through the code, the datastore is an object whose properties are all of the [dataclasses](#dataclass) which have been specifically exposed.

4d vous permet de gérer les datastores suivants :

- the local datastore, based on the current 4D database, returned by the `ds` command (the main datastore).
- one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the `Open datastore` command.

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

The main (default) datastore is always available through the `ds` command, but the `Open datastore` command allows referencing any remote datastore.

### Dataclass

Une dataclasse est l'équivalent d'une table. Elle est utilisée comme modèle d'objet et référence tous les champs comme attributs, y compris les attributs relationnels (attributs construits à partir des relations entre les dataclasses). Les attributs relationnels peuvent être utilisés dans les requêtes comme tout autre attribut.

All dataclasses in a 4D project are available as a property of the `ds` datastore. For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore.

Par exemple, considérons cette table dans la structure suivante :

![](../assets/en/ORDA/companyTable.png)

The `Company` table is automatically available as a dataclass in the `ds` datastore. Vous pouvez écrire :

```4d
var $compClass : cs.Company //déclare une variable objet $compClass de la classe Company
$compClass:=ds.Company //affecte la référence de dataclasse Company à $compClass
```

Un objet dataclass peut contenir :

- attributes
- des attributs relationnels

La dataclass offre une abstraction de la base de données physique et permet de gérer un modèle de données conceptuel. La dataclass est le seul moyen d'interroger le datastore. Une requête est effectuée à partir d'une seule dataclass. Les requêtes sont construites autour des attributs et des noms d'attributs relationnels des dataclasses. Les attributs relationnels sont ainsi les moyens d'impliquer plusieurs tables liées dans une requête.

L'objet dataclass lui-même ne peut pas être copié en tant qu'objet :

```4d
$mydataclass:=OB Copy(ds.Employee) //retourne null
```

Les propriétés de la dataclass sont toutefois énumérables :

```code4d
ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
//$prop contient les noms de tous les attributs de dataclass
```

### Attribut

Les propriétés de dataclass sont des objets attribut décrivant les champs ou relations sous-jacents. Par exemple :

```4d
 $nameAttribute:=ds.Company.name //référence à un attribut de classe
 $revenuesAttribute:=ds.Company["revenues"] //méthode alternative
```

This code assigns to `$nameAttribute` and `$revenuesAttribute` references to the name and revenues attributes of the `Company` class. Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plutôt des références aux attributs eux-mêmes. To handle values, you need to go through [Entities](#entity).

All eligible fields in a table are available as attributes of their parent [dataclass](#dataclass). For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute.

#### Attributs de stockage et relationnels

Les attributs de la Dataclass sont de plusieurs types : storage, relatedEntity et relatedEntities. Attributes that are scalar (_i.e._, provide only a single value) support all the standard 4D data types (integer, text, object, etc.).

- A **storage attribute** is equivalent to a field in the 4D database and can be indexed. Les valeurs affectées à un attribut de stockage sont stockées en tant que partie de l'entité lors de son enregistrement. Lorsqu'on accède à un attribut de stockage, sa valeur provient directement du datastore. Les attributs de stockage sont le bloc de construction le plus élémentaire d'une entité et sont définis par un nom et un type de données.
- A **relation attribute** provides access to other entities. Les attributs relationnels peuvent aboutir soit à une entité unique (ou à aucune entité), soit à une sélection d'entité (0 à N entités). Les attributs relationnels s'appuient sur les relations "classiques" dans la structure relationnelle pour fournir un accès direct à une entité ou à des entités reliées. Tous les attributs relationnels sont directement disponibles dans ORDA si vous utilisez leurs noms.

Prenons l'exemple de la structure de base de données partielle suivante et les propriétés relationnelles :

![](../assets/en/ORDA/relationProperties.png)

Tous les attributs relationnels seront disponibles automatiquement :

- dans la dataclass Project : "ID", "name", et "companyID"
- dans la dataclass Company : "ID", "name", et "discount"

En outre, les attributs relationnels suivant seront également disponibles automatiquement :

- in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
- in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.

> La propriété manuelle ou automatique d'une relation de base de données n'a aucun effet dans ORDA.

Tous les attributs de la dataclass sont exposés en tant que propriétés de la dataclass :

![](../assets/en/ORDA/dataclassProperties.png)

Gardez à l'esprit que ces objets décrivent des attributs, mais ne donnent pas accès aux données. Reading or writing data is done through [entity objects](entities.md#using-entity-attributes).

#### Attributs calculés et Alias

[Computed attributes](ordaClasses.md#computed-attributes) and [alias attributes](ordaClasses.md#alias-attributes) are "virtual" attributes. Leur valeur n'est pas stockée mais évaluée à chaque fois qu'on y accède. Ils n'appartiennent pas à la structure sous-jacente de la base, mais ils se basent sur elle et peuvent être utilisés comme n'importe quel champ du modèle de données.

### Entity

Une entité est l'équivalent d'un enregistrement. Il s'agit d'un objet qui fait référence à un enregistrement de la base de données. It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. Toutefois, une entité contient également des données corrélées à la base de données liée au datastore.

Le but de l'entité est de gérer les données (créer, mettre à jour, supprimer). Lorsqu'une référence d'entité est obtenue au moyen d'une sélection d'entité, elle conserve également des informations sur la sélection d'entité qui permet une itération à travers la sélection.

L'objet entité lui-même ne peut pas être copié en tant qu'objet :

```4d
 $myentity:=OB Copy(ds.Employee.get(1)) //retourne null
```

Les propriétés de l'entité sont toutefois énumérables :

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  //$prop contient les noms de tous les attributs de l'entité
```

### Entity selection

Une sélection d'entité est un objet contenant une ou plusieurs référence(s) à des entités appartenant à la même dataclasse. Elle est généralement créée à la suite d'une requête ou retournée à partir d'un attribut relationnel. Une entity selection peut contenir 0, 1 ou X entités de la dataclass - où X peut représenter le nombre total d'entités contenues dans la dataclass.

Voici un exemple :

```4d
var $e : cs.EmployeeSelection //déclare une variable objet $e de type de classe EmployeeSelection
$e:=ds.Employee.all() //assigne la référence de la sélection d'entité résultante à la variable $e
```

Entity selections can be "sorted" or "unsorted" ([see below](#ordered-or-unordered-entity-selection)).

> Entity selections can also be "shareable" or "non-shareable", depending on [how they have been created](entities.md#shareable-or-alterable-entity-selections).

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

#### Entity selections triées vs Entity selections non-triées

For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the `orderBy( )` method or use specific options. Dans cette documentation, sauf indication contraire, "sélection d'entités" fait généralement référence à une "sélection d'entités non-ordonnée".

Les sélections d'entités ordonnées sont créées uniquement lorsque cela est nécessaire ou lorsqu'elles sont spécifiquement demandées à l'aide d'options, c'est-à-dire dans les cas suivants :

- result of an `orderBy()` on a selection (of any type) or an `orderBy()` on a dataclass
- result of the `newSelection()` method with the `dk keep ordered` option

Les sélections d'entités non-triées sont créées dans les cas suivants :

- result of a standard `query()` on a selection (of any type) or a `query()` on a dataclass,
- result of the `newSelection()` method without option,
- result of any of the comparison methods, whatever the input selection types: `or()`, `and()`, `minus()`.

> The following entity selections are always **ordered**:
>
> - entity selections retournées par 4D Server vers un client distant
> - entity selections basées sur des datastores distants.

Notez que lorsqu'une sélection d'entités ordonnée devient une sélection non-ordonnée, toute référence d'entité répétée est supprimée.
