---
id: all-records
title: ALL RECORDS
slug: /commands/all-records
displayed_sidebar: docs
---

<!--REF #_command_.ALL RECORDS.Syntax-->**ALL RECORDS** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.ALL RECORDS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | すべてのレコードを選択するテーブル 省略時、デフォルトテーブル |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.ALL RECORDS.Summary-->ALL RECORDSは、*aTable*の全レコードをカレントプロセスのカレントセレクションにします。<!-- END REF-->ALL RECORDSは先頭のレコードをディスクからロードし、カレントレコードに設定します。ALL RECORDSは、レコードの順序をデフォルトのレコード順序に戻します。

## 例題 

以下の例は、\[People\]テーブルのすべてのレコードを表示します:

```4d
 ALL RECORDS([People]) // テーブルの全レコードをカレントセレクションにする
 DISPLAY SELECTION([People]) // 出力フォームにレコードを表示
```

## 参照 

[DISPLAY SELECTION](../commands/display-selection)  
[MODIFY SELECTION](../commands/modify-selection)  
[ORDER BY](../commands/order-by)  
[QUERY](../commands/query)  
[Records in selection](../commands/records-in-selection)  
[Records in table](../commands/records-in-table)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 47 |
| スレッドセーフである | yes |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||


