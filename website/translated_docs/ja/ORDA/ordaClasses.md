---
id: ordaClasses
title: データモデルクラス
---


## 概要

ORDA を使用して、データモデル上に高レベルクラス関数を作成することができます。 これによってビジネス指向のコードを書き、APIのように "公開" することができます。 データストア、データクラス、エンティティ、およびエンティティセレクションはそれぞれ、関数を持つことのできるクラスオブジェクトとして提供されています。

たとえば、選択中の社員より給与の高い社員一覧を返す `getNextWithHigherSalary()` 関数を `EmployeeEntity` クラスに作成したとします。 この関数は簡単に呼び出すことができます:

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

これらの関数はローカルデータストアだけでなく、クライアント/サーバーやリモートアーキテクチャーでも使用することができます ([リモートデータストアの例](#リモートデータストアの例) を参照ください):

```4d
 //$cityManager はリモートデータストアへの参照です
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Thanks to this feature, the entire business logic of your 4D application can be stored as a independent layer so that it can be easily maintained, reused, with a high level of security:

- わかりやすく使いやすい関数のみを公開し、その裏にある構造の複雑性を "隠す" ことができます。

- 構造が発展した場合には影響を受ける関数を適応させるだけで、クライアントアプリケーションは引き続き透過的にそれらを呼び出すことができます。

- by default, all your data model class functions are set to **private** and cannot be called from remote requests. You must declare explicitly each public function using the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

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

ORDA データモデルユーザークラスのオブジェクトインスタンスは、それだの親クラスのプロパティや関数を使うことができます。 たとえば、Entity クラスのオブジェクトは [ORDA の Entity 汎用クラス](https://doc.4d.com/4Dv18R4/4D/18-R4/ORDA-Entity.201-4981870.ja.html) の関数を呼び出すことができます。



## クラスの説明

<details><summary>履歴</summary>

| バージョン  | 内容                                                                                     |
| ------ | -------------------------------------------------------------------------------------- |
| v18 R5 | Data model class functions are private by default. New `exposed` and `local` keywords. |
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
// cs.Company クラス


Class extends DataClass

// 収益が平均以上の会社を返します
// Company DataClass にリレートしているエンティティセレクションを返します 

Function GetBestOnes()
    $sel:=This.query("revenues >= :1";This.all().average("revenues"));
    $0:=$sel
```

全会社データから平均以上の会社データをエンティティセレクションに抽出するには次を実行します:

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
// cs.EmployeeSelection クラス


Class extends EntitySelection

// 給与が平均以上の社員を当該エンティティセレクションから抽出します

Function withSalaryGreaterThanAverage
    C_OBJECT($0)
    $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

任意の社員エンティティセレクションより、給与が平均以上の社員を取得するには:

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
// cs.CityEntity クラス


Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")


Function isBigCity
C_BOOLEAN($0)
// 関数 getPopulation() をクラス内で使用することができます
$0:=This.getPopulation()>50000
```

次のように関数を呼び出すことができます:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
    ALERT($city.name + " は大きな町です。")
End if
```

### Specific rules

データモデルクラスを作成・編集する際には次のルールに留意しなくてはなりません。

- 4D のテーブル名は、**cs** [クラスストア](Concepts/classes.md#クラスストア) 内において自動的に DataClass クラス名として使用されるため、**cs** 名前空間において衝突があってはなりません。 特に:
    - 4D テーブルと [ユーザークラス名](Concepts/classes.md#クラス名) に同じ名前を使用してはいけません。 衝突が起きた場合には、ユーザークラスのコンストラクターは使用不可となります (コンパイラーにより警告が返されます)。
    - 4D テーブルに予約語を使用してはいけません (例: "DataClass")。

- クラス定義の際、[`Class extends`](Concepts/classes.md#class-extends-classname) ステートメントに使用する親クラスの名前は完全に合致するものでなくてはいけません (文字の大小が区別されます)。 たとえば、EntitySelection クラスを継承するには `Class extends EntitySelection` と書きます。

- データモデルクラスオブジェクトのインスタンス化に `new()` キーワードは使えません (エラーが返されます)。 上述の ORDA クラステーブルに一覧化されている、通常の [インスタンス化の方法](#アーキテクチャー) を使う必要があります。

- You cannot override a native ORDA class function from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.



## Exposed vs non-exposed functions

By default for security reasons, all your data model class functions are **not exposed** (i.e. private).

A function that is not exposed is not available on remote applications and cannot be called on any object instance from a remote request (it can however be called from the application itself). Remote requests include:

- requests sent by client 4D applications working with remote datastores
- REST requests

If a remote application tries to access a non-exposed function, the error "-10729 - Unknown member method" is returned.

To allow a data model class function to be called by a remote request, you must declare it explicitly using the `exposed` keyword. The formal syntax is:

```4d  
// declare an exposed function
exposed Function <functionName>   
```

> The `exposed` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, an error is returned.

### 例題

You want an exposed function to use a private function in a dataclass class:

```4d
Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object)->$status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function
Function computeSerialNumber()-> $serialNumber : Integer
//compute a new serial number
$serialNumber:=...

```

When the code is called:

```4d
var $remoteDS; $student; $status : Object
var $serialNumber : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$serialNumber:=$remoteDS.Schools.computeSerialNumber() // Error "Unknown member method" 
```


## Local functions

By default in client/server architecture, ORDA data model functions are executed **on the server**. It means that calling a function generates a request to the server.

However, it happens that a function could be executed on the client side, for example when it processes data that are already in the local cache. In this case, you can save requests to the server and thus, enhance the application performance by inserting the `local` keyword. The function will then be executed on the client and will not generate requests to the server. The formal syntax is:

```4d  
// declare a function to execute locally in client/server
local Function <functionName>   
```

Obviously, you need to make sure that the function is actually eligible to a local execution. In particular, you need to make sure that:

- required data are in loaded the ORDA cache and is not expired - otherwise, requests may be triggered to the server,
- no part of the function code will send a request to the server (for example, `Current time(*)` will always call the server).

> The `local` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, an error is returned.


### 例題

#### Calculating age

Given an entity with a *birthDate* attribute, we want to define an `age()` function that would be called in a list box. This function can be executed on the client, which avoids triggering a request to the server for each line of the list box.

- On the StudentsEntity class

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

We want to check the consistency of the attributes of an entity loaded on the client and updated by the user before requesting the server for save.

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




## データモデルクラスの管理


### クラスファイル

ORDA データモデルユーザークラスは、クラスと同じ名称の .4dm ファイルを [通常のクラスファイルと同じ場所](Concepts/classes.md#クラスファイル) (つまり、Project フォルダー内の `/Sources/Classes` フォルダー) に追加することで定義されます。 たとえば、`Utilities` データクラスのエンティティクラスは、`UtilitiesEntity.4dm` ファイルによって定義されます。


### クラスの作成

各データモデルオブジェクトに関わるクラスは、4D によってあらかじめ自動的にメモリ内に作成されます。

![](assets/en/ORDA/ORDA_Classes-3.png)

> 空の ORDA クラスは、デフォルトではエクスプローラーに表示されません。 表示するにはエクスプローラーのオプションメニューより **データクラスを全て表示** を選択します: ![](assets/en/ORDA/showClass.png)

ORDA ユーザークラスは通常のクラスとは異なるアイコンで表されます。 空のクラスは薄く表示されます:

![](assets/en/ORDA/classORDA2.png)

ORDA クラスファイルを作成するには、エクスプローラーで任意のクラスをダブルクリックします。 4D はクラスファイルを作成し、`extends` ステートメントを自動で追加します。 たとえば、Entity クラスを継承するクラスの場合は:

```
Class extends Entity
```

定義されたクラスはエクスプローラー内で濃く表示されます。


### クラスの編集

定義された ORDA クラスファイルを 4D メソッドエディターで開くには、ORDA クラス名を選択してエクスプローラーのオブションメニュー、またはコンテキストメニューの **編集...** を使用するか、ORDA クラス名をダブルクリックします (通常のクラスと同様):

![](assets/en/ORDA/classORDA4.png)

ローカルデータストア (`ds`) に基づいた ORDA クラスの場合には、4D ストラクチャーウィンドウからも直接クラスコードにアクセスできます:

![](assets/en/ORDA/classORDA5.png)


### メソッドエディター

4D メソッドエディターにおいて、ORDA クラス型として定義された変数は、自動補完機能の対象となります。 Entity クラス変数の例です:

![](assets/en/ORDA/AutoCompletionEntity.png)

