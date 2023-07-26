---
id: classFunctions
title: Chamada de funções de classe ORDA
---


You can call [data model class functions](ORDA/ordaClasses.md) defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.

Functions are simply called in POST requests on the appropriate ORDA interface, without (). For example, if you have defined a `getCity()` function in the City dataclass class, you could call it using the following request:

`/rest/City/getCity`

with data in the body of the POST request: `["Aguada"]`

Na linguagem 4D, esta chamada é equivalente a:

```4d
$city:=ds. City.getCity("Aguada")
```

> Only functions with the `exposed` keyword can be directly called from REST requests. See [Exposed vs non-exposed functions](ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) section.

## Chamadas funções

Functions must always be called using REST **POST** requests (a GET request will receive an error).

Functions are called on the corresponding object on the server datastore.

| Função de classe                                                   | Sintaxe                                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                     |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/{dataClass}/DataClassClassFunction`                                  |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/{dataClass}/EntitySelectionClassFunction`                            |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$filter`                    |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`                   |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/{dataClass}(key)/EntityClassFunction/`                               |



> `/rest/{dataClass}/Function` can be used to call either a dataclass or an entity selection function (`/rest/{dataClass}` returns all entities of the DataClass as an entity selection). The function is searched in the entity selection class first. Se não for encontrado, é procurado na dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed.


> All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [*Use preemptive process* setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).


## Parâmetros



You can send parameters to functions defined in ORDA user classes. On the server side, they will be received in the class functions in regular $1, $2, etc. parameters.

As regras abaixo são válidas:

- Parameters must be passed in the **body of the POST request**
- Parameters must be enclosed within a collection (JSON format)
- All scalar data types supported in JSON collections can be passed as parameters.
- Entity and entity selection can be passed as parameters. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: __DATACLASS,__ENTITY, __ENTITIES,__DATASET.

See [this example](#request-receiving-an-entity-as-parameter) and [this example](#request-receiving-an-entity-selection-as-parameter).


### Parâmetro de valor escalar

Parameter(s) must simply be enclosed in a collection defined in the body. For example, with a  dataclass function `getCities()` receiving text parameters: `/rest/City/getCities`

**Parameters in body:** ["Aguada","Paris"]

All JSON data types are supported in parameters, including JSON pointers. Dates can be passed as strings in ISO 8601 date format (e.g. "2020-08-22T22:00:000Z").


### Parâmetro da entidade

Entities passed in parameters are referenced on the server through their key (*i.e.* __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory  the server. You can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server.

> If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.


| Propriedades          | Tipo                                       | Descrição                                                                  |
| --------------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| Atributos da entidade | misto                                      | Opcional - Valores a modificar                                             |
| __DATACLASS           | String                                     | Mandatory - Indicates the Dataclass of the entity                          |
| __ENTITY              | Parâmetros                                 | Mandatory - True to indicate to the server that the parameter is an entity |
| __KEY                 | misto (do mesmo tipo que a chave primária) | Facultativo - Chave primária da entidade                                   |

- If __KEY is not provided, a new entity is created on the server with the given attributes.
- If __KEY is provided, the entity corresponding to__KEY is loaded on the server with the given attributes

See examples for [creating](#creating-an-entity) or [updating](#updating-an-entity) entities.

#### Related entity parameter

Same properties as for an [entity parameter](#entity-parameter). In addition, the related entity must exist and is referenced by __KEY containing its primary key.

See examples for [creating](#creating-an-entity-with-a-related-entity) or [updating](#updating-an-entity-with-a-related-entity) entities with related entities.


### Entity selection parameter

The entity selection must have been defined beforehand using [$method=entityset]($method.md#methodentityset).

> If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.


| Propriedades          | Tipo       | Descrição                                                                            |
| --------------------- | ---------- | ------------------------------------------------------------------------------------ |
| Atributos da entidade | misto      | Opcional - Valores a modificar                                                       |
| __DATASET             | String     | Mandatory - entitySetID (UUID) of the entity selection                               |
| __ENTITIES            | Parâmetros | Mandatory - True to indicate to the server that the parameter is an entity selection |

See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter).


## Request examples

This database is exposed as a remote datastore on localhost (port 8111):

![alt-text](../assets/en/REST/ordastructure.png)

### Utilizar uma função de classe do datastore

The US_Cities `DataStore` class provides an API:

```  
// DataStore class Class extends DataStoreImplementation

exposed Function getName()
    $0:="US cities and zip codes manager" 
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Resultados

```
{
"result": "US cities and zip codes manager" 
}
```

