---
id: get-process-variable
title: GET PROCESS VARIABLE
slug: /commands/get-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.GET PROCESS VARIABLE.Syntax-->**GET PROCESS VARIABLE** ( *process* ; *srcVar* ; *dstVar* {; *srcVar2* ; *dstVar2* ; ... ; *srcVarN* ; *dstVarN*} )<!-- END REF-->
<!--REF #_command_.GET PROCESS VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | ソースプロセス番号 |
| srcVar | Variable | &#8594;  | ソース変数 |
| dstVar | Variable | &#8592; | 受け取る変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PROCESS VARIABLE.Summary-->GET PROCESS VARIABLE コマンドは、*process*引数に渡した番号のソースプロセスから*srcVar* (*srvVar2*等) プロセス変数を読み込み、その現在の値をカレントプロセスの*dstVar* (*dstVar2*等) 変数に返します。<!-- END REF-->

それぞれのソース変数は変数、配列、配列要素のいずれかを指定できます。ただし、この節で後述する制限事項を参照してください。

*srcVar;dstVar*変数の組み合わせにおいて、2つの変数は互換性のあるタイプである必要があり、互換性がない場合には、値を取得しても意味がなくなります。

カレントプロセスはソースプロセスの変数を"のぞき見"しています。ソースプロセスは別のプロセスが自分の変数のインスタンスを読み込んでいることについては何も警告されません。

**4D Server:** 4D Clientを使用し、サーバマシン上で実行される目的のプロセス (ストアドプロシージャ) の変数を読み込むことができます。このためには、*process*引数に渡すプロセス番号の前にマイナス記号を付けてください。  
GET PROCESS VARIABLE、[SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE")、[VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE")コマンドにより提供されるマシン間プロセス通信はクライアントからサーバへのみ行うことができます。ストアドプロシジャの読み書きを行うのは常にクライアントプロセスです。

**Tip:** サーバのプロセス番号がわからない場合でも、サーバのインタープロセス変数を使用することができます。このためには、*process*に任意の負の値を指定します。つまり、プロセス番号がわからなくてもGET PROCESS VARIABLEコマンドを使用してサーバのインタープロセス変数値を得ることができるということです。このことは、*On Server Startupデータベースメソッド*を使用して、ストアドプロシージャが起動されている場合に便利です。クライアントマシンではそのプロセスの番号が自動的にわからないため、*process*引数に任意の負の値を渡すことができます。

##### 制限事項 

GET PROCESS VARIABLEは、ソース変数としてローカル変数を受け付けません。

一方で受け取り側の変数はインタープロセス、プロセス、またはローカル変数を使用できます。値は変数にのみ受け取ることができ、フィールドで受け取ることはできません。

GET PROCESS VARIABLEは、任意のタイプのソースプロセス変数またはインタープロセス変数を受け付けますが、以下のタイプを除きます:

* ポインタ
* ポインタの配列
* 2次元配列

ソースプロセスは、ユーザプロセスである必要があります。カーネルプロセスはソースプロセスにはなれません。ソースプロセスが存在しない場合には、このコマンドは何も行いません。

**Note:** インタープリタモードでは、ソース変数が存在しない場合には未定義値が返されます。これは[Type](type.md "Type")を使って対応するソース変数をテストし、検出することができます。

#### 例題 1 

以下のコードは、プロセス番号が*$vlProcess*であるプロセスのテキスト変数*vtCurStatus*の値を読み込み、その値をカレントプロセスのプロセス変数*vtInfo*に返します:

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtInfo)
```

#### 例題 2 

以下のコードは上記の例と同じことをしますが、カレントプロセスで実行しているメソッドのローカル変数*$vtInfo*に値を返します:

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)
```

#### 例題 3 

以下のコードは上記の例と同じことをしますが、カレントプロセスの*vtCurStatus*変数に値を返します:

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)
```

**Note:** 最初の*vtCurStatus*はソースプロセスにある変数のインスタンスを示しています。2番目の*vtCurStatus*はカレントプロセスにある変数のインスタンスを示しています。

#### 例題 4 

以下の例は、*$vlProcess*で示されるプロセスからプロセス配列の要素を順次読み込みます:

```4d
 GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)
  // Do something with $vtElem
 End for
```

**Note:** この例では、プロセス変数*vl\_IPCom\_Array*には配列*at\_IPCom\_Array*のサイズが格納され、送信元プロセスによって管理されている必要があります。

#### 例題 5 

以下の例は上記の例と同じことをしますが、配列の要素を順番に読み込む代わりに配列を全体として読み込みます:

```4d
 GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
  // Do something with $anArray{$vlElem}
 End for
```

#### 例題 6 

以下の例は、変数*v1*,*v2*,*v3*のソースプロセスインスタンスを読み込み、それらの値をカレントプロセスの同じ変数のインスタンスに返します:

```4d
 GET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)
```

#### 例題 7 

DRAG AND DROP PROPERTIESコマンドの例題参照

#### 参照 

[POST OUTSIDE CALL](post-outside-call.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  
*ドラッグ＆ドロップ*  
*プロセス*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 371 |
| スレッドセーフである | &check; |


