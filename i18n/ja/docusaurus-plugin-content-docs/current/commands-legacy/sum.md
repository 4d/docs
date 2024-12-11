---
id: sum
title: Sum
slug: /commands/sum
displayed_sidebar: docs
---

<!--REF #_command_.Sum.Syntax-->**Sum** ( *series* {; *attributePath*} ) : Real<!-- END REF-->
<!--REF #_command_.Sum.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | 合計を求めるデータ |
| attributePath | Text | &#8594;  | 合計値を取得したい属性のパス |
| 戻り値 | Real | &#8592; | seriesの合計 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Sum.Summary-->**Sum**コマンドは、*series*の合計値を返します。<!-- END REF-->

*series*がインデックスフィ－ルドの場合、合計を求めるためにインデックスが使用されます。

(一次元または二次元の) 配列を *series* に渡すことができます。この場合配列は整数、倍長整数、または実数型でなければなりません。

このコマンドは、*series*がオブジェクト型フィールドである場合にのみ、テキスト型である任意の*attributePath*引 数を受け入れます。これにより計算したい属性のパスを定義する事ができます。ネストされた属性に対しては標準のドット表記 (例:"company.address.number")を使用して下さい。オブジェクトの属性名は大文字と小文字を区別するという点に注意して下さい。数値型の属性のみ計算されます。  
属性のパス内の値に数値型でないものがあった場合、それらは無視されます。

このコマンドが正しく実行されると、OKシステム変数は1に設定されます。ユーザが進捗サーモメータの**停止**ボタンをクリックするなどして処理が中断されると、OK変数は0に設定されます。

#### 例題 1 

以下の例はフォームに置かれた変数*vTotal*のオブジェクトメソッドです。オブジェクトメソッドは*vTotal*に一連のデータの合計値を代入します:

```4d
 vTotal:=Sum([Employees]Salary)
```

以下のメソッドは、ブレーク処理をアクティブにしてセレクション内のレコードを印刷するために呼び出されます:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]LastNm;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 OUTPUT FORM([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**注:** [BREAK LEVEL](break-level.md)コマンドの引数は、印刷するレポートのブレーク数と同じ数でなければなりません。ブレーク処理に関する詳細は*印刷*コマンドを参照してください。

#### 例題 2 

この例では配列中の値の合計値を求めます:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSum:=Sum($ArrGrades)
```

#### 例題 3 

オブジェクト型フィールドの属性を計算する例題については、[Average](average.md)コマンドの詳細の例題3を参照して下さい。

#### 参照 

[ACCUMULATE](accumulate.md)  
[Average](average.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


