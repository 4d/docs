---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*aTable*}{;}{*conjOp* ;} *objectField* ; *attributePath* ; *queryOp* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | テーブル | &#x1F852; | セレクションまたはレコードを返すテーブル 省略時:デフォルトテーブル |
| conjOp | 演算子 | &#x1F852; | 複数のクエリ(あれば)を連結する際に使用する結合演算子 |
| objectField | フィールド | &#x1F852; | 属性をクエリするオブジェクトフィールド |
| attributePath | 文字 | &#x1F852; | 属性の名前またはパス |
| queryOp | 演算子, 文字 | &#x1F852; | クエリ演算子(比較演算子) |
| value | テキスト, 数値, 日付, 時間 | &#x1F852; | 比較する値 |
| * | 演算子 | &#x1F852; | クエリ継続フラグ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** は [QUERY BY ATTRIBUTE](query-by-attribute.md) と同じように動作します。<!-- END REF-->相違点は検索する範囲が異なるだけです:

* [QUERY BY ATTRIBUTE](query-by-attribute.md) はテーブルの全レコードからレコードを検索します。
* **QUERY SELECTION BY ATTRIBUTE** はテーブルのカレントセレクションからレコードを検索します。

**QUERY SELECTION BY ATTRIBUTE** は*aTable* 内でレコードを検索します。**QUERY SELECTION BY ATTRIBUTE** コマンドはカレントプロセスにおいて、*aTable* のカレントセレクションを更新し、新しいカレントセレクションの先頭レコードをカレントレコードに設定します。

詳細については [QUERY BY ATTRIBUTE](query-by-attribute.md) の説明を参照ください。

**QUERY SELECTION BY ATTRIBUTE** コマンドは、クエリが \* 引数で結合された [QUERY BY ATTRIBUTE](query-by-attribute.md) (および [QUERY](query.md)) 呼び出しのシークエンスを使用して定義することが出来ない場合に有用です。例えば、カレントセレクションがクエリではなく、[USE SET](use-set.md) のようなコマンドによって作成されている場合などが該当します。

#### 例題 

ユーザーが選択したレコードを対象に、年齢が20-30歳の個人を検索します:

```4d
 USE SET("UserSet") // カレントセレクションを選択レコードと置き換えます
 QUERY SELECTION BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30) // クエリが実行されます
```

#### 参照 

[QUERY BY ATTRIBUTE](query-by-attribute.md)  