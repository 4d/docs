---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションの先頭をカレントレコードにするテーブル または省略時デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FIRST RECORD.Summary-->FIRST RECORDは、*aTable*のカレントセレクションの先頭レコードをディスクからロードし、カレントレコードに設定します。<!-- END REF-->すべての検索、選択、ソートコマンドも先頭のレコードをカレントレコードに設定します。カレントセレクションが存在しない場合や、カレントレコードが既にセレクションの最初のレコードである場合、FIRST RECORDは何も行いません。

このコマンドは[USE SET](use-set.md "USE SET")コマンドの後で、レコードセレクションを最初のレコードからループする際によく使用されます。しかし、カレントレコードが実際に先頭のレコードであるかどうかが確かではない場合にも呼び出すことができます。

#### 例題 

以下の例は、\[Customers\]テーブルの最初のレコ－ドをカレントレコ－ドにします:

```4d
 FIRST RECORD([Customers])
```

#### 参照 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 50 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||


