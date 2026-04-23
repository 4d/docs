---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *tableNum* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594; | テーブル番号 |
| 戻り値 | Boolean | &#8592; | True = テーブルがデータベースに存在する False = テーブルがデータベースに存在しない |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Is table number valid.Summary-->Is table number validコマンドは、引数*tableNum*に渡したテーブル番号のテーブルがデータベースに存在する場合、Trueを返します。<!-- END REF-->その他の場合は、Falseを返します。また、テーブルがエクスプローラーのごみ箱にある場合、コマンドはFalseを返しますので注意してください。

このコマンドを使用して、フィールドの削除により生じる一連のフィールド番号の欠番を検知することができます。

## 参照 

[Last table number](../commands/last-table-number)  
[Is field number valid](../commands/is-field-number-valid)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 999 |
| スレッドセーフである | yes |


