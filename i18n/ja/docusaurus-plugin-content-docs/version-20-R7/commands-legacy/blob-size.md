---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOBフィールドまたは変数 |
| 戻り値 | Integer | &#8592; | バイト単位のBLOBサイズ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB size.Summary-->BLOB size は、*blob*のサイズをバイト単位で返します。<!-- END REF-->

#### 例題 

以下の例は*myBlob* BLOBに100バイトを追加します:

```4d
 SET BLOB SIZE(myBlob;BLOB size(myBlob)+100)
```

#### 参照 

[SET BLOB SIZE](set-blob-size.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 605 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


