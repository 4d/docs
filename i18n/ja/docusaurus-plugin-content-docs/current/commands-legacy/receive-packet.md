---
id: receive-packet
title: RECEIVE PACKET
slug: /commands/receive-packet
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE PACKET.Syntax-->**RECEIVE PACKET** ( {*DocRef* ;} *receiveVar* ; stopChar | numBytes )<!-- END REF-->
<!--REF #_command_.RECEIVE PACKET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594;  | ドキュメント参照番号, または カレントチャンネル (シリアルポートまたはドキュメント) |
| receiveVar | Text, Blob | &#8592; | データを受け取る変数 |
| stopChar &#124; numBytes | 文字, 倍長整数 | &#8594;  | 受信を停止する文字, または受信するバイト数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RECEIVE PACKET.Summary-->RECEIVE PACKET コマンドは、シリアルポートまたはドキュメントから文字を読み込みます。<!-- END REF--> 

*docRef*を指定した場合、このコマンドは [Open document](open-document.md), [Create document](create-document.md) または [Append document](append-document.md) で開かれたドキュメントからデータを取得します。*docRef*を指定しない場合、このコマンドは [SET CHANNEL](set-channel.md)コマンドで開かれたシリアルポートかドキュメントからデータを取得します。

読み込み元に関わらず、読み込まれた文字は、テキスト、文字、またはBLOB型の*receiveVar*変数に返されます。文字が [SEND PACKET](send-packet.md) コマンドで送信された場合、型はパレットが送信された際の型に対応しなければなりません。

Notes:

* 受信したパケットがBLOB型の場合、コマンドは [USE CHARACTER SET](use-character-set.md) コマンドで指定された文字セットを考慮しません。BLOBには変更されないデータが返されます。
* テキスト型のパケットを受信した場合、 RECEIVE PACKET コ マンドはByte Order Marks (BOM) をサポートします。この場合、カレントの文字セットがUnicodeタイプ (UTF-8, UTF-16またはUTF-32) であれば、4Dは受信した先頭のバイトでBOMの識別を試みます。BOMが検知されると、それは*receiveVar*変数から取り除かれ、4Dは現在の文字セットではなくBOMで指定された文字セットを使用します。

特定の文字数まで読み込むためには、*numBytes*にその数を渡します。*receiveVar*がテキスト型の場合、一回の呼び出しで、Unicodeモードでは2GB (理論的な値) までのテキストを読み込めます。

特定の文字列（1桁以上の文字で構成される）が現われるまでデータを取り込むには、*stopChar*にその文字列を渡します（この文字列は*receiveVar*に含まれません）。

この場合、*stopChar*で指定した文字を見つけることが出来なければ:

* RECEIVE PACKET がドキュメントを読み込むとき、ドキュメントの最後で読み込みを終了します。
* RECEIVE PACKET がシリアルポートから読み込むとき、タイムアウト ([SET TIMEOUT](set-timeout.md)参照) に達するか、または利用者が割込（以下を参照）をかけるまで待ち続けます。

RECEIVE PACKET の実行中、利用者はCtrl＋Alt＋Shift (Windows) またはコマンド＋Option＋Shift (Macintosh)キーを押下することで、割込をかけることが出来ます。割込が発生するとエラー-9994が生成され、 [ON ERR CALL](on-err-call.md)でインストールされたエラー処理メソッドでとらえることができます。通常、シリアルポートで通信している場合のみ、割込を処理します。

ドキュメントを読み込む場合、最初のRECEIVE PACKET コマンドは、ドキュメントファイルの先頭から読み込みを開始します。その後のデータ読み込みは、最後に読み込まれたバイトの次から開始します。

**Note:** このコマンドは、 [SET CHANNEL](set-channel.md) を用いて開かれたドキュメントに対して有効です。一方で、 [Open document](open-document.md), [Create document](create-document.md) または [Append document](append-document.md)で開かれたドキュメントに関しては、 [Get document position](get-document-position.md) または [SET DOCUMENT POSITION](set-document-position.md) コマンドを使用して、次の書き込み ([SEND PACKET](send-packet.md)) や読み込み(RECEIVE PACKET) を行うドキュメント中の位置を取得したり設定したりできます。

ファイルの最後を越えて読み込もうとした場合、 RECEIVE PACKET は、そのポイントまでに読み込んだデータを返し、システム変数OKに1を代入します。その次の RECEIVE PACKET は空の文字列を返し、システム変数OKに0を代入します。

#### 例題 1 

以下の例は、20バイトのデータをシリアルポートから読み込み、変数*getTwenty*に格納します:

```4d
 RECEIVE PACKET(getTwenty;20)
```

#### 例題 2 

以下の例は、変数*myDoc*で参照されるドキュメントからデータを読み込み、変数*vData*に格納します。ここでは改行が見つかるまで読み込みます:

```4d
 RECEIVE PACKET(myDoc;vData;Char(Carriage return))
```

#### 例題 3 

以下の例は、変数*myDoc*で参照されるドキュメントからデータを読み込み、変数*vData*に格納します。HTMLタグ*</TD>*（テーブルセルの終わり）が現われるまでデータを読み込みます:

```4d
 RECEIVE PACKET(myDoc;vData;"")
```

#### 例題 4 

以下の例は、ドキュメントファイルから読み込んだデータをフィールドに格納します。データは、固定長で格納されています。このメソッドは、サブルーチンを呼び出してデータの後ろに付随する不要なスペースを取り除きます: 

```4d
 $vhDocRef :=Open document("";"TEXT") // TEXTドキュメントを開く
 If(OK=1) // ドキュメントが開かれたら
    REPEAT // データがなくなるまで繰り返す
       RECEIVE PACKET($vhDocRef;$Var1;15) // 15文字読み込む
       RECEIVE PACKET($vhDocRef;$Var2;15) // 2番目のフィールドに同じことを行う
       If(($Var1#"")|($Var2#"")) // どちらかのフィールドが空でなければ
          CREATE RECORD([People]) // レコードを作成
          [People]First :=Strip($Var1) // 名を格納
          [People]Last :=Strip($Var2) // 姓を格納
          SAVE RECORD([People]) // レコードを保存
       End if
    Until(OK=0)
    CLOSE DOCUMENT($vhDocRef) // ドキュメントを閉じる
 End if
```

データの終わりのスペースは以下のStripメソッドで取り除きます:

```4d
 For($i;Length($1);1;-1) // 文字の最後からループ
    If($1[[$i]]#" ") // スペースでなければ…
       $i :=-$i  // ループを終了する
    End if
 End for
 $0:=Delete string($1;-$i;Length($1)) // スペースを削除
```

#### システム変数およびセット 

RECEIVE PACKET呼び出し後、エラーなしでパケットを受信すればOKシステム変数に1が、そうでなければ0が設定されます。

#### 参照 

[Get document position](get-document-position.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET TIMEOUT](set-timeout.md)  
[USE CHARACTER SET](use-character-set.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 104 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


