---
id: classFunctions
title: ORDAクラス関数の呼び出し
---

You can call [data model class functions](ORDA/ordaClasses.md) defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.

関数を呼び出すには () を省き、適切な ORDA のコンテキストにおいて POST リクエストでおこないます。 For example, if you have defined a `getCity()` function in the City dataclass class, you could call it using the following request:

`/rest/City/getCity`

with data in the body of the POST request: `["Aguada"]`

この呼び出しは、4Dランゲージでは次のステートメントに相当します:

```4d
$city:=ds.City.getCity("Aguada")
```

> Only functions with the `exposed` keyword can be directly called from REST requests. See [Exposed vs non-exposed functions](ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) section.

## 関数の呼び出し

Functions must always be called using REST **POST** requests (a GET request will receive an error).

サーバーのデータストアーの対応するオブジェクトを対象に、関数は呼び出されます。

| クラス関数                                                              | シンタックス                                                                      |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                     |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/{dataClass}/DataClassClassFunction`                                  |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/{dataClass}/EntitySelectionClassFunction`                            |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$filter`                    |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`                   |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/{dataClass}(key)/EntityClassFunction/`                               |

> `/rest/{dataClass}/Function` can be used to call either a dataclass or an entity selection function (`/rest/{dataClass}` returns all entities of the DataClass as an entity selection).\
> EntitySelection クラスの関数が先に探されます。 見つからない場合に、DataClassクラスを探します。 つまり、同じ名称の関数が DataClassクラスと EntitySelectionクラスの両方に定義されている場合、DataClassクラスの関数が実行されることはありません。

> All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [_Use preemptive process_ setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).

## 引数

ORDAユーザークラスに定義された関数には、引数を渡すことができます。 On the server side, they will be received in the [declared parameters](../Concepts/parameters.md#declaring-parameters) of the class functions.

次のルールが適用されます:

- Parameters must be passed in the **body of the POST request**
- 引数はコレクション (JSON形式) の中に格納する必要があります。
- JSON コレクションがサポートしているスカラーなデータ型はすべて引数として渡せます。
- エンティティやエンティティセレクションも引数として受け渡せます。 この際、対応する ORDAオブジェクトにデータを割り当てるために RESTサーバーが使用する専用の属性 (__DATACLASS, __ENTITY, __ENTITIES, __DATASET) を JSONオブジェクトに含めなくてはなりません。

See [this example](#using-an-entity-to-be-created-on-the-server) and [this example](#receiving-an-entity-selection-as-parameter).

### スカラー値の引数

引数は、ボディに定義されたコレクションに格納します。 For example, with a  dataclass function `getCities()` receiving text parameters:
`/rest/City/getCities`

**Parameters in body:** ["Aguada","Paris"]

引数としてサポートされるのは、JSONポインターを含むすべての JSON のデータ型です。 日付は ISO 8601形式の文字列として渡せます (例: "2020-08-22T22:00:000Z")。

### エンティティ引数

Entities passed in parameters are referenced on the server through their key (_i.e._ __KEY property). リクエストにおいてキーが省略されていれば、サーバーのメモリに新規エンティティが読み込まれます。
エンティティが持つ属性について、値を受け渡すことも可能です。 サーバー上でこれらの値は自動的に当該エンティティ用に使用されます。

> サーバー上の既存エンティティについて変更された属性値をリクエストが送信した場合、呼び出した ORDAデータモデル関数は自動的に変更後の値で実行されます。 この機能によって、たとえばエンティティに対する処理の、すべてのビジネスルールを適用した後の結果をクライアントアプリケーションから確認することが可能です。 その結果をもとにエンティティをサーバー上で保存するかどうかを判断できます。

| プロパティ                                                 | タイプ                                  | 説明                                   |
| ----------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| エンティティの属性                                             | mixed                                | 任意 - 変更する値                           |
| __DATACLASS | String                               | 必須 - エンティティのデータクラスを指定します             |
| __ENTITY    | Boolean                              | 必須 - true は引数がエンティティであることをサーバーに通知します |
| __KEY       | 混合 (プライマリーキーと同じ型) | 任意 - エンティティのプライマリーキー                 |

- __KEY が省略された場合、指定した属性を持つ新規エンティティがサーバー上で作成されます。
- __KEY が提供された場合、__KEY が合致するエンティティが指定した属性とともにサーバー上に読み込まれます。

See examples for [creating](#creating-an-entity) or [updating](#updating-an-entity) entities.

#### リレートエンティティ引数

Same properties as for an [entity parameter](#entity-parameter). 異なる点は、リレートエンティティは存在していなければならないため、プライマリーキーを格納する __KEY を省略できません。

See examples for [creating](#creating-an-entity-with-a-related-entity) or [updating](#updating-an-entity-with-a-related-entity) entities with related entities.

### エンティティセレクション引数

The entity selection must have been defined beforehand using [$method=entityset]($method.md#methodentityset).

> 変更されたエンティティセレクションをリクエストがサーバーに送信した場合、呼び出した ORDAデータモデル関数は自動的に変更後のエンティティセレクションで実行されます。

| プロパティ                                                | タイプ     | 説明                                                      |
| ---------------------------------------------------- | ------- | ------------------------------------------------------- |
| エンティティの属性                                            | mixed   | 任意 - 変更する値                                              |
| __DATASET  | String  | 必須 - エンティティセレクションのエンティティセットID (UUID) |
| __ENTITIES | Boolean | 必須 - true は引数がエンティティセレクションであることをサーバーに通知します              |

See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter).

## リクエストの例題

このデータベースは、localhost (ポート8111) 上でリモートデータストアーとして公開されています。

![alt-text](../assets/en/REST/ordastructure.png)

### データストアークラス関数を使用する

The US_Cities `DataStore` class provides an API:

```
// DataStore クラス

