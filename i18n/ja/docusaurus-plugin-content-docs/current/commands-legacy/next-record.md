---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードをセレクションの次のレコードに 移動するテーブル、省略時はデフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.NEXT RECORD.Summary-->NEXT RECORDは、カレントプロセスの*aTable*のカレントセレクションにある次のレコードへカレントレコードポインタを移動します。<!-- END REF-->カレントセレクションが空の場合、あるいは[Before Selection](before-selection.md "Before Selection")または[End selection](end-selection.md "End selection")がTRUEの場合、NEXT RECORDは何も行いません。

NEXT RECORDでカレントセレクションの最後を超えてカレントレコードポインタを移動した場合、[End selection](end-selection.md "End selection")はTRUEを返しカレントレコードはなくなります。この場合、[FIRST RECORD](first-record.md "FIRST RECORD")、[LAST RECORD](last-record.md "LAST RECORD")、[GOTO SELECTED RECORD](goto-selected-record.md "GOTO SELECTED RECORD")コマンドを使用して、カレントレコードポインタをカレントセレクション内に戻します。

#### 例題 

[DISPLAY RECORD](display-record.md "DISPLAY RECORD")の例題参照

#### 参照 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[PREVIOUS RECORD](previous-record.md)  