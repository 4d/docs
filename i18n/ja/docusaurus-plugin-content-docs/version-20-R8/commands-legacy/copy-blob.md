---
id: copy-blob
title: COPY BLOB
slug: /commands/copy-blob
displayed_sidebar: docs
---

<!--REF #_command_.COPY BLOB.Syntax-->**COPY BLOB** ( *srcBLOB* ; *dstBLOB* ; *srcOffset* ; *dstOffset* ; *len* )<!-- END REF-->
<!--REF #_command_.COPY BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| srcBlob | Blob | &#8594;  | コピー元BLOB |
| dstBlob | Blob | &#8594;  | コピー先BLOB |
| srcOffset | Integer | &#8594;  | コピー元のコピー開始位置 |
| dstOffset | Integer | &#8594;  | コピー先のコピー開始位置 |
| len | Integer | &#8594;  | コピーするバイト数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COPY BLOB.Summary-->COPY BLOB コマンドは*len*で指定された数のバイトを、*srcBLOB*から*dstBLOB*にコピーします。<!-- END REF-->

コピーは*srcOffset*で指定された場所 (コピー元BLOBの先頭からの相対位置) から開始され、*dstOffset*で指定された場所 (コピー先BLOBの先頭からの相対位置) に置かれます。

**Note:** コピー先BLOBは必要に応じてリサイズされます。

#### 参照 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 558 |
| スレッドセーフである | &check; |


