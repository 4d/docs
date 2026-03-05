---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*aTable* : Table}{;}{*conjOp* : Operator ;} *objectField* : Field ; *attributePath* : Text ; *queryOp* : Text, Operator ; *value* : Text, Real, Date, Time {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | セレクションまたはレコードを返すテーブル 省略時:デフォルトテーブル |
| conjOp | Operator | &#8594; | 複数のクエリ(あれば)を連結する際に使用する結合演算子 |
| objectField | Field | &#8594; | 属性をクエリするオブジェクトフィールド |
| attributePath | Text | &#8594; | 属性の名前またはパス |
| queryOp | Text, Operator | &#8594; | クエリ演算子(比較演算子) |
| value | Text, Real, Date, Time | &#8594; | 比較する値 |
| * | 演算子 | &#8594; | クエリ継続フラグ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|16 R2|変更|
|16|初出|

</details>
</div>

## 説明 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** は [QUERY BY ATTRIBUTE](../commands/query-by-attribute) と同じように動作します。<!-- END REF-->相違点は検索する範囲が異なるだけです:

* [QUERY BY ATTRIBUTE](../commands/query-by-attribute) はテーブルの全レコードからレコードを検索します。
* **QUERY SELECTION BY ATTRIBUTE** はテーブルのカレントセレクションからレコードを検索します。

**QUERY SELECTION BY ATTRIBUTE** は*aTable* 内でレコードを検索します。**QUERY SELECTION BY ATTRIBUTE** コマンドはカレントプロセスにおいて、*aTable* のカレントセレクションを更新し、新しいカレントセレクションの先頭レコードをカレントレコードに設定します。

詳細については [QUERY BY ATTRIBUTE](../commands/query-by-attribute) の説明を参照ください。

**QUERY SELECTION BY ATTRIBUTE** コマンドは、クエリが \* 引数で結合された [QUERY BY ATTRIBUTE](../commands/query-by-attribute) (および [QUERY](../commands/query)) 呼び出しのシークエンスを使用して定義することが出来ない場合に有用です。例えば、カレントセレクションがクエリではなく、[USE SET](../commands/use-set) のようなコマンドによって作成されている場合などが該当します。

## 例題 

ユーザーが選択したレコードを対象に、年齢が20-30歳の個人を検索します:

```4d
 USE SET("UserSet") // カレントセレクションを選択レコードと置き換えます
 QUERY SELECTION BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30) // クエリが実行されます
```

## 参照 

[QUERY BY ATTRIBUTE](../commands/query-by-attribute)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1424 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||


