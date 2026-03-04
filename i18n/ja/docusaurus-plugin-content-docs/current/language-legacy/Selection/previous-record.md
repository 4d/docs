---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | セレクションの前レコードをカレントレコードにする テーブル、省略時はデフォルトテーブル |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.PREVIOUS RECORD.Summary-->PREVIOUS RECORDは、カレントプロセスの*aTable*のカレントセレクションにある1つ前のレコードへカレントレコードポインタを移動します。<!-- END REF-->カレントセレクションが空の場合、または[Before selection](before-selection.md "Before selection")や[End selection](end-selection.md "End selection")がTRUEの場合、PREVIOUS RECORDは何も行いません。

PREVIOUS RECORDで、カレントセレクションの前にカレントレコードポインタを移動した場合は、[Before selection](before-selection.md "Before selection")はTRUEを返し、カレントレコードはなくなります。この場合、[FIRST RECORD](first-record.md "FIRST RECORD")、[LAST RECORD](last-record.md "LAST RECORD")、[GOTO SELECTED RECORD](goto-selected-record.md "GOTO SELECTED RECORD")を使用して、カレントレコードポインタをカレントセレクション内に戻します。 

## 参照 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[NEXT RECORD](../commands/next-record)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 110 |
| スレッドセーフである | yes |
| カレントレコードを変更する ||


