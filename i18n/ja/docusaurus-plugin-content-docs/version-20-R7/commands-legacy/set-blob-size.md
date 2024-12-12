---
id: set-blob-size
title: SET BLOB SIZE
slug: /commands/set-blob-size
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOB SIZE.Syntax-->**SET BLOB SIZE** ( *BLOB* ; *size* {; *filler*} )<!-- END REF-->
<!--REF #_command_.SET BLOB SIZE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOBフィールドまたは変数 |
| size | Integer | &#8594;  | BLOBの新しいサイズ |
| filler | Integer | &#8594;  | 埋め込み文字のASCIIコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET BLOB SIZE.Summary-->SET BLOB SIZE コマンドは、*size*引数に渡された値に従って、BLOB *blob*のサイズを変更します。<!-- END REF-->

BLOBに新しいバイトを割り当て、それらのバイトを特定の値で初期化したい場合には、その値 (0..255) をオプション引数の*filler*に渡します。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### エラー処理 

メモリが足りず、BLOBのリサイズができないとき、エラー-108が生成されます。このエラーは[ON ERR CALL](on-err-call.md "ON ERR CALL")でとらえることができます。

#### 例題 1 

大きなBLOBプロセスまたはインタープロセス変数の処理を終了した後、占有していたメモリを解放することをお勧めします。そのためには、以下のように記述します:

```4d
 SET BLOB SIZE(aProcessBLOB;0)
 SET BLOB SIZE(<>anInterprocessBLOB;0)
```

#### 例題 2 

以下の例では、0xFFが埋め込まれた16KBのBLOBが作成されます:

```4d
 var vxData : Blob
 SET BLOB SIZE(vxData;16*1024;0xFF)
```

#### 参照 

[BLOB size](blob-size.md)  