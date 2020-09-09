---
id: classFunctions
title: Appeler des fonctions de classe ORDA
---

## Aperçu

Vous pouvez appeler les [fonctions de classe utilisateur](ORDA/ordaClasses.md) définies pour le modèle de données ORDA via vos requêtes REST, afin de bénéficier de l'API de l'application 4D ciblée.

Les fonctions sont simplement appelées dans les requêtes POST sur l'interface ORDA appropriée, sans (). Par exemple, si vous avez défini une fonction `getCity()` dans la dataclass City, vous pouvez l'appeler à l'aide de la requête suivante :

`/rest/City/getCity`

avec des données contenues dans le corps de la requête POST : `["Paris"]`

Dans le langage 4D, cet appel équivaut à :

```4d
$city:=ds.City.getCity("Aguada")
```


## Appeler des fonctions

Les fonctions doivent toujours être appelées à l'aide des requêtes **POST** (une requête GET recevra une erreur).

Les fonctions sont appelées sur l'objet correspondant au datastore du serveur.

| Fonction de classe                                                 | Syntaxe                                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/datastoreClassFunction`                                     |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/{dataClass}/dataClassClassFunction`                                  |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/{dataClass}/EntitySelectionClassFunction`                            |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$filter`                    |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`                   |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/{dataClass}(key)/EntityClassFunction/`                               |



> `/rest/{dataClass}/Function` peut être utilisé pour appeler une fonction de dataclass ou de sélection d'entité (`/rest/{dataClass}` retourne toutes les entités de la DataClass en tant que sélection d'entité).   
> La fonction est d'abord recherchée dans la classe de sélection d'entité. Si elle n'est pas trouvée, elle est recherchée dans la dataclass. En d'autres termes, si une fonction portant le même nom est définie à la fois dans la classe DataClass et la classe EntitySelection, la fonction de classe de dataclass ne sera jamais exécutée.


## Paramètres


Vous pouvez envoyer des paramètres aux fonctions définies dans les classes utilisateurs ORDA. Côté serveur, ils seront reçus dans les fonctions de classe dans les paramètres normaux $1, $2, etc.

Les règles suivantes s'appliquent :

- Les paramètres doivent être passés dans le **corps de la requête POST**
- Les paramètres doivent être inclus dans une collection (format JSON)
- Tous les types de données scalaires pris en charge dans les collections JSON peuvent être passés en tant que paramètres.
- La sélection d'entité et l'entité peuvent être passées en tant que paramètres. L'objet JSON doit contenir des attributs spécifiques utilisés par le serveur REST pour affecter des données aux objets ORDA correspondants : __DATACLASS, __ENTITY, __ENTITIES, __DATASET.

