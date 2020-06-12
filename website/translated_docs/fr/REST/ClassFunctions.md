---
id: classFunctions
title: Calling ORDA class functions
---

You can call [user class functions](API/ordaClasses.md) defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.

Functions are simply called in requests on the appropriate ORDA interface, without (). For example, if you have defined a `getCity()` function in the City dataclass class, you could call it using the following request:

`/rest/City/getCity`

with data in the body of the request: `["Aguada"]`

## Aperçu

### POST requests

Functions must be called using REST POST requests (a GET request will receive an error).

### Paramètres

You can send parameters to functions defined in ORDA user classes. The following rules apply:

- Parameters must be passed in the body of the POST request
- Parameters must be enclosed within a collection (JSON format)
- All data types supported in JSON collections can be used as parameters. 
- Entity and entity selection can be passed as parameters. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: __DATACLASS, __ENTITY, __ENTITIES, __DATASET (see example 2 below).

#### Exemple 1

A simple function `getCities()` receiving text parameters:

    /rest/City/getCities
    

*Parameters in body:*

["Aguada","Paris"]

#### Exemple 2

An `applyData()` function in a Students dataclass class that receives an entity and saves it:

    /rest/Students/applyData
    

*Parameters in body:*

    [{
    "__DATACLASS":"Students",
    "__ENTITY":true,
    "firstname":"Ann",
    "lastname":"Brown" 
    }]
    

