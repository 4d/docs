---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limit* )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| limit | Integer | &#8594;  | レコード数, または 0: 制限なし |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET QUERY LIMIT.Summary-->SET QUERY LIMITは、カレントプロセスの以降の検索を対象に、*limit*に渡した数のレコードが見つかったら検索を中止するよう4Dに指示します。<!-- END REF-->

例えば*limit*に1を渡すと、以降の検索は検索条件に一致した1件のレコードを見つけるとすぐにインデックスまたはデータファイルのブラウズ作業を中止します。

制限なしのクエリを再実行するには、*limit*に0を渡したSET QUERY LIMITを再度呼び出します。

**警告:** SET QUERY LIMITコマンドは、カレントプロセス内で行われる以降のクエリのすべてに影響を及ぼします。そのため、常にSET QUERY LIMIT(limit) (*limit>0*)の呼び出しは、制限なしのクエリを再実行するためのSET QUERY LIMIT(0)の呼び出しと対とすることを忘れないでください。

SET QUERY LIMITは、下記のクエリコマンドの動作を変更します:

* [QUERY](query.md "QUERY")
* [QUERY SELECTION](query-selection.md "QUERY SELECTION")
* [QUERY BY EXAMPLE](query-by-example.md "QUERY BY EXAMPLE")
* [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md "QUERY SELECTION BY FORMULA")
* [QUERY BY SQL](query-by-sql.md "QUERY BY SQL")
* [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY")
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md "QUERY SELECTION WITH ARRAY")
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

これに対して、SET QUERY LIMITは、[ALL RECORDS](all-records.md "ALL RECORDS")や[RELATE MANY](relate-many.md "RELATE MANY")等、テーブルのカレントセレクションを変更する他のコマンドには影響を与えません。

#### 例題 1 

“100万ドル以上の売上を獲得している顧客10人を探せ”という要求に対応する検索を実行するには、以下のように記述します:

```4d
 SET QUERY LIMIT(10)
 QUERY([Customers];[Customers]Gross sales>1000000)
 SET QUERY LIMIT(0)
```

#### 例題 2 

[SET QUERY DESTINATION](set-query-destination.md "SET QUERY DESTINATION")の2番目の例題参照

#### 参照 

[Get query limit](get-query-limit.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY DESTINATION](set-query-destination.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 395 |
| スレッドセーフである | &check; |


