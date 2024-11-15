---
id: variance
title: Variance
slug: /commands/variance
displayed_sidebar: docs
---

<!--REF #_command_.Variance.Syntax-->**Variance** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Variance.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | 分散を求めるデータ |
| 戻り値 | Real | &#8592; | seriesの分散 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Variance.Summary-->**Variance**は、*series*の分散を返します。<!-- END REF-->

*series*がインデックスフィ－ルドの場合、分散を求めるためにインデックスが使用されます。

(一次元または二次元の) 配列を *series* に渡すことができます。この場合配列は整数、倍長整数、または実数型でなければなりません。

分散は一連の値が期待値からどれだけ散らばっているかを示す値で、平均からの分散を計測します。4Dは以下の分散計算式を使用します: 

**Variance(x) = Sum (x-m)\*(x-m)/(n-1)**  
*m = 平均*  
*n = 標本数* 

考慮される値が標本でない場合、**Variance**から返される値を (n-1)/n でかけ合わせます。

#### 例題 1 

以下の例は変数*var*のオブジェクトメソッドです。オブジェクトメソッドは*var*に一連のデータの分散を代入します:

```4d
 var:=Variance(Students]Grades)
```

以下のメソッドは、ブレーク処理をアクティブにしてセレクション内のレコードを印刷するために呼び出されます:

```4d
 ALL RECORDS([Students])
 ORDER BY([Students];[Students]Class;>)
 BREAK LEVEL(1)
 ACCUMULATE([Students]Grades)
 OUTPUT FORM([Students];"PrintForm")
 PRINT SELECTION([Students])
```

**注:** [BREAK LEVEL](break-level.md)コマンドの引数は、印刷するレポートのブレーク数と同じ数でなければなりません。ブレーク処理に関する詳細は*印刷*コマンドを参照してください。

#### 例題 2 

この例題では配列に格納された値の分散を求めます:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vVariance:=Variance($ArrGrades)
```

#### 参照 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  