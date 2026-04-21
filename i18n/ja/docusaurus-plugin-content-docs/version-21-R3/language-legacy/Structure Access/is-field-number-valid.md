---
id: is-field-number-valid
title: Is field number valid
slug: /commands/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( *tablePtr* : 倍長整数, ポインター ; *fieldNum* : Integer ) : Boolean<br/>**Is field number valid** ( *tableNum* : 倍長整数, ポインター ; *fieldNum* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field number valid.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum &#124; tablePtr | 倍長整数, ポインター | &#8594; | テーブル番号またはテーブルへのポインタ |
| fieldNum | Integer | &#8594; | フィールド番号 |
| 戻り値 | Boolean | &#8592; | True = テーブルにあるフィールド False = フィールドがテーブルに存在しない |
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

<!--REF #_command_.Is field number valid.Summary-->Is field number validコマンドは、引数*fieldNum*に渡したフィールド番号のフィールドが、引数*tableNum*または*tablePtr*に渡したテーブル番号またはポインタのテーブルに存在する場合、Trueを返します。<!-- END REF-->フィールドが存在しない場合、コマンドはFalesを返します。また、フィールドを持つテーブルがエクスプローラーのごみ箱にある場合も、コマンドはFalesを返しますので注意してください。

このコマンドを使用して、フィールドの削除により生じる一連のフィールド番号の欠番を検知することができます。

## 参照 

[Last table number](../commands/last-table-number)  
[Is table number valid](../commands/is-table-number-valid)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1000 |
| スレッドセーフである | yes |


