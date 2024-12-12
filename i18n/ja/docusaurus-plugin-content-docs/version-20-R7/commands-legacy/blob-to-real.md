---
id: blob-to-real
title: BLOB to real
slug: /commands/blob-to-real
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to real.Syntax-->**BLOB to real** ( *BLOB* ; *realFormat* {; *offset*} ) : Real<!-- END REF-->
<!--REF #_command_.BLOB to real.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 実数値を取り出すBLOB |
| realFormat | Integer | &#8594;  | 0 Native real format 1 Extended real format 2  Macintosh Double real format 3  Windows Double real format |
| offset | Variable | &#8596; | BLOB中のオフセット (バイト単位) |
| || | 読み込み後、新しいオフセット |
| 戻り値 | Real | &#8592; | 実数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB to real.Summary-->BLOB to real コマンドは、*blob* BLOBから実数値を読み込み、その値を返します。<!-- END REF-->

*realFormat*引数は、読み込む実数値の内部フォーマットとバイトオーダーを指定します。4Dが提供する以下の定義済み定数のうち、いずれかを渡します:

| 定数                           | 型    | 値 |
| ---------------------------- | ---- | - |
| Extended real format         | 倍長整数 | 1 |
| Macintosh double real format | 倍長整数 | 2 |
| Native real format           | 倍長整数 | 0 |
| PC double real format        | 倍長整数 | 3 |

**プラットフォーム独立性に関する注意**

MacintoshとPCプラットフォーム間でBLOBを交換する場合、このコマンドを使用する際の実数フォーマットとバイトスワップの管理は開発者に任されています。  
  
*offset*引数を渡した場合、実数の値はBLOB内のオフセット（ゼロから開始）から読み込まれます。オプション引数*offset*を指定しなかった場合には、BLOBの最初の8または10バイトが読み込まれます。

**Note:** 0からBLOBサイズ-8または-10の範囲のオフセット値（バイト単位）を渡す必要があります。この範囲の値を渡さないと、エラー-111が生成されます。

呼び出し後、*offset*変数は、読み込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数を別のBLOB読み込みコマンドにも使用し、別の値をBLOBから読みだすことができます。

#### 例題 

以下の例ではBLOBから、オフセット0x200から開始して実数値を20個読み込んでいます:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vrValue:=BLOB to real(vxSomeBlob;PC byte ordering;$vlOffset)
  // Do something with $vrValue
 End for
```

#### 参照 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  