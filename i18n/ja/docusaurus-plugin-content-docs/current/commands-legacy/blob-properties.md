---
id: blob-properties
title: BLOB PROPERTIES
slug: /commands/blob-properties
displayed_sidebar: docs
---

<!--REF #_command_.BLOB PROPERTIES.Syntax-->**BLOB PROPERTIES** ( *BLOB* ; *compressed* {; *expandedSize* {; *currentSize*}} )<!-- END REF-->
<!--REF #_command_.BLOB PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 情報を取得するBLOB |
| compressed | Integer | &#8592; | 0 = BLOBは圧縮されていない 1 = BLOBは圧縮率優先で圧縮されている 2 = BLOBは速度優先で圧縮されている |
| expandedSize | Integer | &#8592; | 非圧縮時のBLOBのサイズ (バイト単位) |
| currentSize | Integer | &#8592; | BLOBの現在のサイズ (バイト単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB PROPERTIES.Summary-->**BLOB PROPERTIES**コマンドは、BLOB *blob*に関する情報を返します。<!-- END REF-->

*compressed*引数はBLOBが圧縮されたかどうかを示す値を返します。この値を*BLOB*テーマの以下の定義済定数と比較できます。

| 定数                         | 型    | 値   | コメント                                                   |
| -------------------------- | ---- | --- | ------------------------------------------------------ |
| Compact compression mode   | 倍長整数 | 1   | 圧縮解凍の処理速度と引き換えに、BLOBをできるだけ小さく圧縮します。デフォルトモード。           |
| Fast compression mode      | 倍長整数 | 2   | 圧縮率と引き換えにBLOBをできるだけ速く圧縮・解凍します (圧縮されたBLOBのサイズは大きくなります)。 |
| GZIP best compression mode | 倍長整数 | \-1 | GZIP圧縮で圧縮率を優先します。                                      |
| GZIP fast compression mode | 倍長整数 | \-2 | GZIP圧縮で速度を優先します。                                       |
| Is not compressed          | 倍長整数 | 0   |                                                        |

BLOBの圧縮ステータスにかかわらず、*expandedSize*引数は、圧縮されていない時のBLOBのサイズを戻します。

*currentSize*引数は、BLOBの現在のサイズを戻します。BLOBが圧縮されている場合には、通常、*expandedSize*より小さい*currentSize*を取得します。BLOBが圧縮されていない場合には、常に、*expandedSize*に等しい*currentSize*を取得します。

#### 例題 1 

[COMPRESS BLOB](compress-blob.md "COMPRESS BLOB")および[EXPAND BLOB](expand-blob.md "EXPAND BLOB")の例を参照。

#### 例題 2 

BLOBが圧縮された後、以下のプロジェクトメソッドは圧縮できたメモリ空間の割合を返します:

```4d
  // Space saved by compression プロジェクトメソッド
  // Space saved by compression (Pointer {; Pointer } ) -> Long
  // Space saved by compression ( -> BLOB {; -> savedBytes } ) -> Percentage
 
 var $1;$2 : Pointer
 var $0;$vlCompressed;$vlExpandedSize;$vlCurrentSize : Integer
 
 BLOB PROPERTIES($1->;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
 If($vlExpandedSize=0)
    $0:=0
    If(Count parameters>=2)
       $2->:=0
    End if
 Else
    $0:=100-(($vlCurrentSize/$vlExpandedSize)*100)
    If(Count parameters>=2)
       $2->:=$vlExpandedSize-$vlCurrentSize
    End if
 End if
```

このメソッドがアプリケーションに追加された後は、これを以下のように使用できます:

```4d
  // ...
 COMPRESS BLOB(vxBlob)
 $vlPercent:=Space saved by compression(->vxBlob;->vlBlobSize)
 ALERT("The compression saved "+String(vlBlobSize)+" bytes, so "+String($vlPercent;"#0%")+
 " of space.")
```

#### 参照 

[COMPRESS BLOB](compress-blob.md)  
[EXPAND BLOB](expand-blob.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 536 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