Class extends DataStoreImplementation

exposed Function getName() : Text
    return "US cities and zip codes manager"
```

次のリクエストを実行します:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### 戻り値

```
{
"result": "US cities and zip codes manager"
}
```

### DataClassクラス関数を使用する

The Dataclass class `City` provides an API that returns a city entity from a name passed in parameter:

```
// City class

Class extends DataClass

exposed Function getCity($city : Text ) : cs.CityEntity
	return This.query("name = :1";$city).first()
```

次のリクエストを実行します:

**POST** `127.0.0.1:8111/rest/City/getCity`

リクエストのボディ: ["Aguada"]

#### 戻り値

結果は、次のエンティティです:

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

### Entityクラス関数を使用する

The Entity class `CityEntity` provides an API:

```
// CityEntityクラス

Class extends Entity

exposed Function getPopulation()
    return This.zips.sum("population")
```

次のリクエストを実行します:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### 戻り値

```
{
    "result": 48814
}
```

### EntitySelectionクラス関数を使用する

The EntitySelection class `CitySelection` provides an API:

```
// CitySelection クラス

Class extends EntitySelection

exposed Function getPopulation()
    return This.zips.sum("population")
```

次のリクエストを実行します:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### 戻り値

```
{
    "result": 87256
}
```

### EntitySelectionクラス関数とエンティティセットを使用する

The `StudentsSelection` class has a `getAgeAverage` function:

```
// StudentsSelection Class

Class extends EntitySelection

exposed Function getAgeAverage : Integer
	var $sum : Integer
	var $s : Object

	$sum:=0
	For each ($s;This)
	    $sum:=$sum+$s.age()
	End for each
	return $sum/This.length
```

あらかじめ作成した既存のエンティティセットを使い、次のリクエストを実行します:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### 戻り値

```
{
    "result": 34
}
```

### EntitySelectionクラス関数と orderBy を使用する

The `StudentsSelection` class has a `getLastSummary` function:

```
// StudentsSelection Class


Class extends EntitySelection

exposed Function getLastSummary : Text
	var $last : Object

	$last:=This.last()
	return =$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

次のリクエストを実行します:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`

#### 戻り値

```
{
    "result": "Wilbert - Bull is ... 21"
}
```

### エンティティを作成する

The Dataclass class `Students` has the function `pushData()` receiving an entity containing data from the client. The `checkData()` method runs some controls. 問題がなければ、エンティティは保存されて返されます。

```
// Students Class

Class extends DataClass

exposed Function pushData($entity : Object) : Object
	var $status : Object

	$status:=checkData($entity) // $status is an object with a success boolean property

	If ($status.success)
	    $status:=$entity.save()
 	   If ($status.success)
 	       return $entity
  	  End if
	End if

	return $status

```

次のリクエストを実行します:

**POST** `http://127.0.0.1:8044/rest/Students/pushData`

リクエストのボディ:

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

### エンティティを更新する

__KEY 属性を使って、上の例題と同じことをおこなうと、エンティティを更新します。

次のリクエストを実行します:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

リクエストのボディ:

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

### リレートエンティティを持つエンティティを作成する

プライマリーキー 2 を持つ Schoolsエンティティをリレートエンティティとして、新規 Studentsエンティティを作成します。

次のリクエストを実行します:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

リクエストのボディ:

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

### リレートエンティティを持つエンティティを更新する

既存の Schools エンティティを既存の Studentsエンティティに紐付けます。 The `StudentsEntity` class has an API:

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

You run this request, called on a Students entity :
**POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool`
Body of the request:

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

In the `Students` Dataclass class, the `setFinalExam()` function updates a received entity selection ($1). It actually updates the _finalExam_ attribute with the received value ($2). 最後に、更新されたエンティティのプライマリーキーを返します。

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

次のようなリクエストでエンティティセットをあらかじめ作成します:

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

次のリクエストを実行します:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

リクエストのボディ:

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

プライマリーキー 1と2 のエンティティが更新されました:

```
{
    "result": [
        1,
        2
    ]
}
```

### クライアント側で更新されたエンティティセレクションを使用する

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
