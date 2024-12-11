---
id: set-channel
title: SET CHANNEL
slug: /commands/set-channel
displayed_sidebar: docs
---

<!--REF #_command_.SET CHANNEL.Syntax-->**SET CHANNEL** ( *port* ; *settings* ) <br/>
**SET CHANNEL** ( *operation* ; *document* )<!-- END REF-->
<!--REF #_command_.SET CHANNEL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| port | Integer | &#8594;  | シリアルポート番号 |
| settings | Integer | &#8594;  | シリアルポート設定 |
| SET CHANNEL ( operation ; document ) |
| 引数 | 型 | 説明 |
| operation | Integer | &#8594;  | 行うドキュメント処理 |
| document | Text | &#8594;  | ドキュメント名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET CHANNEL.Summary-->SET CHANNEL コマンドはシリアルポートまたはドキュメントを開きます。<!-- END REF-->このコマンドでは、同時に1つのポートまたは1つのドキュメントファイルしか開くことができません。開いたシリアルポートを閉じるにはSET CHANNEL(11)を用います。

**Historical Note**: このコマンドはもともと、シリアルポートやディスク上のドキュメントを用いて作業を実行するために使用された最初の4Dコマンドです。以来、新しいコマンドが追加されています。現在では、ディスク上のドキュメントを使った作業を実行する際には、[Open document](open-document.md "Open document"), [Create document](create-document.md "Create document") そして [Append document](append-document.md "Append document")といったコマンドを使用します。これらのコマンドを利用し、[SEND PACKET](send-packet.md "SEND PACKET") や [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")を使用してドキュメントに文字を書き込んだり、読み込むことができます（この2つのコマンドもSET CHANNELとともに使用できます）。しかし、[SEND VARIABLE](send-variable.md "SEND VARIABLE"), [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE"), [SEND RECORD](send-record.md "SEND RECORD") そして [RECEIVE RECORD](receive-record.md "RECEIVE RECORD")コマンドを使用したい場合には、ディスクのドキュメントにアクセスする際にSET CHANNELを使用しなくてはなりません。

SET CHANNELの説明は、２つの部分からなります:

* シリアルポートに使用
* ドキュメントに使用

#### シリアルポートに使用 - SET CHANNEL (port;settings) 

SET CHANNEL コマンドの第一の形式はシリアルポートを開き、プロトコルや他のポート情報を設定します。データの送信は、[SEND PACKET](send-packet.md "SEND PACKET"), [SEND RECORD](send-record.md "SEND RECORD") または [SEND VARIABLE](send-variable.md "SEND VARIABLE")で行えます。データの受信は、[RECEIVE BUFFER](receive-buffer.md "RECEIVE BUFFER"), [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET"), [RECEIVE RECORD](receive-record.md "RECEIVE RECORD") または [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE")で行います。

**ポート引数**

最初の引数*port*で、ポートとプロトコルを指定します。

シリアルポートは99まで使用できます（一度に1つ）。以下の表はポートの値を示します。

| **ポートの値**  | 説明                                                      |
| ---------- | ------------------------------------------------------- |
| 0          | プリンタポート (Macintosh) または 無手順のCOM2 (PC)                   |
| 1          | モデムポート (Macintosh) または 無手順のCOM1 (PC)                    |
| 20         | プリンタポート (Macintosh) または XON/XOFFのようなソフトウェアフローのCOM2 (PC) |
| 21         | モデムポート (Macintosh) または XON/XOFFのようなソフトウェアフローのCOM1 (PC)  |
| 30         | プリンタポート (Macintosh) または RTS/CTSのようなハードウェアフローのCOM2 (PC)  |
| 31         | モデムポート (Macintosh) または RTS/CTSのようなハードウェアフローのCOM1 (PC)   |
| 101 to 199 | 無手順のシリアル通信                                              |
| 201 to 299 | ソフトウェアフロー制御（XON/XOFF）のシリアルポート通信                         |
| 301 to 399 | ハードウェアフロー制御（RTS/CTS）のシリアルポート通信                          |

**重要**: *port*に渡す値は、オペレーションシステムで認識される既存のシリアルCOMポートを示すものでなくてはなりません。例えば、101、103、125という値を使用できるようにするには、シリアルポートCOM1、COM3、COM25が必ず設定されている必要があります。

##### シリアルポートの注意点 

標準の設定で、Mac OSとWindowsでは2つのシリアルポートが提供されています。Mac OSではモデムポートとプリンタポート、WindowsではCOM1とCOM2ポートです。しかしながら、シリアルポートはエクステンションボードを使用 して追加することができます。もともと4Dは2つの標準のシリアルポートのみサポートし、のちに追加されたポートをサポートしました。互換性のため、両方 をサポートするシステムとなっています。  

