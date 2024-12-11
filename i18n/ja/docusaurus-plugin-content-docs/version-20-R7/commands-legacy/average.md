---
id: average
title: Average
slug: /commands/average
displayed_sidebar: docs
---

<!--REF #_command_.Average.Syntax-->**Average** ( *series* {; *attributePath*} ) : Real<!-- END REF-->
<!--REF #_command_.Average.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | 平均を求めるデータ |
| attributePath | Text | &#8594;  | 平均を取得したい属性のパス |
| 戻り値 | Real | &#8592; | seriesの平均値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Average.Summary-->**Average**は、*series*の平均値を返します。<!-- END REF-->*series*がインデックスフィ－ルドの場合には、平均値を求めるためにインデックスが使用されます。

*series*に (1または2次元の) 配列を渡すこともできます。この場合配列は整数、倍長整数、または実数型でなければなりません。

このコマンドは、*series*がオブジェクト型フィールドである場合にのみ、テキスト型である任意の*attributePath*引数を受け入れます。これにより計算したい属性のパスを定義する事ができます。ネストされた属性に対しては標準のドット表記(例:"company.address.number")を使用して下さい。オブジェクトの属性名は大文字と小文字を区別するという点に注意して下さい。  
数値型の属性のみ計算されます。  
属性のパス内の値に数値型でないものがあった場合、それらは無視されます。

このコマンドが正しく実行されると、OKシステム変数は1に設定されます。ユーザが進捗サーモメータの**停止**ボタンをクリックするなどして処理が中断されると、OK変数は0に設定されます。

#### 例題 1 

以下の例は、出力フォームのB0ブレークエリアにある変数*vAverage*に値を代入します。このコードは変数*vAverage*のオブジェクトメソッドです。オブジェクトメソッドは、レベル0のブレークが発生したときに実行されます:

```4d
 vAverage:=Average([Employees] Salary)
```

以下のメソッドは、ブレーク処理をアクティブにしてセレクション内のレコードを印刷するために呼び出されます:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]LastNm;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 FORM SET OUTPUT([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**Note:** [BREAK LEVEL](break-level.md)コマンドの引数は、印刷するレポートのブレーク数と同じ数でなければなりません。ブレーク処理に関する詳細は*印刷*コマンドを参照してください。

#### 例題 2 

この例題ではセレクション中トップ15の平均点を計算します:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!11/07/01!)
 ORDER BY([Exams];[Exams]Exam_Grade;<)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 ARRAY REAL($ArrGrades;15)
 vAverage:=Average($ArrGrades)
```

#### 例題 3 

\[Customer\]テーブル内に、以下のようなデータを含む"full\_Data"オブジェクトフィールドが格納されている場合を考えます:

![](../assets/en/commands/pict2898119.en.png)

以下の様な計算をする事ができます:

```4d
 var $vAvg : Real
 ALL RECORDS([Customer])
 $vAvg:=Average([Customer]full_Data;"age")
  //$vAvg は 44.46
 
 var $vTot : Integer
 $vTot:=Sum([Customer]full_Data;"Children[].age")
  //$vTot は 105
```

#### 参照 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  
[Sum](sum.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 2 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


