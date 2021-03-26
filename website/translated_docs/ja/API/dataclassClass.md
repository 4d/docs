---
id: dataclassClass
title: DataClass
---


[データクラス](ORDA/dsMapping.md#データクラス) はデータベーステーブルへのオブジェクトインターフェースを提供します。 4Dアプリケーション内のデータクラスはすべて、`ds` [データストア](ORDA/dsMapping.md#データストア) のプロパティとして利用可能です。



### 概要

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE dataclassClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassClass.attributeName.Summary --> |
| [<!-- INCLUDE #dataclassClass.all().Syntax -->](#all)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.all().Summary -->|
| [<!-- INCLUDE #dataclassClass.fromCollection().Syntax -->](#fromcollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.fromCollection().Summary --> |
| [<!-- INCLUDE #dataclassClass.get().Syntax -->](#get)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.get().Summary --> |
| [<!-- INCLUDE #dataclassClass.getDataStore().Syntax -->](#getdatastore)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.getDataStore().Summary --> |
| [<!-- INCLUDE #dataclassClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.getInfo().Summary --> |
| [<!-- INCLUDE #dataclassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.new().Summary --> |
| [<!-- INCLUDE #dataclassClass.newSelection().Syntax -->](#newselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.newSelection().Summary --> |
| [<!-- INCLUDE #dataclassClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.query().Summary --> |



<!-- REF dataclassClass.attributeName.Desc -->
## .*attributeName*

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |
</details>

<!-- REF dataclassClass.attributeName.Syntax -->
***.attributeName*** : DataClassAttribute<!-- END REF -->


#### 説明

データクラスの属性は、データクラスの <!-- REF dataclassClass.attributeName.Summary -->プロパティとして直接利用可能なオブジェクト<!-- END REF --> です。

戻り値は [`DataClassAttribute`](dataclassAttributeClass.md) クラスのオブジェクトです。 これらのオブジェクトが持つプロパティを読み取ることによって、データクラス属性に関する情報が取得できます。
> データクラス属性オブジェクトを編集することは可能ですが、元となるデータベースストラクチャーは変更されません。

#### 例題 1

```4d
$salary:=ds.Employee.salary // Employeeデータクラスの salary属性を返します
$compCity:=ds.Company["city"] // Companyデータクラスの city属性を返します
```


#### 例題 2

以下のストラクチャーを前提とします:

![](assets/en/API/dataclassAttribute.png)


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

![](assets/en/API/dataclassAttribute2.png)


```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->



<!-- REF dataclassClass.all().Desc -->
## .all()

<details><summary>履歴</summary>
| バージョン  | 内容                   |
| ------ | -------------------- |
| v17 R5 | *settings* パラメーターを追加 |
| v17    | 追加                   |
</details>


<!-- REF #dataclassClass.all().Syntax -->
**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #dataclassClass.all().Params -->
| 参照       | タイプ                |    | 説明                |
| -------- | ------------------ |:--:| ----------------- |
| settings | オブジェクト             | -> | ビルドオプション: context |
| 戻り値      | 4D.EntitySelection | <- | データクラスの全エンティティの参照 |
<!-- END REF -->


#### 説明

`.all( )` 関数はデータストアをクエリして、 <!-- REF #dataclassClass.all().Summary -->データクラスの全エンティティをエンティティセレクションとして返します<!-- END REF -->。

エンティティはデフォルトの順番で返され、通常は作成順になっています。 ただし、エンティティ削除後に新規追加した場合には、デフォルトの順番は作成順を反映しない点に留意が必要です。

エンティティが見つからない場合、空のエンティティセレクションが返されます。

この関数には、レイジーローディングが適用されます。

**settings**

任意の *settings* パラメーターには、追加オプションを格納したオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ  | 説明                                                                                                                                                           |
| ------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context | テキスト | エンティティセレクションに適用されている最適化コンテキストのラベル。 エンティティセレクションを扱うコードはこのコンテキストを使うことで最適化の恩恵を受けます。 この機能は [ORDA のクライアント/サーバー処理](ORDA/entities.md#クライアント/サーバーの最適化)を想定して設計されています。 |


#### 例題

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```


<!-- END REF -->



<!-- REF dataclassClass.fromCollection().Desc -->
## .fromCollection()

<details><summary>履歴</summary>
| バージョン  | 内容                   |
| ------ | -------------------- |
| v17 R5 | *settings* パラメーターを追加 |
| v17    | 追加                   |
</details>

<!-- REF #dataclassClass.fromCollection().Syntax -->
**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #dataclassClass.fromCollection().Params -->
| 参照        | タイプ                |    | 説明                        |
| --------- | ------------------ |:--:| ------------------------- |
| objectCol | コレクション             | -> | エンティティにマップするオブジェクトのコレクション |
| settings  | オブジェクト             | -> | ビルドオプション: context         |
| 戻り値       | 4D.EntitySelection | <- | コレクションから作成したエンティティセレクション  |
<!-- END REF -->


#### 説明

`.fromCollection()` 関数は、 <!-- REF #dataclassClass.fromCollection().Summary -->*objectCol* 引数のオブジェクトのコレクションに基づいてデータクラスのエンティティを更新あるいは作成し、対応するエンティティセレクションを返します<!-- END REF -->。

*objectCol* パラメーターには、データクラスの既存エンティティを更新、または新規エンティティを作成するためのオブジェクトのコレクションを渡します。 プロパティ名は、データクラスの属性名と同一である必要があります。 プロパティ名がデータクラスに存在しない場合、それは無視されます。 コレクション内で属性値が定義されていない場合、その値は null になります。

コレクションのオブジェクト要素とエンティティのマッピングは、**属性名** と **型の合致** をもって行われます。 オブジェクトプロパティがエンティティ属性と同じ名前であっても、型が合致しない場合には、エンティティの属性は空のままです。

**作成モードと更新モード**

*objectCol* 引数の各オブジェクトついて:

*   オブジェクトがブール型の "\_\_NEW" プロパティを含み、それが **false** に設定されている場合(あるいは "\_\_NEW" プロパティが含まれていない場合)、オブジェクトの対応する値でエンティティが更新あるいは作成されます。 プライマリーキーに関するチェックはおこなわれません:
    *   プライマリーキーが指定されていて実在する場合、エンティティは更新されます。 この場合、プライマリーキーはそのまま、あるいは "\_\_KEY" プロパティを (プライマリーキー値とともに) 使って指定することができます。
    *   そのまま指定したプライマリーキーが実在しない場合、エンティティは作成されます。
    *   プライマリーキーを指定していない場合、エンティティは作成され、標準のデータベースのルールに基づいてプライマリーキー値が割り当てられます。
*   オブジェクトがブール型の "\_\_NEW" プロパティを含み、それが **true** に設定されている場合、オブジェクトの対応する値でエンティティが作成されます。 プライマリーキーに関するチェックがおこなわれます:
    *   そのまま指定したプライマリーキーが実在する場合、エラーが返されます。
    *   そのまま指定したプライマリーキーが実在しない場合、エンティティは作成されます。
    *   プライマリーキーを指定していない場合、エンティティは作成され、標準のデータベースのルールに基づいてプライマリーキー値が割り当てられます。
> 値を格納している"\_\_KEY" プロパティは、"\_\_NEW" プロパティが **false** に設定 (あるいは省略) されていて、かつ対応するエンティティが存在する場合のみ、考慮されます。 それ以外の場合には、"\_\_KEY" プロパティ値は無視されるため、プライマリーキーの値はそのまま渡さなければなりません。

**リレートエンティティ**

*objectCol* 引数のオブジェクトは、一つ以上のリレートエンティティに対応するオブジェクトをネストすることができます。これはエンティティ間のリンクを作成・更新するのに有用です。

リレートエンティティに相当するネストされたオブジェクトは、リレートエンティティのプライマリーキー値を格納した "\_\_KEY" プロパティあるいはプライマリーキー属性を格納している必要があります。 ”\_\_KEY” プロパティを使用すると、プライマリーキー属性名に依存する必要がありません。
> この機構によって、リレートエンティティの中身を作成・更新することはできません。

**スタンプ**

"\_\_STAMP" プロパティが指定された場合、データストアのスタンプとのチェックがおこなわれ、エラーが返されることがあります ("与えられたスタンプはテーブルXXX のレコード# XXのカレントのものと合致しません")。 詳細については [エンティティロッキング](ORDA/entities.md#エンティティロッキング) を参照ください。

**settings**

任意の *settings* パラメーターには、追加オプションを格納したオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ  | 説明                                                                                                                                                           |
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

[**.toCollection()**](entitySelectionClass.md#tocollection)

<!-- END REF -->


<!-- REF dataclassClass.get().Desc -->
## .get()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #dataclassClass.get().Syntax -->
**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->


<!-- REF #dataclassClass.get().Params -->
| 参照         | タイプ       |    | 説明                      |
| ---------- | --------- |:--:| ----------------------- |
| primaryKey | 整数または文字列  | -> | 取得するエンティティのプライマリーキー値    |
| settings   | オブジェクト    | -> | ビルドオプション: context       |
| 戻り値        | 4D.Entity | <- | 指定したプライマリーキーに合致するエンティティ |
<!-- END REF -->

#### 説明

`.get()` 関数はデータクラスをクエリして、 <!-- REF #dataclassClass.get().Summary -->*primaryKey* に渡したプライマリーキーに合致するエンティティを返します<!-- END REF -->。

*primaryKey* には、取得したいエンティティのプライマリーキーの値を渡します。 値の型は、データストアで設定されたプライマリーキーの型 (倍長整数あるいはテキスト) と合致している必要があります。 [`.getKey()`](entityClass.md#getkey) 関数に `dk key as string` 引数を渡すと、プライマリーキーの値が常にテキスト型で返されるように指定することができます。

*primaryKey* 引数のプライマリーキーを持つエンティティが見つからない場合、**Null** エンティティが返されます。

この関数にはレイジーローディングが適用され、リレートデータは必要な時にのみディスクから読み込まれます。

**settings**

任意の *settings* パラメーターには、追加オプションを格納したオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ  | 説明                                                                                                                                                        |
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


<!-- REF dataclassClass.getDataStore().Desc -->
## .getDataStore()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #dataclassClass.getDataStore().Syntax -->
**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #dataclassClass.getDataStore().Params -->
| 参照  | タイプ          |    | 説明                 |
| --- | ------------ |:--:| ------------------ |
| 戻り値 | cs.DataStore | <- | データクラスが属しているデータストア |
<!-- END REF -->


#### 説明

`.getDataStore( )` 関数は、 <!-- REF #dataclassClass.getDataStore().Summary -->指定したデータクラスが属しているデータストアを返します<!-- END REF -->。

返されるデータストアは次のいずれかです:

*   `ds` コマンドによって返されるメインデータストア
*   `Open datastore` コマンドを使用して開かれたリモートデータストア


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



<!-- REF dataclassClass.getInfo().Desc -->
## .getInfo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #dataclassClass.getInfo().Syntax -->
**.getInfo()** : Object <!-- END REF -->

<!-- REF #dataclassClass.getInfo().Params -->
| 参照  | タイプ    |    | 説明        |
| --- | ------ | -- | --------- |
| 戻り値 | オブジェクト | <- | データクラスの情報 |
<!-- END REF -->


#### 説明

`.getInfo( )` 関数は、 <!-- REF #dataclassClass.getInfo().Summary -->データクラスの情報を提供するオブジェクトを返します<!-- END REF -->。 このメソッドは汎用的なコードを書くのに有用です。

**返されるオブジェクト**

| プロパティ       | タイプ  | 説明                   |
| ----------- | ---- | -------------------- |
| name        | テキスト | データクラスの名称            |
| primaryKey  | テキスト | データクラスのプライマリーキー属性の名称 |
| tableNumber | 整数   | 内部的な 4Dテーブル番号        |



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

<!-- END REF -->



<!-- REF dataclassClass.new().Desc -->
## .new()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |
</details>

<!-- REF #dataclassClass.new().Syntax -->
**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #dataclassClass.new().Params -->
| 参照  | タイプ       |    | 説明              |
| --- | --------- | -- | --------------- |
| 戻り値 | 4D.Entity | <- | データクラスの新規エンティティ |
<!-- END REF -->


#### 説明

`.new( )` 関数は、 <!-- REF #dataclassClass.new().Summary -->メモリ内にデータクラスに空のエンティティを新規作成しそれを返します<!-- END REF -->。

エンティティオブジェクトはメモリ内に作成されますが、[`.save( )`](entityClass.md#save) 関数が呼び出されるまでデータベースには保存されません。 エンティティを保存する前に削除した場合、復元することはできません。

**4D Server**: クライアント/サーバーにおいては、対応するテーブルのプライマリーキーが自動インクリメントであった場合、エンティティがサーバー側に保存されたときに計算されます。

#### 例題

以下のコードは "Log" データクラスに新しいエンティティを作成し、"info" 属性に情報を記録します:

```4d 
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() // 参照を作成します
 $entity.info:="New entry" // 情報を格納します
 $entity.save() // エンティティを保存します
```
 
<!-- END REF -->




<!-- REF dataclassClass.newSelection().Desc -->
## .newSelection()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |
</details>

<!-- REF #dataclassClass.newSelection().Syntax -->
**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #dataclassClass.newSelection().Params -->
| 参照        | タイプ                |    | 説明                                                                                                      |
| --------- | ------------------ | -- | ------------------------------------------------------------------------------------------------------- |
| keepOrder | 整数                 | -> | `dk keep ordered`: 順列ありのエンティティセレクションを作成します<br>`dk non ordered` (あるいは省略時): 順列なしのエンティティセレクションを作成します |
| 戻り値       | 4D.EntitySelection | <- | データクラスの空の新規エンティティセレクション                                                                                 |
<!-- END REF -->


#### 説明

`.newSelection( )` 関数は、データクラスに紐づいた <!-- REF #dataclassClass.newSelection().Summary -->追加可能な、空の新規エンティティセレクションをメモリ内に作成します<!-- END REF -->。

> 追加可能なエンティティセレクションについての詳細は [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。


順列ありのエンティティセレクションを作成するには、*keepOrder* に `dk keep ordered` セレクターを渡します。 この引数を省略した場合のデフォルト、あるいは `dk non ordered` セレクターを渡した場合には、関数は順列なしのエンティティセレクションを返します。 順列なしのエンティティセレクションの方が速いですが、エンティティの位置に頼ることはできません。 詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

作成された時点では、エンティティセレクションにエンティティは含まれていません(`mySelection.length` は0を返します)。 あとから [`add()`](entitySelectionClass.md#add) 関数を呼び出すことで、エンティティセレクションを徐々にビルドしていくことができます。


#### 例題


```4d 
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() // 順列なしの空のエンティティセレクションを作成します
 $OSelection:=ds.Employee.newSelection(dk keep ordered) // 順列ありの空のエンティティセレクションを作成します
```
 

<!-- END REF -->



<!-- REF dataclassClass.query().Desc -->
## .query()

<details><summary>履歴</summary>
| バージョン  | 内容                                 |
| ------ | ---------------------------------- |
| v17 R6 | Support of Formula parameters      |
| v17 R5 | Support of placeholders for values |
| v17    | 追加                                 |
</details>

<!-- REF #dataclassClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #dataclassClass.query().Params -->
| 参照            | タイプ                |    | 説明                                                                                   |
| ------------- | ------------------ | -- | ------------------------------------------------------------------------------------ |
| queryString   | テキスト               | -> | 検索条件 (文字列)                                                                           |
| formula       | オブジェクト             | -> | 検索条件 (フォーミュラオブジェクト)                                                                  |
| value         | any                | -> | プレースホルダー用の値                                                                          |
| querySettings | オブジェクト             | -> | クエリオプション: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan |
| 戻り値           | 4D.EntitySelection | <- | *queryString* または *formula* に渡した検索条件に合致するエンティティから構成された新しいエンティティセレクション                |
<!-- END REF -->


#### 説明

`.query( )` 関数は、データクラスの全エンティティから、 <!-- REF #dataclassClass.query().Summary -->*queryString* または *formula* と任意の *value* 引数で指定した検索条件に合致するエンティティを検索します<!-- END REF -->。戻り値は、見つかったエンティティをすべて格納する `EntitySelection` 型の新しいオブジェクトです。 この関数には、レイジーローディングが適用されます。

エンティティが見つからない場合、空のエンティティセレクションが返されます。

**queryString 引数**

*queryString* 引数には、以下のシンタックスを使用します:

```4d
attributePath|formula 比較演算子 値   
    {論理演算子 attributePath|formula 比較演算子 値}   
    {order by attributePath {desc | asc}}
```

詳細は以下の通りです:

*   **attributePath**: クエリの実行対象となる属性パス。 この引数は、単純な名前 ("country" など) のほか、あらゆる有効な属性パス ("country.name" など) の形をとることができます。 属性パスが `Collection` 型である場合、すべてのオカレンスを管理するには\[ ] 記法を使用してください (例: "children\[ ].age" など)。 また、**プレースホルダー** を使用することもできます(後述参照)。
> *You cannot use directly attributes whose name contains special characters such as ".", "\[ ]", or "=", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see* **Using placeholders** *below).*

*   **formula**: a valid formula passed as `Text` or `Object`. フォーミュラは処理されるエンティティごとに評価され、ブール値を返さなくてはなりません。 Within the formula, the entity is available through the `This` object.

    *   **Text**: the formula string must be preceeded by the `eval( )` statement, so that the query parser evaluates the expression correctly. For example: *"eval(length(This.lastname) >=30)"*
    *   **Object**: the [formula object](formulaClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](formulaClass.md#formula) or [`Formula from string`](formulaClass.md#formula-from-string) command.
> * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * If the formula is not the only search criteria, the query engine optimizer could prior process other criteria (e.g. indexed attributes) and thus, the formula could be evaluated for only a subset of entities.

    Formulas in queries can receive parameters through $1. This point is detailed in the **formula parameter** paragraph below.
> * You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
> * For security reasons, formula calls within `query()` methods can be disallowed. See `querySettings` parameter description.

*   **comparator**: symbol that compares *attributePath* and *value*. The following symbols are supported:

    | Comparison                           | Symbol(s)   | 説明                                                                                                             |
    | ------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
    | Equal to                             | =, ==       | Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.                           |
    |                                      | ===, IS     | Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic              |
    | Not equal to                         | #, !=       | Supports the wildcard (@)                                                                                      |
    |                                      | !==, IS NOT | Considers the @ as a standard character                                                                        |
    | 小さい                                  | <           |                                                                                                                |
    | 大きい                                  | >           |                                                                                                                |
    | 以下                                   | <=          |                                                                                                                |
    | 以上                                   | >=          |                                                                                                                |
    | Included in                          | IN          | Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@) |
    | Not condition applied on a statement | NOT         | Parenthesis are mandatory when NOT is used before a statement containing several operators                     |
    | キーワードを含む                             | %           | Keywords can be used in attributes of string or picture type                                                   |

*   **value**: the value to compare to the current value of the property of each entity in the entity selection or element in the collection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property.<p><p> When using a constant value, the following rules must be respected:
    *   **text** type constant can be passed with or without simple quotes (see **Using quotes** below). To query a string within a string (a "contains" query), use the wildcard symbol (@) in value to isolate the string to be searched for as shown in this example: "@Smith@". The following keywords are forbidden for text constants: true, false.
    *   **boolean** type constants: **true** or **false** (case sensitive).
    *   **numeric** type constants: decimals are separated by a '.' (period). date type constants: "YYYY-MM-DD" format
    *   **null** constant: using the "null" keyword will find **null** and **undefined** properties.
    *   in case of a query with an IN comparator, value must be a collection, or values matching the type of the attribute path between \[ ] separated by commas (for strings, " characters must be escaped with "\").
*   **logicalOperator**: used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):

    | Conjunction | Symbol(s)               |
    | ----------- | ----------------------- |
    | AND         | &, &&, and              |
    | OR          | &#124;,&#124;&#124;, or |

*   **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.
> *If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

**Using quotes**

When you use quotes within queries, you must use single quotes ' ' inside the query and double quotes " " to enclose the whole query, otherwise an error is returned. たとえば:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```
> Single quotes (') are not supported in searched values since they would break the query string. For example "comp.name = 'John's pizza' " will generate an error. If you need to search on values with single quotes, you may consider using placeholders (see below).

**Using parenthesis**

You can use parentheses in the query to give priority to the calculation. For example, you can organize a query as follows:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```


**Using placeholders**

4D allows you to use placeholders for *attributePath*, *formula* and *value* arguments within the *queryString* parameter. A placeholder is a parameter that you insert in query strings and that is replaced by another value when the query string is evaluated. The value of placeholders is evaluated once at the beginning of the query; it is not evaluated for each element.

Two types of placeholders can be used: **indexed placeholders** and **named placeholders**:

| -          | Indexed placeholders                                                                                                                                                                                    | Named placeholders                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition | Parameters are inserted as :paramIndex (for example :1, :2...) in queryString and their corresponding values are provided by the sequence of value parameter(s). You can use up to 128 value parameters | Parameters are inserted as :paramName (for example :myparam) and their values are provided in the attributes and/or parameters objects in the querySettings parameter |
| 例題         | $r:=class.query(":1=:2";"city";"Chicago")                                                                                                                                                               | $o.attributes:=New object("att";"city")<br> $o.parameters:=New object("name";"Chicago")<br> $r:=class.query(":att=:name";$o)                              |

You can mix all argument kinds in *queryString*. A *queryString* can contain, for *attributePath*, *formula* and *value* parameters:


*   direct values (no placeholders),
*   indexed placeholders and/or named placeholders.

**Using placeholders in queries is recommended** for the following reasons:

1.  It prevents malicious code insertion: if you directly use user-filled variables within the query string, a user could modifiy the query conditions by entering additional query arguments. For example, imagine a query string like:

    ```4d
     $vquery:="status = 'public' & name = "+myname //user enters their name
     $result:=$col.query($vquery)
    ```

    This query seems secured since non-public data are filtered. However, if the user enters in the *myname* area something like *"smith OR status='private'*, the query string would be modified at the interpretation step and could return private data.

    When using placeholders, overriding security conditions is not possible:

    ```4d
     $result:=$col.query("status='public' & name=:1";myname)
    ```

    In this case if the user enters *smith OR status='private'* in the *myname* area, it will not be interpreted in the query string, but only passed as a value. Looking for a person named "smith OR status='private'" will just fail.

2.  It prevents having to worry about formatting or character issues, especially when handling *attributePath* or *value* parameters that might contain non-alphanumeric characters such as ".", "['...

3.  It allows the use of variables or expressions in query arguments. 例:

    ```4d
    $result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
    $result2:=$col.query("company.name = :1";"John's Pizzas")
    ```

**Looking for null values**

When you look for null values, you cannot use the placeholder syntax because the query engine considers null as an unexpected comparison value. For example, if you execute the following query:

```4d
$vSingles:=ds.Person.query("spouse = :1";Null) // will NOT work
```

You will not get the expected result because the null value will be evaluated by 4D as an error resulting from the parameter evaluation (for example, an attribute coming from another query). For these kinds of queries, you must use the direct query syntax:

```4d
 $vSingles:=ds.Person.query("spouse = null") //correct syntax
```


**Linking collection attribute query arguments**

When searching in collections within object attributes using multiple query arguments joined by the AND operator, you may want to make sure that only entities containing elements that match all arguments are returned, and not entities where arguments can be found in different elements. To do this, you need to link query arguments to collection elements, so that only single elements containing linked arguments are found.

For example, with the following two entities:

```
Entity 1:
ds.People.name: "martin"
ds.People.places: 
    { "locations" : [ {
                "kind":"home",
                "city":"paris" 
            } ] }

Entity 2:
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

You want to find people with a "home" location kind in the city "paris". If you write:

```4d
ds.People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... the query will return "martin" **and** "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.

If you want to only get entities where matching arguments are in the same collection element, you need to **link arguments**. To link query arguments:

- Add a letter between the \[] in the first path to link and repeat the same letter in all linked arguments. For example: `locations[a].city and locations[a].kind`. You can use any letter of the Latin alphabet (not case sensitive).
- To add different linked criteria in the same query, use another letter. You can create up to 26 combinations of criteria in a single query.

With the above entities, if you write:

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". The query will not return "smith" because the values "home" and "paris" are not in the same collection element.



**formula parameter**

As an alternative to formula insertion within the *queryString* parameter (see above), you can pass directly a formula object as a boolean search criteria. Using a formula object for queries is **recommended** since you benefit from tokenization, and code is easier to search/read.

The formula must have been created using the `Formula` or `Formula from string` command. In this case:

*   the *formula* is evaluated for each entity and must return true or false. During the execution of the query, if the formula's result is not a boolean, it is considered as false.
*   within the *formula*, the entity is available through the `This` object.
*   if the `Formula` object is **null**, the errror 1626 ("Expecting a text or formula") is generated, that you call intercept using a method installed with `ON ERR CALL`.
> For security reasons, formula calls within `query(`) member methods can be disallowed. See *querySettings* parameter description.

**Passing parameters to formulas**

Any *formula* called by the `query()` class function can receive parameters:

*   Parameters must be passed through the **args** property (object) of the *querySettings* parameter.
*   The formula receives this **args** object as a **$1** parameter.

This small code shows the principles of how parameter are passed to methods:

```4d
 $settings:=New object("args";New object("exclude";"-")) //args object to pass parameters
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args is received in $1
```

Additional examples are provided in example 3.

**4D Server**: In client/server, formulas are executed on the server. In this context, only the `querySettings.args` object is sent to the formulas.



**querySettings parameter**

In the *querySettings* parameter, you can pass an object containing additional options. 以下のオブジェクトプロパティがサポートされています:

| プロパティ         | タイプ    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters    | オブジェクト | **Named placeholders for values** used in the *queryString* or *formula*. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the *queryString* or *formula* (":placeholder") and value is the value to compare. You can mix indexed placeholders (values directly passed in value parameters) and named placeholder values in the same query.                                                                                                                                                                                                                                                   |
| attributes    | オブジェクト | **Named placeholders for attribute paths** used in the *queryString* or *formula*. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the *queryString* or *formula* (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate either a scalar or a related attribute of the dataclass or a property in an object field of the dataclass<p><table><tr><th>タイプ</th><th>説明</th></tr><tr><td>文字列</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>Collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query. |
| args          | オブジェクト | Parameter(s) to pass to formulas, if any. The **args** object will be received in $1 within formulas and thus its values will be available through *$1.property* (see example 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| allowFormulas | ブール    | True to allow the formula calls in the query (default). Pass false to disallow formula execution. If set to false and `query()` is given a formula, an error is sent (1278 - Formula not allowed in this member method).                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| context       | テキスト   | Label for the automatic optimization context applied to the entity selection. エンティティセレクションを扱うコードはこのコンテキストを使うことで最適化の恩恵を受けます。 This feature is designed for client/server processing; for more information, please refer to the **Client/server optimization** section.                                                                                                                                                                                                                                                                                                                                                                                        |
| queryPlan     | ブール    | In the resulting entity selection, returns or does not return the detailed description of the query just before it is executed, i.e. the planned query. The returned property is an object that includes each planned query and subquery (in the case of a complex query). This option is useful during the development phase of an application. It is usually used in conjunction with queryPath. Default if omitted: false. **Note**: This property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.                                                                                                               |
| queryPath     | ブール    | In the resulting entity selection, returns or does not return the detailed description of the query as it is actually performed. The returned property is an object that contains the actual path used for the query (usually identical to that of the queryPlan, but may differ if the engine manages to optimize the query), as well as the processing time and the number of records found. This option is useful during the development phase of an application. Default if omitted: false. **Note**: This property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.                                             |

**About queryPlan and queryPath**

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. クエリパスには、見つかったエンティティの数と各検索条件を実行するににかかった時間も含まれます。 You may find it useful to analyze this information while developing your application(s). 一般的には、クエリプランとクエリパスの詳細は同一になるはずですが、4D はパフォーマンスの向上のために、動的な最適化をクエリ実行時に実装することがあるからです。 たとえば、その方が早いと判断した場合には、4Dエンジンはインデックス付きクエリをシーケンシャルなものへと動的に変換することがあります。 これは検索されているエンティティの数が少ないときに起こりえます。

For example, if you execute the following query:

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

This section provides various examples of queries.

Query on a string:

```4d
$entitySelection:=ds.Customer.query("firstName = 'S@'")
```

Query with a NOT statement:

```4d
$entitySelection:=ds.Employee.query("not(firstName=Kim)")
```

Queries with dates:

```4d
$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

Query with indexed placeholders for values:

```4d
$entitySelection:=ds.Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

Query with indexed placeholders for values on a related dataclass:

```4d
$entitySelection:=ds.Employee.query("lastName = :1 and manager.lastName = :2";"M@";"S@")
```

Query with indexed placeholder including a descending order by statement:

```4d
$entitySelection:=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

Query with named placeholders for values:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings:=New object
$querySettings.parameters:=New object("userId";1234;"extraInfo";New object("name";"Smith"))
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name = :extraInfo.name";$querySettings)
```

Query that uses both named and indexed placeholders for values:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings.parameters:=New object("userId";1234)
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name=:1";"Smith";$querySettings)
```

Query with queryPlan and queryPath objects:

```4d
$entitySelection:=ds.Employee.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@";New object("queryPlan";True;"queryPath";True))

  //you can then get these properties in the resulting entity selection
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

Query with an attribute path of Collection type:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[].name = :1";"horsebackriding")
```

Query with an attribute path of Collection type and linked attributes:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and extraInfo.hobbies[a].level=:2";"horsebackriding";2)
```

Query with an attribute path of Collection type and multiple linked attributes:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and
    extraInfo.hobbies[a].level = :2 and extraInfo.hobbies[b].name = :3 and
    extraInfo.hobbies[b].level = :4";"horsebackriding";2;"Tennis";5)
```

Query with an attribute path of Object type:

```4d
$entitySelection:=ds.Employee.query("extra.eyeColor = :1";"blue")
```

Query with an IN statement:

```4d
$entitySelection:=ds.Employee.query("firstName in :1";New collection("Kim";"Dixie"))
```

Query with a NOT (IN) statement:

```4d
$entitySelection:=ds.Employee.query("not (firstName in :1)";New collection("John";"Jane"))
```

Query with indexed placeholders for attributes:

```4d
var $es : cs.EmployeeSelection
$es:=ds.Employee.query(":1 = 1234 and :2 = 'Smith'";"salesperson.userId";"name")
  //salesperson is a related entity
```

Query with indexed placeholders for attributes and named placeholders for values:

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson is a related entity
```

Query with indexed placeholders for attributes and values:


```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson is a related entity
```

#### 例題 2

This section illustrates queries with named placeholders for attributes.

Given an Employee dataclass with 2 entities:

Entity 1:

```4d
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Entity 2:

```4d
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Query with named placeholders for attributes:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds.Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

Query with named placeholders for attributes and values:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 var $name : Text
 $querySettings:=New object
  //Named placeholders for values
  //The user is asked for a name
 $name:=Request("Please enter the name to search:")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  //Named placeholders for attribute paths
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds.Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### 例題 3

These examples illustrate the various ways to use formulas with or without parameters in your queries.

The formula is given as text with `eval()` in the *queryString* parameter:

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

The formula is given as a `Formula` object through a placeholder:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

Only a `Formula` object is given as criteria:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query($formula)
```

Several formulas can be applied:

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds.Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```


A text formula in *queryString* receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query("eval(checkName($1.filter)) and nationality=:1";"French";$settings)
```

```4d
  //checkName method
 #DECLARE($exclude : Text) -> $result : Boolean
 $result:=(Position($exclude;This.lastname)=0)
```

Using the same ***checkName*** method, a `Formula` object as placeholder receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" // change the parameters without updating the $formula object
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
```

We want to disallow formulas, for example when the user enters their query:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 var $queryString : Text
 $queryString:=Request("Enter your query:")
 if(OK=1)
    $settings:=New object("allowFormulas";False)
    $es:=ds.Students.query($queryString;$settings) //An error is raised if $queryString contains a formula
 End if
```

#### 参照

[`.query()`](entitySelectionClass.md#query) for entity selections
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
