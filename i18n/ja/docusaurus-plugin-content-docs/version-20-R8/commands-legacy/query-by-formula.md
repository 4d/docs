---
id: query-by-formula
title: QUERY BY FORMULA
slug: /commands/query-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY FORMULA.Syntax-->**QUERY BY FORMULA** ( *aTable* {; *queryFormula*} )<!-- END REF-->
<!--REF #_command_.QUERY BY FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードセレクションを求めるテーブル |
| queryFormula | Boolean | &#8594;  | 検索フォーミュラ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY BY FORMULA.Summary-->**QUERY BY FORMULA**は*aTable*からレコードを検索します。<!-- END REF-->**QUERY BY FORMULA**は、カレントプロセスの*aTable*のカレントセレクションを変更し、セレクションの先頭のレコ－ドをカレントレコ－ドにします。

**QUERY BY FORMULA**と[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)は、全く同じように機能しますが、**QUERY BY FORMULA**がテーブルのすべてのレコードを検索対象とするのに対して、[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)コマンドはカレントセレクションのレコードのみを検索対象とします。

両方のコマンドは、テーブルまたはセレクションの各レコードに対して*queryFormula*を適用します。*queryFormula*はTRUEかFALSEのいずれかの状態に評価されるブール式です。*queryFormula*でTRUEに評価されたレコードを新しいセレクションに追加します。

*queryFormula*は、フィールドと値とを比較するだけの単純なものから、計算、またはリレート先テーブルの情報を評価するような複雑なものまで処理します。*queryFormula*には4Dの関数 (コマンド) や開発者が作成した関数 (メソッド) や式 (フォーミュラ) を使用することができます。文字フィールドやテキストフィールドに対して作業を実行する場合は、*queryFormula*にワイルドカード (@) を使用することもできます。詳しい情報は[QUERY](query.md)コマンドの例を参照してください。

**警告:** 引数($1...$n) は*queryFormula* ではサポートされていません。

*queryFormula*が省略されると、4Dはフォーミュラでクエリダイアログボックスを表示します(ユーザーは**\[+\]**ボタン上を**Alt+クリック**することでフォーミュラに新しい行を追加することができます)。

検索が完了すると、新しいセレクションの最初のレコードがディスクからロードされカレントレコードになります。

これらのコマンドは最適化され、特にインデックスを利用します。クエリのタイプが許す場合、これらのコマンドは[QUERY](query.md)コマンドと同じのクエリを実行します。例えば

**QUERY BY FORMULA**(\[mytable\]; \[mytable\]myfield=value)

は可能であればインデックスを使用し、

[QUERY](query.md)(\[mytable\]; \[mytable\]myfield=value)

と同じに実行されます。4Dは最適化可能な部分を先に検索し、他の残りのクエリと合算することで、部分的に最適化できないクエリも最適化します。例えば、

**QUERY BY FORMULA**(\[mytable\];Length(myfield)=value)

は最適化されません。他方、

**QUERY BY FORMULA**(\[mytable\];Length(myfield)=value1 | myfield=value2)

は部分的に最適化されます。

これらのコマンドは、異なるテーブルのフィールドを比較する場合、SQL のような"JOIN"を行います。これはつまりテーブル間に自動リレーションが必要ない事を意味します。たとえば、以下のようなステートメントを実行する事が可能です(例題3を参照)

**QUERY BY FORMULA(\[Table\_A\];(\[Table\_A\]field\_X = \[Table\_B\]field\_Y) & (\[Table\_B\]field\_Y = "abc"))** 

フォーミュラの前半(*\[Table\_A\]field\_X = \[Table\_B\]field\_Y*) は二つのフィールド間でのJOINを確立し、後半の(*\[Table\_B\]field\_Y = "abc"*) は検索条件を定義します。この際、以下の条件が適用されます:

* 少なくとも一つの検索条件が設定される必要があります。
* *queryFormula* 引数には、同じテーブルに対しては一つまでしかフィールド比較演算子を含めることができません。

テーブル間のリレーションが存在しても、それらはルールとしては使用されません。しかし以下のケースでは、これらのコマンドは自動リ レーションを使用します:

* フォーミュラが *{ フィールド ; 比較演算子; 値}* の形式の要素に分解できない場合
* 同じテーブルの2つのフィールドが比較されている場合

> ****互換性に関する注意:** v11 以前のバージョンから返還されたデータベースとの互換性のため、JOINメカニズムを無効にできます。これには[SET DATABASE PARAMETER](set-database-parameter.md)コマンドのセレクターを使用します。

**4D Server:** このコマンドはサーバ上で実行され、実行が最適化されるようになりました。*queryFormula*内で直接変数が呼ばれているとき、クライアントマシンの変数値を使用してクエリを計算します。例えば**QUERY BY FORMULA**(\[mytable\];\[mytable\]myfield=myvariable)というステートメントはサーバ上で実行されますが、*myvariable*変数の内容はクライアントマシンのものが使用されます。

**互換性に関する注意:** 4D Server v11までは、このコマンドはクライアントマシン上で実行されていました。後方互換性のために、この振る舞いは変換されたデータベースでは維持されています。しかしながら、互換性プロパティ、あるいは[SET DATABASE PARAMETER](set-database-parameter.md) コマンドのセレクターを使用することで、変換されたデータベースでもサーバー側での実行が有効化されます。

#### 例題 1 

以下の例は、すべての年の12月に作成された請求書のレコードを検索します。これは[Month of](month-of.md "Month of")関数を各レコードに適用して検索します。このような検索は月の情報を別のフィールドとして持たない限り、他の方法では実現できません:

```4d
 QUERY BY FORMULA([Invoice];Month of([Invoice]Entered)=12) // Find the invoices entered in December
```

#### 例題 2 

以下の例は、名前が10文字を超える人のレコードを検索します:

```4d
 QUERY BY FORMULA([People];Length([People]Name)>10) // Find names longer than ten characters
```

#### 例題 3 

この例題では、テーブルにリレーションがありませんが、"ACME" クライアントからの請求書の全ての行をクエリするのにJOIN を使用する場合を考えます:

```4d
 QUERY BY FORMULA([invoice_line];([invoice_line]invoice_id=[invoice]id&[invoice]client="ACME"))
```

#### 参照 

[QUERY](query.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 48 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||


