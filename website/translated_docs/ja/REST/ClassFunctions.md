---
id: classFunctions
title: ORDAクラス関数の呼び出し
---


RESTリクエストを使って、ORDAデータモデルに定義されている [データモデルクラス関数](ORDA/ordaClasses.md) を呼び出すことで、ターゲット 4Dアプリケーションの公開API を活用できます。

関数を呼び出すには () を省き、適切な ORDA のコンテキストにおいて POST リクエストでおこないます。 たとえば、City DataClassクラスに `getCity()` 関数を定義した場合、次のリクエストで呼び出すことができます:

`/rest/City/getCity`

POST リクエストの本文に関数に渡す引数を含めます: `["Aguada"]`

この呼び出しは、4Dランゲージでは次のステートメントに相当します:

```4d
$city:=ds.City.getCity("Aguada")
```

> RESTリクエストで直接呼び出せるのは `exposed` キーワードが付いた関数のみです。 [公開vs非公開関数](ORDA/ordaClasses.md#公開vs非公開関数) の章を参照ください。

## 関数の呼び出し

関数は必ず REST の **POST** リクエストで呼び出さなくてはなりません (GETリクエストの場合はエラーが返されます)。

サーバーのデータストアーの対応するオブジェクトを対象に、関数は呼び出されます。

| クラス関数                                                            | シンタックス                                                                      |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [DataStore クラス](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/datastoreClassFunction`                                     |
| [DataClass クラス](ORDA/ordaClasses.md#dataclass-class)             | `/rest/{dataClass}/dataClassClassFunction`                                  |
| [EntitySelection クラス](ORDA/ordaClasses.md#entityselection-class) | `/rest/{dataClass}/EntitySelectionClassFunction`                            |
|                                                                  | `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                  | `/rest/{dataClass}/EntitySelectionClassFunction/$filter`                    |
|                                                                  | `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`                   |
| [Entity クラス](ORDA/ordaClasses.md#entity-class)                   | `/rest/{dataClass}(key)/EntityClassFunction/`                               |



> `/rest/{dataClass}/Function` は DataClassクラスまたは EntitySelectionクラスの関数を呼び出すのに使えます (`/rest/{dataClass}` はデータクラスの全エンティティをエンティティセレクションに返します)。   
> EntitySelection クラスの関数が先に探されます。 見つからない場合に、DataClassクラスを探します。 つまり、同じ名称の関数が DataClassクラスと EntitySelectionクラスの両方に定義されている場合、DataClassクラスの関数が実行されることはありません。


## 引数



ORDAユーザークラスに定義された関数には、引数を渡すことができます。 サーバーサイドでこれらの引数は、クラス関数の $1, $2 などのパラメーターに受け渡されます。

次のルールが適用されます:

- 引数はすべて、**POSTリクエストの本文** に渡す必要があります:
- 引数はコレクション (JSON形式) の中に格納する必要があります。
- JSON コレクションがサポートしているスカラーなデータ型はすべて引数として渡せます。
- エンティティやエンティティセレクションも引数として受け渡せます。 この際、対応する ORDAオブジェクトにデータを割り当てるために RESTサーバーが使用する専用の属性 (__DATACLASS, __ENTITY, __ENTITIES, __DATASET) を JSONオブジェクトに含めなくてはなりません。

[エンティティを引数として受け取る例題](#エンティティを引数として受け取る) と [エンティティセレクションを引数として受け取る例題](#エンティティセレクションを引数として受け取る) を参照ください。


### スカラー値の引数

引数は、本文に定義されたコレクションに格納します。 たとえば、DataClass クラス関数 `getCities()` はがテキスト引数を受け取る場合: `/rest/City/getCities`

**本文の引数:** ["Aguada","Paris"]

引数としてサポートされるのは、JSONポインターを含むすべての JSON のデータ型です。 日付は ISO 8601形式の文字列として渡せます (例: "2020-08-22T22:00:000Z")。


### エンティティ引数

Entities passed in parameters are referenced on the server through their key (*i.e.* __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory  the server. You can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server.

> If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.


| プロパティ                    | タイプ                                  | 説明                                                                         |
| ------------------------ | ------------------------------------ | -------------------------------------------------------------------------- |
| Attributes of the entity | mixed                                | Optional - Values to modify                                                |
| __DATACLASS              | 文字列                                  | Mandatory - Indicates the Dataclass of the entity                          |
| __ENTITY                 | ブール                                  | Mandatory - True to indicate to the server that the parameter is an entity |
| __KEY                    | mixed (same type as the primary key) | Optional - Primary key of the entity                                       |

- If __KEY is not provided, a new entity is created on the server with the given attributes.
- If __KEY is provided, the entity corresponding to __KEY is loaded on the server with the given attributes

See examples for [creating](#creating-an-entity) or [updating](#updating-an-entity) entities.

#### Related entity parameter

Same properties as for an [entity parameter](#entity-parameter). In addition, the related entity must exist and is referenced by __KEY containing its primary key.

See examples for [creating](#creating-an-entity-with-a-related-entity) or [updating](#updating-an-entity-with-a-related-entity) entities with related entities.


### Entity selection parameter

The entity selection must have been defined beforehand using [$method=entityset]($method.md#methodentityset).

> If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.


| プロパティ                    | タイプ   | 説明                                                                                   |
| ------------------------ | ----- | ------------------------------------------------------------------------------------ |
| Attributes of the entity | mixed | Optional - Values to modify                                                          |
| __DATASET                | 文字列   | Mandatory - entitySetID (UUID) of the entity selection                               |
| __ENTITIES               | ブール   | Mandatory - True to indicate to the server that the parameter is an entity selection |

See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter).


## Request examples

This database is exposed as a remote datastore on localhost (port 8111):

![alt-text](assets/en/REST/ordastructure.png)

### Using a datastore class function

The US_Cities `DataStore` class provides an API:

```  
// DataStore class

Class extends DataStoreImplementation

exposed Function getName()
    $0:="US cities and zip codes manager" 
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### 戻り値

```
{
"result": "US cities and zip codes manager" 
}
```

### Using a dataclass class function

The Dataclass class `City` provides an API that returns a city entity from a name passed in parameter:

```
// City class

Class extends DataClass

exposed Function getCity()
    var $0 : cs.CityEntity
    var $1,$nameParam : text
    $nameParam:=$1
    $0:=This.query("name = :1";$nameParam).first()
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/City/getCity`

Body of the request: ["Aguada"]

#### 戻り値

The result is an entity:
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

### Using an entity class function

The Entity class `CityEntity` provides an API:

```
// CityEntity class

Class extends Entity

exposed Function getPopulation()
    $0:=This.zips.sum("population")
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### 戻り値

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

exposed Function getPopulation()
    $0:=This.zips.sum("population")
```

You can then run this request:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### 戻り値

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

#### 戻り値

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

exposed Function getLastSummary
    C_TEXT($0)
    C_OBJECT($last)

    $last:=This.last()
    $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

You can then run this request:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`


#### 戻り値

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


#### 戻り値

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

#### 戻り値

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

#### 戻り値

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
// StudentsEntity class

Class extends Entity

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

#### 戻り値

```
{
    "result": {
        "success": true
    }
}
```


### エンティティセレクションを引数として受け取る

In the `Students` Dataclass class, the `setFinalExam()` function updates a received entity selection ($1). It actually updates the *finalExam* attribute with the received value ($2). It returns the primary keys of the updated entities.

```
// Students class

Class extends DataClass

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

#### 戻り値

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