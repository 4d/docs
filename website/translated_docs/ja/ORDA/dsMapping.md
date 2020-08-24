---
id: dsmapping
title: データモデルオブジェクト
---

ORDA は、下地である 4D ストラクチャーへの自動マッピングに基づいた技術です。 ORDA は、エンティティやエンティティセレクションオブジェクトを介してデータへのアクセスも提供します。 結果的に ORDA は、データモデルオブジェクト一式の形でデータベース全体を公開します。


## ストラクチャーマッピング

`ds` および `Open datastore` コマンドを使ってデータストアを呼び出すと、戻り値の [データストア](#データストア) オブジェクトには、対応する 4D ストラクチャーのテーブルとフィールドへの参照が属性として格納されています:

*   テーブルはデータクラスへとマップされます。
*   フィールドはストレージ属性へとマップされます。
*   リレーションはリレーション属性へとマップされます。ストラクチャーエディター内で定義されたリレーション名はリレーション属性名として使用されます。

![](assets/en/Orda/datastoreMapping.png)


### 変換のルール

変換の際には以下のルールが適用されます:

* テーブル、フィールド、そしてリレーション名はオブジェクトプロパティ名へとマップされます。 それらの名前が標準のオブジェクト命名規則に則っているようにしてください ([識別子の命名規則](Concepts/identifiers.md) 参照)。
*   データストアは単一のプライマリーキーを持つテーブルのみを参照します。 以下のテーブルは参照されません:
    *   プライマリーキーがないテーブル
    *   複合プライマリーキーを持つテーブル
*   [BLOB](Concepts/dt_blob.md) 型の属性はデータストア内では管理されません。 BLOB 型属性はエンティティ内で Null として返され、割り当てることができません。

> ORDA のデータストアマッピングでは、次のものは考慮されません:  
> - テーブルあるいはフィールドの"非表示"オプション<br /> - `SET TABLE TITLES` あるいは `SET FIELD TITLES` を通して定義されたバーチャルストラクチャー<br /> - リレーションの"手動"あるいは"自動"プロパティ


### リモートデータストアの利用

`Open datastore` コマンドまたは [REST リクエスト](REST/gettingStarted.md) によってリモートデータストアにアクセスする場合、**RESTリソースとして公開** プロパティが設定されているテーブルとフィールドのみ利用可能です。

このプロパティは、データストアにデータクラスおよび属性として公開したい各テーブルおよびフィールドについて 4D ストラクチャーのレベルで設定する必要があります:

![](assets/en/Orda/ExposeDataclass.png)


### データモデルのアップデート

データベースストラクチャーレベルで変更がおこなわれると、カレントの ORDA モデルレイヤーは無効化されます。 これらの変更には、以下のものが含まれます:

*   テーブル、フィールド、リレーションの追加または削除
*   テーブル、フィールド、リレーションの名称変更
*   フィールドの核となるプロパティ (型、重複不可、インデックス、自動インクリメント、null値サポートなど) の変更

カレントの ORDA モデルレイヤーが無効化されると、その後 4D または 4D Server のローカルの `ds` データストアを呼び出した時にモデルレイヤーが自動的に再読み込みされ、更新されます。 ただし、エンティティやエンティティセレクションなど、ORDA オブジェクトへの既存の参照は、再生成されるまではそれらが作成されたときのモデルを使用し続けるという点に注意してください。

また、アップデートされた ORDA モデルレイヤーは、以下のコンテキストにおいては自動的には利用可能にはなりません:

*   4D Server に接続したリモートの 4D -- リモートのアプリケーションはサーバーに再接続する必要があります
*   `Open datastore` または [REST 呼び出し](REST/gettingStarted.md) を使用して開かれたリモートデータストア -- 新しいセッションを開く必要があります


## Object definition

### Datastore

データストアとは、データベースにアクセスするためのインターフェースオブジェクトで、 データベース全体をオブジェクトの形で表します。 データストアは **モデル** と **データ** から構成されています:

- The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself.
- Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.

When handled through the code, the datastore is an object whose properties are all of the [dataclasses](#dataclass) which have been specifically exposed.

4D allows you to handle the following datastores:

- the local datastore, based on the current 4D database, returned by the `ds` command (the main datastore).
- one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the `Open datastore` command.

A datastore references only a single local or remote database.

The datastore object itself cannot be copied as an object:

```4d
$mydatastore:=OB Copy(ds) //returns null
```


The datastore properties are however enumerable:


```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  //$prop contains the names of all the dataclasses
```



The main (default) datastore is always available through the `ds` command, but the `Open datastore` command allows referencing any remote datastore.

## Dataclass

A dataclass is the equivalent of a table. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Relational attributes can be used in queries like any other attribute.

All dataclasses in a 4D project are available as a property of the `ds` datastore. For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore.

For example, consider the following table in the 4D structure:

![](assets/en/Orda/companyTable.png)

The `Company` table is automatically available as a dataclass in the `ds` datastore. 以下のように書くことができます:

```4d
var $compClass : cs.Company //declares a $compClass object variable of the Company class
$compClass:=ds.Company //assigns the Company dataclass reference to $compClass
```

A dataclass object can contain:

*   attributes
*   relation attributes

The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. The dataclass is the only means to query the datastore. A query is done from a single dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked tables in a query.

The dataclass object itself cannot be copied as an object:

```4d
$mydataclass:=OB Copy(ds.Employee) //returns null
```

The dataclass properties are however enumerable:

```code4d
ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
//$prop contains the names of all the dataclasse attributes
```


## 属性

Dataclass properties are attribute objects describing the underlying fields or relations. たとえば:

```4d
 $nameAttribute:=ds.Company.name //reference to class attribute
 $revenuesAttribute:=ds.Company["revenues"] //alternate way
```

This code assigns to `$nameAttribute` and `$revenuesAttribute` references to the name and revenues attributes of the `Company` class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through [Entities](#entity).

All eligible fieds in a table are available as attributes of their parent [dataclass](#dataclass). For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute.


### Storage and Relation attributes

Dataclass attributes come in several kinds: storage, relatedEntity, and relatedEntities. Attributes that are scalar (*i.e.*, provide only a single value) support the standard 4D data type (integer, text, object, etc.).

*   A **storage attribute** is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type.
*   A **relation attribute** provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.

For example, consider the following partial database structure and the relation properties:

![](assets/en/Orda/relationProperties.png)

All storage attributes will be automatically available:

*   in the Project dataclass: "ID", "name", and "companyID"
*   in the Company dataclass: "ID", "name", and "discount"

In addition, the following relation attributes will also be automatically available:

*   in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
*   in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.
> The Manual or Automatic property of a database relation has no effect in ORDA.

All dataclass attributes are exposed as properties of the dataclass:

![](assets/en/Orda/dataclassProperties.png)

Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through [entity objects](entities.md#using-entity-attributes).

## エンティティ

An entity is the equivalent of a record. It is actually an object that references a record in the database. It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore.

The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection.

The entity object itself cannot be copied as an object:

```4d
 $myentity:=OB Copy(ds.Employee.get(1)) //returns null
```

The entity properties are however enumerable:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  //$prop contains the names of all the entity attributes
```


## エンティティセレクション

An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

例:

```4d
var $e : cs.EmployeeSelection //declares a $e object variable of the EmployeeSelection class type
$e:=ds.Employee.all() //assigns the resulting entity selection reference to the $e variable
```

Entity selections can be "ordered" or "unordered" (this point is discussed in below).

The entity selection object itself cannot be copied as an object:

```4d
 $myentitysel:=OB Copy(ds.Employee.all()) //returns null
```

The entity selection properties are however enumerable:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.all();$prop)
  //$prop contains the names of the entity selection properties
  //("length", 00", "01"...)
```


### Ordered or unordered entity selection

For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the `orderBy( )` method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".

Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:

*   result of an `orderBy()` on a selection (of any type) or an `orderBy()` on a dataclass
*   result of the `newSelection()` method with the `dk keep ordered` option

Unordered entity selections are created in the following cases:

*   result of a standard `query()` on a selection (of any type) or a `query()` on a dataclass,
*   result of the `newSelection()` method without option,
*   result of any of the comparison methods, whatever the input selection types: `or()`, `and()`, `minus()`.
> The following entity selections are always **ordered**:
> 
> * entity selections returned by 4D Server to a remote client
> * entity selections built upon remote datastores.

Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed.


## ストラクチャーマッピング

`ds` および `Open datastore` コマンドを使ってデータストアを呼び出すと、戻り値の [データストア](#データストア) オブジェクトには、対応する 4D ストラクチャーのテーブルとフィールドへの参照が属性として格納されています:

*   テーブルはデータクラスへとマップされます。
*   フィールドはストレージ属性へとマップされます。
*   リレーションはリレーション属性へとマップされます。ストラクチャーエディター内で定義されたリレーション名はリレーション属性名として使用されます。

![](assets/en/Orda/datastoreMapping.png)


### 変換のルール

変換の際には以下のルールが適用されます:

* テーブル、フィールド、そしてリレーション名はオブジェクトプロパティ名へとマップされます。 それらの名前が標準のオブジェクト命名規則に則っているようにしてください ([識別子の命名規則](Concepts/identifiers.md) 参照)。
*   データストアは単一のプライマリーキーを持つテーブルのみを参照します。 以下のテーブルは参照されません:
    *   プライマリーキーがないテーブル
    *   複合プライマリーキーを持つテーブル
*   [BLOB](Concepts/dt_blob.md) 型の属性はデータストア内では管理されません。 BLOB 型属性はエンティティ内で Null として返され、割り当てることができません。

> ORDA のデータストアマッピングでは、次のものは考慮されません:  
> - テーブルあるいはフィールドの"非表示"オプション<br /> - `SET TABLE TITLES` あるいは `SET FIELD TITLES` を通して定義されたバーチャルストラクチャー<br /> - リレーションの"手動"あるいは"自動"プロパティ


### リモートデータストアの利用

When accessing to a remote datastore through the `Open datastore` command, only tables and fields with the **Exposed as REST resource** property are available remotely.

This option must be selected at the 4D structure level for each table and field that you want to be exposed as dataclass in the datastore:

![](assets/en/Orda/ExposeDataclass.png)


### データモデルのアップデート

データベースストラクチャーレベルで変更がおこなわれると、カレントの ORDA モデルレイヤーは無効化されます。 これらの変更には、以下のものが含まれます:

*   テーブル、フィールド、リレーションの追加または削除
*   テーブル、フィールド、リレーションの名称変更
*   フィールドの核となるプロパティ (型、重複不可、インデックス、自動インクリメント、null値サポートなど) の変更

カレントの ORDA モデルレイヤーが無効化されると、その後 4D または 4D Server のローカルの `ds` データストアを呼び出した時にモデルレイヤーが自動的に再読み込みされ、更新されます。 ただし、エンティティやエンティティセレクションなど、ORDA オブジェクトへの既存の参照は、再生成されるまではそれらが作成されたときのモデルを使用し続けるという点に注意してください。

また、アップデートされた ORDA モデルレイヤーは、以下のコンテキストにおいては自動的には利用可能にはなりません:

*   4D Server に接続したリモートの 4D -- リモートのアプリケーションはサーバーに再接続する必要があります
*   a remote datastore (opened using `Open datastore`) -- a new session must be opened.
