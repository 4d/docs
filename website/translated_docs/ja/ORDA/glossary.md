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

## クラス関数

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

ディープコピーは、あるオブジェクトとそこに格納されているすべての参照を複製します。 ディープコピーのあと、コピーされたコレクションには、すべてのオリジナル要素の複製 (つまり新規参照) が格納されています。 [シャロウコピー](#シャロウコピー) も合わせて参照してください。

## ds

`ds` は、[データストア](dsMapping.md#データストア) のオブジェクト参照を返す 4Dランゲージコマンドです。 この参照は 4D のメインデータベースが提供するデータストアに合致します。

## エンティティ

エンティティとは、データクラスモデルに対応するオブジェクトです。 エンンティティには、データクラスと同じ属性が格納されます。

エンティティは、データクラスのインスタンスとも解釈可能なオブジェクトです。 しかしながら、エンティティはリレートされたデータも格納しています。 エンティティの目的はデータの管理 (作成、更新、削除) です。

詳細な情報については、[エンティティ](entities.md) を参照してください。

## エンティティセレクション

エンティティセレクションは、一つのオブジェクトです。 データストアをクエリすると、エンティティセレクションが返されます。 エンティティセレクションとは、同じデータクラスに所属するエンティティへの参照のセットのことです。

エンティティセレクションは以下を格納します:

*   0 から X までのエンティティ参照のセット
*   length プロパティ(常に存在します)
*   queryPlan および queryPath プロパティ (クエリ時に要求した場合に存在します)

エンティティセレクションは空であることもあります。


## Generic class

Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in data model classes, e.g. `EmployeeEntity`.


## レイジーローディング

エンティティは参照として管理されているため、データは必要なときにのみロードされます。つまりコードや、インターフェースウィジェットを通してアクセスしたときなどです。 この最適化原理は、レイジーローディングと呼ばれています。

## メインデータストア

開かれている 4Dデータベース (シングルユーザーまたはクライアント/サーバー) に対応するデータストアオブジェクト。 メインデータストアは `ds` コマンドによって返されます。

## メソッド

[クラス関数](#クラス関数) を参照してください。

## ミックスデータ型

このドキュメントでは、データクラス属性に保存可能な値の様々な型を指定するために、"ミックス" データ型が使用されます。 :

*   number
*   text
*   null
*   boolean
*   date
*   オブジェクト
*   コレクション
*   ピクチャー (\*)

*(\*) ピクチャー型は* `entitySelection.max( )` *などの統計型メソッドではサポートされていません。*

## オプティミスティック・ロック

"オプティミスティック・ロック" モードでは、エンティティは更新されるまでは明示的にはロックされていません。 各エンティティは、そのエンティティがディスクに保存されるたびに自動でインクリメントされる内部スタンプを持っています。 `entity.save( )` および `entity.drop( )` メソッドは(メモリ内に) ロードされたスタンプと、ディスク上のエンティティのスタンプが合致しない場合、あるいはエンティティがドロップされている場合にはエラーを返します。 オプティミスティック・ロックは ORDA 実装内でのみ使用可能です。 [ペシミスティック・ロック](#ペシミスティック・ロック) も合わせて参照してください。

## ペシミスティック・ロック

"ペシミスティック・ロック" とは、`entity.lock( )` メソッドにより、エンティティがアクセスされる前にそれをロックすることを意味します。 ロックが解除されるまで、他のプロセスからはそのエンティティを更新することも、ドロップすることもできません。 クラシック 4Dランゲージにおいてはペシミスティック・ロックのみが利用可能です。 [オプティミスティック・ロック](#オプティミスティック・ロック) も合わせて参照してください。

## プロパティ

[属性](#属性) を参照してください。
> 属性とプロパティは似た概念です。 "属性" はデータを保存するデータクラスプロパティを指定するのに使われるのに対し、"プロパティ"はより一般的な概念でオブジェクト内で保存されるデータを定義します。

## プロパティパス

プロパティパスとは、あるオブジェクトのプロパティへのパスです。 プロパティが複数の階層にネストされている場合、各階層はドット (".") によって区切られます。

## Regular class

User class not related to an ORDA object.

## リレートされたデータクラス

リレートされたデータクラスとは、リレーション属性によってリンクされたデータクラスのことを指します。

## リレーション属性

リレーション属性は、データクラス間のリレーション (1対N および N対1) を概念化するものです。

*   N対1リレーション (データクラスA はデータクラスB のオカレンスを参照します): リレーション属性はデータクラスA 内で利用可能で、データクラスB の一つのインスタンスを参照します。
*   1対Nリレーション (データクラスB のオカレンスがデータクラスA の複数のオカレンスを参照します): リレーション属性はデータクラスB 内で利用可能で、データクラスA の複数のインスタンスを参照します。

データクラスは再帰的なリレーション属性を持つことができます。

エンティティ内では、リレーション属性の値はエンティティあるいはエンティティセレクションとなります。

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