See also [this example](#request-receiving-an-entity-as-parameter) and [this example](#request-receiving-an-entity-selection-as-parameter).

## Function calls

Functions are called on the corresponding object on the server datastore.

| Class function                                                    | Syntaxe                                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [datastore class](API/ordaClasses.md#datastore-class)             | `/rest/$catalog/datastoreClassFunction`                                       |
| [dataclass class](API/ordaClasses.md#dataclass-class)             | `/rest/DataClassName/dataClassClassFunction`                                  |
| [entitySelection class](API/ordaClasses.md#entityselection-class) | `/rest/DataClassName/EntitySelectionClassFunction`                            |
|                                                                   | `/rest/DataClassName/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                   | `/rest/DataClassName/EntitySelectionClassFunction/$filter`                    |
|                                                                   | `/rest/DataClassName/EntitySelectionClassFunction/$orderby`                   |
| [entity class](API/ordaClasses.md#entity-class)                   | `/rest/DataclassName(key)/EntityClassFunction/`                               |


> `/rest/DataClassName/Function` can be used to call either a dataclass or an entity selection function (`/rest/DataClassName` returns all entities of the DataClass as an entity selection).  
> The function is searched in the entity selection class first. If not found, it is searched in the dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed.

## Paramètres

You can send parameters to functions defined in ORDA user classes. On the server side, they will be received in the class functions in regular $1, $2, etc. parameters.

The following rules apply:

- Parameters must be passed in the **body of the POST request**
- Parameters must be enclosed within a collection (JSON format)
- All data types supported in JSON collections can be used as parameters, including entity and entity selection objects (in which case the JSON object must contain specific attributes, see below).

### Scalar value parameter

Parameter(s) must simply be enclosed in a collection defined in the body. For example, with a dataclass function `getCities()` receiving text parameters: `/rest/City/getCities`

**Parameters in body:** ["Aguada","Paris"]

### Entity parameter

The entity must be sent as a JSON object with specific properties:

| Properties               | Type                                 | Description                                                                |
| ------------------------ | ------------------------------------ | -------------------------------------------------------------------------- |
| Attributes of the entity | mixed                                | Optional - Values to modify                                                |
| __DATACLASS              | Chaine                               | Mandatory - Indicates the Dataclass of the entity                          |
| __ENTITY                 | Booléen                              | Mandatory - True to indicate to the server that the parameter is an entity |
| __KEY                    | mixed (same type as the primary key) | Optional - Primary key of the entity                                       |


- If __KEY is not provided, a new entity is created on the server with the given attributes.
- If __KEY is provided, the entity corresponding to __KEY is loaded on the server with the given attributes 

See examples for [creating](#creating-an-entity) or [updating](#updating-an-entity) entities.

### Related entity parameter

Same properties as for an [entity parameter](#entity-parameter). In addition, the related entity must exist and is referenced by __KEY containing its primary key.

See examples for [creating](#creating-an-entity-with-a-related-entity) or [updating](#updating-an-entity-with-a-related-entity) entities with related entities.

### Entity selection parameter

The entity selection must have been defined beforehand using [$method=entityset]($method.md#methodentityset)

The entity selection must then be sent as a JSON object with specific properties:

| Properties               | Type    | Description                                                                          |
| ------------------------ | ------- | ------------------------------------------------------------------------------------ |
| Attributes of the entity | mixed   | Optional - Values to modify                                                          |
| __DATASET                | Chaine  | Mandatory - entitySetID (UUID) of the entity selection                               |
| __ENTITIES               | Booléen | Mandatory - True to indicate to the server that the parameter is an entity selection |


See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter).

## Request examples

This database is exposed as a remote datastore on localhost (port 8111):

![alt-text](assets/en/REST/ordastructure.png)

### Using a datastore class function

The US_Cities `DataStore` class provides an API:

    // DataStore class
    
    Class extends DataStoreImplementation
    
    Function getName()
        $0:="US cities and zip codes manager" 
    

You can then run this request:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Result

    {
    "result": "US cities and zip codes manager" 
    }
    

### Using a dataclass class function

The Dataclass class `City` provides an API that returns a city entity from a name passed in parameter:

    // City class
    
    Class extends DataClass
    
    Function getCity()
        var $0 : cs.CityEntity
        var $1,$nameParam : text
        $nameParam:=$1
        $0:=This.query("name = :1";$nameParam).first()
    

You can then run this request:

**POST** `127.0.0.1:8111/rest/City/getCity`

Body of the request: ["Aguada"]

#### Result

The result is an entity:

    {
        "__entityModel": "City",
        "__DATACLASS": "City",
        "__KEY": "1",
        "__TIMESTAMP": "2020-03-09T08:03:19.923Z",
        "__STAMP": 1,
        "ID": 1,
        "name": "Aguada",
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
    

### Using an entity class function

The Entity class `CityEntity` provides an API:

    // CityEntity class
    
    Class extends Entity
    
    Function getPopulation()
        $0:=This.zips.sum("population")
    

You can then run this request:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Result

    {
        "result": 48814
    }
    

### Using an entitySelection class function

The EntitySelection class `CitySelection` provides an API:

    // CitySelection class
    
    Class extends EntitySelection
    
    Function getPopulation()
        $0:=This.zips.sum("population")
    

You can then run this request:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Result

    {
        "result": 87256
    }
    

### Using an entitySelection class function and an entitySet

The `StudentsSelection` class has a `getAgeAverage` function:

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
    

Once you have created an entityset, you can run this request:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### Result

    {
        "result": 34
    }
    

### Using an entitySelection class function and an orderBy

The `StudentsSelection` class has a `getLastSummary` function:

    // StudentsSelection Class
    
    
    Class extends EntitySelection
    
    Function getLastSummary
        C_TEXT($0)
        C_OBJECT($last)
    
        $last:=This.last()
        $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
    

You can then run this request:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`

#### Result

    {
        "result": "Wilbert - Bull is ... 21" 
    }
    

### Creating an entity

The Dataclass class `Students` has the function `applyData()` receiving an entity and saving it.

    // Students Class
    
    Class extends DataClass
    
    Function applyData
        C_OBJECT($1;$entity;$status;$0)
    
        $entity:=$1
    
        $entity.lastname:=Uppercase($entity.lastname)
        $status:=$entity.save()
        $0:=$status
    

You run this request:

**POST** `http://127.0.0.1:8044/rest/Students/applyData`

Body of the request:

    [{
    "__DATACLASS":"Students",
    "__ENTITY":true,
    "firstname":"Ann",
    "lastname":"Brown" 
    }]
    

Since no `__KEY` is given, a new Students entity is created with the given attributes.

#### Result

    {
        "result": {
            "success": true
        }
    }
    

### Updating an entity

Same as above but with a __KEY attribute

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/applyData`

Body of the request:

    [{
    "__DATACLASS":"Students",
    "__ENTITY":true,
    "lastname":"Brownie",
    "__KEY":1
    }]
    

Since `__KEY` is given, the Students entity with primary key 1 is loaded with the lastname value received. Because the function runs a `save()`, the entity is updated.

#### Result

    {
        "result": {
            "success": true
        }
    }
    

### Creating an entity with a related entity

In this example, we create a new Students entity with the Schools entity having primary key 2.

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/applyData`

Body of the request:

    [{
    "__DATACLASS":"Students",
    "__ENTITY":true,
    "firstname":"John",
    "lastname":"Smith",
    "school":{"__KEY":2}
    }]
    

#### Result

    {
        "result": {
            "success": true
        }
    }
    

### Updating an entity with a related entity

In this example, we associate an existing school to a Students entity. The `StudentsEntity` class has an API:

    // StudentsEntity class
    
    Class extends Entity
    
    Function putToSchool()
        C_OBJECT($1;$school;$0;$status)
    
            //$1 is a Schools entity
        $school:=$1
            //Associate the related entity school to the current Students entity
        This.school:=$school
    
        $status:=This.save()
    
        $0:=$status
    

You run this request, called on a Students entity : **POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool` Body of the request:

    [{
    "__DATACLASS":"Schools",
    "__ENTITY":true,
    "__KEY":2
    }]
    

#### Result

    {
        "result": {
            "success": true
        }
    }
    

### Receiving an entity selection as parameter

In the `Students` Dataclass class, a function updates a received entity selection ($1). It actually updates the *finalExam* attribute with the received value ($2).

    // Students class
    
    Class extends DataClass
    
    Function setFinalExam()
    
        C_OBJECT($1;$es;$student;$status)
        C_TEXT($2;$examResult)
    
        C_COLLECTION($keys;$0)
    
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
    

An entity set is first created with this request:

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

Then you can run this request:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Body of the request:

    [
    {
    "__ENTITIES":true,
    "__DATASET":"9B9C053A111E4A288E9C1E48965FE671" 
    },
    "Passed" 
    ]
    
    

#### Result

    {
        "result": [
            1,
            2
        ]
    }