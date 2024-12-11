---
id: query-by-sql
title: QUERY BY SQL
slug: /commands/query-by-sql
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY SQL.Syntax-->**QUERY BY SQL** ( {*aTable* ;} *sqlFormula* )<!-- END REF-->
<!--REF #_command_.QUERY BY SQL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードセレクションを返すテーブル、または 省略された場合デフォルトテーブル |
| sqlFormula | Text | &#8594;  | SELECTクエリのWHERE節を表す 有効なSQL検索フォーミュラ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY BY SQL.Summary-->4Dに統合されたSQLカーネルのメリットを利用ためにQUERY BY SQLコマンドを使用できます。<!-- END REF-->このコマンドで以下のような簡単なSELECTクエリを実行できます:

```SQL
   SELECT *      FROM aTable      WHERE 
```

*aTable*は、最初の引数に渡されるテーブルの名前です。*sqlFormula*は、2番目の引数で渡されるクエリの文字列です。

例えば、以下のステートメントは、

```4d
 ([Employees];"name=’smith’")
```

以下のSQLクエリに相当します。

```SQL
   SELECT * FROM Employees WHERE "name=’smith’"
```

QUERY BY SQL コマンドは、[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA") コマンドと類似しています。指定されたテーブルでレコードを探します。このコマンドは、カレントプロセスの*aTable*のカレントセレクションを変更し、新しいセレクションの最初のレコードをカレントレコードにします。

Note: QUERY BY SQL コマンドは、外部SQL接続のコンテクストでは使用されません。このリクエストは4Dの統合されたSQLエンジンに直接接続します。

QUERY BY SQLは、テーブルセレクションの各レコードに*sqlFormula*を適用します。*sqlFormula*はブール式で、[True](true.md "True")または[False](false.md "False")を返さなければなりません。SQL標準では、検索条件は[True](true.md "True")、[False](false.md "False")または[NULL](null.md "NULL")を返します。検索条件が[True](true.md "True")を返す全てのレコード (行) が、新しいカレントセレクションに含まれます。

例えば、値とフィールド (カラム) と比較する場合、*sqlFormula*式は単純です。しかし演算などを実行したりすると、*sqlFormulaの*式は複雑になります。[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")のように、QUERY BY SQLはリレートするテーブルの情報を評価できます (例題4を参照)。*sqlFormula*は有効なSQLステートメントでなければなりません。そしてそのステートメントは4Dの現在のSQLの実行規則の点においてSQL-2スタンダードに準じていなければなりません。4DのSQLのサポートについては、4D SQL Referenceマニュアルを参照してください。

*sqlFormula*引数は、4D式への参照を使用できます。使用できるシンタックスは、統合SQLコマンドや[Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL")タグの間に挿入されるコード (*<<MyVar>>*または*:MyVar)* と同じです。詳細は、*SQLコマンドの概要*の節を参照してください。

**注:** このコマンドは、[SET QUERY LIMIT](set-query-limit.md "SET QUERY LIMIT")や[SET QUERY DESTINATION](set-query-destination.md "SET QUERY DESTINATION")コマンドと互換です。

**注:** コンパイルモードではローカル変数への参照を使用することはできません。4DにおけるSQLプログラミングの情報は*SQLコマンドの概要*を参照してください。  

##### リレーションについて 

4Dのストラクチャエディタで定義されたテーブル間で、QUERY BY SQLはリレーションを使用しません。関連するデータを利用したい場合、クエリへJOINを追加する必要があります。例えば、\[Persons\]Cityから\[Cities\]Nameの間に、N対1リレーションを持つ以下のストラクチャがあると仮定します:

```SQL
   [People]      Name      City   [Cities]      Name      Population
```

[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")コマンドを使用して、以下のように記述できます:

```4d
 QUERY BY FORMULA([People];[Cities]Population>1000)
```

QUERY BY SQLを使用して、リレーションの存在の有無に関わらず、以下のステートメントを記述できます:

```4d
 QUERY BY SQL([People];"people.city=cities.name AND cities.population>1000")
```

**Note:** QUERY BY SQLは、[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")と異なる方法で、1対NとN対Nリレーションを扱います。

#### 例題 1 

売上高が100を超えるオフィスを表示します。SQLは以下のようになります: 

```SQL
   SELECT *      FROM Offices      WHERE Sales > 100
```

QUERY BY SQL コマンドを使用すると、

```4d
 C_STRING(30;$queryFormula)
 $queryFormula:="Sales > 100"
 QUERY BY SQL([Offices];$queryFormula)
```

#### 例題 2 

3000から4000件の範囲に分類される注文を表示します。SQLは以下のようになります: 

```SQL
   SELECT *      FROM Orders      WHERE Amount BETWEEN 3000 AND 4000
```

QUERY BY SQL コマンドを使用すると、

```4d
 C_STRING(40;$queryFormula)
 $queryFormula:="Amount BETWEEN 3000 AND 4000"
 QUERY BY SQL([Orders];$queryFormula)
```

#### 例題 3 

指定された条件で並び替えされたクエリ結果の取得方法を説明します。SQLは以下のようになります: 

```SQL
   SELECT *      FROM People      WHERE City =’Paris’         ORDER BY Name
```

QUERY BY SQL コマンドを使用すると、

```4d
 C_STRING(40;$queryFormula)
 $queryFormula:="City= ‘Paris’ ORDER BY Name"
 QUERY BY SQL([People];$queryFormula)
```

#### 例題 4 

4Dのリレートテーブルを使用するクエリをこの例で示します。SQLでは、JOINを使用してリレーションを表わします。以下の2つのテーブルがあると仮定します: 

```SQL
   [Invoices] :      ID_Inv: Longint      Date_Inv: Date      Amount: Real   [Lines_Invoices] :      ID_Line: Longint      ID_Inv: Longint      Code: Alpha (10)
```

\[Lines\_Invoices\]ID\_Invから\[Invoices\]ID\_Invの間に、N対1のリレーションがあります。  
[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")コマンドでストラクチャのリレーションを使用する場合、以下のように記述します:

```4d
 QUERY BY FORMULA([Lines_Invoices];([Lines_Invoices]Code="FX-200") & (Month of([Invoices]Date_Inv)=4))
```

これをSQLクエリで表すと以下のようになります:

```SQL
   SELECT ID_Line      FROM Lines_Invoices, Invoices      WHERE Lines_Invoices.ID_Inv=Invoices.ID_Inv         AND Lines_Invoices.Code='FX-200'         AND MONTH(Invoices.Date_Inv) = 4
```

QUERY BY SQL コマンドを使用する場合:

```4d
 C_STRING(40;$queryFormula)
 $queryFormula:="Lines_Invoices.ID_Inv=Invoices.ID_InvAND Lines_Invoices.Code=’FX-200’ AND MONTH(Invoices.Date_Inv)=4"
 QUERY BY SQL([Lines_Invoices];$queryFormula)
```

#### システム変数およびセット 

検索条件のフォーマットが正しければ、OKシステム変数は1に設定されます。そうでなければこのコマンドの結果のセレクションは空になり、エラーが返され、OK変数の値は0に設定されます。このエラーは[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドでインストールされるエラー処理メソッドでとらえることができます。

#### 参照 

[QUERY BY FORMULA](query-by-formula.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 942 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


