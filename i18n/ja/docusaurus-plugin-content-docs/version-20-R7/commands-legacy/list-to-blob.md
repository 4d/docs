---
id: list-to-blob
title: LIST TO BLOB
slug: /commands/list-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO BLOB.Syntax-->**LIST TO BLOB** ( *list* ; *BLOB* {; *} )<!-- END REF-->
<!--REF #_command_.LIST TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | BLOBに格納する階層リスト |
| Blob | Blob | &#8594;  | 階層リストを受け取るBLOB |
| * | 演算子 | &#8594;  | 値を追加するには* |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LIST TO BLOB.Summary-->LIST TO BLOB コマンドは、*blob*に階層リスト*list*を格納します。<!-- END REF-->

オプション引数 *\** を指定した場合、階層リストはBLOBに追加され、これに合わせてBLOBのサイズも拡張されます。オプション引数 *\** を使用すれば、BLOBがメモリに収まる限り、変数やリストを (他のBLOBコマンド参照) をBLOBに連続して格納できます。 

オプション引数 *\** を指定しない場合には、階層リストはBLOBの最初に格納され、それ以前の内容を上書きします。これに合わせてBLOBのサイズも調整されます。

階層リストの格納場所に関わらず、指定された位置に従ってBLOBのサイズは必要に応じて拡張されます（必要な場合にはリストサイズまで加算）。修正後のバイトは（設定されたもの以外）0（ゼロ）にリセットされます。

**警告:** BLOBを使用して階層リストを格納すると、階層リストは4D内部形式を使用してBLOBに格納されるため、格納されたBLOBの内容を読み出すには[BLOB to list](blob-to-list.md "BLOB to list")を使用しなければなりません。

呼び出し後、階層リストが正常に格納された場合には、システム変数OKは1に設定されます。階層リストを格納するために必要なメモリがない等の理由で処理が実行できなかった場合には、システム変数OKは0に設定されます。

**プラットフォーム独立性に関する注意**  

LIST TO BLOBや[BLOB to list](blob-to-list.md "BLOB to list")は、 BLOBに格納されたリストを処理するために4Dの内部フォーマットを使用します。この利点として、これら二つのコマンドを使用する際、プラットフォーム 間のバイトスワップを気にする必要はありません。言い換えればこれらのコマンドを使用してWindowsで作成されたBLOBをMacintoshで使用 する、あるいはその逆を行うことができます。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### 例題 

[BLOB to list](blob-to-list.md "BLOB to list")の例題参照

#### 参照 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[SAVE LIST](save-list.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  