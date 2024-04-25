---
id: dsmapping
title: データモデルオブジェクト
---

ORDA は、下地であるデータベースストラクチャーへの自動マッピングに基づいた技術です。 ORDA は、エンティティやエンティティセレクションオブジェクトを介してデータへのアクセスも提供します。 結果的に ORDA は、データモデルオブジェクト一式の形でデータベース全体を公開します。

## ストラクチャーマッピング

When you call a datastore using the [`ds`](API/DataStoreClass.md#ds) or the [`Open datastore`](API/DataStoreClass.md#open-datastore) command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned [datastore](#datastore) object:

- テーブルはデータクラスへとマップされます。
- フィールドはストレージ属性へとマップされます。
- リレーションはリレーション属性へとマップされます。ストラクチャーエディター内で定義されたリレーション名はリレーション属性名として使用されます。

![](../assets/en/ORDA/datastoreMapping.png)

### 変換のルール

変換の際には以下のルールが適用されます:

- テーブル、フィールド、そしてリレーション名はオブジェクトプロパティ名へとマップされます。 Make sure that such names comply with general object naming rules, as explained in the [object naming conventions](Concepts/identifiers.md) section.
- データストアは単一のプライマリーキーを持つテーブルのみを参照します。 以下のテーブルは参照されません:
  - プライマリーキーがないテーブル
  - 複合プライマリーキーを持つテーブル
- BLOB fields are automatically available as attributes of the [Blob object](Concepts/dt_blob.md#blob-types) type.

> ORDA のデータストアマッピングでは、次のものは考慮されません:
>
> - テーブルあるいはフィールドの "非表示" オプション
> - the virtual structure defined through `SET TABLE TITLES` or `SET FIELD TITLES`,
> - リレーションの "手動" あるいは "自動" プロパティ

### リモートデータストアの利用

When accessing a remote datastore through the `Open datastore` command or [REST requests](REST/gettingStarted.md), only tables and fields with the **Expose as REST resource** property are available remotely.

このプロパティは、データストアにデータクラスおよび属性として公開したい各テーブルおよびフィールドについて 4D ストラクチャーのレベルで設定する必要があります:

![](../assets/en/ORDA/ExposeDataclass.png)

### データモデルのアップデート

データベースストラクチャーレベルで変更がおこなわれると、カレントの ORDA モデルレイヤーは無効化されます。 これらの変更には、以下のものが含まれます:

- テーブル、フィールド、リレーションの追加または削除
- テーブル、フィールド、リレーションの名称変更
- フィールドの核となるプロパティ (型、重複不可、インデックス、自動インクリメント、null値サポートなど) の変更

When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local `ds` datastore on 4D and 4D Server. ただし、エンティティやエンティティセレクションなど、ORDA オブジェクトへの既存の参照は、再生成されるまではそれらが作成されたときのモデルを使用し続けるという点に注意してください。

また、アップデートされた ORDA モデルレイヤーは、以下のコンテキストにおいては自動的には利用可能にはなりません:

- 4D Server に接続したリモートの 4D -- リモートのアプリケーションはサーバーに再接続する必要があります
- a remote datastore opened using `Open datastore` or through [REST calls](REST/gettingStarted.md) -- a new session must be opened.

## オブジェクトの定義

### データストア

データストアは、データベースへのインターフェースオブジェクトです。 データベース全体を反映したものをオブジェクトとしてビルドします。 A datastore is made of a **model** and **data**:

- モデルにはデータストアを構成するすべてのデータクラスが格納され、その詳細な情報も含まれます。 これはその下地にあるデータベース自体からは独立した存在です。
- データとは、そのモデル内で使用・保存される情報を指します。 たとえば、従業員の名前、住所、生年月日などはデータストア内で扱うことができるデータに含まれます。

When handled through the code, the datastore is an object whose properties are all of the [dataclasses](#dataclass) which have been specifically exposed.

4D では次のデータストアを扱うことができます:

- the local datastore, based on the current 4D database, returned by the `ds` command (the main datastore).
- one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the `Open datastore` command.

データストアは単一の、ローカルあるいはリモートのデータベースを参照します。

データストアオブジェクト自身は、オブジェクトとしてコピーすることはできません:

```4d
$mydatastore:=OB Copy(ds) // null を返します
```

しかしながらデータストアプロパティは取得可能です:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  // $prop にはすべてのデータクラスの名前が格納されます
```

The main (default) datastore is always available through the `ds` command, but the `Open datastore` command allows referencing any remote datastore.

### データクラス

データクラスとは、テーブルに相当するものです。 オブジェクトモデルとして使用され、リレーショナル属性 (データクラス間のリレーションに基づいてビルドされた属性) を含めてすべてのフィールドを属性として参照します。 リレーショナル属性はクエリにおいて通常の属性のように使用することができます。

All dataclasses in a 4D project are available as a property of the `ds` datastore. For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore.

たとえば、4D ストラクチャー内の以下のテーブルについて考えます。

![](../assets/en/ORDA/companyTable.png)

The `Company` table is automatically available as a dataclass in the `ds` datastore. 以下のように書くことができます:

```4d
var $compClass : cs.Company // Company クラスのオブジェクト変数として $compClass を宣言します
$compClass:=ds.Company // Company データクラスへの参照を $compClass に代入します
```

データクラスオブジェクトは以下のものを格納することができます:

- attributes
- リレーション属性

データクラスは実際のデータベースの概略を提供し、概念的なデータモデルの管理を可能にします。 データクラスはデータストアをクエリする唯一の方法です。 クエリは単一のデータクラスを通して実行されます。 クエリはデータクラスの属性およびリレーション属性名に基づいてビルドされます。 リレーション属性は、一つのクエリ内で複数のリンクされたテーブルを用いる手段です。

データクラスオブジェクト自身は、オブジェクトとしてコピーすることはできません:

```4d
$mydataclass:=OB Copy(ds.Employee) // null を返します
```

しかしながらデータクラスプロパティは取得可能です:

```code4d
ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
// $prop にはすべてのデータクラス属性の名前が格納されます
```

### 属性

データクラスプロパティは、下地にあるフィールドやリレーションを説明する属性オブジェクトです。 例:

```4d
 $nameAttribute:=ds.Company.name // クラス属性への参照
 $revenuesAttribute:=ds.Company["revenues"] // 別の書き方
```

This code assigns to `$nameAttribute` and `$revenuesAttribute` references to the name and revenues attributes of the `Company` class. このシンタックスは属性内に保管されている値を返すのではありません。その代わりに、属性自身への参照を返します。 To handle values, you need to go through [Entities](#entity).

All eligible fields in a table are available as attributes of their parent [dataclass](#dataclass). For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute.

#### ストレージ属性とリレーション属性

データクラス属性にはいくつかの種類があります。ストレージ、リレートエンティティ、リレートエンティティズです。 Attributes that are scalar (_i.e._, provide only a single value) support all the standard 4D data types (integer, text, object, etc.).

- A **storage attribute** is equivalent to a field in the 4D database and can be indexed. ストレージ属性に割り当てられた値は、保存時にエンティティの一部として保存されます。 ストレージ属性にアクセスしたとき、その値はデータストアから直接取り出されます。 ストレージ属性はエンティティを構成するもっとも基礎的な要素であり、名前とデータ型により定義されます。
- A **relation attribute** provides access to other entities. リレーション属性は単一のエンティティ (あるいはエンティティなし) あるいはエンティティセレクション (0からNまでのエンティティ) のどちらかになります。 リレーション属性はリレーショナルストラクチャーの "クラシックな" リレーションに基づいており、リレートエンティティあるいはリレートエンティティズへの直接的なアクセスを提供します。 リレーション属性は、ORDA においては名前を使用することで直接的に利用可能です。

たとえば、以下の部分的なデータベースストラクチャーと、そのリレーションプロパティについて考えます:

![](../assets/en/ORDA/relationProperties.png)

すべてのストレージ属性は自動的に利用可能です:

- Project データクラス内: "ID", "name", および "companyID"
- Company データクラス内: "ID", "name", および "discount"

これに加えて、以下のリレーション属性もまた自動的に利用可能になります:

- in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
- in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.

> データベースリレーションの手動あるいは自動プロパティは、ORDA においては何の効力も持ちません。

すべてのデータクラス属性はデータクラスのプロパティとして公開されています:

![](../assets/en/ORDA/dataclassProperties.png)

これらのオブジェクトは属性を表しますが、データへのアクセスは与えないという点に注意してください。 Reading or writing data is done through [entity objects](entities.md#using-entity-attributes).

#### 計算属性とエイリアス属性

[Computed attributes](ordaClasses.md#computed-attributes) and [alias attributes](ordaClasses.md#alias-attributes) are "virtual" attributes. この属性値はアクセスされるたびに評価され、保存されません。 計算属性は、基礎となるデータベースストラクチャーには属しませんが、その上に構築され、データモデルの属性と同様に使用することができます。

### Entity

エンティティとは、レコードに相当するものです。 実際にはデータベース内のレコードを参照するオブジェクトです。 It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. 同時にエンティティは、データストアがもとにしているデータベースに相関するデータも格納しています。

エンティティの目的はデータの管理 (作成、更新、削除) です。 エンティティセレクションを用いてエンティティ参照を取得した場合、その参照にはエンティティセレクションについての情報も保持されるため、セレクションを走査することが可能です。

エンティティオブジェクト自身は、オブジェクトとしてコピーすることはできません:

```4d
 $myentity:=OB Copy(ds.Employee.get(1)) // null を返します
```

しかしながらエンティティプロパティは取得可能です:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  // $prop にはすべてのエンティティ属性の名前が格納されます
```

### エンティティセレクション

エンティティセレクションとは、同じデータクラスに所属する一つ以上のエンティティへの参照を格納しているオブジェクトのことです。 通常、クエリの結果として、あるいはリレーション属性の戻り値として作成されます。 エンティティセレクションは、データクラスから 0個、1個、あるいは X個のエンティティを格納することができます (X はデータクラスに格納されているエンティティの総数です)。

例:

```4d
var $e : cs.EmployeeSelection // EmployeeSelection クラスのオブジェクト変数として $e を宣言します
$e:=ds.Employee.all() // 結果のエンティティセレクションへの参照を $e に代入します
```

Entity selections can be "sorted" or "unsorted" ([see below](#ordered-or-unordered-entity-selection)).

> Entity selections can also be "shareable" or "non-shareable", depending on [how they have been created](entities.md#shareable-or-alterable-entity-selections).

エンティティセレクションオブジェクト自身は、オブジェクトとしてコピーすることはできません:

```4d
 $myentitysel:=OB Copy(ds.Employee.all()) // null を返します
```

しかしながらエンティティセレクションプロパティは取得可能です:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.all();$prop)
  // $prop にはエンティティセレクションのプロパティ名が格納されます
  // ("length", "00", "01"...)
```

#### エンティティセレクションの順列あり/順列なし

For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the `orderBy( )` method or use specific options. このドキュメントでは、指定されている場合を除き、"エンティティセレクション" は "順列なしのエンティティセレクション" を指すこととします。

順列ありのエンティティセレクションは、必要な場合において、あるいはオプションを使用して特別に要求した場合に限り作成されます。たとえば、以下のような場合です:

- result of an `orderBy()` on a selection (of any type) or an `orderBy()` on a dataclass
- result of the `newSelection()` method with the `dk keep ordered` option

順列なしのエンティティセレクションは以下のような場合に作成されます:

- result of a standard `query()` on a selection (of any type) or a `query()` on a dataclass,
- result of the `newSelection()` method without option,
- result of any of the comparison methods, whatever the input selection types: `or()`, `and()`, `minus()`.

> The following entity selections are always **ordered**:
>
> - 4D Server からリモートクライアントに返されるエンティティセレクション
> - リモートデータストアにおいて作成されるエンティティセレクション

順列ありのエンティティセレクションが順列なしのエンティティセレクションになった場合、重複したエンティティ参照はすべて削除されます。
