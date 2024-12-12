---
id: pop-record
title: POP RECORD
slug: /commands/pop-record
displayed_sidebar: docs
---

<!--REF #_command_.POP RECORD.Syntax-->**POP RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.POP RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードをポップするテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.POP RECORD.Summary-->POP RECORDは、*aTable*に属するレコードを、そのテーブルのレコードスタックからポップし、そのレコードをカレントレコードにします。<!-- END REF-->

レコードをプッシュした後に、プッシュしたレコードを含まないようにカレントセレクションを変更した場合、レコードをポップしてもカレントレコードはカレントセレクションに含まれません。ポップしたレコードをカレントセレクションのレコードにするには、[ONE RECORD SELECT](one-record-select.md "ONE RECORD SELECT")を使用します。レコードを保存する前にレコードポインタを移動するようなコマンドを実行した場合、メモリ上のコピーを失います。

#### 例題 

以下の例はCustomers”テーブルのレコードをレコードスタックからポップします:

```4d
 POP RECORD([Customers]) // Pop customer’s record onto stack
```

#### 参照 

[PUSH RECORD](push-record.md)  
*レコードスタックの使用*  