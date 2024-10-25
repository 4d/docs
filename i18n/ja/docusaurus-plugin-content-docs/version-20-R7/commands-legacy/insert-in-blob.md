---
id: insert-in-blob
title: INSERT IN BLOB
slug: /commands/insert-in-blob
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN BLOB.Syntax-->**INSERT IN BLOB** ( *BLOB* ; *offset* ; *len* {; *filler*} )<!-- END REF-->
<!--REF #_command_.INSERT IN BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | バイト列を挿入するBLOB |
| offset | Integer | &#8594;  | バイト列挿入開始位置 |
| len | Integer | &#8594;  | 挿入するバイト数 |
| filler | Integer | &#8594;  | デフォルトのバイト値 (0x00..0xFF) 省略した場合0x00 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.INSERT IN BLOB.Summary-->INSERT IN BLOB コマンドは、*blob*の*offset*で指定した位置に、*len*で指定した数のバイトを挿入します。<!-- END REF-->BLOBは*len*バイトだけ大きくなります。

オプションの*filler*引数を指定しない場合、BLOBに挿入されるバイトは0x00に設定されます。それ以外の場合、*filler*に渡した値に設定されます (モジューロ 256 - 0..255)。

呼び出し前に、*offset*引数にはBLOBの先頭から相対的な挿入位置を設定します。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### 参照 

[DELETE FROM BLOB](delete-from-blob.md)  