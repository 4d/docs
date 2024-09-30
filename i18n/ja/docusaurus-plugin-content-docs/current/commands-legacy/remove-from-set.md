---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | テーブル | &#x1F852; | カレントレコードのテーブル、または 省略時、デフォルトテーブル |
| set | 文字 | &#x1F852; | カレントレコードを取り除くセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.REMOVE FROM SET.Summary-->REMOVE FROM SETコマンドは、*set*から*aTable*のカレントレコードを取り除きます。<!-- END REF-->セットは存在していなければならず、存在していない場合には、エラーが発生します。テーブルに対するカレントレコードがない場合、REMOVE FROM SETコマンドは何も行いません。

#### 参照 

[ADD TO SET](add-to-set.md)  