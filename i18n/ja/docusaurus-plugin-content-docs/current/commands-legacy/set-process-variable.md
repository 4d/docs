---
id: set-process-variable
title: SET PROCESS VARIABLE
slug: /commands/set-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET PROCESS VARIABLE.Syntax-->**SET PROCESS VARIABLE** ( *process* ; *dstVar* ; *expr* {; *dstVar2* ; *expr2* ; ... ; *dstVarN* ; *exprN*} )<!-- END REF-->
<!--REF #_command_.SET PROCESS VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | 送り先のプロセス番号 |
| dstVar | Variable | &#8594;  | 送り先の変数 |
| expr | Variable | &#8594;  | ソース式 (ソース変数) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PROCESS VARIABLE.Summary-->SET PROCESS VARIABLE コマンドは、引数*expr1* (*expr2*等)に渡す値を、*process*に渡す番号の送り先プロセスの*dstVar* (*dstVar2*等) プロセス変数に書き込みます。<!-- END REF-->

それぞれの送り先変数は変数、または配列要素のいずれかを指定できます。ただし、この節で後述する制限事項を参照してください。

*srcVar;dstVar*の組み合わせにおいて、式は送り先変数と互換性のあるタイプである必要があり、互換性がない場合には、意味のない値が設定されます。インタプリタモードでは、送り先変数が存在しない場合、変数が作成され式の値が設定されます。

カレントプロセスは送り先プロセスの変数を"のぞき見"しています。送り先プロセスは別のプロセスが自分の変数のインスタンスに書き込んでいることについては何も警告されません。

**4D Server:** 4D Clientを使用し、サーバマシン上で実行される目的のプロセス (ストアドプロシージャ) の変数に書き込むことができます。このためには、*process*引数に渡すプロセス番号の前にマイナス記号を付けてください。  
[GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE")、SET PROCESS VARIABLE、[VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE")コマンドにより提供されるマシン間プロセス通信はクライアントからサーバへのみ行うことができます。ストアドプロシジャの読み書きを行うのは常にクライアントプロセスです。

**Tip:** サーバのプロセス番号がわからない場合でも、サーバのインタープロセス変数を使用することができます。このためには、*process*に任意の負の値を指定します。つまり、プロセス番号がわからなくても[GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE")コマンドを使用してサーバのインタープロセス変数値を処理することができるということです。このことは、*On Server Startupデータベースメソッド*を使用して、ストアドプロシージャが起動されている場合に便利です。クライアントマシンではそのプロセスの番号が自動的にわからないため、*process*引数に任意の負の値を渡すことができます。

##### 制限事項 

SET PROCESS VARIABLEは、送り先変数としてローカル変数を受け付けません。

SET PROCESS VARIABLEは、任意のタイプの送り先プロセスまたはインタープロセス変数を受け付けますが、以下のタイプは除きます:

* ポインタ
* すべての配列：あるプロセスから別のプロセスに配列を全体として書き込むには、[VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE")コマンドを使用します。ただし、SET PROCESS VARIABLEコマンドは配列の要素を書き込むことはできます。
* ポインタ配列の要素または2次元配列の要素を書き込むことはできません。

送り先プロセスはユーザプロセスである必要があります。カーネルプロセスは送り先プロセスにはなれません。送り先プロセスが存在しない場合、エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")でインストールされたエラー処理メソッドを使用すると、このエラーをとらえることができます。

#### 例題 1 

下のコードは、番号が*$vlProcess*であるプロセスのテキスト変数*vtCurStatus*を(空の文字列に)設定します:

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;"")
```

#### 例題 2 

以下のコードは、番号が*$vlProcess*であるプロセスのテキスト変数*vtCurStatus*を、カレントプロセスで実行中のメソッドの変数*$vtInfo*の値に設定します:

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)
```

#### 例題 3 

以下のコードは、番号が*$vlProcess*であるプロセスのテキスト変数*vtCurStatus*をカレントプロセスの同じ変数の値に設定します:

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)
```

**Note:** 最初の*vtCurStatus*は送り先プロセスにある変数のインスタンスを示しています。2番目の*vtCurStatus*はカレントプロセスにある変数のインスタンスを示しています。

#### 例題 4 

以下の例は*$vlProcess*で示されるプロセスのプロセス配列の要素を順次大文字に設定  
します:

```4d
 GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)
    SET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};Uppercase($vtElem))
 End for
```

**Note:** この例では、プロセス変数*vl\_IPCom\_Array*には配列*at\_IPCom\_Array*のサイズが格納され、ソース/送信先プロセスによって管理されている必要があります。

#### 例題 5 

以下の例は、現在のプロセスの同じ変数のインスタンスを使用して、送り先プロセスの変数*v1*, *v2*, *v3*のインスタンスに書き込みます:

```4d
 SET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)
```

#### 参照 

[GET PROCESS VARIABLE](get-process-variable.md)  
[POST OUTSIDE CALL](post-outside-call.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  
*プロセス*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 370 |
| スレッドセーフである | &check; |


