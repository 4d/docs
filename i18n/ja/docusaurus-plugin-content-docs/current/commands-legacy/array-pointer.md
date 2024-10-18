---
id: array-pointer
title: ARRAY POINTER
slug: /commands/array-pointer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY POINTER.Syntax-->**ARRAY POINTER** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY POINTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | 配列名 |
| size | Integer | &#8594;  | 配列の要素数、またはsize2を指定した場合は配列の行数 |
| size2 | Integer | &#8594;  | 2次元配列の列数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY POINTER.Summary-->**ARRAY POINTER** コマンドは、メモリ上にポインタ要素の配列を作成またはリサイズします。<!-- END REF-->  
  
*arrayName*引数は作成する配列の名前です。  
  
*size*引数は配列の要素数です。  
  
*size2*引数はオプションです。*size2*が渡されている場合、コマンドは2次元配列を作成します。この場合、*size*に配列の行数を、*size2*にはそれぞれの配列の列数を指定します。2次元配列の各行は要素および配列として扱えます。これは配列の一番目の次元を扱う時、2次元配列中の配列全体を挿入あるいは削除するために、他の配列コマンドを使用できることを意味します。  
  
**ARRAY POINTER** を既存の配列に適用する場合、  
  
* 配列サイズを増やす場合、既存の値は保持され、新しい要素はヌルポインタで初期化されます。この新しい要素に[Is nil pointer](is-nil-pointer.md) を適用するとTrueが返されます。
* 配列サイズを減らす場合、後ろの要素は配列から削除され、失われます。

#### 例題 1 

この例は、100要素のポインタプロセス配列を作成します:  

```4d
 ARRAY POINTER(apValues;100)
```

#### 例題 2 

この例は、100行50列要素のポインタローカル配列を作成します:  

```4d
 ARRAY POINTER($apValues;100;50)
```

#### 例題 3 

この例題はポインタインタプロセス配列を作成し、それぞれの要素に要素番号に対応するテーブルのポインタを格納します。要素数はテーブル数と同じです。テーブルが削除されていた場合、Nilが返されます。 

```4d
 ARRAY POINTER(<>apValues;Last table number)
 For($vlElem;1;Size of array(<>apValues);1;-1)
    If(Is table number valid($vlElem))
       <>apValues{$vlElem}:=Table($vlElem)
    End if
 End for
```
