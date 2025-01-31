---
id: compress-blob
title: COMPRESS BLOB
slug: /commands/compress-blob
displayed_sidebar: docs
---

<!--REF #_command_.COMPRESS BLOB.Syntax-->**COMPRESS BLOB** ( *BLOB* {; *compression*} )<!-- END REF-->
<!--REF #_command_.COMPRESS BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 圧縮するBLOB |
| compression | Integer | &#8594;  | 省略されない場合: 1, 圧縮率優先で圧縮 2, 速度優先で圧縮 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COMPRESS BLOB.Summary-->**COMPRESS BLOB**コマンドは、圧縮アルゴリズムを使用してBLOB *blob*を圧縮します。<!-- END REF-->

オプションの*compression*引数を使用すると、BLOBを圧縮する方法を設定できます。*BLOB*テーマの以下の定義済み定数を指定できます:

| 定数                         | 型    | 値   | コメント                                                   |
| -------------------------- | ---- | --- | ------------------------------------------------------ |
| Compact compression mode   | 倍長整数 | 1   | 圧縮解凍の処理速度と引き換えに、BLOBをできるだけ小さく圧縮します。デフォルトモード。           |
| Fast compression mode      | 倍長整数 | 2   | 圧縮率と引き換えにBLOBをできるだけ速く圧縮・解凍します (圧縮されたBLOBのサイズは大きくなります)。 |
| GZIP best compression mode | 倍長整数 | \-1 | GZIP圧縮で圧縮率を優先します。                                      |
| GZIP fast compression mode | 倍長整数 | \-2 | GZIP圧縮で速度を優先します。                                       |

他の値を渡した場合、または*compression*を省略した場合、圧縮モード1 (compact internal compression) が使用されます。

**注**: このコマンドは、サイズが255バイト以上のBLOBだけを圧縮します。

呼び出し後、BLOBが圧縮されればOK変数に1が設定されます。メモリ不足やBLOBサイズが255バイト未満などの理由で圧縮が行われなかった場合、OK変数に0が設定されます。エラーは生成されず、メソッドは実行をレジュームします。   
(BLOBが壊れているなど) 他のケースの場合、エラー-10600が生成されます。このエラーは[ON ERR CALL](on-err-call.md)コマンドを使用してとらえることができます。

BLOB圧縮後、[EXPAND BLOB](expand-blob.md)コマンドを使用して解凍できます。

BLOBが圧縮されているかどうかを知るには[BLOB PROPERTIES](blob-properties.md)コマンドを使用します。

**警告:** 圧縮されたBLOBもBLOBであり、そのコンテンツを編集できます。しかしそうしてしまうと、[EXPAND BLOB](expand-blob.md)コマンドは正しくBLOBを解凍できなくなります。

#### 例題 1 

この例題 はBLOB *vxMyBlob*が圧縮されているかテストし、されていなければ圧縮します:

```4d
 BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
 If($vlCompressed=Is not compressed)
    COMPRESS BLOB(vxMyBlob)
 End if
```

すでに圧縮されているBLOBにCOMPRESS BLOBを適用した場合、コマンドはそれを検知し、何も行いません。

#### 例題 2 

この例題は、ドキュメントを選択させ、それを圧縮します:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       COMPRESS BLOB(vxBlob)
       If(OK=1)
          BLOB TO DOCUMENT(Document;vxBlob)
       End if
    End if
 End if
```

#### 例題 3 

GZIPで圧縮されたraw HTTPデータを送信します:

```4d
 COMPRESS BLOB($blob;GZIP Best compression mode)
 var $vEncoding : Text
 $vEncoding:="Content-encoding: gzip"
 WEB SET HTTP HEADER($vEncoding)
 WEB SEND RAW DATA($blob ;*)
```

#### システム変数およびセット 

BLOBが正しく圧縮されると、システム変数OKは1に設定されます。そうでなければ0に設定されます。

#### 参照 

[BLOB PROPERTIES](blob-properties.md)  
[EXPAND BLOB](expand-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 534 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


