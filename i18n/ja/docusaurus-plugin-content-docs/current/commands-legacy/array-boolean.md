---
id: array-boolean
title: ARRAY BOOLEAN
slug: /commands/array-boolean
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BOOLEAN.Syntax-->**ARRAY BOOLEAN** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BOOLEAN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | 配列名 |
| size | Integer | &#8594;  | 配列の要素数、またはsize2を指定した場合は配列の行数 |
| size2 | Integer | &#8594;  | 2次元配列の列数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY BOOLEAN.Summary-->ARRAY BOOLEANコマンドは、メモリ上にブール要素の配列を作成またはリサイズします。<!-- END REF-->  
  
*arrayName*引数は作成する配列の名前です。  
  
*size*引数は配列の要素数です。  
  
*size2*引数はオプションです。*size2*が渡されている場合、コマンドは2次元配列を作成します。この場合、*size*に配列の行数を、*size2*にはそれぞれの配列の列数を指定します。2次元配列の各行は要素および配列として扱えます。これは配列の一番目の次元を扱う時、2次元配列中の配列全体を挿入あるいは削除するために、他の配列コマンドを使用できることを意味します。  
  
ARRAY BOOLEANを既存の配列に適用する場合、  
  
* 配列サイズを増やす場合、既存の値は保持され、新しい要素はFalseで初期化されます。
* 配列サイズを減らす場合、後ろの要素は配列から削除され、失われます。
  
**Tip**: コンテキストによっては、ブール配列の代わりに整数配列を使用し、要素が非0値の場合はTrue、0の場合はFalseとすることもできます。

#### 例題 1 

この例は、100要素のブールプロセス配列を作成します:  

```4d
 ARRAY BOOLEAN(abValues;100)
```

#### 例題 2 

この例は、100行50列要素のブールローカル配列を作成します:  

```4d
 ARRAY BOOLEAN($abValues;100;50)
```

#### 例題 3 

この例は、50要素のブールインタープロセス配列を作成し、それぞれの偶数要素にTrueを格納します:  

```4d
 ARRAY BOOLEAN(<>abValues;50)
 For($vlElem;1;50)
    <>abValues{$vlElem}:=(($vlElem%2)=0)
 End for
```

#### 参照 

[ARRAY INTEGER](array-integer.md)  