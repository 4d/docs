---
id: real-to-blob
title: REAL TO BLOB
slug: /commands/real-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.REAL TO BLOB.Syntax-->**REAL TO BLOB** ( *real* ; *BLOB* ; *realFormat* {; offset | *} )<!-- END REF-->
<!--REF #_command_.REAL TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| real | Real | &#8594;  | BLOBに書き込む実数値 |
| Blob | Blob | &#8594;  | 実数値を受け取るBLOB |
| realFormat | Integer | &#8594;  | 0 Native real format 1 Extended real format 2  Macintosh Double real format 3  Windows Double real format |
| offset &#124; * | 変数, 演算子 | &#8596; | BLOB内のオフセット (バイト単位) または値を追加する場合 * |
| ||| *でない場合、書き込み後の新しいオフセット |

<!-- END REF-->

#### 説明 

<!--REF #_command_.REAL TO BLOB.Summary-->REAL TO BLOB コマンドは、*blob*に実数値*real*を書き込みます。<!-- END REF-->

*realFormat*引数は、実数値が書き込まれる際の内部フォーマットバイトオーダーを決定します。4Dが提供する以下の定義済み定数のうち、いずれか1つを渡します:

| 定数                           | 型    | 値 |
| ---------------------------- | ---- | - |
| Extended real format         | 倍長整数 | 1 |
| Macintosh double real format | 倍長整数 | 2 |
| Native real format           | 倍長整数 | 0 |
| PC double real format        | 倍長整数 | 3 |

**プラットフォーム独立性に関する注意**

MacintoshとPCプラットフォーム間でBLOBを交換する場合、このコマンドを使用する際の実数フォーマットとバイトスワップの管理は開発者に任されています。

オプションの *\** 引数を渡すと、実数値はBLOBの最後に追加され、BLOBサイズはそれに従い拡張されます。オプションの *\** 引数を使用することで、BLOBがメモリに収まる限り、整数, 倍長整数, 実数 あるいは テキスト値 (他のBLOBコマンド参照) をBLOBに連続して格納できます。 

オプション引数 *\** や*offset*変数引数を指定しない場合、実数値はBLOBの最初に格納され、それ以前の内容を上書きします。これに合わせてBLOBのサイズも調整されます。

*offset*変数引数を渡した場合、実数値はBLOB内のオフセット（ゼロから開 始）に書き込まれます。実数値を書き込む位置に関わらず、BLOBのサイズは渡した位置に従って（必要に応じてさらに最大8または10バイトまで）増加し ます。現在書き込んでいるバイト以外の新しく割り当てられるバイトは、ゼロに初期化されます。

呼び出し後、*offset*変数引数は、書き込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数引数を別のBLOB書き込みコマンドにも使用し、別の値をBLOBに追加できます。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### 例題 1 

以下のコードを実行すると: 

```4d
 var vrValue : Real
 vrValue:=...
 REAL TO BLOB(vrValue;vxBlob;Extended real format)
```

* すべてのプラットフォームで*vxBlob*のサイズは10bytesになります

#### 例題 2 

以下のコードを実行すると: 

```4d
 var vrValue : Real
 vrValue:=...
 REAL TO BLOB(vrValue;vxBlob;Native real format)
```

* すべてのプラットフォームで*vxBlob*のサイズは8 bytesになります

#### 例題 3 

以下のコードを実行すると: 

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValue : Real
 vrValue:=...
 INTEGER TO BLOB(vrValue;vxBlob;Windows Double real format) // または Macintosh double real format
```

すべてのプラットフォームで*vxBlob*のサイズは8 bytesになります

#### 例題 4 

以下のコードを実行すると: 

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValue : Real
 vrValue:=...
 vlOffset:=50
 REAL TO BLOB(vrValue;vxBlob;Windows Double real format;vlOffset) // または Macintosh double real format
```

* すべてのプラットフォームで*vxBlob*のサイズは100bytesになります
* すべてのプラットフォームで、実数値は#50から#57までのバイトに書き込まれます
* BLOBの他のバイトは変更されません
* 変数*vlOffset*は8インクリメントされ58となります

#### 例題 5 

以下のコードを実行すると: 

```4d
 var vrValue : Real
 vrValue:=...
 REAL TO BLOB(vrValue;vxBlob;Macintosh double real format) // または PC double real format
```

* すべてのプラットフォームで*vxBlob*のサイズは8 bytesになります

#### 例題 6 

以下のコードを実行すると: 

```4d
 SET BLOB SIZE(vxBlob;100)
 REAL TO BLOB(vrValue;vxBlob;Extended real format;*)
```

* すべてのプラットフォームで*vxBlob*のサイズは110bytesになります
* すべてのプラットフォームで、実数値は#100から#109までのバイトに書き込まれます
* BLOBの他のバイトは変更されません

#### 参照 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 552 |
| スレッドセーフである | &check; |


