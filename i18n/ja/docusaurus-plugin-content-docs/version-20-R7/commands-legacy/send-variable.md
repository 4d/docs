---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | 送信する変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SEND VARIABLE.Summary-->SEND VARIABLE は、[SET CHANNEL](set-channel.md "SET CHANNEL")で開いたシリアルポートまたはドキュメントに*variable*を送信します。<!-- END REF-->変数は[RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE")でなければ読み込むことのできない特別な内部フォーマットで送信されます。SEND VARIABLEは、（型と値を含む）完全な変数を送信します。

**Notes:**

1. このコマンドを使用してドキュメントに変数を送信する場合、ドキュメントは[SET CHANNEL](set-channel.md "SET CHANNEL")コマンドを使用して開かれていなければなりません。[Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") または [Create document](create-document.md "Create document")で開かれたドキュメントに対して、SEND VARIABLEを使用することはできません。
2. このコマンドは配列変数をサポートしません。ドキュメントやシリアルポート経由で配列の送受信を行いたい場合は、を使用してください。.

#### 例題 

[RECEIVE RECORD](receive-record.md "RECEIVE RECORD")の例題参照

#### 参照 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND RECORD](send-record.md)  
[SET CHANNEL](set-channel.md)  