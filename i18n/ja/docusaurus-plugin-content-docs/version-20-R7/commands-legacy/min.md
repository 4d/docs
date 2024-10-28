---
id: min
title: Min
slug: /commands/min
displayed_sidebar: docs
---

<!--REF #_command_.Min.Syntax-->**Min** ( *series* {; *attributePath*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Min.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | 最小値を求めるデータ |
| attributePath | Text | &#8594;  | 最小値を取得したい属性のパス |
| 戻り値 | Number, Date | &#8592; | series中の最小値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Min.Summary-->**Min**は、*series*中の最小値を返します。<!-- END REF-->*series*がインデックスフィ－ルドの場合には、最小値を求めるためにインデックスが使用されます。

*series*セレクションが空の場合、**Min**は0を返します。

*series*に (1または2次元の) 配列を渡すこともできます。この場合配列は整数、倍長整数、実数型、または日付型でなければなりません。

このコマンドは、*series*がオブジェクト型フィールドである場合にのみ、テキスト型である任意の*attributePath*引 数を受け入れます。これにより計算したい属性のパスを定義する事ができます。ネストされた属性に対しては標準のドット表記 (例:"company.address.number")を使用して下さい。オブジェクトの属性名は大文字と小文字を区別するという点に注意して下さい。数値型の属性のみ計算されます。  
属性のパス内の値に数値型でないものがあった場合、それらは無視されます。

このコマンドが正しく実行されると、OKシステム変数は1に設定されます。ユーザが進捗サーモメータの**停止**ボタンをクリックするなどして処理が中断されると、OK変数は0に設定されます。

#### 例題 1 

以下の例は、出力フォームのB0ブレークエリアにある変数*vMin*に値を代入します。変数はレポートの最後に印刷されます。オブジェクトメソッドは変数にフィールドの最小値を代入し、レポートの最後のブレークで印刷されます: 

```4d
 vMin:=Min([Employees]Salary)
```

**注:** 変数に対して"On printing break" フォームイベントが選択されていることを確認して下さい。

以下のメソッドは、ブレーク処理をアクティブにしてセレクション内のレコードを印刷するために呼び出されます:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]Company;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 FORM SET OUTPUT([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**注:** [BREAK LEVEL](break-level.md)コマンドの引数は、印刷するレポートのブレーク数と同じ数でなければなりません。ブレーク処理に関する詳細は*印刷*コマンドを参照してください。

#### 例題 2 

以下の例題は従業員の最低売上高を検索し、警告ダイアログに結果を表示します:

```4d
 ALERT("Minimum sale = "+String(Min([Employees]Sales)))
```

#### 例題 3 

この例題では配列中で最も小さい値を取得します:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!11/07/01!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vMin:=Min($ArrGrades)
```

#### 例題 4 

オブジェクト型フィールドの属性を計算する例題については、[Average](average.md)コマンドの詳細の例題3を参照して下さい。

#### 参照 

[Max](max.md)  