* 標準のシリアルポート（プリンター/COM2またはモデム/COM1）にアクセスするには、*port*引数に0、1、20、21、30、31のいずれかを指定（以前の使用法に相当）するか、100以上の値にします（以下の説明を参照）。
* 追加したシリアルポートにアクセスするには、値をＮ+100にする必要があります（Nはポート番号）。ソフトウェアフローまたはハードウェアフローを選択するために、先の値（Ｎ+100）に100または200を加えることも考慮します。

##### 例題 1 

無手順のプリンタ/COM2ポートを使用する場合は、以下のシンタックスの1つを使用します: 

```4d
 SET CHANNEL(0;param)
```

または

```4d
 SET CHANNEL(102;param)
```

##### 例題 2 

ソフトウェアフロー制御（XON/XOFF）のモデム/COM1ポートを使用する場合は、以下のシンタックスを使う必要があります: 

```4d
 SET CHANNEL(21;param)
```

または

```4d
 SET CHANNEL(201;param)
```

##### 例題 3 

ハードウェアフロー制御（RTS/CTS等）のCOM25を使用する場合は、以下のシンタックスを使用する必要があります: 

```4d
 SET CHANNEL(325;param)
```

**settings 引数**

*settings*引数は転送速度、データビット、ストップビット、パリティを指定します。以下の表に示した転送速度、データビット、ストップビット、パリティの値を加算して*settings*の値を指定します。例えば、転送速度を1200ボー、データビットを8ビット、ストップビットを1、パリティをなし、と設定する場合には、94 + 3072 + 16384 + 0 = 19550と計算します。引数*settings*の値として19550を指定します。

| settings 引数に | 説明     |     |
| ------------ | ------ | --- |
| 加算する値        |        |     |
| 転送速度         | 380    | 300 |
| (ボー単位)       | 189    | 600 |
| 94           | 1200   |     |
| 62           | 1800   |     |
| 46           | 2400   |     |
| 30           | 3600   |     |
| 22           | 4800   |     |
| 14           | 7200   |     |
| 10           | 9600   |     |
| 4            | 19200  |     |
| 2            | 28800  |     |
| 1            | 38400  |     |
| 0            | 57600  |     |
| 1022         | 115200 |     |
| 1021         | 230400 |     |
| データビット       | 0      | 5   |
| 2048         | 6      |     |
| 1024         | 7      |     |
| 3072         | 8      |     |
| ストップビット      | 16384  | 1   |
| \-32768      | 1.5    |     |
| \-16384      | 2      |     |
| パリティ         | 0      | なし  |
| 4096         | 奇数     |     |
| 12288        | 偶数     |     |

**Tip:** *port* と *settings* に計算され渡されるさまざまな数値は、COM1...COM99の値を除き、テーマの定義済み変数で提供されています。COM1...COM99はリテラル数値を使用してください。

#### ディスク上のドキュメントを操作 - SET CHANNEL(operation;document) 

SET CHANNELコマンドの第2の形式は、ドキュメントファイルの作成やオープンおよび、クローズを行います。コマンドと異なり、同時に1つのドキュメントファイルしか開くことができません。ドキュメントファイルは、読み込みと書き込みの両方が可能です。 

*operation*引数で、*document*引数で指定したドキュメントに対する処理を指定します。以下の表に、*operation* の値と、その結果として*document*に対して行われる処理を示します。一番目の列は*operation*で利用可能な値、二番目の列は*document*で利用可能な値、三番目の列は処理を示します。

例えば、ファイルを開くダイアログボックスを表示して、テキストファイルを開く場合には、以下のように記述します:

```4d
 SET CHANNEL(13;"")
```

| **Operation** | Document   | 結果                                          |
| ------------- | ---------- | ------------------------------------------- |
| 10            | 文字列        | 文字列で指定されたドキュメントを開く。ドキュメントが存在しない場合、作成されます。   |
| 10            | "" (空の文字列) | ファイルを開くダイアログを表示しファイルを開く。すべてのファイルタイプが表示されます。 |
| 11            | なし         | 開かれたファイルを閉じる。                               |
| 12            | "" (空の文字列) | ファイルを保存ダイアログを表示し新しいファイルを作成。                 |
| 13            | "" (空の文字列) | ファイルを開くダイアログを表示しファイルを開く。テキストファイルのみが表示されます。  |

この表に示した処理はすべて、適切な場合、システム変数Documentに値を設定します。また、処理が正常に行われると、システム変数OKに1が代入されます。それ以外の場合には0が代入されます。

##### 例題 4 

[RECEIVE BUFFER](receive-buffer.md "RECEIVE BUFFER"), [SET TIMEOUT](set-timeout.md "SET TIMEOUT") そして [RECEIVE RECORD](receive-record.md "RECEIVE RECORD")の例題を参照。

#### 参照 

[Append document](append-document.md)  
*Communications*  
[Create document](create-document.md)  
[GET SERIAL PORT MAPPING](get-serial-port-mapping.md)  
[Open document](open-document.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND PACKET](send-packet.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  
[SET TIMEOUT](set-timeout.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 77 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document |
| サーバー上での使用は不可 ||


