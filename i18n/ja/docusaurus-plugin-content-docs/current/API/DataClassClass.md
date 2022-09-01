---
id: DataClassClass
title: DataClass
---


[データクラス](ORDA/dsMapping.md#データクラス) はデータベーステーブルへのオブジェクトインターフェースを提供します。 4Dアプリケーション内のデータクラスはすべて、`ds` [データストア](ORDA/dsMapping.md#データストア) のプロパティとして利用可能です。

### 概要

|                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassClass.attributeName.Summary --> |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.all().Summary -->|
| [<!-- INCLUDE #DataClassClass.clearRemoteCache().Syntax -->](#clearremotecache)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.clearRemoteCache().Summary -->|
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.fromCollection().Summary --> |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.get().Summary --> |
| [<!-- INCLUDE #DataClassClass.getCount().Syntax -->](#getcount)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getCount().Summary --> |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getDataStore().Summary --> |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataClassClass.getRemoteCache().Syntax -->](#getremotecache)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getRemoteCache().Summary --> |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.new().Summary --> |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.newSelection().Summary --> |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.query().Summary --> |
| [<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Syntax -->](#setremotecachesettings)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Summary --> |

<!-- REF DataClassClass.attributeName.Desc -->
## .*attributeName*

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF DataClassClass.attributeName.Syntax -->

***.attributeName*** : DataClassAttribute<!-- END REF -->

#### 詳細

The attributes of dataclasses are <!-- REF DataClassClass.attributeName.Summary -->objects that are available directly as properties<!-- END REF --> of these classes.

戻り値は [`DataClassAttribute`](DataClassAttributeClass.md) クラスのオブジェクトです。 これらのオブジェクトが持つプロパティを読み取ることによって、データクラス属性に関する情報が取得できます。
> データクラス属性オブジェクトを編集することは可能ですが、元となるデータベースストラクチャーは変更されません。

#### 例題 1

```4d
$salary:=ds.Employee.salary // Employeeデータクラスの salary属性を返します
$compCity:=ds.Company["city"] // Companyデータクラスの city属性を返します
```

#### 例題 2

以下のストラクチャーを前提とします:

![](../assets/en/API/dataclassAttribute.png)

```4d
var $firstnameAtt;$employerAtt;$employeesAtt : Object

 $firstnameAtt:=ds.Employee.firstname
  //{name:firstname,kind:storage,fieldType:0,type:string,fieldNumber:2,indexed:true,
  //keyWordIndexed:false,autoFilled:false,mandatory:false,unique:false}

 $employerAtt:=ds.Employee.employer
  //{name:employer,kind:relatedEntity,relatedDataClass:Company,
  //fieldType:38,type:Company,inverseName:employees}
  //38=Is object

 $employeesAtt:=ds.Company.employees
  //{name:employees,kind:relatedEntities,relatedDataClass:Employee,
  //fieldType:42,type:EmployeeSelection,inverseName:employer}
  //42=Is collection
```

#### 例題 3

以下のテーブルプロパティを前提とします:

![](../assets/en/API/dataclassAttribute2.png)

```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->

<!-- REF DataClassClass.all().Desc -->
## .all()

<details><summary>履歴</summary>

| バージョン  | 内容                     |
| ------ | ---------------------- |
| v17 R5 | *settings* パラメーターをサポート |
| v17    | 追加                     |

</details>

<!-- REF #DataClassClass.all().Syntax -->

**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->
| 引数       | タイプ                |    | 詳細                                                                             |
| -------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| settings | Object             | -> | ビルドオプション: context                                                              |
| Result   | 4D.EntitySelection | <- | References on all entities related to the Dataclass|<!-- END REF -->

|

#### 詳細

The `.all()` function <!-- REF #DataClassClass.all().Summary -->queries the datastore to find all the entities related to the dataclass and returns them as an entity selection<!-- END REF -->.

エンティティはデフォルトの順番で返され、通常は作成順になっています。 ただし、エンティティ削除後に新規追加した場合には、デフォルトの順番は作成順を反映しない点に留意が必要です。

エンティティが見つからない場合、空のエンティティセレクションが返されます。

この関数には、レイジーローディングが適用されます。

**settings**

任意の *settings* パラメーターには、追加オプションを格納したオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ  | 詳細                                                                                                                                                           |
| ------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context | テキスト | エンティティセレクションに適用されている最適化コンテキストのラベル。 エンティティセレクションを扱うコードはこのコンテキストを使うことで最適化の恩恵を受けます。 この機能は [ORDA のクライアント/サーバー処理](ORDA/entities.md#クライアント/サーバーの最適化)を想定して設計されています。 |

> データクラス内の総エンティティ数を知るには、`ds.myClass.all().length` 式よりも最適化された [`getCount()`](#getcount) 関数を使用することが推奨されます。

#### 例題

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```

<!-- REF #DataClassClass.clearRemoteCache().Desc -->
## .clearRemoteCache()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R5 | 追加 |

</details>

<!-- REF #DataClassClass.clearRemoteCache().Syntax -->

**.clearRemoteCache()**<!-- END REF -->

<!-- REF #DataStoreClass.clearRemoteCache().Params -->
| 引数 | タイプ |  | 詳細                                                         |
| -- | --- |::| ---------------------------------------------------------- |
|    |     |  | Does not require any parameters|<!-- END REF -->

|

#### 詳細

The `.clearRemoteCache()` function <!-- REF #DataClassClass.clearRemoteCache().Summary -->empties the ORDA cache of a dataclass<!-- END REF -->.

> この関数は `timeout` および `maxEntries` の値をリセットしません。

#### 例題

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $cache : Object
var $info : Collection
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$cache:=$ds.Persons.getRemoteCache()

$ds.Persons.clearRemoteCache()
// Persons データクラスのキャッシュ = {timeout:30;maxEntries:30000;stamp:255;entries:[]}
```

<!-- END REF -->

<!-- REF DataClassClass.fromCollection().Desc -->
## .fromCollection()

<details><summary>履歴</summary>

| バージョン  | 内容                     |
| ------ | ---------------------- |
| v17 R5 | *settings* パラメーターをサポート |
| v17    | 追加                     |

</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->

**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.fromCollection().Params -->
| 引数        | タイプ                |    | 詳細                                                                     |
| --------- | ------------------ |:--:| ---------------------------------------------------------------------- |
| objectCol | コレクション             | -> | エンティティにマップするオブジェクトのコレクション                                              |
| settings  | Object             | -> | ビルドオプション: context                                                      |
| Result    | 4D.EntitySelection | <- | Entity selection filled from the collection|<!-- END REF -->

|

#### 詳細

The `.fromCollection()` function <!-- REF #DataClassClass.fromCollection().Summary -->updates or creates entities in the dataclass according to the *objectCol* collection of objects, and returns the corresponding entity selection<!-- END REF -->.

*objectCol* パラメーターには、データクラスの既存エンティティを更新、または新規エンティティを作成するためのオブジェクトのコレクションを渡します。 プロパティ名は、データクラスの属性名と同一である必要があります。 プロパティ名がデータクラスに存在しない場合、それは無視されます。 コレクション内で属性値が定義されていない場合、その値は null になります。

コレクションのオブジェクト要素とエンティティのマッピングは、**属性名** と **型の合致** をもって行われます。 オブジェクトプロパティがエンティティ属性と同じ名前であっても、型が合致しない場合には、エンティティの属性は空のままです。

**作成モードと更新モード**

*objectCol* 引数の各オブジェクトついて:

* オブジェクトがブール型の "\_\_NEW" プロパティを含み、それが **false** に設定されている場合(あるいは "\_\_NEW" プロパティが含まれていない場合)、オブジェクトの対応する値でエンティティが更新あるいは作成されます。 プライマリーキーに関するチェックはおこなわれません:
  * プライマリーキーが指定されていて実在する場合、エンティティは更新されます。 この場合、プライマリーキーはそのまま、あるいは "\_\_KEY" プロパティを (プライマリーキー値とともに) 使って指定することができます。
  * そのまま指定したプライマリーキーが実在しない場合、エンティティは作成されます。
  * プライマリーキーを指定していない場合、エンティティは作成され、標準のデータベースのルールに基づいてプライマリーキー値が割り当てられます。
* オブジェクトがブール型の "\_\_NEW" プロパティを含み、それが **true** に設定されている場合、オブジェクトの対応する値でエンティティが作成されます。 プライマリーキーに関するチェックがおこなわれます:
  * そのまま指定したプライマリーキーが実在する場合、エラーが返されます。
  * そのまま指定したプライマリーキーが実在しない場合、エンティティは作成されます。
  * プライマリーキーを指定していない場合、エンティティは作成され、標準のデータベースのルールに基づいてプライマリーキー値が割り当てられます。
> The nested objects featuring related entities must contain a "\_\_KEY" property (filled with the primary key value of the related entity) or the primary key attribute of the related entity itself. The use of a \_\_KEY property allows independence from the primary key attribute name.

**リレートエンティティ**

*objectCol* 引数のオブジェクトは、一つ以上のリレートエンティティに対応するオブジェクトをネストすることができます。これはエンティティ間のリンクを作成・更新するのに有用です。

リレートエンティティに相当するネストされたオブジェクトは、リレートエンティティのプライマリーキー値を格納した "\_\_KEY" プロパティあるいはプライマリーキー属性を格納している必要があります。 ”\_\_KEY” プロパティを使用すると、プライマリーキー属性名に依存する必要がありません。
> この機構によって、リレートエンティティの中身を作成・更新することはできません。

**記号**

"\_\_STAMP" プロパティが指定された場合、データストアのスタンプとのチェックがおこなわれ、エラーが返されることがあります ("与えられたスタンプはテーブルXXX のレコード# XXのカレントのものと合致しません")。 詳細については [エンティティロッキング](ORDA/entities.md#エンティティロッキング) を参照ください。

**settings**

任意の *settings* パラメーターには、追加オプションを格納したオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ  | 詳細                                                                                                                                                           |
| ------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context | テキスト | エンティティセレクションに適用されている最適化コンテキストのラベル。 エンティティセレクションを扱うコードはこのコンテキストを使うことで最適化の恩恵を受けます。 この機能は [ORDA のクライアント/サーバー処理](ORDA/entities.md#クライアント/サーバーの最適化)を想定して設計されています。 |

#### 例題 1

既存のエンティティを更新します。 \_\_NEW プロパティはなく、従業員のプライマリーキーは属性に実在の値を指定して渡します:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 // Employeeテーブルの実在する主キー
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) // リレートデータクラス Company の実在する主キー
  // リレートデータクラス Company に実在する別の主キーを指定すれば、会社を変更することができます
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### 例題 2

既存のエンティティを更新します。 \_\_NEW プロパティはなく、従業員のプライマリーキーは \_\_KEY プロパティに実在の値を指定して渡します:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.__KEY:=1720 // Employeeテーブルの実在する主キー
 $emp.firstName:="John"
 $emp.lastName:="Boorman"
 $emp.employer:=New object("ID";121) // リレートデータクラス Company の実在する主キー
  // リレートデータクラス Company に実在する別の主キーを指定すれば、会社を変更することができます
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### 例題 3

単純に、コレクションから新しいエンティティを作成します:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Victor"
 $emp.lastName:="Hugo"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### 例題 4

新規エンティティを作成します。 \_\_NEW プロパティは true で、従業員のプライマリーキーは指定しません:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Mary"
 $emp.lastName:="Smith"
 $emp.employer:=New object("__KEY";121) // リレートデータクラス Company の実在する主キー
 $emp.__NEW:=True
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)






```

#### 例題 5

新規エンティティを作成します。 \_\_NEW プロパティはなく、従業員のプライマリーキー属性を指定しますが、その値は実在しません:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10000 // 実在しない主キー
 $emp.firstName:="Françoise"
 $emp.lastName:="Sagan"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### 例題 6

2つのエンティティが同じプライマリーキーを持つ場合、最初のエンティティは作成・保存されますが、2つめのエンティティの処理は失敗します:

```4d
 var $empsCollection : Collection
 var $emp; $emp2 : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10001 // 実在しない主キー
 $emp.firstName:="Simone"
 $emp.lastName:="Martin"
 $emp.__NEW:=True
 $empsCollection.push($emp)

 $emp2:=New object
 $emp2.ID:=10001 // 上と同じ主キー
 $emp2.firstName:="Marc"
 $emp2.lastName:="Smith"
 $emp2.__NEW:=True
 $empsCollection.push($emp2)
 $employees:=ds.Employee.fromCollection($empsCollection)
  // 最初のエンティティは作成されます
  // 2つめのエンティティは重複キーエラーになります
```

#### 参照

[**.toCollection()**](EntitySelectionClass.md#tocollection)

<!-- END REF -->

<!-- REF DataClassClass.get().Desc -->
## .get()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #DataClassClass.get().Syntax -->

**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br/>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->

<!-- REF #DataClassClass.get().Params -->
| 引数         | タイプ              |    | 詳細                                                                    |
| ---------- | ---------------- |:--:| --------------------------------------------------------------------- |
| primaryKey | Integer または Text | -> | 取得するエンティティのプライマリーキー値                                                  |
| settings   | Object           | -> | ビルドオプション: context                                                     |
| Result     | 4D.Entity        | <- | Entity matching the designated primary key|<!-- END REF -->

|

#### 詳細

The `.get()` function <!-- REF #DataClassClass.get().Summary -->queries the dataclass to retrieve the entity matching the *primaryKey* parameter<!-- END REF -->.

*primaryKey* には、取得したいエンティティのプライマリーキーの値を渡します。 値の型は、データストアで設定されたプライマリーキーの型 (倍長整数あるいはテキスト) と合致している必要があります。 [`.getKey()`](EntityClass.md#getkey) 関数に `dk key as string` 引数を渡すと、プライマリーキーの値が常にテキスト型で返されるように指定することができます。

*primaryKey* 引数のプライマリーキーを持つエンティティが見つからない場合、**Null** エンティティが返されます。

この関数にはレイジーローディングが適用され、リレートデータは必要な時にのみディスクから読み込まれます。

**settings**

任意の *settings* パラメーターには、追加オプションを格納したオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ  | 詳細                                                                                                                                                        |
| ------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context | テキスト | エンティティに適用されている自動の最適化コンテキストのラベル。 エンティティを読み込む以降のコードは、このコンテキストを使うことで最適化の恩恵を受けます。 この機能は [ORDA のクライアント/サーバー処理](ORDA/entities.md#クライアント/サーバーの最適化)を想定して設計されています。 |

#### 例題 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // プライマリーキーの値が 167のエンティティを返します
 $entity2:=ds.Invoice.get("DGGX20030") // プライマリーキーの値が "DGGX20030" のエンティティを返します
```

#### 例題 2

*context* プロパティの使用について紹介します:

```4d
 var $e1; $e2; $e3; $e4 : cs.EmployeeEntity
 var $settings; $settings2 : Object

 $settings:=New object("context";"detail")
 $settings2:=New object("context";"summary")

 $e1:=ds.Employee.get(1;$settings)
 completeAllData($e1) // completeAllData メソッドにおいて最適化がトリガーされ、"detail" コンテキストが割り当てられます

 $e2:=ds.Employee.get(2;$settings)
 completeAllData($e2) // completeAllData メソッドには、"detail" コンテキストに付随する最適化が適用されます

 $e3:=ds.Employee.get(3;$settings2)
 completeSummary($e3) // completeSummary メソッドにおいて最適化がトリガーされ、"summary" コンテキストが割り当てられます

 $e4:=ds.Employee.get(4;$settings2)
 completeSummary($e4) // completeSummary メソッドには、"summary" コンテキストに付随する最適化が適用されます
```

<!-- END REF -->

<!-- REF DataClassClass.getCount.Desc -->
## .getCount()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R5 | 追加 |

</details>

<!-- REF #DataClassClass.getCount().Syntax -->

**.getCount()** : Integer <!-- END REF -->

<!-- REF #DataClassClass.getCount().Params -->
| 引数     | タイプ |    | 詳細                                                             |
| ------ | --- | -- | -------------------------------------------------------------- |
| result | 整数  | <- | Number of entities in the dataclass|<!-- END REF -->

|

#### 詳細

The `.getCount()` function <!-- REF #DataClassClass.getCount().Summary --> returns the number of entities in a dataclass<!-- END REF -->.

トランザクション内でこの関数を使用した場合、トランザクション中に作成されたエンティティは考慮されます。

#### 例題

```4d
var $ds : 4D.DataStoreImplementation
var $number : Integer

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$number:=$ds.Persons.getCount()
```

<!-- END REF -->

<!-- REF DataClassClass.getDataStore().Desc -->
## .getDataStore()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->

**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->
| 引数     | タイプ          |    | 詳細                                                    |
| ------ | ------------ |:--:| ----------------------------------------------------- |
| Result | cs.DataStore | <- | Datastore of the dataclass|<!-- END REF -->

|

#### 詳細

The `.getDataStore()` function <!-- REF #DataClassClass.getDataStore().Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

返されるデータストアは次のいずれかです:

* `ds` コマンドによって返されるメインデータストア
* `Open datastore` コマンドを使用して開かれたリモートデータストア

#### 例題

***SearchDuplicate*** プロジェクトメソッドは、任意のデータクラス内の重複した値を検索します。

```4d
 var $pet : cs.CatsEntity
 $pet:=ds.Cats.all().first() // エンティティを取得します
 SearchDuplicate($pet;"Dogs")
```

```4d
  // SearchDuplicate メソッド
  // SearchDuplicate(entity_to_search;dataclass_name)

 #DECLARE ($pet : Object ; $dataClassName : Text)
 var $dataStore; $duplicates : Object  

 $dataStore:=$pet.getDataClass().getDataStore()
 $duplicates:=$dataStore[$dataClassName].query("name=:1";$pet.name)
```

<!-- END REF -->

<!-- REF DataClassClass.getInfo().Desc -->
## .getInfo()

<details><summary>履歴</summary>

| バージョン  | 内容               |
| ------ | ---------------- |
| v19 R3 | exposed プロパティを追加 |
| v17 R5 | 追加               |

</details>

<!-- REF #DataClassClass.getInfo().Syntax -->

**.getInfo()** : Object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->
| 引数     | タイプ    |    | 詳細                                                      |
| ------ | ------ | -- | ------------------------------------------------------- |
| Result | Object | <- | Information on the dataclass|<!-- END REF -->

|

#### 詳細

The `.getInfo()` function <!-- REF #DataClassClass.getInfo().Summary -->returns an object providing information about the dataclass<!-- END REF -->. このメソッドは汎用的なコードを書くのに有用です。

**返されるオブジェクト**

| プロパティ       | タイプ  | 詳細                          |
| ----------- | ---- | --------------------------- |
| exposed     | ブール  | データクラスが REST に公開されていれば true |
| name        | テキスト | データクラスの名称                   |
| primaryKey  | テキスト | データクラスのプライマリーキー属性の名称        |
| tableNumber | 整数   | 内部的な 4Dテーブル番号               |

#### 例題 1

```4d
 #DECLARE ($entity : Object)  
 var $status : Object

 computeEmployeeNumber($entity) // エンティティに対する何らかの操作

 $status:=$entity.save()
 if($status.success)
    ALERT("テーブル "+$entity.getDataClass().getInfo().name+" のレコードが更新されました。")
 End if
```

#### 例題 2

```4d
 var $settings : Object
 var $es : cs.ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds.Clients.getInfo().primaryKey)
 $es:=ds.Clients.query(":pk in :receivedIds";$settings)
```

#### 例題 3

```4d
 var $pk : Text
 var $dataClassAttribute : Object

 $pk:=ds.Employee.getInfo().primaryKey
 $dataClassAttribute:=ds.Employee[$pk] // 必要に応じてプライマリーキー属性へのアクセスが可能です
```

#### 参照

[DataClassAttribute.exposed](DataClassAttributeClass.md#exposed)

<!-- END REF -->

<!-- REF DataClassClass.getRemoteCache().Desc -->
## .getRemoteCache()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R5 | 追加 |

</details>

<!-- REF #DataClassClass.getRemoteCache().Syntax -->

**.getRemoteCache**() : Object <!-- END REF -->

<!-- REF #DataClassClass.getRemoteCache().Params -->
| 引数     | タイプ    |    | 詳細                                                                                             |
| ------ | ------ | -- | ---------------------------------------------------------------------------------------------- |
| result | Object | <- | Object describing the contents of the ORDA cache for the dataclass.|<!-- END REF -->

|

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 詳細

The `.getRemoteCache()` function <!-- REF #DataClassClass.getRemoteCache().Summary -->returns an object that holds the contents of the ORDA cache for a dataclass.<!-- END REF -->.

4D のシングルユーザーアプリケーションからこの関数を呼び出した場合、`Null` が返されます。

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 詳細                                      |
| ---------- | ------ | --------------------------------------- |
| maxEntries | 整数     | エントリーコレクションの最大数                         |
| stamp      | 整数     | キャッシュのスタンプ                              |
| timeout    | 整数     | キャッシュの新しいエントリーが期限切れとなるまでの残り時間。          |
| entries    | コレクション | キャッシュ内の各エンティティにつき、1つのエントリーオブジェクトを格納します。 |

エントリーコレクション内の各エントリーオブジェクトは、以下のプロパティを持ちます:

| プロパティ   | タイプ    | 詳細                   |
| ------- | ------ | -------------------- |
| data    | Object | エントリーのデータを格納するオブジェクト |
| expired | ブール    | エントリーが期限切れの場合に true  |
| キー      | テキスト   | エンティティのプライマリーキー。     |

各エントリーの `data` オブジェクトは、以下のプロパティを持ちます:
| プロパティ                  | タイプ     | 詳細                                                       |
| ---------------------- | ------- | -------------------------------------------------------- |
| __KEY                  | String  | エンティティのプライマリーキー                                          |
| __STAMP                | Longint | データベース内のエンティティのタイムスタンプ                                   |
| __TIMESTAMP            | String  | データベース内のエンティティのスタンプ (形式: YYYY-MM-DDTHH:MM:SS:ms:Z)       |
| dataClassAttributeName | Variant | データクラス属性に対応するデータがキャッシュに存在する場合、それはデータベースと同じ型のプロパティに返されます。 |

リレートエンティティに関するデータは、data オブジェクトのキャッシュに保存されます。

#### 例題

次の例で、`$ds.Persons.all()` は、先頭エンティティをそのすべての属性とともにロードします。 その後リクエストの最適化がおこなわれ、`firstname` と `address.city` のみがロードされます。

`address.city` は、`Persons` データクラスのキャッシュにロードされることに注意してください。

`Address` データクラスの先頭エンティティだけがキャッシュに格納されます。 先頭エンティティは、ループの最初の繰り返しでロードされます。

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $cachePersons; $cacheAddress : Object
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()

$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$cachePersons:=$ds.Persons.getRemoteCache()
$cacheAddress:=$ds.Adress.getRemoteCache()
```

#### 参照

[.setRemoteCacheSettings()](#setremotecachesettings)<br/>[.clearRemoteCache()](#clearremotecache)

<!-- REF DataClassClass.new().Desc -->
## .new()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #DataClassClass.new().Syntax -->

**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->
| 引数     | タイプ       |    | 詳細                                                           |
| ------ | --------- | -- | ------------------------------------------------------------ |
| Result | 4D.Entity | <- | New entity matching the Dataclass|<!-- END REF -->

|

#### 詳細

The `.new()` function <!-- REF #DataClassClass.new().Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

エンティティオブジェクトはメモリ内に作成されますが、[`.save( )`](EntityClass.md#save) 関数が呼び出されるまでデータベースには保存されません。 エンティティを保存する前に削除した場合、復元することはできません。

**4D Server**: クライアント/サーバーにおいては、対応するテーブルのプライマリーキーが自動インクリメントであった場合、エンティティがサーバー側に保存されたときに計算されます。

エンティティの全属性は **null** 値で初期化されます。

> 4Dデータベースのストラクチャーレベルで **ヌル値を空値にマップ** オプションが選択されていれば、属性はデフォルト値で初期化されます。

#### 例題

以下のコードは "Log" データクラスに新しいエンティティを作成し、"info" 属性に情報を記録します:

```4d
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() // 参照を作成します
 $entity.info:="New entry" // 情報を格納します
 $entity.save() // エンティティを保存します
```

<!-- END REF -->

<!-- REF DataClassClass.newSelection().Desc -->
## .newSelection()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #DataClassClass.newSelection().Syntax -->

**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->
| 引数        | タイプ                |    | 詳細                                                                                                       |
| --------- | ------------------ | -- | -------------------------------------------------------------------------------------------------------- |
| keepOrder | 整数                 | -> | `dk keep ordered`: 順列ありのエンティティセレクションを作成します<br/>`dk non ordered` (あるいは省略時): 順列なしのエンティティセレクションを作成します |
| Result    | 4D.EntitySelection | <- | データクラスの空の新規エンティティセレクション|<!-- END REF -->

|

#### 詳細

The `.newSelection()` function <!-- REF #DataClassClass.newSelection().Summary -->creates a new, blank, non-shareable entity selection, related to the dataclass, in memory<!-- END REF -->.

> 追加可能なエンティティセレクションについての詳細は [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。

順列ありのエンティティセレクションを作成するには、*keepOrder* に `dk keep ordered` セレクターを渡します。 この引数を省略した場合のデフォルト、あるいは `dk non ordered` セレクターを渡した場合には、関数は順列なしのエンティティセレクションを返します。 順列なしのエンティティセレクションの方が速いですが、エンティティの位置に頼ることはできません。 詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

作成された時点では、エンティティセレクションにエンティティは含まれていません(`mySelection.length` は0を返します)。 あとから [`add()`](EntitySelectionClass.md#add) 関数を呼び出すことで、エンティティセレクションを徐々にビルドしていくことができます。

#### 例題

```4d
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() // 順列なしの空のエンティティセレクションを作成します
 $OSelection:=ds.Employee.newSelection(dk keep ordered) // 順列ありの空のエンティティセレクションを作成します
```

<!-- END REF -->

<!-- REF DataClassClass.query().Desc -->
## .query()

<details><summary>履歴</summary>

| バージョン  | 内容                  |
| ------ | ------------------- |
| v17 R6 | Formula パラメーターをサポート |
| v17 R5 | 値のプレースホルダーをサポート     |
| v17    | 追加                  |

</details>

<!-- REF #DataClassClass.query().Syntax -->

**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->
| 引数            | タイプ                |    | 詳細                                                                                               |
| ------------- | ------------------ | -- | ------------------------------------------------------------------------------------------------ |
| queryString   | テキスト               | -> | 検索条件 (文字列)                                                                                       |
| フォーミュラ        | Object             | -> | 検索条件 (フォーミュラオブジェクト)                                                                              |
| value         | any                | -> | プレースホルダー用の値                                                                                      |
| querySettings | Object             | -> | クエリオプション: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan             |
| Result        | 4D.EntitySelection | <- | *queryString* または *formula* に渡した検索条件に合致するエンティティから構成された新しいエンティティセレクション|<!-- END REF -->

|

#### 詳細

The `.query()` function <!-- REF #DataClassClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. この関数には、レイジーローディングが適用されます。

エンティティが見つからない場合、空のエンティティセレクションが返されます。

**queryString 引数**

*queryString* 引数には、以下のシンタックスを使用します:

```4d
attributePath|formula comparator value   
 {logicalOperator attributePath|formula comparator value}   
 {order by attributePath {desc | asc}}
```

詳細は以下の通りです:

* **attributePath**: クエリの実行対象となる属性パス。 この引数は、単純な名前 ("country" など) のほか、あらゆる有効な属性パス ("country.name" など) の形をとることができます。 属性パスが `Collection` 型である場合、すべてのオカレンスを管理するには\[ ] 記法を使用してください (例: "children\[ ].age" など)。
> *".", "\[ ]", や "=", ">", "#"..., などの特殊文字はクエリ文字列の中で正しく評価されないため、これらが含まれた属性名を直接使用することはできません。 このような属性をクエリするには、プレースホルダーの使用を検討します。これにより、属性パス内で使用できる文字の範囲が広がります (後述の* **プレースホルダーの使用** *参照)。*

* **formula**: テキストまたはオブジェクト形式で渡された有効なフォーミュラ。 フォーミュラは処理されるエンティティごとに評価され、ブール値を返さなくてはなりません。 処理中のエンティティはフォーミュラ内において `This` で参照されます。

  * **テキスト**: フォーミュラ文字列の前に `eval( )` ステートメントが必要です。これにより、クエリが式を正しく解釈します。 例: *"eval(length(This.lastname) >=30)"*
  * **オブジェクト**: [フォーミュラオブジェクト](FunctionClass.md) は **プレースホルダー** (後述参照) を使って受け渡します。 このフォーミュラは、[`Formula`](FunctionClass.md#formula) または [`Formula from string`](FunctionClass.md#formula-from-string) コマンドによって作成されたものでなくてはなりません。
> * > * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * フォーミュラ以外にも検索条件がある場合、クエリエンジンの最適化によってほかの検索条件 (たとえばインデックス属性) の処理が優先される場合があり、その場合はエンティティのサブセットのみがフォーミュラの評価対象となります。

 クエリに使用するフォーミュラは $1 に引数を受け取ることができます。 詳細については後述の **フォーミュラ引数** を参照ください。
> * フォーミュラが複雑な場合など、`queryString` パラメーターを使わずに、`formula` パラメーターにオブジェクトを直接渡すこともできます。 後述の **フォーミュラ引数** を参照ください。
> * セキュリティのため、 `query()` 関数内のフォーミュラ使用を禁止することができます。 `querySettings` パラメーターの説明を参照ください。

* **比較演算子**: *attributePath* 引数と *value* 引数の比較に使用する記号 以下の記号がサポートされます:

 | 比較            | 記号          | 説明                                                               |
 | ------------- | ----------- | ---------------------------------------------------------------- |
 | 等しい           | =, ==       | 一致するデータを取得します。ワイルドカード (@) をサポートし、文字の大小/アクセントの有無は区別しません。          |
 |               | ===, IS     | 一致するデータを取得します。ワイルドカード (@) は標準の文字として認識され、文字の大小/アクセント記号の有無は区別しません。 |
 | 等しくない         | #, !=       | ワイルドカード (@) をサポートします                                             |
 |               | !==, IS NOT | ワイルドカード (@) は標準の文字として認識されます                                      |
 | 小さい           | <           |                                                                  |
 | 大きい           | >           |                                                                  |
 | 以下            | <=          |                                                                  |
 | 以上            | >=          |                                                                  |
 | 含まれる          | IN          | コレクション、あるいは複数の値のうち、どれか一つの値と等しいデータを取得します。ワイルドカード (@) をサポートします。    |
 | 宣言に Not 条件を適用 | NOT         | 複数の演算子が含まれる宣言の前に NOT を使用する場合にはカッコをつける必要があります。                    |
 | キーワードを含む      | %           | キーワードは、文字列あるいはピクチャー型の属性内で使用されるものが対象です。                           |

* **値**: コレクションの各要素、あるいはエンティティセレクションの各エンティティのプロパティのカレント値に対して比較する値。 **プレースホルダー** (後述の **プレースホルダーの使用** 参照) か、あるいはデータ型プロパティと同じ型の式を使用することができます。 定数値を使用する場合、以下の原則に従う必要があります:
  * **テキスト** テキスト型の定数値の場合は単一引用符つき、あるいはなしでも渡すことができます(後述の **引用符を使用する** 参照)。 文字列中の文字列を検索する ("含まれる" クエリ) には、ワイルドカード記号 (@) を使用して検索文字列を指定します (例: "@Smith@")。 また以下のキーワードはテキスト定数においては使用できません: true, false。
  * **ブール** 型の定数値: **true** または **false** (文字の大小を区別します)
  * **数値** 型の定数値: 浮動小数点は '.' (ピリオド) で区切られます。
  * **日付** 型の定数値: "YYYY-MM-DD" フォーマット。
  * **null** 定数値: "null" キーワードを使用した場合、**null** と **undefined** プロパティの両方が検索されます。
  * IN 記号を使用したクエリの場合、*値* はコレクションか、attributePath の型に合致する、\[ ] でくくられたカンマ区切りの値である必要があります (文字列においては、`"` の記号は `\` でエスケープする必要があります)。
* **論理演算子**: 複数の条件をクエリ内で結合させるのに使用します(任意)。 以下の論理演算子のいずれか一つを使用できます (名前あるいは記号のどちらかを渡します):

 | 結合  | 記号                      |
 | --- | ----------------------- |
 | AND | &, &&, and              |
 | または | &#124;,&#124;&#124;, or |

* **order by attributePath**: クエリに "order by attributePath" ステートメントを追加することで、結果をソートすることができます。 カンマで区切ることで、複数の order by ステートメントを使用することもできます (例: order by *attributePath1* desc, *attributePath2* asc)。 デフォルトの並び順は昇順です。 並び順を指定するには、降順の場合は 'desc'、昇順の場合は 'asc' を追加します。 >If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

**引用符を使用する**

クエリ内で引用符を使用する場合、クエリ内においては単一引用符 ' ' を使用し、クエリ全体をくくるには二重引用符 " " を使用します。クオートを混同するとエラーが返されます。 例:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```
> 単一引用符 (') は、クエリ文字列を分解してしまうため、検索値としてはサポートされていません。 たとえば、"comp.name = 'John's pizza' " はエラーを生成します。 単一引用符を含む値を検索するには、プレースホルダーを使用します (後述参照)。

**カッコの使用**

クエリ内でカッコを使用すると、計算に優先順位をつけることができます。 たとえば、以下のようにクエリを整理することができます:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```

**プレースホルダーの使用**

4D では、*queryString* 引数内の *attributePath*、*formula* および *値* にプレースホルダーを使用することができます。 プレースホルダーとは、クエリ文字列に挿入するパラメーターで、クエリ文字列が評価される時に他の値で置き換えられるものです。 プレースホルダーの値はクエリ開始時に一度だけ評価されます。各要素に対して毎回評価されるわけではありません。

プレースホルダーには二つの種類があります。**インデックスプレースホルダー** および **命名プレースホルダー** です:

|    | インデックスプレースホルダー                                                                                                                       | 命名プレースホルダー                                                                                                                                       |
| -- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 定義 | You can mix all argument kinds in *queryString*. A *queryString* can contain, for *attributePath*, *formula* and *value* parameters: | `:paramName` (例: myparam など) という形でパラメーターが挿入され、その値は *querySettings* 引数の attributes または parameters オブジェクトで提供されます。                                  |
| 例題 | `$r:=class.query(":1=:2";"city";"Chicago")`                                                                                          | `$o.attributes:=New object("att";"city")`<br/> `$o.parameters:=New object("name";"Chicago")`<br/> `$r:=class.query(":att=:name";$o)` |

*queryString* には、すべての種類の引数を混ぜて渡すことができます。 in *queryString* and their corresponding values are provided by the sequence of *value* parameter(s). You can use up to 128 *value* parameters

* 定数値 (プレースホルダーを使用しない)
* インデックスプレースホルダーや命名プレースホルダー

以下の理由から、クエリでのプレースホルダーの使用が**推奨されます**:

1. 悪意あるコードの挿入を防ぎます: ユーザーによって値が代入された変数をクエリ文字列として直接使用した場合、余計なクエリ引数を入力することでユーザーがクエリ条件を変更する可能性があります。 たとえば、以下のようなクエリ文字列を考えます:

 ```4d
  $vquery:="status = 'public' & name = "+myname //user enters their name
  $result:=$col.query($vquery)
 ```

 非公開のデータがフィルタリングされているため、このクエリは一見安全なように見えます。 しかしながら、もしユーザーが *myname* に *smith OR status='private'* のような入力をした場合、クエリ文字列は解釈時に変更され、非公開データも返してしまう可能性があります。

 プレースホルダーを使用した場合、セキュリティ条件を上書きすることは不可能です:

 ```4d
  $result:=$col.query("status='public' & name=:1";myname)
 ```

 この場合、ユーザーが *myname* エリアに *smith OR status='private'* と入力した場合でも、それはクエリ文字列とはみなされず、値として渡されるだけです。 "smith OR status='private' " という名前の人物を検索したところで、結果は失敗に終わるだけです。

2. フォーマットや文字の問題を心配する必要がありません。これは、*attributePath* や *値* がたとえば "."、"[' ...などの英数字でない文字を格納している可能性がある場合にとくに有用です。

3. クエリに変数や式を使用することができます。 例:

 ```4d
  $result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
 $result2:=$col.query("company.name = :1";"John's Pizzas")
 ```

**null値の検索**

null値を検索する場合、プレースホルダーシンタックスは使用できません。なぜならクエリエンジンは null を予期せぬ比較値としてみなすからです。 たとえば、以下のクエリを実行した場合:

```4d
$vSingles:=ds.Person.query("spouse = :1";Null) // 機能しません
```

この場合 4D は null値を、引数の評価 (別のクエリから渡された属性など) に起因するエラーと解釈するため、期待した結果は得られません。 このようなクエリをおこなうには、直接的なシンタックスを使用する必要があります:

```4d
 $vSingles:=ds.Person.query("spouse = null") // 正しいシンタックス
```

**コレクション要素とクエリ条件のリンク**

:::info

This feature is only available in queries on dataclasses and [entity selections](EntitySelectionClass.md#query). It cannot be used in queries on [collections](CollectionClass.md#query).

:::

When searching within dataclass object attributes containing collections using multiple query arguments joined by the AND operator, you may want to make sure that only entities containing elements that match all arguments are returned, and not entities where arguments can be found in different elements. これを避けるには、すべての条件に合致するコレクション要素のみが検出されるよう、クエリ条件をコレクション要素にリンクする必要があります。

たとえば、以下のような 2件のエンティティがあるとき:

```
エンティティ1:
ds.People.name: "martin"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"paris"
            } ] }

エンティティ2:
ds.People.name: "smith"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"lyon"
            } , {
                "kind":"office",
                "city":"paris"
            } ] }
```

"locations" 属性に、"kind=home" かつ "city=paris" である要素を持つ人を探したいとします。 以下のように書いた場合:

```4d
ds.People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... クエリは "martin" と "smith" の**両方**を返します。なぜなら "smith" も "kind=home" である "location" 要素を持っており、"city=paris" である "location" 要素をも持っているからです (ですがこれら 2つは異なる要素です)。

検索条件に合致する属性が同一のコレクション要素に含まれるエンティティのみを取得するには、**クエリ条件をリンク** します。 クエリ条件をリンクするには:

* リンクする最初のクエリ条件にてパスの \[] 内に文字を追加し、同様に他のクエリ条件でも同じ文字を追加します。 例: `locations[a].city and locations[a].kind`。 ローマ字であればどの文字でも使用可能です (文字の大小は区別されません)。
* 同じクエリ内に、異なるリンク条件を追加するには、別の文字を使用します。 単一のクエリ内では、最大で 26組のリンク条件を使用することができます。

上記の 2件のエンティティにおいて、以下のように書いた場合:

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... クエリは、"kind=home" かつ "city=paris" である "locations" 要素を持つエンティティ "martin" のみを返します。 "home" と"paris" が同じコレクション要素内にない "smith" は、クエリの結果に含まれません。


**N対Nリレーションのクエリ**

ORDA は、N対Nリレーションにおけるクエリを容易にするための特別な構文を提供します。 このような場合には、`AND` 演算子を使って同じ属性の異なる値を検索する必要があるかもしれません。 たとえば、以下のようなストラクチャーの場合を考えます:

![alt-text](../assets/en/API/manytomany.png)

俳優 A と俳優 B の *両方* が出演している映画をすべて検索したいとします。 `AND` 演算子を使った単純なクエリを書いても、うまくいきません:

```4d
// 無効なコード
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor.lastName = :2";"Hanks";"Ryan")  
// $es is empty
```

基本的に、この問題はクエリの内部ロジックに関連しています。 値が "A" と "B" の両方である属性を検索することはできません。

**比較演算子**: *attributePath* 引数と *value* 引数の比較に使用する記号 以下の記号がサポートされます:

```4d
"relationAttribute.attribute = :1 AND relationAttribute{x}.attribute = :2 [AND relationAttribute{y}.attribute...]"
```

**{x}** は、リレーション属性のために新たな参照を作成するよう、ORDA に指示します。 すると、ORDA は必要なビットマップ操作を内部で実行します。 **x** は **0 以外** の任意の数であることに注意してください ({1}、{2}、{1540}...)。 ORDA は、各クラスインデックス用の一意な参照をクエリ内においてのみ必要とします。

この例では、次のようになります:

```4d
// 有効なコード
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor{2}.lastName = :2";"Hanks";"Ryan")  
// $es には映画が格納されます (You've Got Mail, Sleepless in Seattle, Joe Versus the Volcano)
```

**formula 引数**

*queryString* 引数にフォーミュラを挿入 (上記参照) する代わりに、formula オブジェクトをブール検索条件として直接渡すことができます。 トークナイズの利点を生かせる、コードが検索しやすく読みやすい、などといった面から、クエリにおけるフォーミュラオブジェクトの使用は **推奨** されています。

このフォーミュラは、[`Formula`](FunctionClass.md#formula) または [`Formula from string`](FunctionClass.md#formula-from-string) コマンドによって作成されたものでなくてはなりません。 この場合において:

* フォーミュラは処理されるエンティティごとに評価され、true または false を返さなくてはなりません。 クエリの実行中、フォーミュラの結果がブール値でなかった場合、それは false であるとみなされます。
* 処理中のエンティティはフォーミュラ内において `This` で参照されます。
* `Formula` オブジェクトが **null** の場合、エラー1626 ("テキストまたはフォーミュラが必要です") が生成されます。
> セキュリティのため、 `query()` 関数内のフォーミュラ使用を禁止することができます。 *querySettings* パラメーターの説明を参照ください。

**フォーミュラに引数を渡す**

`query()` クラス関数によって呼び出されるフォーミュラは、引数を受け取ることができます:

* 引数は、*querySettings* 引数の **args** プロパティ (オブジェクト) を通して渡さなければなりません。
* フォーミュラは **args** オブジェクトを **$1** に受け取ります。

以下の短いコードは、引数をフォーミュラに渡す仕組みを示しています:

```4d
 $settings:=New object("args";New object("exclude";"-")) // 引数を渡すための args オブジェクト
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) // $1 が args を受け取ります
```

さらなる使用例は、例題3にて紹介されています。

**4D Server**: クライアント/サーバーにおいては、フォーミュラはサーバー上で実行されます。 このコンテキストにおいては、`querySettings.args` オブジェクトのみがフォーミュラに送信されます。

**querySettings 引数**

*querySettings* 引数は、追加のオプションを格納したオブジェクトです。 以下のオブジェクトプロパティがサポートされています:

| プロパティ         | タイプ    | 詳細                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters    | Object | *queryString* または *formula* に **値の命名プレースホルダー** を使用した場合に渡すオブジェクト。 値は、プロパティ/値のペアで表現されます。プロパティは、*queryString* または *formula* に値の代わりに挿入されたプレースホルダー名 (":placeholder"など) で、値は、実際に比較される値です。 インデックスプレースホルダー (value引数として値を直接渡す方法) と命名プレースホルダーは、同じクエリ内で同時に使用することができます。                                                                                                                   |
| attributes    | Object | *queryString* または *formula* に **属性パスの命名プレースホルダー** を使用した場合に渡すオブジェクト。 属性パスは、プロパティ/値のペアで表現されます。プロパティは、*queryString* または *formula* に属性パスの代わりに挿入されたプレースホルダー名 (":placeholder"など) で、値は、属性パスを表す文字列または文字列のコレクションです。 値には、データクラスのスカラー属性・リレート属性・オブジェクトフィールド内のプロパティへの属性パスを指定することができます。<table><tr><th>タイプ</th><th>詳細</th></tr><tr><td>String</td><td>ドット記法を使用して表現された attributePath (例: "name" または "user.address.zipCode")</td></tr><tr><td>String の Collection</td><td>コレクションの各要素が attributePath の階層を表します (例: ["name"] または ["user","address","zipCode"])。 コレクションを使用することで、ドット記法に準じていない名前の属性に対してもクエリすることができます (例: \["4Dv17.1","en/fr"])。</td></tr></table>インデックスプレースホルダー (*value* 引数として値を直接渡す方法) と命名プレースホルダーは、同じクエリ内で同時に使用することができます。 |
| args          | Object | フォーミュラに渡す引数。 **args** オブジェクトは、フォーミュラ内の $1 が受け取るので、その値は *$1.property* という形で利用可能です (例題3 参照)。                                                                                                                                                                                                                                                                                    |
| allowFormulas | ブール    | クエリ内でフォーミュラの呼び出しを許可するには true (デフォルト)。 フォーミュラ実行を禁止するには false を渡します。 false に設定されているときに、フォーミュラが `query()` に渡された場合、エラーが発生します (1278 - フォーミュラはこのメンバーメソッドでは許可されていません)。                                                                                                                                                                                                               |
| context       | テキスト   | エンティティセレクションに適用されている自動の最適化コンテキストのラベル。 エンティティセレクションを扱うコードはこのコンテキストを使うことで最適化の恩恵を受けます。 この機能はクライアント/サーバー処理を想定して設計されています。詳細な情報については、[**クライアント/サーバーの最適化**](entities.md#クライアントサーバーの最適化) の章を参照ください。                                                                                                                                                                                   |
| queryPlan     | ブール    | 戻り値のエンティティコレクションに、実行する直前のクエリの詳細 (クエリプラン) を含めるかどうかを指定します。 返されるプロパティは、クエリプラン あるいはサブクエリ (複合クエリの場合) を格納したオブジェクトです。 このオプションはアプリケーションの開発フェーズにおいて有用です。 このオプションは通常 queryPath と組み合わせて使用されます。 省略時のデフォルト: false。 **注:** このプロパティは `entitySelection.query()` および `dataClass.query()` 関数においてのみサポートされます。                                                                                     |
| queryPath     | ブール    | 戻り値のエンティティコレクションに、実際に実行されたクエリの詳細を含めるかどうかを指定します。 返されたプロパティは、クエリで実際に使用されたパス (通常は queryPlan と同一ですが、エンジンがクエリを最適化した場合には異なる場合があります)、処理時間と検出レコード数を格納したオブジェクトです。 このオプションはアプリケーションの開発フェーズにおいて有用です。 省略時のデフォルト: false。 **注:** このプロパティは `entitySelection.query()` および `dataClass.query()` 関数においてのみサポートされます。                                                                               |

**queryPlan と queryPath について**

`queryPlan`/`queryPath` に格納される情報には、クエリの種類 (インデックスあるいはシーケンシャル)、必要なサブクエリおよびその連結演算子が含まれます。 クエリパスには、見つかったエンティティの数と各検索条件を実行するににかかった時間も含まれます。 この情報は、アプリケーションの開発中に解析することで有効に活用できます。 一般的には、クエリプランとクエリパスの詳細は同一になるはずですが、4D はパフォーマンスの向上のために、動的な最適化をクエリ実行時に実装することがあるからです。 たとえば、その方が早いと判断した場合には、4Dエンジンはインデックス付きクエリをシーケンシャルなものへと動的に変換することがあります。 これは検索されているエンティティの数が少ないときに起こりえます。

たとえば、以下のクエリを実行した場合:

```4d
 $sel:=ds.Employee.query("salary < :1 and employer.name = :2 or employer.revenues > :3";\  
 50000;"Lima West Kilo";10000000;New object("queryPath";True;"queryPlan";True))
```

queryPlan:

```4d
{Or:[{And:[{item:[index : Employee.salary ] < 50000},  
 {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
 subquery:[{item:[index : Company.name ] = Lima West Kilo}]}]},  
 {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
 subquery:[{item:[index : Company.revenues ] > 10000000}]}]}
```

queryPath:

```4d
{steps:[{description:OR,time:63,recordsfounds:1388132,  
 steps:[{description:AND,time:32,recordsfounds:131,  
 steps:[{description:[index : Employee.salary ] < 50000,time:16,recordsfounds:728260},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:0,recordsfounds:131,  
 steps:[{steps:[{description:[index : Company.name ] = Lima West Kilo,time:0,recordsfounds:1}]}]}]},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:31,recordsfounds:1388132,  
 steps:[{steps:[{description:[index : Company.revenues ] > 10000000,time:0,recordsfounds:933}]}]}]}]}
```

#### 例題 1

この例題では、様々なクエリの例を紹介します。

文字列のクエリ:

```4d
$entitySelection:=ds.Customer.query("firstName = 'S@'")
```

NOT節を用いたクエリ:

```4d
$entitySelection:=ds.Employee.query("not(firstName=Kim)")
```

日付のクエリ:

```4d
$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

値のインデックスプレースホルダーを使用したクエリ:

```4d
$entitySelection:=ds.Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

リレートデータクラス対して値のインデックスプレースホルダーを使用したクエリ:

```4d
$entitySelection:=ds.Employee.query("lastName = :1 and manager.lastName = :2";"M@";"S@")
```

降順の order by ステートメントを含んだ、インデックスプレースホルダーを使用したクエリ:

```4d
$entitySelection:=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

値の命名プレースホルダーを使用したクエリ:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings:=New object
$querySettings.parameters:=New object("userId";1234;"extraInfo";New object("name";"Smith"))
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name = :extraInfo.name";$querySettings)
```

値の命名プレースホルダーと、値のインデックスプレースホルダーの両方を使用したクエリ:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings.parameters:=New object("userId";1234)
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name=:1";"Smith";$querySettings)
```

queryPlan および queryPath オブジェクトを返すクエリ:

```4d
$entitySelection:=ds.Employee.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@";New object("queryPlan";True;"queryPath";True))

  // 戻り値のエンティティセレクションから以下のプロパティを取得できます
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

コレクション型の属性パスを用いたクエリ:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[].name = :1";"horsebackriding")
```

コレクション型の属性パスとクエリ条件をリンクしたクエリ:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and extraInfo.hobbies[a].level=:2";"horsebackriding";2)
```

コレクション型の属性パスとクエリ条件を、複数リンクしたクエリ:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and
 extraInfo.hobbies[a].level = :2 and extraInfo.hobbies[b].name = :3 and
 extraInfo.hobbies[b].level = :4";"horsebackriding";2;"Tennis";5)
```

オブジェクト型の属性パスを用いたクエリ:

```4d
$entitySelection:=ds.Employee.query("extra.eyeColor = :1";"blue")
```

IN節を用いたクエリ:

```4d
$entitySelection:=ds.Employee.query("firstName in :1";New collection("Kim";"Dixie"))
```

NOT (IN) 節を用いたクエリ:

```4d
$entitySelection:=ds.Employee.query("not (firstName in :1)";New collection("John";"Jane"))
```

属性パスのインデックスプレースホルダーを使用したクエリ:

```4d
var $es : cs.EmployeeSelection
$es:=ds.Employee.query(":1 = 1234 and :2 = 'Smith'";"salesperson.userId";"name")
  // salesperson はリレートエンティティです
```

属性パスのインデックスプレースホルダーを、値の命名プレースホルダーを使用したクエリ:

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  // salesperson はリレートエンティティです
```

属性パスと値のインデックスプレースホルダーを使用したクエリ:

```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  // salesperson はリレートエンティティです
```

#### 例題 2

この例題では、属性パスの命名プレースホルダーを使用するクエリを紹介します。

2件のエンティティをもつ Employee データクラスを前提に考えます:

エンティティ1:

```4d
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

エンティティ2:

```4d
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

属性パスの命名プレースホルダーを使用したクエリ:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds.Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

属性パスと値の命名プレースホルダーを使用したクエリ:


```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 var $name : Text
 $querySettings:=New object
  // 値の命名プレースホルダー
  // ユーザーに検索する名前を入力してもらいます
 $name:=Request("検索する名前を入力してください:")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  // 属性パスの命名プレースホルダー
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds.Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### 例題 3

この例題では、クエリにおいて、引数あり・引数なしでフォーミュラを使用する様々な方法を紹介します。

`eval()` を使い、テキストとしてフォーミュラを *queryString* パラメーターに渡すクエリ:

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

プレースホルダーを使い、`Formula`オブジェクトとしてフォーミュラを渡すクエリ:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

`Formula` オブジェクトのみを検索条件として渡したクエリ:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query($formula)
```

フォーミュラを複数適用したクエリ:

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds.Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```

*queryString* のテキストフォーミュラが引数を受け取るクエリ:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query("eval(checkName($1.filter)) and nationality=:1";"French";$settings)
```

```4d
  // checkName メソッド
 #DECLARE($exclude : Text) -> $result : Boolean
 $result:=(Position($exclude;This.lastname)=0)
```

同じ ***checkName*** メソッドを `Formula` オブジェクトに格納してプレースホルダーで渡し、引数を受け取るクエリ:

```4d
 var $es : cs.StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" // $formula オブジェクトは更新せずに引数を変更します
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
```

ユーザーがクエリを入力する場合などに、フォーミュラを禁止する場合:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 var $queryString : Text
 $queryString:=Request("Enter your query:")
 if(OK=1)
    $settings:=New object("allowFormulas";False)
    $es:=ds.Students.query($queryString;$settings) // $queryString にフォーミュラが格納されていた場合にはエラーが生成されます
 End if
```

#### 参照

エンティティセレクションの [`.query()`](EntitySelectionClass.md#query)
<!-- END REF -->

<!-- REF DataClassClass.setRemoteCacheSettings().Desc -->
## .setRemoteCacheSettings()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R5 | 追加 |

</details>

<!-- REF #DataClassClass.setRemoteCacheSettings().Syntax -->

**.setRemoteCacheSettings**(*settings* : Object) <!-- END REF -->

<!-- REF #DataClassClass.setRemoteCacheSettings().Params -->
| 引数       | タイプ    |    | 詳細                                                                                                            |
| -------- | ------ | -- | ------------------------------------------------------------------------------------------------------------- |
| settings | Object | -> | Object that sets the timeout and maximum size of the ORDA cache for the dataclass.|<!-- END REF -->

|

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 詳細

The `.setRemoteCacheSettings()` function <!-- REF #DataClassClass.setRemoteCacheSettings().Summary -->sets the timeout and maximum size of the ORDA cache for a dataclass.<!-- END REF -->.

*settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | タイプ | 詳細           |
| ---------- | --- | ------------ |
| timeout    | 整数  | タイムアウト (秒単位) |
| maxEntries | 整数  | エンティティの最大数   |

`timeout` は、データクラスの ORDAキャッシュのタイムアウトを設定します (デフォルトは 30秒)。 タイムアウトを過ぎると、キャッシュ内のデータクラスのエンティティは期限切れとみなされます。 これは、次のことを意味します:

* データはまだ存在します
* 次にそのデータが必要になったときには、サーバーに要求します
* エンティティの最大数に達すると、4D は期限切れのデータを自動的に削除します

`timeout` プロパティを設定すると、すでにキャッシュに存在するエンティティに新しいタイムアウトが設定されます。 これは頻繁に変更されないデータを扱う場合、つまり、サーバーへの新たな要求が必要ない場合に便利です。

`maxEntries` は、ORDAキャッシュ内のエンティティの最大数を設定します。 デフォルトは 30,000 です。

最小エントリー数は 300 のため、`maxEntries` の値は 300以上でなくてはなりません。 それ以外の場合は無視され、最大エントリー数は 300 に設定されます。

`timeout` および `maxEntries` として有効なプロパティが渡されない場合、キャッシュはデフォルト値または以前に設定された値のまま変更されません。

エンティティが保存されると、キャッシュ内で更新され、タイムアウトに達すると期限切れとなります。

#### 例題

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.Buildings.setRemoteCacheSettings(New object("timeout"; 60; "maxEntries"; 350))
```

#### 参照

[.clearRemoteCache()](#clearremotecache)<br/>[.getRemoteCache()](#clearremotecache)
