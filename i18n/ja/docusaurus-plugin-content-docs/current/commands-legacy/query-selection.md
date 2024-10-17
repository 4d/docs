---
id: query-selection
title: QUERY SELECTION
slug: /commands/query-selection
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION.Syntax-->**QUERY SELECTION** ( {*aTable* }{;}{ *queryArgument* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードセレクションを求めるテーブル, または 省略した場合、デフォルトテーブル |
| queryArgument | Expression | &#8594;  | 検索条件 |
| * | 演算子 | &#8594;  | 検索継続フラグ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY SELECTION.Summary-->**QUERY SELECTION** は、*aTable*のレコードを検索します。<!-- END REF-->**QUERY SELECTION** はカレントプロセスの*aTable*のカレントセレクションを変更し、セレクションの先頭のレコ－ドをカレントレコ－ドにします。 

**QUERY SELECTION** は、[QUERY](query.md)と同じような動作を実行します。相違点は検索する範囲が異なるだけです:

* [QUERY](query.md)はテーブル中全レコードの中からレコードを検索します。
* **QUERY SELECTION** はテーブルのカレントセレクションの中からレコードを検索します。

詳細については、[QUERY](query.md)コマンドの説明を参照してください。

**QUERY SELECTION** コマンドは、クエリが *\** 引数で結合された[QUERY](query.md)呼び出しのシークエンスを使用して定義する事が出来ない場合に有用です。通常、直前のクエリではなく、[USE SET](use-set.md) のようなコマンドでのクエリによるカレントセレクションを検索したい場合などに有効です。

#### 例題 

リストフォームにおいてユーザーが選択したレコードを対象にクエリします:

```4d
 USE SET("UserSet") // カレントセレクションを選択レコードと置き換えます
 QUERY SELECTION([Company];[Company]City="New York City";*)
 QUERY SELECTION([Company]Type Business="Stock Exchange") // "Stock Exchange"=株式取引
```

上のコードは、最初にユーザーが選択したレコードのセレクションから、ニューヨークシティで株式取引を行っている企業を検索します。

#### 参照 

[QUERY](query.md)  