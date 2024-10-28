---
id: set-timeout
title: SET TIMEOUT
slug: /commands/set-timeout
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMEOUT.Syntax-->**SET TIMEOUT** ( *seconds* )<!-- END REF-->
<!--REF #_command_.SET TIMEOUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| seconds | Integer | &#8594;  | タイムアウト秒数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET TIMEOUT.Summary-->SET TIMEOUT は、シリアルポートコマンドの許容される待ち時間を設定します。<!-- END REF-->シリアルポートコマンドが指定した時間*seconds*以内に終了しないと、そのシリアルポートコマンドは取り消され、エラー-9990が生成され、システム変数OKに0が代入されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドでインストールされるエラー処理メソッドを使用して、エラーをとらえることができます。

待ち時間はコマンドの実行に与えられたトータル時間です。データの送受信に要する時間ではない点に注意してください。以前の設定値を取り消し、シリアルポート通信のモニタを停止するには、*seconds*に0を指定します。

タイムアウトの設定が影響するコマンドは以下のとおりです:

* [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")
* [RECEIVE RECORD](receive-record.md "RECEIVE RECORD")
* [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE")

#### 例題 

以下の例はシリアルポートからデータを受信します。タイムアウトを設定し、[RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")でデータを受け取ります。設定した時間内にデータを受け取れない場合、エラーが発生します:

```4d
 SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none) // シリアルポートを開く
 SET TIMEOUT(10) // タイムアウトを10秒に設定
 ON ERR CALL("CATCH COM ERRORS") // メソッドが中断されないようにする
 RECEIVE PACKET(vtBuffer;Char(13)) // 改行まで読み込み
 If(OK=0)
    ALERT("Error receiving data.")
 Else
    [People]Name:=vtBuffer // 受信したデータをフィールドに保存
 End if
 ON ERR CALL("")
```

#### 参照 

[ON ERR CALL](on-err-call.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  