---
id: array-integer
title: ARRAY INTEGER
slug: /commands/array-integer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY INTEGER.Syntax-->**ARRAY INTEGER** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY INTEGER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | 配列名 |
| size | Integer | &#8594;  | 配列の要素数、またはsize2を指定した場合は配列の行数 |
| size2 | Integer | &#8594;  | 2次元配列の列数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY INTEGER.Summary-->ARRAY INTEGERコマンドは、メモリ上に2バイト整数要素の配列を作成またはリサイズします。<!-- END REF-->  
  
*arrayName*引数は作成する配列の名前です。  
  
*size*引数は配列の要素数です。  
  
*size2*引数はオプションです。*size2*が渡されている場合、コマンドは2次元配列を作成します。この場合、*size*に配列の行数を、*size2*にはそれぞれの配列の列数を指定します。2次元配列の各行は要素および配列として扱えます。これは配列の一番目の次元を扱う時、2次元配列中の配列全体を挿入あるいは削除するために、他の配列コマンドを使用できることを意味します。  
  
ARRAY INTEGERを既存の配列に適用する場合、  
  
* 配列サイズを増やす場合、既存の値は保持され、新しい要素は0で初期化されます。
* 配列サイズを減らす場合、後ろの要素は配列から削除され、失われます。

#### 例題 1 

この例は、100要素の整数プロセス配列を作成します:  

```4d
 ARRAY INTEGER(aiValues;100)
```

#### 例題 2 

この例は、100行50列要素の整数ローカル配列を作成します:  

```4d
 ARRAY INTEGER($aiValues;100;50)
```

#### 例題 3 

この例は、50要素の整数インタープロセス配列を作成し、それぞれの要素に要素番号を格納します:  

```4d
 ARRAY INTEGER(<>aiValues;50)
 For($vlElem;1;50)
    <>aiValues{$vlElem}:=$vlElem
 End for
```

#### 参照 

[ARRAY LONGINT](array-longint.md)  
[ARRAY REAL](array-real.md)  