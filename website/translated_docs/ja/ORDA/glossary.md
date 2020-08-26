---
id: glossary
title: 用語集
---

## 主なコンセプトの概要

![](assets/en/Orda/mainConcepts.png)



## 属性

属性とは、リレーショナルデータベース内における最小の保存セルです ([リレーション属性](#リレーション属性) も参照してください)。 データクラス属性とエンティティ属性を混同しないようにしてください:

*   データクラスオブジェクトにおける各プロパティは、対応するテーブルの対応するフィールドへとマップするデータクラス属性です (同じ名前と型)。
*   エンティティオブジェクトにおけるエンティティ属性は、対応するデータストア属性の値を格納するプロパティです。
> *属性* と *プロパティ* は似た概念です。 "属性" はデータを保存するデータクラスプロパティを指定するのに使われるのに対し、"プロパティ"はより一般的な概念でオブジェクト内で保存されるデータを定義します。

## 属性パス

属性パスとは、あるデータクラスあるいはエンティティ内の属性へのパスです。 [プロパティパス](#プロパティパス) も参照してください。


## クラスコード

ユーザークラス関数のコード。

## Class function

ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific functions to directly interact with them, named class functions. Such functions are used by calling them on an instance of the object.

These methods are also called **member functions**, or **member methods**.

For example, the `query()` class function is a function of dataclasses. If you have stored a dataclass object in the `$myClass` variable, you can write:

```code4d
$myClass.query("name = smith")
```


## Data model class

Extended class available for a data model object.

## Data model object

Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections.

## Data model function

Function of an ORDA data model class.

## データクラス

データクラスとは、データを記述するオブジェクトモデルです。 データストアによって提供されるデータベースのテーブルは、データクラスを通して管理されます。 データストアから提供されたデータベースの各テーブルは、対応する同名のデータクラスを持ちます。 テーブルの各フィールドは、データクラスの属性です。

データクラスは単一のデータストアにリレートされています。


## DataClass クラス

カスタム関数を追加することのできる、特定のデータクラスオブジェクト用のクラス。

## データストア

データストアとは、ORDA によって提供されるインターフェースオブジェクトです。データストアはストラクチャーを参照し、データへのアクセスを提供します。 `ds` コマンドによって返されるメインデータベースは、データストア (メインデータストア) として利用可能です。

データストアは以下のものを提供します:

*   4Dデータベースへの接続
*   データベースを扱うためのデータクラスのセット

利用できるデータベースは、スタンダロンまたはクライアント/サーバーで開いているメインの 4D データベース (メインデータストア)、および REST リソースとして公開された 4D Server データベースです (リモートデータストア)。

データストアは単一のデータベースのみを参照しますが、 複数のデータベースをアクセスするために複数のデータストアを開くことも可能です。

## DataStore クラス

カスタム関数を追加することのできる、データストアオブジェクト用のクラス。


## DataStoreImplementation

`4D` クラスストア内の DataStore クラスの内部的な名称。

## ディープコピー

ディープコピーとは、あるオブジェクトとそこに格納されるすべての参照の複製です。 ディープコピーのあと、コピーされたコレクションには、すべてのオリジナル要素の複製、つまり新規参照が格納されています。 [シャロウコピー](#シャロウコピー) も合わせて参照してください。

## ds

`ds` is the 4D language command that returns a [datastore](dsMapping.md#datastore) object reference. It matches the datastore available upon the 4D main database.

## エンティティ

An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass.

An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. エンティティの目的はデータの管理 (作成、更新、削除) です。

For more information, see Entities.

## エンティティセレクション

An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass.

An entity selection contains:

*   a set of 0 to X entity references,
*   a length property (always),
*   queryPlan and queryPath properties (if asked while querying).

An entity selection can also be empty.


## Generic class

Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in data model classes, e.g. `EmployeeEntity`.


## Lazy loading

Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading.

## Main datastore

The Datastore object matching the opened 4D database (standalone or client/server). The main datastore is returned by the ds command.

## メソッド

See [class function](#class-function).

## Mixed data type

In this documentation, "Mixed" data type is used to designate the various type of values that can be stored within dataclass attributes. :

*   number
*   text
*   null
*   boolean
*   date
*   オブジェクト
*   コレクション
*   picture(\*)

*(\*) picture type is not supported by statistical methods such as* `entitySelection.max( )`.

## Optimistic Lock

In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".

## Pessimistic Lock

A "pessimistic lock" means that an entity is locked prior to its being accessed, using the entity.lock( ) method. Other processes can neither update nor drop the entity until it is unlocked. The classic 4D language only allows pessimistic locks. See "Optimistic lock".

## プロパティ

See [Attribute](#attribute).
> Attributes and properties are similar concepts. "属性" はデータを保存するデータクラスプロパティを指定するのに使われるのに対し、"プロパティ"はより一般的な概念でオブジェクト内で保存されるデータを定義します。

## PropertyPath

A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").

## Regular class

User class not related to an ORDA object.

## Related dataclass

These are dataclasses linked by relation attributes.

## Relation attribute

Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many).

*   Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.
*   One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.

A dataclass can have recursive relation attributes.

In an entity, the value of a relation attribute can be an entity or an entity selection.

## Related entities

A related entity can be seen as the instance of a relation attribute in a dataclass.

Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.

## Remote datastore

A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). This use is submitted to a licencing system.

## Session

When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). A session cookie is generated and associated to the local datastore id.

Each time a new session is opened, a license is used. Each time a session is closed, the license is freed.

Inactive sessions are automatically closed after a timeout. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes).

## Shallow copy

A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also Deep copy.

## Stamp

Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, 4D can prevent concurrent modifications on the same entities.