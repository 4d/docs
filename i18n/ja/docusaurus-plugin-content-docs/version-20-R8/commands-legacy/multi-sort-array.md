---
id: multi-sort-array
title: MULTI SORT ARRAY
slug: /commands/multi-sort-array
displayed_sidebar: docs
---

<!--REF #_command_.MULTI SORT ARRAY.Syntax-->**MULTI SORT ARRAY** ( *array* {; *sort*}{; *array2* ; *sort2* ; ... ; *arrayN* ; *sortN*} ) <br/>
**MULTI SORT ARRAY** ( *ptrArrayName* ; *sortArrayName* )<!-- END REF-->
<!--REF #_command_.MULTI SORT ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | ソートする配列 |
| sort | * | &#8594;  | ">" : 昇順ソート, または "<" : 降順ソート, または 省略した場合、ソートしない |
| MULTI SORT ARRAY ( ptrArrayName ; sortArrayName ) |
| 引数 | 型 | 説明 |
| ptrArrayName | Pointer array | &#8594;  | 配列ポインタの配列 |
| sortArrayName | Integer array | &#8594;  | ソート順配列 (1 = 昇順にソート、-1 = 降順にソート、0 = 前のソートに同期) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MULTI SORT ARRAY.Summary-->**MULTI SORT ARRAY** コマンドにより、一連の配列に対してマルチレベルソートを実行することができます。<!-- END REF-->

このコマンドは2種類の構文を受け入れます。

* **第一の構文：MULTI SORT ARRAY (array{; sort}{; array2; sort2; ...; arrayN; sortN})**

この構文が最もシンプルです。複合条件による並び替えを適用しようとする同期した配列の名前を直接渡すことができます。

配列だけを渡すか、あるいは (*配列;> または <*) の組み合わせを必要なだけ渡すことができます。引数として渡された配列はすべて、同期化されて並び替えられます。

配列の内容を並び替え条件として使用するには、*sort* 引数を渡します。この引数の値 (*\> または <*) により、その配列の並び替え順序（昇順または降順）が決まります。*sort*引数を省略した場合、その配列の内容は並び替え条件として使用されません。

**注意:** コマンドが正常に機能するには、少なくとも1つの並び替え条件を渡さなければならないということを覚えておいてください。並び替え条件が設定されていない場合はエラーが生成されます。

コマンドに渡した配列の順番により、並び替えレベルが決定します。つまりシンタックス中、並び替え条件が指定された配列の位置により、その並び替えレベルが決まります。

* **・第二の構文： MULTI SORT ARRAY (ptrArrayName; sortArrayName)**

この構文はより複雑であり、汎用的な開発では非常に有効です（例えば、あらゆるタイプの配列を並び替える汎用メソッドを作成したり、汎用的な [SORT ARRAY](sort-array.md) コマンドに相当するものを作成する場合）。

*ptrArrayName* 引数には、配列ポインタの配列名を指定します。この配列の各要素は、並び替える配列を示すポインタです。*ptrArrayName*に指定した配列ポインタの順に、並び替えが実行されます。

**警告:** *ptrArrayName* がさすすべての配列は同じ要素数でなければなりません。

**注意:** *ptrArrayName* は、ローカル（$ptrArrayName）、プロセス（ptrArrayName）、インタープロセス（<>ptrArrayName）タイプのポインタの配列を指定することができます。これとは逆に、この配列の要素が指す対象は、プロセス配列またはインタープロセス配列でなくてはなりません。

*sortArrayName* 引数には配列名を渡し、この配列の各要素は対応するポインタ配列要素の並び替え順(-1、0または1)を示します:  
・-1=降順並び替え  
・0=配列は並び替え条件として使用されませんが、他の並び替えに応じて並び替えられます。  
・1=昇順並び替え

*ptrArrayName* 配列の各要素に対して、対応する*sortArrayName* 配列の要素が存在していなければなりません。したがって、必ずこの2つの配列の要素数は同じになります。

**注意:** 

* Pointer 型、またはPicture 型の配列を並び替えることはできません。二次元配列（例えば*a2DArray{$vlThisElement}*）の要素を並び替えることができますが、二次元配列そのもの（例えば*a2DArray*）を並び替えることはできません。
* Object 型の配列は並べ替えることができます。Null 要素はグループ化され、配列要素は内部的な順番で並べ替えされます。

#### 例題 1 

次の例題では1番目の構文を使用します。4つの配列を作成して都市（昇順）そして給与（降順）で並び替えます。最後の2つの配列、*names*と*telNums*は、前の並び替え条件に応じて同期されます:

```4d
 ALL RECORDS([Employees])
 SELECTION TO ARRAY([Employees]City;cities;[Employees]Salary;salaries;[Employees]Name;
 names;[Employees]TelNum;telNums)
 MULTI SORT ARRAY(cities;>;salaries;<;names;telNums)
```

配列*names*を3番目の並び替え条件として使用したい場合は、引数である*names*配列の後に *\> または <* を付加します。 

このシンタックスは:

```4d
 MULTI SORT ARRAY(cities;>;salaries;names;telNums)
```

以下と同じです:

```4d
 SORT ARRAY(cities;salaries;names;telNums;>)
```

#### 例題 2 

次の例題では2番目の構文を使用ます。4つの配列を作成し、都市（昇順）と会社（降順）で並び替えます。最後の2つの配列、names配列とtelNums配列は、前の並び替え条件に応じて同期化されます:

```4d
 ALL RECORDS([Employees])
 SELECTION TO ARRAY([Employees]City;cities;[Employees]Company;companies;[Employees]Name;
 names;[Employees]TelNum;telNums)
 ARRAY POINTER(pointers_Array;4)
 ARRAY LONGINT(sorts_Array;4)
 pointers_Array{1}:=->cities
 sorts_Array{1}:=1
 pointers_Array{2}:=->companies
 sorts_Array{2}:=-1
 pointers_Array{3}:=->names
 sorts_Array{3}:=0
 pointers_Array{4}:=->telNums
 sorts_Array{4}:=0
 MULTI SORT ARRAY(pointers_Array;sorts_Array)
```

3番目の並び替え条件としてnames配列を使用したい場合には、sorts\_Array {3}要素に値1を割り当てる必要があります。または、都市だけを条件として配列を並び替えたい場合は、sorts\_Array {2}、sorts\_Array {3}、sorts\_Array {4}の要素に値0を割り当てます。すると、SORT ARRAY(cities;companies;names;telNums;>)と同じ結果を得ることができます。

#### 参照 

[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SORT ARRAY](sort-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 718 |
| スレッドセーフである | &check; |


