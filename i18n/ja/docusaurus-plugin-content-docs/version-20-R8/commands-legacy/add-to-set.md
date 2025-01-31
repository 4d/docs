---
id: add-to-set
title: ADD TO SET
slug: /commands/add-to-set
displayed_sidebar: docs
---

<!--REF #_command_.ADD TO SET.Syntax-->**ADD TO SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.ADD TO SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードのテーブル, または 省略時デフォルトテーブル |
| set | Text | &#8594;  | カレントレコードを追加するセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ADD TO SET.Summary-->ADD TO SETは、*set*に*aTable*のカレントレコードを追加します。<!-- END REF-->ここで使用するセットは既に作成されていなければなりません。存在しない場合エラーになります。*aTable*にカレントレコードが存在しない場合には、ADD TO SETは何も行いません。

#### 参照 

[REMOVE FROM SET](remove-from-set.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 119 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


