---
id: delete-from-blob
title: DELETE FROM BLOB
slug: /commands/delete-from-blob
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM BLOB.Syntax-->**DELETE FROM BLOB** ( *BLOB* ; *offset* ; *len* )<!-- END REF-->
<!--REF #_command_.DELETE FROM BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | バイト列を削除するBLOB |
| offset | Integer | &#8594;  | バイト削除開始位置 |
| len | Integer | &#8594;  | 削除するバイト数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE FROM BLOB.Summary-->DELETE FROM BLOB コマンドは、*len*で指定されたバイト数を、*blob*の*offset*で指定された位置（BLOBの最初から相対的な位置として表される）から削除します。<!-- END REF-->BLOBは*len*で指定されたバイト数分だけ縮小されます。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### 参照 

[INSERT IN BLOB](insert-in-blob.md)  