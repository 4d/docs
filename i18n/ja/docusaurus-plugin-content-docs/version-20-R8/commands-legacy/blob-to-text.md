---
id: blob-to-text
title: BLOB to text
slug: /commands/blob-to-text
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to text.Syntax-->**BLOB to text** ( *BLOB* ; *textFormat* {; *offset* {; *textLength*}} )  : Text<!-- END REF-->
<!--REF #_command_.BLOB to text.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | テキストを取り出すBLOB |
| textFormat | Integer | &#8594;  | テキストのフォーマットと文字セット |
| offset | Variable |&#8596; | BLOB内のオフセット (バイト単位) |
| ||| 読み込み後の新しいオフセット |
| textLength | Integer | &#8594;  | 読み込む文字数 |
| 戻り値 | Text | &#8592; | 取り出したテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB to text.Summary-->BLOB to text コマンドはBLOB *blob*からテキストを読みだして、返します。<!-- END REF-->引数は、読み込むテキスト値の内部フォーマットと文字セットを指定します。4Dバージョン11以降で作成されたデータベースでは、4Dはテキストの処理にデフォルトでUnicode (UTF-8) を使用します。互換性を保つため、このコマンドに、以前のバージョンの4Dで使用されていたMac Roman文字セットへの変換を強制することもできます。文字セットは*textFormat* 引数で指定します。これを行うには、*BLOB* テーマの以下の定数のうちいずれかを*textFormat* 引数に渡します:

| 定数                       | 型    | 値 |
| ------------------------ | ---- | - |
| Mac C string             | 倍長整数 | 0 |
| Mac Pascal string        | 倍長整数 | 1 |
| Mac text with length     | 倍長整数 | 2 |
| Mac text without length  | 倍長整数 | 3 |
| UTF8 C string            | 倍長整数 | 4 |
| UTF8 text with length    | 倍長整数 | 5 |
| UTF8 text without length | 倍長整数 | 6 |

  
**Notes:**

* “UTF8”から始まる定数は、Unicodeモードのアプリケーションでのみ使用できます。
* “Mac”から始まる定数は、32 KBまでのテキストを扱えます。
* UTF-8以外の文字セットを使用するには、[Convert to text](convert-to-text.md "Convert to text") コマンドを使用します。

これらの定数とフォーマットに関する詳細は、[TEXT TO BLOB](text-to-blob.md "TEXT TO BLOB") コマンドの説明を参照してください。

**警告:** 読み込む文字数は*textFormat* 引数により決定されます。ただしMac Text without lengthとUTF8 Text without lengthは除きます。これらの場合、引数 *textLength*で読み込む文字数を指定しなければなりません。他のフォーマットでは、*textLength*は無視され、省略できます。  
  
オプションの*offset*変数引数を渡すと、テキスト値は0から始まるオフセット位置から読み込まれます。*offset*変数引数を指定しないと、BLOBの先頭から*textFormat*に渡した値に基づき読み込まれます。文字長が指定されないテキストを読み込む際には、*offset*変数引数を渡さなければならないことに注意してください。

**Note:** オフセット値として、0 (ゼロ) からBLOBサイズ-テキストサイズの間の数値を渡さなければならないことに注意してください。そうでなければ戻り値は予期できないものとなります。

呼び出し後、*offset*変数は、読み込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数を別のBLOB読み込みコマンドにも使用し、別の値をBLOBから読みだすことができます。

#### 参照 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[Convert to text](convert-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 555 |
| スレッドセーフである | &check; |


