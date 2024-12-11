---
id: scan-index
title: SCAN INDEX
slug: /commands/scan-index
displayed_sidebar: docs
---

<!--REF #_command_.SCAN INDEX.Syntax-->**SCAN INDEX** ( *aField* ; *number* {; >　または <} )<!-- END REF-->
<!--REF #_command_.SCAN INDEX.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | インデックスをスキャンするインデックスフィールド |
| number | Integer | &#8594;  | 返すレコード数 |
| >　または < | 演算子 | &#8594;  | >: インデックスの始まりから <: インデックスの終わりから |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SCAN INDEX.Summary-->SCAN INDEXは、*aField* フィールドを含むテーブルから*number*個のレコードのセレクションを作成します。<!-- END REF-->*<*を渡した場合、SCAN INDEXはインデックスの最後から*number*個のセレクション作成します。*\>*を渡した場合、SCAN INDEXはインデックスの先頭から*number*個のセレクションを作成します。このコマンドは、インデックスを用いるため非常に効率が良くなります。

**Note:** 結果のセレクションは、ソートされていません。

SCAN INDEXは、インデックスフィールドにのみ使用できます。このコマンドはカレントプロセスのテーブルのカレントセレクションを変更し、セレクションの先頭レコードをカレントレコードとしてロードします。

テーブル内のレコード数より多くのレコードを指定した場合、SCAN INDEXはすべてのレコードを含むセレクションを作成します。

##### 

**注:** このコマンドはオブジェクト型フィールドをサポートしません。

#### 例題 

以下の例は、ワースト50の顧客とベスト50の顧客に手紙を出します:

```4d
 SCAN INDEX([Customers]TotalDue;50;<) // ワースト50の顧客を得る
 ORDER BY([Customers]Zipcode;>) // 郵便番号で並び替え
 FORM SET OUTPUT([Customers];"ThreateningMail")
 PRINT SELECTION([Customers]) // 手紙を印刷
 SCAN INDEX([Customers]TotalDue;50;>) // ベスト50の顧客を得る
 ORDER BY([Customers]Zipcode;>) // 郵便番号で並び替え
 FORM SET OUTPUT([Customers];"Thanks Letter")
 PRINT SELECTION([Customers]) // 手紙を印刷
```

#### 参照 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[REDUCE SELECTION](reduce-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 350 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


