---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *errCode* ; *errText* ; *errODBC* ; *errSQLServer* )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| errCode | Integer | &#8592; | エラーコード |
| errText | Text | &#8592; | エラーテキスト |
| errODBC | Text | &#8592; | ODBCエラーコード |
| errSQLServer | Integer | &#8592; | SQLサーバネイティブエラーコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->SQL GET LAST ERRORコマンドは、ODBCコマンドの実行中に発生した最後のエラーに関連する情報を返します。<!-- END REF-->エラーの発生箇所としては、4Dアプリケーション、ネットワーク、ODBCソースなどが考えられます。

一般的に、このコマンドは[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドを用いて設定されたエラー処理用メソッド内で使用します。

* *errCode*引数にはエラーコードが返されます。
* *errText*引数にはエラーテキストが返されます。

残りの2つの引数には、エラーがODBCソースで生成された場合にのみ値が返されます。そうでない場合、空となります。 

* *errODBC*引数にはODBCエラーコード (SQL state) が返されます。
* *errSQLServer*引数にはSQLサーバのネイティブエラーコードが返されます。

#### 参照 

[Last errors](last-errors.md)   
[ON ERR CALL](on-err-call.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 825 |
| スレッドセーフである | &cross; |


