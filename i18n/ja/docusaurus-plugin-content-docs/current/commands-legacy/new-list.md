---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | リスト参照番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.New list.Summary-->New list は、新しい空の階層リストをメモリに作成し、ユニークなリスト参照番号を返します。<!-- END REF-->

**警告:** 階層リストはメモリに保持されます。階層リストを使い終わったら、[CLEAR LIST](clear-list.md "CLEAR LIST")コマンドを使用してそれを廃棄し、メモリを解放することが重要です。

階層リストを作成するコマンドは、この他にもあります:

* [Copy list](copy-list.md "Copy list") は、既存のリストからリストを複製します。
* [Load list](load-list.md "Load list") は、デザインモードのリストエディタで (手動またはプログラムによって) 作成された選択リストをロードすることによりリストを作成します。
* [BLOB to list](blob-to-list.md "BLOB to list") は、前回保存されたBLOBのコンテンツからリストを作成します。

New listを使用して階層リストを作成した後は、以下のことが行えます:

* [APPEND TO LIST](append-to-list.md "APPEND TO LIST")や[INSERT IN LIST](insert-in-list.md "INSERT IN LIST")を使用して、項目をリストに追加できます。
* [DELETE FROM LIST](delete-from-list.md "DELETE FROM LIST")コマンドを使用して、リストから項目を削除できます。.

#### 例題 

[APPEND TO LIST](append-to-list.md "APPEND TO LIST")コマンドの例題を参照

#### 参照 

[APPEND TO LIST](append-to-list.md)  
[BLOB to list](blob-to-list.md)  
[CLEAR LIST](clear-list.md)  
[Copy list](copy-list.md)  
[DELETE FROM LIST](delete-from-list.md)  
[INSERT IN LIST](insert-in-list.md)  
[LIST TO BLOB](list-to-blob.md)  
[Load list](load-list.md)  