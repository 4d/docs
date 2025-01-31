---
id: records-in-selection
title: Records in selection
slug: /commands/records-in-selection
displayed_sidebar: docs
---

<!--REF #_command_.Records in selection.Syntax-->**Records in selection** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in selection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントセレクション数を返すテーブル 省略時、デフォルトテーブル |
| 戻り値 | Integer | &#8592; | カレントセレクションのレコード数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Records in selection.Summary-->Records in selectionは、*aTable*のカレントセレクションのレコード数を返します。<!-- END REF-->一方、[Records in table](records-in-table.md "Records in table")はテーブルの全レコード数を返します。

#### 例題 

以下の例は、カレントセレクションのすべてのレコード間を移動するのによく使用されるループ処理です。同じ動作は[APPLY TO SELECTION](apply-to-selection.md "APPLY TO SELECTION")コマンドで行うこともできます:

```4d
 FIRST RECORD([People]) // セレクションの最初のレコードから開始
 For($vlRecord;1;Records in selection([People])) // レコード毎にループ
    Do Something // レコードに処理を行う
    NEXT RECORD([People]) // 次のレコードに移動
 End for
```

#### 参照 

[Records in table](records-in-table.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 76 |
| スレッドセーフである | &check; |


