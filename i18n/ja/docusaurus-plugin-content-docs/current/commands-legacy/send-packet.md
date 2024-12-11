---
id: send-packet
title: SEND PACKET
slug: /commands/send-packet
displayed_sidebar: docs
---

<!--REF #_command_.SEND PACKET.Syntax-->**SEND PACKET** ( {*DocRef* ;} *packet* )<!-- END REF-->
<!--REF #_command_.SEND PACKET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594;  | ドキュメント参照番号, または カレントのチャンネル (シリアルポートまたはドキュメント) |
| packet | Text, Blob | &#8594;  | 送信する文字またはBLOB |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SEND PACKET.Summary-->SEND PACKET は、シリアルポートやドキュメントにパケットを送ります。<!-- END REF-->*docRef*を指定した場合、パケットは*docRef*で参照されるドキュメントに書き込まれます。*docRef*を指定しない場合、あらかじめ [SET CHANNEL](set-channel.md) コマンドで開かれたシリアルポートまたはドキュメントにパケットを書き込みます。 

*packet*はデ－タの一部であり、一般的には文字列です。  
*packet*にBLOBを渡すこともできます。これにより、テキストモードで送信される文字のエンコーディングに関連する制約を回避できます (例題 2参照)。

**Note:** *packet*にBLOBを渡す場合、コマンドは [USE CHARACTER SET](use-character-set.md)  コマンドで定義された文字セットを考慮しません。BLOBは変更されずに送信されます。

SEND PACKETコマンドを使用する前に、 [SET CHANNEL](set-channel.md) コマンドでシリアルポートやドキュメントを開くか、ドキュメントコマンドを使用してドキュメントを開かなければなりません。

既存のドキュメントに書き込む場合は、ドキュメントが [USE CHARACTER SET](use-character-set.md) で開かれていない限り、最初のSEND PACKET コマンドはドキュメントの先頭から書き始めます。それに続くSEND PACKET コマンドは、ドキュメントファイルが閉じられるまでパケットを後ろに書き加えます。

**Note:** このコマンドは [SET CHANNEL](set-channel.md) で開かれたドキュメントに対して有効です。一方で、 [Open document](open-document.md), [Create document](create-document.md) あるいは [Append document](append-document.md) で開かれたドキュメントに関しては、 [Get document position](get-document-position.md) や [SET DOCUMENT POSITION](set-document-position.md) コマンドを使用して、次の書き込み (SEND PACKET) や読み込み ([RECEIVE PACKET](receive-packet.md)) を行うドキュメント中の位置を取得したり設定したりできます。

#### 例題 1 

 以下の例は、フィールドのデータをドキュメントに書き込みます。この例では、固定長データとして書き込みます。固定長フィールドは常に決まった長さで す。フィールドが指定した長さよりも短い場合、その分のスペースを埋め込みます（つまり、指定された長さになるまでスペースを付け加えます）。固定長デー タの使用は、データ格納の合理的な方法とはいえませんが、一部のコンピュータシステムやアプリケーションでは、まだ使用されています: 

```4d
 $vhDocRef :=Create document("") // ドキュメントを作成
 If(OK=1) // ドキュメントが作成されたら
    For($vlRecord;1;Records in selection([People])) // レコードごとに繰り返す
  // パケット送信。名フィールドのデータを含む長さ15のパケットを作成
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[People]First;1))
  // 2つ目のパケット送信。姓フィールドのデータを含む長さ15のパケットを作成
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[People]Last;1))
       NEXT RECORD([People])
    End for
  // Char(26)を送信、これはいくつかのコンピュータでend-of-fileのマーカとして使用されます
    SEND PACKET($vhDocRef;Char(SUB ASCII code))
    CLOSE DOCUMENT($vhDocRef) // ドキュメントを閉じる
 End if
```

#### 例題 2 

 この例題はBLOB経由でドキュメントの拡張文字を送信したり受信したりする方法を示します:   

```4d
 var $send_blob : Blob
 var $receive_blob : Blob
 TEXT TO BLOB("azerty";$send_blob;UTF8 text without length)
 SET BLOB SIZE($send_blob;16;255)
 $send_blob{6}:=0
 $send_blob{7}:=1
 $send_blob{8}:=2
 $send_blob{9}:=3
 $send_blob{10}:=0
 $vlDocRef:=Create document("blob.test")
 If(OK=1)
    SEND PACKET($vlDocRef;$send_blob)
    CLOSE DOCUMENT($vlDocRef)
 End if
 $vlDocRef:=Open document(document)
 If(OK=1)
    RECEIVE PACKET($vlDocRef;$receive_blob;65536)
    CLOSE DOCUMENT($vlDocRef)
 End if
```

#### 参照 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 103 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


