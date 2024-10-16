---
id: save-record
title: SAVE RECORD
slug: /commands/save-record
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RECORD.Syntax-->**SAVE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.SAVE RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードを保存するテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAVE RECORD.Summary-->SAVE RECORD は、カレントプロセスの*aTable*のカレントレコードを保存します。<!-- END REF-->カレントレコードが存在しない場合、SAVE RECORD は何も行いません。

SAVE RECORD は、プログラムコードを使って新しく作成または修正したレコードを保存するために使用します。フォームでユーザが修正し確定したレコードは、SAVE RECORD で保存する必要はありません。ユーザによってフォーム中で修正されたレコードがキャンセルされた場合でも、SAVE RECORD で保存することができます。

レコード中のフィールドデータが変更されていない状態で SAVE RECORD  コマンドを呼び出しても、コマンドはなにも行いません (トリガは呼び出されません)。 

SAVE RECORD が必要とされる場合を次に示します:

* [CREATE RECORD](create-record.md) や [DUPLICATE RECORD](duplicate-record.md)で作成した新しいレコードを保存する場合
* [RECEIVE RECORD](receive-record.md)で取得したレコードを保存する場合
* メソッドによって修正したレコードを保存する場合
* *\_o\_ADD SUBRECORD*、*\_o\_CREATE SUBRECORD*、*\_o\_MODIFY SUBRECORD* によって作成または修正したサブレコードを含むレコード保存する場合
* カレントレコードを変更するようなコマンドを実行する前に、データ入力途中で表示されているレコードを保存する場合
* データ入力途中でカレントレコードを保存する場合

受け入れられたフォームのOn ValidateイベントでSAVE RECORD を実行してはいけません。もし、これを実行すると、レコードが2回保存されてしまいます。

**注:** 編集されたオブジェクトフィールドを含むレコードを保存する場合、一般的には**SAVE RECORD** を呼び出す前に4Dにそれを明示的に通知する必要があります。詳細な情報については、*オブジェクトフィールドの保存* の章を参照して下さい。

#### 例題 

以下の例はドキュメントからレコードを読み込むメソッドの一部です。このコードはレコードを受信し、この後受信が正常に行われると、レコードを保存します:

```4d
 RECEIVE RECORD([Customers]) // ディスクからレコードを受信
 If(OK=1) // レコードを正しく受信したら…
    SAVE RECORD([Customers]) // 保存する
 End if
```

#### 参照 

[CREATE RECORD](create-record.md)  
[Locked](locked.md)  
*トリガ*  