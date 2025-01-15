---
id: std-deviation
title: Std deviation
slug: /commands/std-deviation
displayed_sidebar: docs
---

<!--REF #_command_.Std deviation.Syntax-->**Std deviation** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Std deviation.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | 標準偏差を求めるデータ |
| 戻り値 | Real | &#8592; | seriesの標準偏差 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Std deviation.Summary-->**Std deviation**は、*series*の標準偏差を返します。<!-- END REF-->*series*がインデックスフィ－ルドの場合に、標準偏差を求めるためにインデックスが使用されます。

*series*に (1または2次元の) 配列を渡すこともできます。この場合配列は整数、倍長整数、または実数型でなければなりません。

#### 例題 1 

以下の例は変数*vDeviate*のオブジェクトメソッドです。オブジェクトメソッドは*vDeviate*に一連のデータの標準偏差を代入します:

```4d
 vDeviate:=Std deviation([Table1]DataSeries)
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

この例題では配列に格納された一連の値の標準偏差を求めます: 

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!11/07/01!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vStdDev:=Std deviation($ArrGrades)
```

#### 参照 

[Average](average.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  
[Variance](variance.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 26 |
| スレッドセーフである | &check; |


