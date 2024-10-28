---
id: goto-record
title: GOTO RECORD
slug: /commands/goto-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO RECORD.Syntax-->**GOTO RECORD** ( {*aTable* ;} *record* )<!-- END REF-->
<!--REF #_command_.GOTO RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードを移動するテーブル, または 省略時、デフォルトテーブル |
| record | Integer | &#8594;  | Record numberで返される番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GOTO RECORD.Summary-->GOTO RECORDは、*aTable*中の指定したレコードをカレントレコードとして選択します。<!-- END REF-->*record*引数は、[Record number](record-number.md "Record number")コマンドで求めることのできるレコード番号です。このコマンドを実行するとセレクションは選択されたレコード1件だけになります。

*record*がデ－タベ－スの中で最も小さいレコ－ド番号よりも小さい場合や、最も大きいレコ－ド番号よりも大きい場合、4Dからレコード番号が範囲外である旨のエラーメッセージが表示されます。*record*が削除されたレコ－ドのレコ－ド番号と等しい場合、4Dはエラー-10503を返し、セレクションは空になります。

#### 例題 

[Record number](record-number.md "Record number")の例題参照

#### 参照 

[Record number](record-number.md)  
*レコード番号について*  