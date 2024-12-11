---
id: receive-variable
title: RECEIVE VARIABLE
slug: /commands/receive-variable
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE VARIABLE.Syntax-->**RECEIVE VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.RECEIVE VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| variable | Variable | &#8592; | データを受信する変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RECEIVE VARIABLE.Summary-->RECEIVE VARIABLE は、[SET CHANNEL](set-channel.md "SET CHANNEL")で開いたシリアルポートまたはドキュメントから、[SEND VARIABLE](send-variable.md "SEND VARIABLE")コマンドで送信した*variable*を受信します。<!-- END REF-->

インタプリタモードでは、このコマンドのコール前に変数が存在しない場合、変数が作成され、受信内容に応じたタイプ付けが行われます。コンパイル後モードでは、変数のタイプは受信するものと同じでなくてはなりません。両方の場合とも、変数の内容は受信した値で置き換えられます。

インタプリタモードでは、RECEIVE VARIABLEの呼び出し前に変数が存在しない場合、変数が作成され、受信内容に応じた型付けが行われ、代入されます。コンパイルモードでは、変数のタイプは受信するものと同じでなくてはなりません。両方の場合とも、変数の内容は受信した値で置き換えられます。

**Notes:**

1. このコマンドを使用してドキュメントから変数を受信する場合、ドキュメントは[SET CHANNEL](set-channel.md "SET CHANNEL")コマンドを使用して開かれていなければなりません。[Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") または [Create document](create-document.md "Create document")で開かれたドキュメントに対して、RECEIVE VARIABLEを使用することはできません。
2. このコマンドは配列をサポートしません。ドキュメントやシリアルポートを介して配列を送受信したい場合、*BLOBコマンド*を使用してください。
3. RECEIVE VARIABLEの実行中、Ctrl-Alt-Shift (Windows) またはCommand-Option-Shift (Macintosh) を押して、受信を中断することができます。中断することにより、エラー-9994が生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")を使用してインストールされたエラー処理メソッドにより、このエラーをとらえることができます。通常、シリアルポート経由での通信の場合にのみ、受信の中断処理を実行する必要があります。

#### 例題 

[RECEIVE RECORD](receive-record.md "RECEIVE RECORD") コマンドの例題を参照

#### システム変数およびセット 

変数を受信するとシステム変数OKに1が設定され、そうでなければ0が設定されます。  

#### 参照 

[ON ERR CALL](on-err-call.md)  
[RECEIVE RECORD](receive-record.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 81 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