Voir [cet exemple](#request-receiving-an-entity-as-parameter) et [cet exemple](#request-receiving-an-entity-selection-as-parameter).


### Paramètre de valeur scalaire

Le(s) paramètre(s) doivent simplement être incluse dans une collection définie dans le corps. Par exemple, avec une fonction de dataclass `getCities()` qui reçoit des paramètres de type texte : `/rest/City/getCities`

**Parmaètres dans le corps :** ["Aguada","Paris"]

Tous les types de données JSON sont pris en charge dans les paramètres, y compris les pointeurs JSON. Les dates peuvent être passées sous forme de chaînes au format de date ISO 8601 (par exemple, "2020-08-22T22:00:000Z").


### Paramètre d'entité

Les entités passées en paramètres sont référencées sur le serveur via leur clé (c'est-à-dire la propriété __KEY). Si le paramètre clé est omis dans une requête, une nouvelle entité est chargée en mémoire du serveur. Vous pouvez également transmettre des valeurs pour tous les attributs de l'entité. These values will automatically be used for the entity handled on the server.

> If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.


| Propriétés            | Type                                              | Description                                                                 |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| Attributs de l'entité | mixte                                             | Optionnelle - Valeurs à modifier                                            |
| __DATACLASS           | Chaine                                            | Obligatoire - Indique la Dataclass de l'entité                              |
| __ENTITY              | Booléen                                           | Obligatoire - Vrai pour indiquer au serveur que le paramètre est une entité |
| __KEY                 | mixte (type identique à celui de la clé primaire) | Optionnel - clé primaire de l'entité                                        |

- Si __KEY n'est pas fourni, une nouvelle entité est créée sur le serveur avec les attributs donnés.
- Si __KEY est fourni, l'entité correspondant à _KEY est chargée sur le serveur avec les attributs donnés

Voir les exemple de [création](#creating-an-entity) ou de [mise à jour](#updating-an-entity) des entités.

#### Related entity parameter

Same properties as for an [entity parameter](#entity-parameter). In addition, the related entity must exist and is referenced by __KEY containing its primary key.

See examples for [creating](#creating-an-entity-with-a-related-entity) or [updating](#updating-an-entity-with-a-related-entity) entities with related entities.


### Entity selection parameter

The entity selection must have been defined beforehand using [$method=entityset]($method.md#methodentityset).

> If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.


| Propriétés            | Type    | Description                                                                          |
| --------------------- | ------- | ------------------------------------------------------------------------------------ |
| Attributs de l'entité | mixte   | Optionnelle - Valeurs à modifier                                                     |
| __DATASET             | Chaine  | Mandatory - entitySetID (UUID) of the entity selection                               |
| __ENTITIES            | Booléen | Mandatory - True to indicate to the server that the parameter is an entity selection |

See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter).


## Exemples de requêtes

This database is exposed as a remote datastore on localhost (port 8111):

![alt-text](assets/en/REST/ordastructure.png)

### Utiliser une fonction de classe de datastore

The US_Cities `DataStore` class provides an API:

```  
// DataStore class

Class extends DataStoreImplementation

Function getName()
    $0:="US cities and zip codes manager" 
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Résultat

```
{
"result": "US cities and zip codes manager" 
}
```

### Utiliser une fonction de classe de dataclass

The Dataclass class `City` provides an API that returns a city entity from a name passed in parameter:

```
// City class

Class extends DataClass

Fonction getCity()
    var $0 : cs.CityEntity
    var $1,$nameParam : text
    $nameParam:=$1
    $0:=This.query("name = :1";$nameParam).first()
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/City/getCity`

Requête : ["Paris"]

#### Résultat

Le résultat est une entité :
```
{
    "__entityModel": "City",
    "__DATACLASS": "City",
    "__KEY": "1",
    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",
    "__STAMP": 1,
    "ID": 1,
    "name": "Paris",
    "countyFIPS": 72003,
    "county": {
        "__deferred": {
            "uri": "/rest/County(72003)",
            "__KEY": "72003" 
        }
    },
    "zips": {
        "__deferred": {
            "uri": "/rest/City(1)/zips?$expand=zips" 
        }
    }
}
```

### Utiliser une fonction de classe d'une entité

The Entity class `CityEntity` provides an API:

```
// CityEntity class

Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Résultat

```
{
    "result": 48814
}
```


### Using an entitySelection class function

The EntitySelection class `CitySelection` provides an API:

```
// CitySelection class

Class extends EntitySelection

Function getPopulation()
    $0:=This.zips.sum("population")
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Résultat

```
{
    "result": 87256
}
```

### Using an entitySelection class function and an entitySet

The `StudentsSelection` class has a `getAgeAverage` function:

```  
// StudentsSelection Class

Class extends EntitySelection

Function getAgeAverage
    C_LONGINT($sum;$0)
    C_OBJECT($s)

    $sum:=0
    For each ($s;This)
        $sum:=$sum+$s.age()
    End for each 
    $0:=$sum/This.length
```

Once you have created an entityset, you can run this request:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### Résultat

```
{
    "result": 34
}
```

### Using an entitySelection class function and an orderBy

The `StudentsSelection` class has a `getLastSummary` function:

```  
// StudentsSelection Class


Class extends EntitySelection

Function getLastSummary
    C_TEXT($0)
    C_OBJECT($last)

    $last:=This.last()
    $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

You can then run this request:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`


#### Résultat

```
{
    "result": "Wilbert - Bull is ... 21" 
}
```


### Using an entity to be created on the server


The Dataclass class `Students` has the function `pushData()` receiving an entity containing data from the client. The `checkData()` method runs some controls. If they are OK, the entity is saved and returned.

```
// Students Class

Class extends DataClass

Function pushData
    var $1, $entity, $status, $0 : Object

    $entity:=$1

    $status:=checkData($entity) // $status est un objet avec une propriété avec une propriété booléenne "success"

    $0:=$status

    If ($status.success)
        $status:=$entity.save()
       If ($status.success)
           $0:=$entity
      End if 
    End if

```

You run this request:

**POST** `http://127.0.0.1:8044/rest/Students/pushData`

Body of the request:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown" 
}]
```

Since no `__KEY` is given, a new Students entity is loaded on the server **with the attributes received from the client**. Because the `pushData()` function runs a `save()` action, the new entity is created.


#### Résultat

```
{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "55",
    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",
    "__STAMP": 1,
    "ID": 55,
    "firstname": "Ann",
    "lastname": "BROWN",
    "schoolID": null,
    "school": null
}
```

### Using an entity to be updated on the server

Same as above but with a __KEY attribute

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Body of the request:
```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
```

Since `__KEY` is given, the Students entity with primary key 55 is loaded **with the lastname value received from the client**. Because the function runs a `save()` action, the entity is updated.

#### Résultat

``` 
{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "55",
    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",
    "__STAMP": 3,
    "ID": 55,
    "firstname": "Ann",
    "lastname": "BROWNIE",
    "schoolID": null,
    "school": null 
}
```

### Creating an entity with a related entity

In this example, we create a new Students entity with the Schools entity having primary key 2.

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Body of the request:
```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"John",
"lastname":"Smith",
"school":{"__KEY":2}
}]
```

#### Résultat

```
{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "56",
    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",
    "__STAMP": 1,
    "ID": 56,
    "firstname": "John",
    "lastname": "SMITH",
    "schoolID": 2,
       "school": {
        "__deferred": {
            "uri": "/rest/Schools(2)",
            "__KEY": "2" 
        }
    }
}
```


### Updating an entity with a related entity

In this example, we associate an existing school to a Students entity. The `StudentsEntity` class has an API:

```
// classe StudentsEntity

Class extends Entity

Function putToSchool()
    var $1, $school , $0, $status : Object

        //$1 est une entité Schools
    $school:=$1
        //Associe l'entité reliée "school" à l'entité courante "Students"
    This.school:=$school

    $status:=This.save()

    $0:=$status
```

You run this request, called on a Students entity : **POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool` Body of the request:
```
[{
"__DATACLASS":"Schools",
"__ENTITY":true,
"__KEY":2
}]
```

#### Résultat

```
{
    "result": {
        "success": true
    }
}
```


### Receiving an entity selection as parameter

In the `Students` Dataclass class, the `setFinalExam()` function updates a received entity selection ($1). It actually updates the *finalExam* attribute with the received value ($2). It returns the primary keys of the updated entities.

```
// Students class

Class extends DataClass

Function setFinalExam()

    var $1, $es, $student, $status : Object
    var $2, $examResult : Text

    var $keys, $0 : Collection

      //Entity selection
    $es:=$1

    $examResult:=$2

    $keys:=New collection()

      //Loop on the entity selection
    For each ($student;$es)
        $student.finalExam:=$examResult
        $status:=$student.save()
        If ($status.success)
            $keys.push($student.ID)
        End if 
    End for each 

    $0:=$keys
```

An entity set is first created with this request:

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

Then you can run this request:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Body of the request:

```
[
{
"__ENTITIES":true,
"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" 
},
"Passed" 
]

```

#### Résultat

The entities with primary keys 1 and 2 have been updated.

```
{
    "result": [
        1,
        2
    ]
}
```

### Using an entity selection updated on the client

Using the `getAgeAverage()` function [defined above](#using-an-entityselection-class-function-and-an-entityset).

```4d
var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent is a student entity to procees
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1";"Math school")
// We add an entity to the $students entity selection on the client
$students.add($newStudent) 

// We call a function on the StudentsSelection class returning the age average of the students in the entity selection
// The function is executed on the server on the updated $students entity selection which included the student added from the client
$ageAverage:=$students.getAgeAverage()
```