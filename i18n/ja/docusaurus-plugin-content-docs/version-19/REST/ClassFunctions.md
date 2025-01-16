---
id: classFunctions
title: ORDAクラス関数の呼び出し
---


RESTリクエストを使って、ORDAデータモデルに定義されている [データモデルクラス関数](ORDA/ordaClasses.md) を呼び出すことで、ターゲット 4Dアプリケーションの公開API を活用できます。

関数を呼び出すには () を省き、適切な ORDA のコンテキストにおいて POST リクエストでおこないます。 たとえば、City DataClassクラスに `getCity()` 関数を定義した場合、次のリクエストで呼び出すことができます:

`/rest/City/getCity`

POST リクエストのボディに関数に渡す引数を含めます: `["Aguada"]`

この呼び出しは、4Dランゲージでは次のステートメントに相当します:

```4d
$city:=ds.City.getCity("Aguada")
```

> RESTリクエストで直接呼び出せるのは `exposed` キーワードが付いた関数のみです。 [公開vs非公開関数](ORDA/ordaClasses.md#公開vs非公開関数) の章を参照ください。

## 関数の呼び出し

関数は必ず REST の **POST** リクエストで呼び出さなくてはなりません (GETリクエストの場合はエラーが返されます)。

サーバーのデータストアーの対応するオブジェクトを対象に、関数は呼び出されます。

| クラス関数                                                            | シンタックス                                                                          |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [DataStore クラス](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                         |
| [DataClass クラス](ORDA/ordaClasses.md#dataclass-class)             | `/rest/\{dataClass\}/DataClassClassFunction`                                  |
| [EntitySelection クラス](ORDA/ordaClasses.md#entityselection-class) | `/rest/\{dataClass\}/EntitySelectionClassFunction`                            |
|                                                                  | `/rest/\{dataClass\}/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                  | `/rest/\{dataClass\}/EntitySelectionClassFunction/$filter`                    |
|                                                                  | `/rest/\{dataClass\}/EntitySelectionClassFunction/$orderby`                   |
| [Entity クラス](ORDA/ordaClasses.md#entity-class)                   | `/rest/\{dataClass\}(key)/EntityClassFunction/`                               |

> `/rest/\{dataClass\}/Function` は DataClassクラスまたは EntitySelectionクラスの関数を呼び出すのに使えます (`/rest/\{dataClass\}` はデータクラスの全エンティティをエンティティセレクションに返します)。 EntitySelection クラスの関数が先に探されます。 見つからない場合に、DataClassクラスを探します。 つまり、同じ名称の関数が DataClassクラスと EntitySelectionクラスの両方に定義されている場合、DataClassクラスの関数が実行されることはありません。

> プロジェクトがコンパイル済みモードで実行される場合、RESTサーバーは常にプリエンプティブプロセスを使用するため、RESTリクエストから呼び出されるすべての 4Dコードは **スレッドセーフでなければなりません** ([*プリエンプティブプロセスを使用* の設定値](../WebServer/preemptiveWeb.md#webサーバーにおいてプリエンプティブモードを有効化する) は、RESTサーバーによって無視されます)。

## 引数

ORDAユーザークラスに定義された関数には、引数を渡すことができます。 サーバーサイドでこれらの引数は、クラス関数の $1, $2 などのパラメーターに受け渡されます。

次のルールが適用されます:

- 引数はすべて、**POSTリクエストのボディ** に渡す必要があります:
- 引数はコレクション (JSON形式) の中に格納する必要があります。
- JSON コレクションがサポートしているスカラーなデータ型はすべて引数として渡せます。
- エンティティやエンティティセレクションも引数として受け渡せます。 この際、対応する ORDAオブジェクトにデータを割り当てるために RESTサーバーが使用する専用の属性 (__DATACLASS, __ENTITY, __ENTITIES, __DATASET) を JSONオブジェクトに含めなくてはなりません。

[エンティティを引数として受け取る例題](#エンティティを引数として受け取る) と [エンティティセレクションを引数として受け取る例題](#エンティティセレクションを引数として受け取る) を参照ください。

### スカラー値の引数

引数は、ボディに定義されたコレクションに格納します。 たとえば、DataClass クラス関数 `getCities()` がテキスト引数を受け取る場合: `/rest/City/getCities`

**ボディの引数:** ["Aguada","Paris"]

引数としてサポートされるのは、JSONポインターを含むすべての JSON のデータ型です。 日付は ISO 8601形式の文字列として渡せます (例: "2020-08-22T22:00:000Z")。

### エンティティ引数

引数として渡されたエンティティは、キー (__KEY プロパティ) によってサーバー上で参照されます。 リクエストにおいてキーが省略されていれば、サーバーのメモリに新規エンティティが読み込まれます。 エンティティが持つ属性について、値を受け渡すことも可能です。 サーバー上でこれらの値は自動的に当該エンティティ用に使用されます。

> サーバー上の既存エンティティについて変更された属性値をリクエストが送信した場合、呼び出した ORDAデータモデル関数は自動的に変更後の値で実行されます。 この機能によって、たとえばエンティティに対する処理の、すべてのビジネスルールを適用した後の結果をクライアントアプリケーションから確認することが可能です。 その結果をもとにエンティティをサーバー上で保存するかどうかを判断できます。

| プロパティ       | 型                 | 説明                                   |
| ----------- | ----------------- | ------------------------------------ |
| エンティティの属性   | mixed             | 任意 - 変更する値                           |
| __DATACLASS | Text              | 必須 - エンティティのデータクラスを指定します             |
| __ENTITY    | Boolean           | 必須 - true は引数がエンティティであることをサーバーに通知します |
| __KEY       | 混合 (プライマリーキーと同じ型) | 任意 - エンティティのプライマリーキー                 |

- __KEY が省略された場合、指定した属性を持つ新規エンティティがサーバー上で作成されます。
- __KEY が提供された場合、__KEY が合致するエンティティが指定した属性とともにサーバー上に読み込まれます。

エンティティを [作成](#エンティティを作成する) または [更新](#エンティティを更新する) する例題を参照ください。

#### リレートエンティティ引数

[エンティティ引数](#エンティティ引数) と同じプロパティを持ちます。 異なる点は、リレートエンティティは存在していなければならないため、プライマリーキーを格納する __KEY を省略できません。

リレートエンティティを持つエンティティを [作成](#リレートエンティティを持つエンティティを作成する) または [更新](#リレートエンティティを持つエンティティを更新する) する例題を参照ください。

### エンティティセレクション引数

引数として渡すエンティティセレクションはあらかじめ [$method=entityset]($method.md#methodentityset) によって定義されている必要があります。

> 変更されたエンティティセレクションをリクエストがサーバーに送信した場合、呼び出した ORDAデータモデル関数は自動的に変更後のエンティティセレクションで実行されます。

| プロパティ      | 型       | 説明                                         |
| ---------- | ------- | ------------------------------------------ |
| エンティティの属性  | mixed   | 任意 - 変更する値                                 |
| __DATASET  | Text    | 必須 - エンティティセレクションのエンティティセットID (UUID)       |
| __ENTITIES | Boolean | 必須 - true は引数がエンティティセレクションであることをサーバーに通知します |

[エンティティセレクションを引数として受け取る例題](#エンティティセレクションを引数として受け取る) を参照ください。

## リクエストの例題

このデータベースは、localhost (ポート8111) 上でリモートデータストアーとして公開されています。

![alt-text](../assets/en/REST/ordastructure.png)

### データストアークラス関数を使用する

US_Cities `DataStore`クラスは API を提供しています:

```  
// cs.DataStore クラス

Class extends DataStoreImplementation

exposed Function getName()
    $0:="US cities and zip codes manager" 
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

`City` の DataClassクラスは、引数として受け取った名前をもとに City エンティティを返す API を提供しています:

```
// cs.City クラス

Class extends DataClass

exposed Function getCity()
 var $0 : cs.CityEntity
 var $1,$nameParam : text
 $nameParam:=$1
 $0:=This.query("name = :1";$nameParam).first()
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

`CityEntity` の Entityクラスは API を提供しています:

```
// cs.CityEntity クラス

Class extends Entity

exposed Function getPopulation()
    $0:=This.zips.sum("population")
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

`CitySelection` の EntitySelectionクラスは API を提供しています:

```
// cs.CitySelection クラス

Class extends EntitySelection

exposed Function getPopulation()
    $0:=This.zips.sum("population")
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

`StudentsSelection` クラスは `getAgeAverage` 関数を持ちます:

```  
// cs.StudentsSelection クラス

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

あらかじめ作成した既存のエンティティセットを使い、次のリクエストを実行します:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### 戻り値

```
{
    "result": 34
}
```

### EntitySelectionクラス関数と orderBy を使用する

`StudentsSelection` クラスは `getLastSummary` 関数を持ちます:

```  
// cs.StudentsSelection クラス


Class extends EntitySelection

exposed Function getLastSummary
 C_TEXT($0)
 C_OBJECT($last)

 $last:=This.last()
 $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

次のリクエストを実行します:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`

#### 戻り値

```
{
    "result": "Wilbert - Bull is ... 21" 
}
```

### サーバー上に作成されるエンティティを使用する

`Students` DataClassクラスは、データを含むエンティティをクライアントから受け取る `pushData()` 関数を持ちます。 `checkData()` メソッドはいくつかの検証を実行します。 問題がなければ、エンティティは保存されて返されます。

```
// cs.Students クラス

Class extends DataClass

exposed Function pushData
 var $1, $entity, $status, $0 : Object

 $entity:=$1

 $status:=checkData($entity) // $status は success ブールプロパティを持つオブジェクトです

 $0:=$status

 If ($status.success)
     $status:=$entity.save()
     If ($status.success)
         $0:=$entity
     End if 
 End if

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

`__KEY` が提供されていないため、サーバー上では **クライアントから受け取った属性を持つ** 新規の Studentsエンティティが読み込まれます。 `pushData()` 関数が `save()` を実行するため、この新規エンティティは保存されます。

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

`__KEY` が提供されているため、**クライアントから受け取った lastname属性値を持つ** プライマリーキーが 55 の Studentsエンティティが読み込まれます。 pushData() 関数が `save()` を実行するため、このエンティティは更新されます。

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

既存の Schools エンティティを既存の Studentsエンティティに紐付けます。 `StudentsEntity` クラスは次の API を提供しています:

```
// cs.StudentsEntity クラス

Class extends Entity

exposed Function putToSchool()
 var $1, $school , $0, $status : Object

  // $1 は Schools エンティティ
 $school:=$1
  // Schools リレートエンティティをカレントの Students エンティティに紐付けます
 This.school:=$school // このとき、school は N対1リレーション名です

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

`Students` DataClassクラスは、受け取ったエンティティセレクション ($1) を更新する `setFinalExam()` 関数を持ちます。 実際には、エンティティセレクション内の各エンティティの *finalExam* 属性値を、2つ目に渡した引数 ($2) に更新します。 最後に、更新されたエンティティのプライマリーキーを返します。

```
// cs.Students クラス

Class extends DataClass

exposed Function setFinalExam()

    var $1, $es, $student, $status : Object
    var $2, $examResult : Text

    var $keys, $0 : Collection

      // エンティティセレクション
    $es:=$1

    $examResult:=$2

    $keys:=New collection()

      // エンティティセレクションをループします
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

[前述](#EntitySelectionクラス関数とエンティティセットを使用する) の `getAgeAverage()` 関数を使います。

```4d
var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent は処理する Studentsエンティティです
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1";"Math school")
// クライアント側で $students エンティティセレクションにエンティティを追加します
$students.add($newStudent) 

// StudentsSelectionクラスに対して、同セレクション内の生徒エンティティの平均年齢を返す関数を呼び出します
// この関数は、クライアント側の追加エンティティを含む更新された内容の $students エンティティセレクションに対して、サーバー上で実行されます
$ageAverage:=$students.getAgeAverage()
```
