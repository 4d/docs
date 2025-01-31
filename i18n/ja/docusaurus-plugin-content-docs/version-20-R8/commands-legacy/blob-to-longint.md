---
id: blob-to-longint
title: BLOB to longint
slug: /commands/blob-to-longint
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to longint.Syntax-->**BLOB to longint** ( *BLOB* ; *byteOrder* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to longint.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 倍長整数値を取り出すBLOB |
| byteOrder | Integer | &#8594;  | 0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering |
| offset | Variable | &#8596;  | BLOB中のオフセット (バイト単位) |
| || | 読み込み後、新しいオフセット |
| 戻り値 | Integer | &#8592; | 4バイト整数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB to longint.Summary-->BLOB to longint コマンドは、*blob* BLOBから4バイトの整数値を読み込み、その値を返します。<!-- END REF-->

*byteOrder*引数は、読み込む4バイト整数値のバイトオーダーを指定します。4Dが提供する以下の定義済み定数のうち、いずれかを渡します:

| 定数                      | 型    | 値 |
| ----------------------- | ---- | - |
| Macintosh byte ordering | 倍長整数 | 1 |
| Native byte ordering    | 倍長整数 | 0 |
| PC byte ordering        | 倍長整数 | 2 |

**プラットフォーム独立性に関する注意**

MacintoshとPCプラットフォーム間でBLOBを交換する場合、このコマンドを使用する際のバイトスワップの管理は開発者に任されています。  
  
*offset*引数を渡した場合、4バイト整数の値はBLOB内のオフセット（ゼロから開始）から読み込まれます。オプション引数*offset*を指定しなかった場合には、BLOBの最初の4バイトが読み込まれます。

**Note**: 0からBLOBサイズ-4の範囲のオフセット値（バイト単位）を渡す必要があります。この範囲の値を渡さないと、エラー-111が生成されます。

呼び出し後、*offset*変数は、読み込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数を別のBLOB読み込みコマンドにも使用し、別の値をBLOBから読みだすことができます。

#### 例題 

以下の例ではBLOBから、オフセット0x200から開始して倍長整数値を20個読み込んでいます:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vlValue:=BLOB to longint(vxSomeBlob;PC byte ordering;$vlOffset)
  // Do something with $vlValue
 End for
```

#### 参照 

[BLOB to integer](blob-to-integer.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 551 |
| スレッドセーフである | &check; |


