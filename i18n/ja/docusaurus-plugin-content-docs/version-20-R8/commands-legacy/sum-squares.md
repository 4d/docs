---
id: sum-squares
title: Sum squares
slug: /commands/sum-squares
displayed_sidebar: docs
---

<!--REF #_command_.Sum squares.Syntax-->**Sum squares** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Sum squares.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | 平方和を求めるデータ |
| 戻り値 | Real | &#8592; | seriesの平方和 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Sum squares.Summary-->**Sum squares**は、*series*の平方和を返します。<!-- END REF-->

*series*がインデックスフィ－ルドの場合、標準偏差を求めるためにインデックスが使用されます。

(一次元または二次元の) 配列を *series* に渡すことができます。この場合配列は整数、倍長整数、または実数型でなければなりません。

#### 例題 1 

以下の例は変数*vSquares*のオブジェクトメソッドです。オブジェクトメソッドは*vSquares*に一連のデータの平方和を代入します。*vSquares*変数はレポートの最後のブレークで印刷されます:

```4d
 vSquares:=Sum squares([Table1]DataSeries)
```

以下のメソッドは、ブレーク処理をアクティブにしてセレクション内のレコードを印刷するために呼び出されます:

```4d
 ALL RECORDS([Table1])
 ORDER BY([Table1];[Table1]DataSeries;>)
 BREAK LEVEL(1)
 ACCUMULATE([Table1]DataSeries)
 OUTPUT FORM([Table1];"PrintForm")
 PRINT SELECTION([Table1])
```

**注:** [BREAK LEVEL](break-level.md)コマンドの引数は、印刷するレポートのブレーク数と同じ数でなければなりません。ブレーク処理に関する詳細は*印刷*コマンドを参照してください。

#### 例題 2 

この例題では配列に格納された一連の値の平方和を取得します:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSumSquares:=Sum squares($ArrGrades)
```

#### 参照 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Variance](variance.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 28 |
| スレッドセーフである | &check; |


