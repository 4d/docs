---
id: query-selection
title: QUERY SELECTION
slug: /commands/query-selection
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION.Syntax-->**QUERY SELECTION** ( {*aTable* : Table }{;}{ *queryArgument* : Expression {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | レコードセレクションを求めるテーブル, または 省略した場合、デフォルトテーブル |
| queryArgument | Expression | &#8594; | 検索条件 |
| * | 演算子 | &#8594; | 検索継続フラグ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6.5|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.QUERY SELECTION.Summary-->**QUERY SELECTION** は、*aTable*のレコードを検索します。<!-- END REF-->はカレントプロセスの*aTable*のカレントセレクションを変更し、セレクションの先頭のレコ－ドをカレントレコ－ドにします。 

**QUERY SELECTION** は、[QUERY](../commands/query)と同じような動作を実行します。相違点は検索する範囲が異なるだけです:

* [QUERY](../commands/query)はテーブル中全レコードの中からレコードを検索します。
* **QUERY SELECTION** はテーブルのカレントセレクションの中からレコードを検索します。

詳細については、[QUERY](../commands/query)コマンドの説明を参照してください。

**QUERY SELECTION** コマンドは、クエリが *\** 引数で結合された[QUERY](../commands/query)呼び出しのシークエンスを使用して定義する事が出来ない場合に有用です。通常、直前のクエリではなく、[USE SET](../commands/use-set) のようなコマンドでのクエリによるカレントセレクションを検索したい場合などに有効です。

## 例題 

リストフォームにおいてユーザーが選択したレコードを対象にクエリします:

```4d
 USE SET("UserSet") // カレントセレクションを選択レコードと置き換えます
 QUERY SELECTION([Company];[Company]City="New York City";*)
 QUERY SELECTION([Company]Type Business="Stock Exchange") // "Stock Exchange"=株式取引
```

上のコードは、最初にユーザーが選択したレコードのセレクションから、ニューヨークシティで株式取引を行っている企業を検索します。

## 参照 

[QUERY](../commands/query)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 341 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||


