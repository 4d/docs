---
id: create-entity-selection
title: Create entity selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->***Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->

<!--REF #_command_.Create entity selection.Params-->

| 引数       | 型                                  |                            | 説明                                            |
| -------- | ---------------------------------- | -------------------------- | --------------------------------------------- |
| dsTable  | テーブル                               | &#8594; | エンティティセレクションの元となるカレントセレクションが属する 4Dデータベースのテーブル |
| settings | オブジェクト                             | &#8594 | ビルドオプション: context             |
| 戻り値      | 4D.EntitySelection | &#8592; | 指定したテーブルに対応するデータクラスのエンティティセレクション              |

<!-- END REF-->

#### 説明

The `Create entity selection` command <!--REF #_command_.Create entity selection.Summary-->builds and returns a new, [alterable](../ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table<!-- END REF-->.

If the current selection is sorted, an [ordered](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。

If the *dsTable* is not exposed in [`ds`](ds.md), an error is returned. リモートデータストアの場合は、このコマンドは使用できません。

任意の *settings* には、以下のプロパティを持つオブジェクトを渡せます:

| プロパティ   | 型    | 説明                                                                            |
| ------- | ---- | ----------------------------------------------------------------------------- |
| context | テキスト | エンティティセレクションに適用されている [最適化コンテキスト](../ORDA/client-server-optimization.md) のラベル。 |

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
