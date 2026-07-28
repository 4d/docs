---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*aTable* : Table ;} *set* : Text )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | カレントレコードのテーブル、または 省略時、デフォルトテーブル |
| set | Text | &#8594; | カレントレコードを取り除くセットの名前 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.REMOVE FROM SET.Summary-->REMOVE FROM SETコマンドは、*set*から*aTable*のカレントレコードを取り除きます。<!-- END REF-->セットは存在していなければならず、存在していない場合には、エラーが発生します。テーブルに対するカレントレコードがない場合、REMOVE FROM SETコマンドは何も行いません。

## 参照 

[ADD TO SET](../commands/add-to-set)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 561 |
| スレッドセーフである | yes |
| システム変数を更新する | error |


