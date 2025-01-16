---
id: is-field-number-valid
title: Is field number valid
slug: /commands/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( tableNum | tablePtr ; *fieldNum* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field number valid.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum &#124; tablePtr | 倍長整数, ポインター | &#8594;  | テーブル番号またはテーブルへのポインタ |
| fieldNum | Integer | &#8594;  | フィールド番号 |
| 戻り値 | Boolean | &#8592; | True = テーブルにあるフィールド False = フィールドがテーブルに存在しない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is field number valid.Summary-->Is field number validコマンドは、引数*fieldNum*に渡したフィールド番号のフィールドが、引数*tableNum*または*tablePtr*に渡したテーブル番号またはポインタのテーブルに存在する場合、Trueを返します。<!-- END REF-->フィールドが存在しない場合、コマンドはFalesを返します。また、フィールドを持つテーブルがエクスプローラーのごみ箱にある場合も、コマンドはFalesを返しますので注意してください。

このコマンドを使用して、フィールドの削除により生じる一連のフィールド番号の欠番を検知することができます。

#### 参照 

[Last table number](last-table-number.md)  
[Is table number valid](is-table-number-valid.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1000 |
| スレッドセーフである | &check; |


