---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *lock* )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| lock | Boolean | &#8594;  | True = クエリで見つけたレコードをロック False = レコードをロックしない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->**SET QUERY AND LOCK** コマンドを使用して、カレントのトランザクション中でこのコマンドに引き続き呼び出されるすべてのクエリで見つかったレコードを自動的にロックできます。<!-- END REF-->つまりクエリを行ってから結果を処理するまで、他のプロセスはレコードを変更できなくなることを意味します。

デフォルトで、検索されたレコードはロックされません。ロックを有効にするには*lock*引数に[True](true.md "True")を渡します。

このコマンドはトランザクションの中で使用しなければなりません。このコマンドがトランザクションの外側で呼び出されると、エラーが生成されます。このコマンドはレコードロックのより良いコントロールを提供します。検索されたレコードはトランザクションが終了 (有効またはキャンセル) するまでロックされたままとなります。トランザクションが終了すると、レコードのロックは解除されます(ただしカレントレコードを除く)。

カレントトランザクション中のすべてのテーブルのレコードがロックされます。

**SET QUERY AND LOCK** (True) 文が実行されると、([QUERY](query.md)のような)クエリコマンドは、すでにロックされたレコードを見つけると、特定の動作を選択します:

* クエリが停止され、システム変数OKは0に設定されます,
* カレントセレクションはクリアされます,
* LockedSetシステムセットにはクエリを停止する原因となったロックされたレコードが格納されます。

したがって、カレントセレクションが空だったりOK変数が0だった場合、LockedSetをテストして失敗の原因を検証する必要があります。

このメカニズムを無効にするには、**SET QUERY AND LOCK** (False) を実行します。

**SET QUERY AND LOCK** は、下記のクエリコマンドの動作を変更します:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

これに対して**SET QUERY AND LOCK** は、[ALL RECORDS](all-records.md) や[RELATE MANY](relate-many.md) 等、テーブルのカレントセレクションを変更する他のコマンドには影響を与えません。

#### 例題 

この例題では、CategoryがCに属する顧客は、[QUERY](query.md "QUERY")と[DELETE SELECTION](delete-selection.md "DELETE SELECTION")の間で、他のプロセスから変更や削除はできません。:

```4d
 START TRANSACTION
 SET QUERY AND LOCK(True)
 QUERY([Customers];[Customers]Categorie=“C”)
  //At this moment, the records found are automatically locked for all other processes
 DELETE SELECTION([Customers])
 SET QUERY AND LOCK(False)
 VALIDATE TRANSACTION
```

#### エラー管理 

コマンドがトランザクションのコンテキスト中で呼び出されなかった場合、エラーが生成されます。

#### 参照 

[QUERY](query.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 661 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


