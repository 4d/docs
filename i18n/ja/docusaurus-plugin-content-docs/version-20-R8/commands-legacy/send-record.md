---
id: send-record
title: SEND RECORD
slug: /commands/send-record
displayed_sidebar: docs
---

<!--REF #_command_.SEND RECORD.Syntax-->**SEND RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.SEND RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードを送信するテーブル, または 省略した場合デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SEND RECORD.Summary-->SEND RECORD は、*aTable*のカレントレコードを[SET CHANNEL](set-channel.md "SET CHANNEL")コマンドで開いたシリアルポートまたはドキュメントに送信します。<!-- END REF-->レコードは特別な内部フォーマットで送信され、[RECEIVE RECORD](receive-record.md "RECEIVE RECORD")でのみ読み込むことができます。カレントレコードが存在しなければ、SEND RECORDは何も行いません。

完全なレコードを送信します。つまりレコードにあるいはレコードとともに格納されたピクチャやBLOBも送信します。

**重要**: SEND RECORD と [RECEIVE RECORD](receive-record.md "RECEIVE RECORD")を使用してレコードが送受信される場合、送信元と送信先のテーブル構造は互換性のあるものでなくてはなりません。互換性がない場合、[RECEIVE RECORD](receive-record.md "RECEIVE RECORD")コマンドの実行時4Dがテーブル定義に応じて値を変換します。

**Notes:** このコマンドを使用してドキュメントにレコードを送信する場合、ドキュメントは[SET CHANNEL](set-channel.md "SET CHANNEL")コマンドを使用して開かれていなければなりません。[Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") または [Create document](create-document.md "Create document")で開かれたドキュメントに対して、SEND RECORDを使用することはできません。

**互換性に関する注意:** 4Dバージョン11より、このコマンドはサブテーブルをサポートしません。

#### 例題 

[RECEIVE RECORD](receive-record.md "RECEIVE RECORD")コマンドの例題を参照

#### 参照 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND VARIABLE](send-variable.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 78 |
| スレッドセーフである | &check; |


