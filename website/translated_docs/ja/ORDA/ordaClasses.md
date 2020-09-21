---
id: ordaClasses
title: データモデルクラス
---


## 概要

ORDA を使用して、データモデル上に高レベルクラス関数を作成することができます。 これによってビジネス指向のコードを書き、APIのように "公開" することができます。 データストア、データクラス、エンティティ、およびエンティティセレクションはそれぞれ、関数を持つことのできるクラスオブジェクトとして提供されています。

たとえば、選択中の社員より給与の高い社員一覧を返す `getNextWithHigherSalary()` 関数を `EmployeeEntity` クラスに作成したとします。 It would be as simple as calling:

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Developers can not only use these functions in local datastores, but also in client/server and remote architectures (see the full example [below](#example-with-remote-datastore)):

```4d
 //$cityManager はリモートデータストアへの参照です
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Thanks to this feature, the entire business logic of your 4D application can be stored as a independent layer so that it can be easily maintained and reused with a high level of security:

- You can "hide" the overall complexity of the underlying physical structure and only expose understandable and ready-to-use functions.

- If the physical structure evolves, you can simply adapt function code and client applications will continue to call them transparently.

- By default, all of your data model class functions are **not exposed** to remote applications and cannot be called from REST requests. You must explicitly declare each public function with the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

![](assets/en/ORDA/api.png)


In addition, 4D [automatically pre-creates](#creating-classes) the classes for each available data model object.


## アーキテクチャー

ORDA では、**`4D`** [クラスストア](Concepts/classes.md#クラスストア) を介して公開される **汎用クラス** と、**`cs`** [クラスストア](Concepts/classes.md#クラスストア) で公開される **ユーザークラス** が提供されています:

![](assets/en/ORDA/ClassDiagramImage.png)

ORDA データモデルクラスはすべて **`cs`** クラスストアのプロパティとして公開されます。 次の ORDA クラスが提供されています:

| クラス                         | 例                    | 次によってインスタンス化されます                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs.DataStore                | cs.DataStore         | `ds` コマンド                                                                                                                                                                                                                                                                                                                                                                         |
| cs.*DataClassName*          | cs.Employee          | `dataStore.DataClassName`, `dataStore[DataClassName]`                                                                                                                                                                                                                                                                                                                             |
| cs.*DataClassName*Entity    | cs.EmployeeEntity    | `dataClass.get()`, `dataClass.new()`, `entitySelection.first()`, `entitySelection.last()`, `entity.previous()`, `entity.next()`, `entity.first()`, `entity.last()`, `entity.clone()`                                                                                                                                                                                              |
| cs.*DataClassName*Selection | cs.EmployeeSelection | `dataClass.query()`, `entitySelection.query()`, `dataClass.all()`, `dataClass.fromCollection()`, `dataClass.newSelection()`, `entitySelection.drop()`, `entity.getSelection()`, `entitySelection.and()`, `entitySelection.minus()`, `entitySelection.or()`, `entitySelection.orderBy()`, `entitySelection.orderByFormula()`, `entitySelection.slice()`, `Create entity selection` |

> ORDA ユーザークラスは通常のクラスファイル (.4dm) としてプロジェクトの Classes サブフォルダーに保存されます [(後述参照)](#クラスファイル)。

Also, object instances from ORDA data model user classes benefit from their parent's properties and functions. たとえば、Entity クラスのオブジェクトは [ORDA の Entity 汎用クラス](https://doc.4d.com/4Dv18R4/4D/18-R4/ORDA-Entity.201-4981870.ja.html) の関数を呼び出すことができます。



## クラスの説明

<details><summary>履歴</summary>

| バージョン  | 内容                                                                                                 |
| ------ | -------------------------------------------------------------------------------------------------- |
| v18 R5 | Data model class functions are not exposed to REST by default. New `exposed` and `local` keywords. |
</details>


### DataStore クラス


4D のデータベースは、自身の DataStore クラスを `cs` クラスストアに公開します。

- **親クラス**: 4D.DataStoreImplementation
- **クラス名**: cs.DataStore

DataStore クラス内には、`ds` オブジェクトを介して使用する関数を作成することができます。

#### 例題

```4d  
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="社員と会社を公開するデータベース"
```


この関数は次のように使えます:

```4d
$desc:=ds.getDesc() //"社員と会社を..."
```



### DataClass クラス

ORDA で公開されるテーブル毎に、DataClass クラスが `cs` クラスストアに公開されます。

- **親クラス**: 4D.DataClass
- **クラス名**: cs.*DataClassName* (*DataClassName* はテーブル名です)
- **例**: cs.Employee



#### 例題

```4D
// cs.Company class


Class extends DataClass

// Returns companies whose revenue is over the average
// Returns an entity selection related to the Company DataClass

Function GetBestOnes()
    $sel:=This.query("revenues >= :1";This.all().average("revenues"));
    $0:=$sel
```

Then you can get an entity selection of the "best" companies by executing:

```4d
    var $best : cs.CompanySelection
    $best:=ds.Company.GetBestOnes()
```


#### リモートデータストアの例

次の *City* カタログをリモートデータストアとして公開しています:

![](assets/en/ORDA/Orda_example.png)

`City クラス` は API を提供しています:

```4d  
// cs.City クラス

Class extends DataClass

Function getCityName()
    var $1; $zipcode : Integer
    var $zip : 4D.Entity
    var $0 : Text

    $zipcode:=$1
    $zip:=ds.ZipCode.get($zipcode)
    $0:="" 

    If ($zip#Null)
        $0:=$zip.city.name
    End if
```

クライアントはまず、リモートデータストアのセッションを開始します:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

クライアントアプリケーションは API を使い、たとえばフォームに入力された郵便番号 (zipcode) に合致する都市を取得することができます:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```


### EntitySelection クラス

ORDA で公開されるテーブル毎に、EntitySelection クラスが `cs` クラスストアに公開されます。

- **親クラス**: 4D.EntitySelection
- **クラス名**: *DataClassName*Selection (*DataClassName* はテーブル名です)
- **例**: cs.EmployeeSelection


#### 例題

```4d
// cs.EmployeeSelection class


Class extends EntitySelection

//Extract the employees with a salary greater than the average from this entity selection 

Function withSalaryGreaterThanAverage
    C_OBJECT($0)
    $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

Then you can get employees with a salary greater than the average in any entity selection by executing:

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

### Entity クラス

ORDA で公開されるテーブル毎に、Entity クラスが `cs` クラスストアに公開されます。

- **親クラス**: 4D.Entity
- **クラス名**: *DataClassName*Entity (*DataClassName* はテーブル名です)
- **例**: cs.CityEntity

#### 例題

```4d
// cs.CityEntity class

Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")


Function isBigCity
C_BOOLEAN($0)
// The getPopulation() function is usable inside the class
$0:=This.getPopulation()>50000
```

Then you can call this code:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
    ALERT($city.name + " は大きな町です。")
End if
```

### Specific rules

When creating or editing data model classes, you must pay attention to the following rules:

- Since they are used to define automatic DataClass class names in the **cs** [class store](Concepts/classes.md#class-stores), 4D tables must be named in order to avoid any conflict in the **cs** namespace. 特に:
    - 4D テーブルと [ユーザークラス名](Concepts/classes.md#クラス名) に同じ名前を使用してはいけません。 衝突が起きた場合には、ユーザークラスのコンストラクターは使用不可となります (コンパイラーにより警告が返されます)。
    - Do not use a reserved name for a 4D table (e.g., "DataClass").

- When defining a class, make sure the [`Class extends`](Concepts/classes.md#class-extends-classnameclass) statement exactly matches the parent class name (remember that they're case sensitive). たとえば、EntitySelection クラスを継承するには `Class extends EntitySelection` と書きます。

- データモデルクラスオブジェクトのインスタンス化に `new()` キーワードは使えません (エラーが返されます)。 上述の ORDA クラステーブルに一覧化されている、通常の [インスタンス化の方法](#アーキテクチャー) を使う必要があります。

- You cannot override a native ORDA class function from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.



## Exposed vs non-exposed functions

For security reasons, all of your data model class functions are **not exposed** (i.e., private) by default to remote requests.

Remote requests include:

- Requests sent by remote 4D applications connected through `Open datastore`
- REST requests

> Regular 4D client/server requests are not impacted. Data model class functions are always available in this architecture.

A function that is not exposed is not available on remote applications and cannot be called on any object instance from a REST request. If a remote application tries to access a non-exposed function, the "-10729 - Unknown member method" error is returned.

To allow a data model class function to be called by a remote request, you must explicitly declare it using the `exposed` keyword. The formal syntax is:

```4d  
// declare an exposed function
exposed Function <functionName>   
```

> The `exposed` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, it is ignored and an error is returned by the compiler.

### 例題

You want an exposed function to use a private function in a dataclass class:

```4d
Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function
Function computeIDNumber()-> $id : Integer
//compute a new ID number
$id:=...

```

When the code is called:

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Error "Unknown member method" 
```


## Local functions

By default in client/server architecture, ORDA data model functions are executed **on the server**. It usually provides the best performance since only the function request and the result are sent over the network.

However, it could happen that a function is fully executable on the client side (e.g., when it processes data that's already in the local cache). In this case, you can save requests to the server and thus, enhance the application performance by inserting the `local` keyword. The formal syntax is:

```4d  
// declare a function to execute locally in client/server
local Function <functionName>   
```

With this keyword, the function will always be executed on the client side.

> The `local` keyword can only be used with data model class functions. If used with a [regular user class](Concepts/classes.md) function, it is ignored and an error is returned by the compiler.

Note that the function will work even if it eventually requires to access the server (for example if the ORDA cache is expired). However, it is highly recommended to make sure that the local function does not access data on the server, otherwise the local execution could not bring any performance benefit. A local function that generates many requests to the server is less efficient than a function executed on the server that would only return the resulting values. For example, consider the following function on the Students dataclass class:

```4d
// Get the youngest students  
// Unappropriate use of local keyword
local Function getYoungest
    var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```
- **without** the `local` keyword, the result is given using a single request
- **with** the `local` keyword, 4 requests are necessary: one to get the Schools entity students, one for the `query()`, one for the `orderBy()`, and one for the `slice()`. In this example, using the `local` keyword is unappropriate.


### 例題

#### Calculating age

Given an entity with a *birthDate* attribute, we want to define an `age()` function that would be called in a list box. This function can be executed on the client, which avoids triggering a request to the server for each line of the list box.

On the *StudentsEntity* class:

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null
End if
```

#### Checking attributes

We want to check the consistency of the attributes of an entity loaded on the client and updated by the user before requesting the server to save them.

On the *StudentsEntity* class, the local `checkData()` function checks the Student's age:

```4d
Class extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="The birthdate is missing" 

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="The student must be between 15 and 30 - This one is "+String(This.age())
End case
```

Calling code:

```4d
var $status : Object

//Form.student is loaded with all its attributes and updated on a Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // call the server
End if
```


#### Unappropriate use of local keyword

This example illustrates the fact that



## データモデルクラスの管理


### クラスファイル

ORDA データモデルユーザークラスは、クラスと同じ名称の .4dm ファイルを [通常のクラスファイルと同じ場所](Concepts/classes.md#クラスファイル) (つまり、Project フォルダー内の `/Sources/Classes` フォルダー) に追加することで定義されます。 たとえば、`Utilities` データクラスのエンティティクラスは、`UtilitiesEntity.4dm` ファイルによって定義されます。


### クラスの作成

各データモデルオブジェクトに関わるクラスは、4D によってあらかじめ自動的にメモリ内に作成されます。

![](assets/en/ORDA/ORDA_Classes-3.png)

> 空の ORDA クラスは、デフォルトではエクスプローラーに表示されません。 To show them you need to select **Show all data classes** from the Explorer's options menu: ![](assets/en/ORDA/showClass.png)

ORDA ユーザークラスは通常のクラスとは異なるアイコンで表されます。 空のクラスは薄く表示されます:

![](assets/en/ORDA/classORDA2.png)

ORDA クラスファイルを作成するには、エクスプローラーで任意のクラスをダブルクリックします。 4D はクラスファイルを作成し、`extends` ステートメントを自動で追加します。 たとえば、Entity クラスを継承するクラスの場合は:

```
Class extends Entity
```

定義されたクラスはエクスプローラー内で濃く表示されます。


### クラスの編集

To open a defined ORDA class in the 4D method editor, select or double-click on an ORDA class name and use **Edit...** from the contextual menu/options menu of the Explorer window:

![](assets/en/ORDA/classORDA4.png)

ローカルデータストア (`ds`) に基づいた ORDA クラスの場合には、4D ストラクチャーウィンドウからも直接クラスコードにアクセスできます:

![](assets/en/ORDA/classORDA5.png)


### メソッドエディター

4D メソッドエディターにおいて、ORDA クラス型として定義された変数は、自動補完機能の対象となります。 Entity クラス変数の例です:

![](assets/en/ORDA/AutoCompletionEntity.png)

