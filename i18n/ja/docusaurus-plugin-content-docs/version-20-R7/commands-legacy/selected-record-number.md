---
id: selected-record-number
title: Selected record number
slug: /commands/selected-record-number
displayed_sidebar: docs
---

<!--REF #_command_.Selected record number.Syntax-->**Selected record number** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Selected record number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコード位置番号を取得するテーブル、または 省略時はデフォルトテーブル |
| 戻り値 | Integer | &#8592; | カレントレコードのレコード位置番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Selected record number.Summary-->Selected record numberは、*aTable*のカレントセレクション内でのカレントレコードの位置を返します。<!-- END REF-->

セレクションが空ではなく、カレントレコードがそのセレクションに含まれるときに、Selected record numberは1から[Records in selection](records-in-selection.md "Records in selection")までの値を返します。セレクションが空かカレントレコードが存在しない場合、この関数は0を返します。

レコード位置番号は、[Record number](record-number.md "Record number")で求めるレコード番号とは異なります。[Record number](record-number.md "Record number")は絶対レコード番号を返します。レコ－ド位置番号は、カレントセレクションおよびカレントレコードに依存します。

#### 例題 

以下の例は、カレントレコードのレコード位置番号を変数に格納します:

```4d
 CurSelRecNum:=Selected record number([People]) // レコード位置番号を取得
```

#### 参照 

[GOTO SELECTED RECORD](goto-selected-record.md)  
[Records in selection](records-in-selection.md)  
*レコード番号について*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 246 |
| スレッドセーフである | &check; |


