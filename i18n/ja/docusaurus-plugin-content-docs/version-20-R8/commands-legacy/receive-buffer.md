---
id: receive-buffer
title: RECEIVE BUFFER
slug: /commands/receive-buffer
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE BUFFER.Syntax-->**RECEIVE BUFFER** ( *receiveVar* )<!-- END REF-->
<!--REF #_command_.RECEIVE BUFFER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| receiveVar | Text | &#8592; | データを受信する変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RECEIVE BUFFER.Summary-->**RECEIVE BUFFER** は、[SET CHANNEL](set-channel.md)コマンドで前もって開いたシリアルポートからデータを読み込みます。<!-- END REF-->シリアルポートは、コマンドで読み込まれるまで内容を保持するバッファを持ちます。**RECEIVE BUFFER**はシリアルバッファから文字を読み込み、*receiveVar*に格納して、バッファを消去します。バッファ中に文字が存在しなければ、*receiveVar*は何も含みません。

**Windows**  
Windowsのシリアルポートバッファのサイズは10KBに制限されています。つまり、バッファがオーバーフローする可能性があるということです。バッファがいっぱいになった後、新しい文字を受信すると、最も古いものと置き換えられます。古くなった文字は失われるため、新しい文字を受信する際は、すみやかにバッファを読み込むことが重要です。

**Mac OS**  
Mac OS Xのシリアルポート バッファーサイズは、理論的には制限がありません。実際には利用可能なメモリ量に制限されます。バッファーがいっぱいになった後、新しい文字を受信すると、最も古いものと置き換えられます。古くなった文字は失われるため、新しい文字を受信する際は、すみやかにバッファを読み込むことが重要です。

**RECEIVE BUFFER**コマンドは[RECEIVE PACKET](receive-packet.md)と異なり、バッファ中のデータが何であれ、それを即座に返します。[RECEIVE PACKET](receive-packet.md)はバッファ中に指定した文字を発見するまで、または指定した数の文字が入力されるまで待ちます。

**RECEIVE BUFFER**の実行中に、Ctrl-Alt-Shift (Windows) または Command-Option-Shift (Macintosh) を押して、受信を中断できます。中断することにより、エラー-9994が生成されます。[ON ERR CALL](on-err-call.md)を使用してインストールしたエラー処理メソッドにより、このエラーをとらえることができます。

#### 例題 

以下のプロジェクトメソッドLISTEN TO SERIAL PORTは、RECEIVE BUFFERコマンドを使用してシリアルポートからテキストを取得し、それをインタープロセス変数に追加します:

```4d
  // LISTEN TO SERIAL PORT
  // シリアルポートを開く
 SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)
 <>IP_Listen_Serial_Port:=True
 While(<>IP_Listen_Serial_Port)
    RECEIVE BUFFER($vtBuffer)
    If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)
       <>vtBuffer:=""
    End if
    <>vtBuffer:=<>vtBuffer+$Buffer
 End while
```

この時点で、他のプロセスからインタープロセス変数<>vtBufferを読み込み、シリアルポートから受信したデータの処理を行うことができます。

シリアルポートの監視を中断するには、以下のコードを実行します:

```4d
  // シリアルポートの待ち受けを停止する
 <>IP_Listen_Serial_Port:=False
```

プロセス間でのコンフリクトを避けるために、セマフォを利用してインタープロセス変数<>vtBufferへのアクセスを保護する必要がある点に注意してください。詳細は[Semaphore](semaphore.md "Semaphore")コマンドを参照してください。

#### 参照 

[ON ERR CALL](on-err-call.md)  
[RECEIVE PACKET](receive-packet.md)  
[Semaphore](semaphore.md)  
[SET CHANNEL](set-channel.md)  
[USE CHARACTER SET](use-character-set.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 172 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


