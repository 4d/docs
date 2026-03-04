---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *lock* : Boolean )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| lock | Boolean | &#8594; | True = クエリで見つけたレコードをロック False = レコードをロックしない |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->**SET QUERY AND LOCK** コマンドを使用して、カレントのトランザクション中でこのコマンドに引き続き呼び出されるすべてのクエリで見つかったレコードを自動的にロックできます。<!-- END REF-->つまりクエリを行ってから結果を処理するまで、他のプロセスはレコードを変更できなくなることを意味します。

デフォルトで、検索されたレコードはロックされません。ロックを有効にするには*lock*引数に[True](../commands/true)を渡します。

このコマンドはトランザクションの中で使用しなければなりません。このコマンドがトランザクションの外側で呼び出されると、エラーが生成されます。このコマンドはレコードロックのより良いコントロールを提供します。検索されたレコードはトランザクションが終了 (有効またはキャンセル) するまでロックされたままとなります。トランザクションが終了すると、レコードのロックは解除されます(ただしカレントレコードを除く)。

カレントトランザクション中のすべてのテーブルのレコードがロックされます。

**SET QUERY AND LOCK** (True) 文が実行されると、([QUERY](../commands/query)のような)クエリコマンドは、すでにロックされたレコードを見つけると、特定の動作を選択します:

* クエリが停止され、システム変数OKは0に設定されます,
* カレントセレクションはクリアされます,
* LockedSetシステムセットにはクエリを停止する原因となったロックされたレコードが格納されます。

したがって、カレントセレクションが空だったりOK変数が0だった場合、LockedSetをテストして失敗の原因を検証する必要があります。

このメカニズムを無効にするには、**SET QUERY AND LOCK** (False) を実行します。

**SET QUERY AND LOCK** は、下記のクエリコマンドの動作を変更します:

* [QUERY](../commands/query)
* [QUERY SELECTION](../commands/query-selection)
* [QUERY BY EXAMPLE](../commands/query-by-example)
* [QUERY BY FORMULA](../commands/query-by-formula)
* [QUERY BY SQL](../commands/query-by-sql)
* [QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)
* [QUERY SELECTION WITH ARRAY](../commands/query-selection-with-array)
* [QUERY WITH ARRAY](../commands/query-with-array)
* [QUERY BY ATTRIBUTE](../commands/query-by-attribute)
* [QUERY SELECTION BY ATTRIBUTE](../commands/query-selection-by-attribute)

これに対して**SET QUERY AND LOCK** は、[ALL RECORDS](../commands/all-records) や[RELATE MANY](../commands/relate-many) 等、テーブルのカレントセレクションを変更する他のコマンドには影響を与えません。

## 例題 

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

## エラー管理 

コマンドがトランザクションのコンテキスト中で呼び出されなかった場合、エラーが生成されます。

## 参照 

[QUERY](../commands/query)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 661 |
| スレッドセーフである | yes |
| システム変数を更新する | error |


