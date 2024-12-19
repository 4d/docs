---
id: use-entity-selection
title: USE ENTITY SELECTION
displayed_sidebar: docs
---

<!--REF #_command_.USE ENTITY SELECTION.Syntax-->**USE ENTITY SELECTION** ( *entitySelection* : 4D.EntitySelection )<!-- END REF-->

<!--REF #_command_.USE ENTITY SELECTION.Params-->

| 引数              | 型                                  |   | 説明           |
| --------------- | ---------------------------------- | - | ------------ |
| entitySelection | 4D.EntitySelection | → | エンティティセレクション |

<!-- END REF-->

#### 説明

`USE ENTITY SELECTION` コマンドは、<!--REF #_command_.USE ENTITY SELECTION.Summary-->*entitySelection* 引数のデータクラスに合致するテーブルのカレントセレクションを、渡したエンティティセレクションの内容で更新します<!-- END REF-->。

[リモートデータストア](../ORDA/remoteDatastores.md) の場合は、このコマンドは使用できません。

:::info

このコマンドは、4Dのカレントセレクションが ORDAクエリの力を活用するためのものです。 パフォーマンス上の理由により、シングルユーザーの 4D と 4D Server では、このコマンドは *entitySelection* をカレントセレクションと直結します。 そのため、このコマンドに受け渡した *entitySelection* をその後に再利用したり変更したりすることは避けなければなりません。

:::

:::note

`USE ENTITY SELECTION` の呼び出し後、更新された (空でない) カレントセレクションの最初のレコードがカレントレコードとなりますが、それはメモリ内にはロードされません。 カレントレコードのフィールド値を使用するには、`USE ENTITY SELECTION` コマンドの後に `LOAD RECORD` コマンドを使用します。

:::

#### 例題

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1";"M@") // $entitySel は Employee データクラスにリレートされています
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) // Employee テーブルのカレントセレクションが更新されます
```

#### 参照

[Create entity selection](create-entity-selection.md)
