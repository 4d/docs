---
id: copy-named-selection
title: COPY NAMED SELECTION
slug: /commands/copy-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.COPY NAMED SELECTION.Syntax-->**COPY NAMED SELECTION** ( {*aTable* ;} *name* )<!-- END REF-->
<!--REF #_command_.COPY NAMED SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションをコピーするテーブル, または 省略した場合デフォルトテーブル |
| name | Text | &#8594;  | 作成する命名セレクションの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COPY NAMED SELECTION.Summary-->COPY NAMED SELECTION は*aTable*のカレントセレクションを命名セレクション*name*にコピーします。<!-- END REF-->オプション*table*引数が指定されていない場合は、そのプロセスのデフォルトテーブルを使用します。*name*引数にはセレクションのコピーが納められます。そのプロセスにおける*table*のカレントセレクションとカレントレコードは変更されません。

命名セレクションは実際にレコードを含むわけではなく、レコードへの並び順付き参照を含みます。各レコード参照はメモリを4バイト消費します。つまりCOPY NAMED SELECTIONコマンドを使用してセレクションをコピーすると、セレクション内のレコード数 x 4バイト分のメモリが必要となります。命名セレクションはメモリに置かれるため、命名セレクションに必要な分とプロセス内のテーブルのカレントセレクションに必要な分のメモリを確保しなければなりません。

*name*が使用したメモリを解放するには、[CLEAR NAMED SELECTION](clear-named-selection.md "CLEAR NAMED SELECTION")コマンドを使用します

#### 例題 

以下の例では、*\[People*\]テーブルに未払いの送り状があるかどうかを調べています。セレクションをソートして保存します。請求書が未払いのレコードをすべて検索します。その後、そのセレクションを再利用してメモリ内の命名セレクションを消去します。ソートしたセレクションを後で使いたい場合には、命名セレクションを消去しなくても構いません:

```4d
 ALL RECORDS([People])
  //ユーザにセレクションのソートを許可する
 ORDER BY([People])
  // 命名セレクションとしてソートしたセレクションを保存
 COPY NAMED SELECTION([People];"UserSort")
  // 未払いの請求書を検索
 QUERY([People];[People]InvoiceDue=True)
  // レコードがあれば
 If(Records in selection([People])>0)
  // ユーザに警告
    ALERT("Yes, there are overdue invoices on テーブル.")
 End if
  // ソート済みの命名セレクションを再利用
 USE NAMED SELECTION("UserSort")
  // メモリからセレクションを取り除く
 CLEAR NAMED SELECTION("UserSort")
```

#### 参照 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 331 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


