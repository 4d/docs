---
id: create-entity-selection
title: Create entity selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->***Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->

<!--REF #_command_.Create entity selection.Params-->

| 引数       | 型                                  |   | 説明                                            |
| -------- | ---------------------------------- | - | --------------------------------------------- |
| dsTable  | テーブル                               | → | エンティティセレクションの元となるカレントセレクションが属する 4Dデータベースのテーブル |
| settings | Object                             | → | ビルドオプション: context             |
| 戻り値      | 4D.EntitySelection | ← | 指定したテーブルに対応するデータクラスのエンティティセレクション              |

<!-- END REF-->

#### 説明

`Create entity selection` コマンドは、<!--REF #_command_.Create entity selection.Summary-->*dsTable* で指定したテーブルに対応するデータクラスの[追加可能な](../ORDA/entities.md#shareable-or-alterable-entity-selections)新規エンティティセレくションを、同テーブルのカレントセレクションに基づいてビルドして返します。<!-- END REF-->

ソートされたカレントセレクションの場合、[順列のある](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) エンティティセレクションが作成されます (カレントセレクションの並び順が受け継がれます)。 カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。 カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。 カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。 カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。

[`ds`](ds.md) において *dsTable* が公開されていない場合には、エラーが返されます。 リモートデータストアの場合は、このコマンドは使用できません。 リモートデータストアの場合は、このコマンドは使用できません。

任意の *settings* には、以下のプロパティを持つオブジェクトを渡せます:

| プロパティ   | 型    | 説明                                                                            |
| ------- | ---- | ----------------------------------------------------------------------------- |
| context | Text | エンティティセレクションに適用されている [最適化コンテキスト](../ORDA/client-server-optimization.md) のラベル。 |

#### 例題

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee])
// $employees エンティティセレクションには、
// Employee データクラスの全エンティティへの参照が格納されています
```

#### 参照

[USE ENTITY SELECTION](use-entity-selection.md)<br/>[`dataClass.newSelection()`](../API/DataClassClass.md#newselection)