### Utilização de uma função de classe de dataclass

The Dataclass class `City` provides an API that returns a city entity from a name passed in parameter:

```
// City class Class extends DataClass

exposed Function getCity()
 var $0 : cs. CityEntity
 var $1,$nameParam : text
 $nameParam:=$1
 $0:=This.query("name = :1";$nameParam).first()
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/City/getCity`

Body of the request: ["Aguada"]

#### Resultados

Le résultat est une entité:
```
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
```

### Utilização de uma função de classe de uma entidade

The Entity class `CityEntity` provides an API:

```
// CityEntity class Class extends Entity

exposed Function getPopulation()
    $0:=This.zips.sum("population")
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Resultados

```
{
    "result": 48814
}
```


### Usar uma função de classe de uma seleção de entidade

The EntitySelection class `CitySelection` provides an API:

```
// CitySelection class Class extends EntitySelection

exposed Function getPopulation()
    $0:=This.zips.sum("population")
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Resultados

```
{
    "result": 87256
}
```

### Using an entitySelection class function and an entitySet

The `StudentsSelection` class has a `getAgeAverage` function:

```  
// StudentsSelection Class Class extends EntitySelection

exposed Function getAgeAverage
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

#### Resultados

```
{
    "result": 34
}
```

### Using an entitySelection class function and an orderBy

The `StudentsSelection` class has a `getLastSummary` function:

```  
// StudentsSelection Class Class extends EntitySelection

exposed Function getLastSummary
 C_TEXT($0)
 C_OBJECT($last)

 $last:=This.last()
 $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

Pode então executar este pedido:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`


#### Resultados

```
{
    "result": "Wilbert - Bull is ... 21" 
}
```


### Utilizar uma entidade a ser criada no servidor


The Dataclass class `Students` has the function `pushData()` receiving an entity containing data from the client. O método `checkData()` executa alguns controlos. If they are OK, the entity is saved and returned.

```
// Students Class Class extends DataClass

exposed Function pushData
 var $1, $entity, $status, $0 : Object

 $entity:=$1

 $status:=checkData($entity) // $status is an object with a success boolean property

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

Corpo do pedido:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown" 
}]
```

Since no `__KEY` is given, a new Students entity is loaded on the server **with the attributes received from the client**. Because the `pushData()` function runs a `save()` action, the new entity is created.


#### Resultados

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

### Utilizar uma entidade a atualizar no servidor

O mesmo que acima, mas com um atributo __KEY

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Corpo do pedido:
```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
```

Since `__KEY` is given, the Students entity with primary key 55 is loaded **with the lastname value received from the client**. Because the function runs a `save()` action, the entity is updated.

#### Resultados

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

### Criação de uma entidade com uma entidade relacionada

In this example, we create a new Students entity with the Schools entity having primary key 2.

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Corpo do pedido:
```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"John",
"lastname":"Smith",
"school":{"__KEY":2}
}]
```

#### Resultados

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


### Atualização de uma entidade com uma entidade relacionada

In this example, we associate an existing school to a Students entity. A classe `StudentEntity` tem um API:

```
// StudentsEntity class Class extends Entity

exposed Function putToSchool()
 var $1, $school , $0, $status : Object

  //$1 is a Schools entity
 $school:=$1
  //Associate the related entity school to the current Students entity
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

#### Resultados

```
{
    "result": {
        "success": true
    }
}
```


### Receber uma seleção de entidade como parâmetro

In the `Students` Dataclass class, the `setFinalExam()` function updates a received entity selection ($1). It actually updates the *finalExam* attribute with the received value ($2). It returns the primary keys of the updated entities.

```
// Students class Class extends DataClass

exposed Function setFinalExam()

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

Em seguida, pode executar este pedido:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Corpo do pedido:

```
[
{
"__ENTITIES":true,
"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" 
},
"Passed" 
]

```

#### Resultados

The entities with primary keys 1 and 2 have been updated.

```
{
    "result": [
        1,
        2
    ]
}
```

### Utilizar uma seleção de entidade actualizada no cliente

Using the `getAgeAverage()` function [defined above](#using-an-entityselection-class-function-and-an-entityset).

```4d
var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent is a student entity to procees
$newStudent:=...
$students:=$remoteDS. Students.query("school.name = :1";"Math school")
// We add an entity to the $students entity selection on the client
$students.add($newStudent) 

// We call a function on the StudentsSelection class returning the age average of the students in the entity selection
// The function is executed on the server on the updated $students entity selection which included the student added from the client
$ageAverage:=$students.getAgeAverage()
```