---
id: order-by-formula
title: ORDER BY FORMULA
slug: /commands/order-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY FORMULA.Syntax-->**ORDER BY FORMULA** ( *aTable* ; *expression* {; > or <}{; *expression2* ; > or <2 ; ... ; *expressionN* ; > or <N} )<!-- END REF-->
<!--REF #_command_.ORDER BY FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションをソートするテーブル |
| expression | Expression | &#8594;  | 各レベルのソートに設定する式 (文字, 実数, 整数, 倍長整数, 日付, 時間または ブール) |
| > or < | 演算子 | &#8594;  | 各レベルのソート方向: >: 昇順, または <: 降順 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ORDER BY FORMULA.Summary-->**ORDER BY FORMULA**は、カレントプロセスの*aTable*のカレントレコードセレクションをソートします。<!-- END REF-->ソートが終了すると、セレクションの先頭レコードがカレントレコードとなります。**注:** 引数*aTable* でテーブルを必ず指定しなければならない点に注意してください。デフォルトテーブルを使用することはできません。

1つまたは複数のレベルを用いてセレクションのソートを実行できます。ソートレベルごとに、*formula* 引数と*\> または <*を指定します。> は昇順を、< は降順を意味します。ソート方向を省略した場合、デフォルトとしてソートを昇順に行います。

*formula* 引数に指定できる型は、文字、実数、整数、倍長整数、日付、時間、ブールです。

**警告:** 引数($1...$n) は*formula* ではサポートされていません。

**注:** **ORDER BY FORMULA** が[PRINT SELECTION](print-selection.md)、[BREAK LEVEL](break-level.md) とローカル変数に対して使用された場合、これら3つのコマンドは必ず同じメソッドから実行される必要があります。そうでない場合、エラーが生成されます。これは[PRINT SELECTION](print-selection.md) はブレーク値を計算するためには*formula* 引数のフォーミュラを再評価する必要があるからです。例えばメソッドから**ORDER BY FORMULA**( \[T1\] ; \[T1\]f1 > $value) を実行した場合、並び替えが行われ、メソッドが終了します。その後の[PRINT SELECTION](print-selection.md) と [BREAK LEVEL](break-level.md) の呼び出しは、*$value* がもう存在しないために*formula* 引数のフォーミュラが実行できないため、失敗に終わります。

ソートの定義方法に関係なく、実際のソート処理に時間がかかる場合は、4Dは自動的にインジケーターで進捗状況のメッセージを表示します。[MESSAGES ON](messages-on.md) コマンドと [MESSAGES OFF](messages-off.md) コマンドを使用して、メッセージを表示または非表示にすることができます。進捗インジケーターが表示された場合、ユーザは**中止**ボタンをクリックしてソートを中止することができます。ソートが正常に終了すると、システム変数OKには1がセットされ、それ以外の場合には0がセットされます。

**4D Server:** このコマンドはサーバ上で実行され、実行が最適化されるようになりました。*formula* 引数内で直接変数が呼ばれているとき、クライアントマシンの変数値を使用してソートを計算します。例えば、という**ORDER BY FORMULA(\[mytable\];\[mytable\]myfield\*myvariable)** コードは実行はサーバー側でされますが、クライアントマシンのmyvariable の中身を使用して実行されます。

> **互換性に関する注意:** 4D Server v11までは、このコマンドはクライアントマシン上で実行されていました。この処理は、変換されたデータベースにおいては後方互換性のために維持されています。しかしながら、互換性プロパティ、あるいは[SET DATABASE PARAMETER](set-database-parameter.md) コマンドのセレクターを使用すると、変換されたデータベースにおいてもサーバー側での実行が有効化されます。

#### 例題 

以下の例は、\[People\]テーブルをLastNameフィールドの文字長をキーにして降順に並び替えます。最も長い名字を持った人がカレントセレクションの先頭になります:

```4d
 ORDER BY FORMULA([People];Length([People]LastName);<)
```

#### 参照 

[ORDER BY](order-by.md)  