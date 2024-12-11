---
id: qr-execute-command
title: QR EXECUTE COMMAND
slug: /commands/qr-execute-command
displayed_sidebar: docs
---

<!--REF #_command_.QR EXECUTE COMMAND.Syntax-->**QR EXECUTE COMMAND** ( *area* ; *command* )<!-- END REF-->
<!--REF #_command_.QR EXECUTE COMMAND.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| command | Integer | &#8594;  | 実行するメニューコマンド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR EXECUTE COMMAND.Summary-->**QR EXECUTE COMMAND** コマンドは、*command*に渡された参照番号のツールバーボタンコマンドを実行します。<!-- END REF-->このコマンドの最も一般的な使い方は、[QR ON COMMAND](qr-on-command.md) コマンド経由でコード内で受け取った、ユーザーが選択したコマンドを実行することです。

*command* 引数には、値または以下の*QR Commands* テーマの定数のいずれか一つを渡します(ここにあるイベントのみがサポートされます):

| 定数                   | 値    | コメント                               |
| -------------------- | ---- | ---------------------------------- |
| qr cmd generate      | 2008 | [QR RUN](qr-run.md) コマンドの使用が推奨されます |
| qr cmd open          | 2001 |                                    |
| qr cmd page setup    | 2006 |                                    |
| qr cmd print preview | 2007 |                                    |
| qr cmd save          | 2002 |                                    |
| qr cmd save as       | 2003 |                                    |

無効な*area* 番号を渡した場合、エラー番号-9850が生成されます。

無効な*command* 引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR Get command status](qr-get-command-status.md)  
[QR ON COMMAND](qr-on-command.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 791 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


