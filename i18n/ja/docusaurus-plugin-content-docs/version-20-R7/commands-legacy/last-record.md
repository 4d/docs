---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードをセレクションの最後に移動する テーブル、または省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LAST RECORD.Summary-->**LAST RECORD**は、*aTable*のカレントセレクションの最後のレコードをディスクからロードし、カレントレコードに設定します。<!-- END REF-->カレントセレクションが空の場合、または当該レコードが既にカレントレコードである場合、**LAST RECORD**は何も行いません。

#### 例題 

以下の例は、\[People\]テーブルの最後のレコ－ドをカレントレコ－ドにします。:

```4d
 LAST RECORD([People])
```

#### 参照 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  