---
id: text-to-blob
title: TEXT TO BLOB
slug: /commands/text-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO BLOB.Syntax-->**TEXT TO BLOB** ( *text* ; *BLOB* {; *textFormat* {; offset | *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| text | Text | &#8594;  | BLOBに書き込むテキスト |
| Blob | Blob | &#8594;  | テキストを受け取るBLOB |
| textFormat | Integer | &#8594;  | テキストのフォーマットと文字セット |
| offset &#124; * | 変数, 演算子 |&#8596; | BLOB内のオフセット (バイト単位) または値を追加する場合 * |
| || | *でない場合、書き込み後の新しいオフセット |

<!-- END REF-->

#### 説明 

<!--REF #_command_.TEXT TO BLOB.Summary-->**TEXT TO BLOB**コマンドはテキスト値 *text*をBLOB *blob*に書き込みます。<!-- END REF-->引数を使用して、書き込むテキスト値の内部フォーマットと文字セットを指定できます。これを行うには、*BLOB*テーマの以下の定数のうちいずれかを*textFormat* 引数に渡します: 

| 定数                       | 型    | 値 |
| ------------------------ | ---- | - |
| Mac C string             | 倍長整数 | 0 |
| Mac Pascal string        | 倍長整数 | 1 |
| Mac text with length     | 倍長整数 | 2 |
| Mac text without length  | 倍長整数 | 3 |
| UTF8 C string            | 倍長整数 | 4 |
| UTF8 text with length    | 倍長整数 | 5 |
| UTF8 text without length | 倍長整数 | 6 |
  
  
*textFormat* 引数を省略した場合、デフォルトで4DはMac C Stringフォーマットを使用します。4Dバージョン11以降で作成されたデータベースでは、4Dはテキストの処理にデフォルトでUnicode文字セット (UTF-8) を扱います。そのためこの文字セットを利用が推奨されます。 

**Notes:**

* “UTF8”から始まる定数は、Unicodeモードのアプリケーションでのみ使用できます。
* “Mac”から始まる定数は、32 KBまでのテキストを扱えます。
* UTF-8以外の文字セットを使用するには[CONVERT FROM TEXT](convert-from-text.md)コマンドを使用します。

これらのフォーマットについて説明します:

| **テキストフォーマット**                         | **説明と例題**                                    |
| -------------------------------------- | -------------------------------------------- |
| C string                               | テキストはNULL文字 (ASCIIコード $00)で終了する              |
| *UTF8*                                 | "" --> $00                                   |
| "Café" --> $43 61 66 C3 A9 00          |                                              |
| *Mac*                                  | "" --> $00                                   |
| "Café" --> $43 61 66 8E 00             |                                              |
| Pascal string                          | テキストの前に1バイトのテキスト長が置かれる                       |
| *UTF8*                                 | \-                                           |
| \-                                     |                                              |
| *Mac*                                  | "" --> $00                                   |
| "Café" --> $04 43 61 66 8E             |                                              |
| Text with length                       | テキストの前に4バイト (UTF8) または2バイト (Mac) のテキスト長が置かれる |
| *UTF8*                                 | "" --> $00 00 00 00                          |
| "Café" --> $00 00 00 05 43 61 66 C3 A9 |                                              |
| *Mac*                                  | "" --> $00 00                                |
| "Café" --> $00 04 43 61 66 8E          |                                              |
| Text without length                    | テキストはその文字だけで構成される                            |
| *UTF8*                                 | "" --> データなし                                 |
| "Café" --> $43 61 66 C3 A9             |                                              |
| *Mac*                                  | "" --> データなし                                 |
| "Café" --> $43 61 66 8E                |                                              |

  
オプションの *\** 引数を渡すと、テキストはBLOBの最後に追加され、BLOBサイズはそれに従い拡張されます。オプションの *\** 引数を使用することで、BLOBがメモリに収まる限り、*整数*, *倍長整数*, *実数* あるいは *テキスト*値 (他のBLOBコマンド参照) をBLOBに連続して格納できます。 

オプション引数 *\** や*offset*変数引数を指定しない場合、テキストはBLOBの最初に格納され、それ以前の内容を上書きします。これに合わせてBLOBのサイズも調整されます。

*offset*変数引数を渡した場合、テキストはBLOB内のオフセット（ゼロから開始）に書き込まれます。テキストを書き込む位置に関わらず、BLOBのサイズは渡した位置に従って（必要に応じてさらにテキストのサイズまで）増加します。現在書き込んでいるバイト以外の新しく割り当てられるバイトは、ゼロに初期化されます。

呼び出し後、*offset*変数引数は、書き込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数引数を別のBLOB書き込みコマンドにも使用し、別の値をBLOBに追加できます。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### 例題 

```4d
 SET BLOB SIZE(vxBlob;0)
 var vtValue : Text
 vtValue:="Cafe" // vtValue長さは4バイト
 TEXT TO BLOB(vtValue;vxBlob;Mac C string) // BLOBのサイズは5 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac Pascal string) // BLOBのサイズは5 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac text with length) // BLOBのサイズは6 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac text without length) // BLOBのサイズは4 bytes
 TEXT TO BLOB(vtValue;vxBlob;UTF8 C string) // BLOBのサイズは6 bytes
 TEXT TO BLOB(vtValue;vxBlob;UTF8 text with length) // BLOBのサイズは9 bytes
 TEXT TO BLOB(vtValue;vxBlob;UTF8 text without length) // BLOBのサイズは5 bytes
```

#### 参照 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[CONVERT FROM TEXT](convert-from-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 554 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


