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

データストアは、データベースへのインターフェースオブジェクトです。 データベース全体を反映したものをオブジェクトとしてビルドします。 データストアは **モデル** と **データ** から構成されています:

- モデルにはデータストアを構成するすべてのデータクラスが格納され、その詳細な情報も含まれます。 これはその下地にあるデータベース自体からは独立した存在です。
- データとは、そのモデル内で使用・保存される情報を指します。 たとえば、従業員の名前、住所、生年月日などはデータストア内で扱うことができるデータに含まれます。

コード内で扱うにあたっては、データストアはオブジェクトであり、公開されているすべての [データクラス](#dataclass) をプロパティとして持ちます。

4D では次のデータストアを扱うことができます:

- カレント 4D データベースに基づいた、ローカルデータストア。これは、`ds` コマンドで返されるメインデータストアです。
- リモートデータベースによって REST リソースとして公開された、一つ以上のリモートデータストア。これらは、`Open datastore` コマンドで返されます。

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



メイン (デフォルト) のデータストアは `ds` コマンドを通して常に利用可能です。`Open datastore` コマンドを使えば、あらゆるリモートデータストアを参照することができます。

## Dataclass

データクラスとは、テーブルに相当するものです。 オブジェクトモデルとして使用され、リレーショナル属性 (データクラス間のリレーションに基づいてビルドされた属性) を含めてすべてのフィールドを属性として参照します。 リレーショナル属性はクエリにおいて通常の属性のように使用することができます。

4D プロジェクト内のすべてのデータクラスは、`ds` データストアのプロパティとして利用可能です。 `Open datastore` コマンドまたは [REST リクエスト](REST/gettingStarted.md) によってアクセスするリモートデータストアの場合、データストアのデータクラスとして公開したい各テーブルについて 4D ストラクチャーのレベルで **RESTリソースとして公開** プロパティを設定する必要があります。

たとえば、4D ストラクチャー内の以下のテーブルについて考えます。

![](assets/en/Orda/companyTable.png)

`Company` テーブルは `ds` データストア内のデータクラスとして自動的に利用可能です。 以下のように書くことができます:

```4d
var $compClass : cs.Company // Company クラスのオブジェクト変数として $compClass を宣言します
$compClass:=ds.Company // Company データクラスへの参照を $compClass に代入します
```

データクラスオブジェクトは以下のものを格納することができます:

*   attributes
*   リレーション属性

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


## 属性

データクラスプロパティは、下地にあるフィールドやリレーションを説明する属性オブジェクトです。 たとえば:

```4d
 $nameAttribute:=ds.Company.name // クラス属性への参照
 $revenuesAttribute:=ds.Company["revenues"] // 別の書き方
```

このコードは、`$nameAttribute` および `$revenuesAttribute` に、`Company` クラスの name および revenues 属性の参照をそれぞれ代入します。 このシンタックスは属性内に保管されている値を返すのではありません。その代わりに、属性自身への参照を返します。 値を管理するためには、[エンティティ](#エンティティ) を使用する必要があります。

テーブル内の適格なフィールドはすべて、親 [データクラス](#データクラス) の属性として利用可能です。 `Open datastore` コマンドまたは [REST リクエスト](REST/gettingStarted.md) によってアクセスするリモートデータストアの場合、データクラスの属性として公開したい各フィールドについて 4D ストラクチャーのレベルで **RESTリソースとして公開** プロパティを設定する必要があります。


### ストレージ属性とリレーション属性

データクラス属性にはいくつかの種類があります。ストレージ、リレートエンティティ、リレートエンティティズです。 スカラーである属性 (単一の値のみを提供するもの) は標準の 4D データ型 (整数、テキスト、オブジェクトなど) をサポートします。

*   **ストレージ属性** は4D データベース内のフィールドに相当するもので、インデックスをつけることができます。 ストレージ属性に割り当てられた値は、保存時にエンティティの一部として保存されます。 ストレージ属性にアクセスしたとき、その値はデータストアから直接取り出されます。 ストレージ属性はエンティティを構成するもっとも基礎的な要素であり、名前とデータ型により定義されます。
*   **リレーション属性** は他のエンティティへのアクセスを提供します。 リレーション属性は単一のエンティティ (あるいはエンティティなし) あるいはエンティティセレクション (0からNまでのエンティティ) のどちらかになります。 リレーション属性はリレーショナルストラクチャーの "クラシックな" リレーションに基づいており、リレートエンティティあるいはリレートエンティティズへの直接的なアクセスを提供します。 リレーション属性は、ORDA においては名前を使用することで直接的に利用可能です。

たとえば、以下の部分的なデータベースストラクチャーと、そのリレーションプロパティについて考えます:

![](assets/en/Orda/relationProperties.png)

すべてのストレージ属性は自動的に利用可能です:

*   Project データクラス内: "ID", "name", および "companyID"
*   Company データクラス内: "ID", "name", および "discount"

これに加えて、以下のリレーション属性もまた自動的に利用可能になります:

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
