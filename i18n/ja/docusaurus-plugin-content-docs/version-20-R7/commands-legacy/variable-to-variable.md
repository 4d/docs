---
id: variable-to-variable
title: VARIABLE TO VARIABLE
slug: /commands/variable-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO VARIABLE.Syntax-->**VARIABLE TO VARIABLE** ( *process* ; *dstVar* ; *srcVar* {; *dstVar2* ; *srcVar2* ; ... ; *dstVarN* ; *srcVarN*} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | 送り先プロセス番号 |
| dstVar | Variable | &#8594;  | 送り先変数 |
| srcVar | Variable | &#8594;  | ソース変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.VARIABLE TO VARIABLE.Summary-->VARIABLE TO VARIABLEコマンドは、引数*srcVar1* *srcVar2*に渡す値を、*process*に渡す番号を持つ送り先プロセスの*dstVar* (*dstVar2*等) プロセス変数に書き込みます。<!-- END REF--> 

VARIABLE TO VARIABLEは、[SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE")コマンドと同じ動作をしますが、以下の点が異なります: 

* [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE")コマンドは引数にソース式を渡すため、配列全体を渡すことができません。これに対して、VARIABLE TO VARIABLEコマンドは明示的に引数としてソース変数を渡すため、配列を全体として渡すことができます。
* [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE")コマンドの各送り先変数は変数または配列要素を指定することができますが、配列全体は指定できません。VARIABLE TO VARIABLEコマンドの各送り先変数は変数、配列または配列要素を指定することができます。

カレントプロセスは送り先プロセスの変数を"のぞき見"しています。送り先プロセスは別のプロセスが自分の変数のインスタンスに書き込んでいることについては何も警告されません。

**4D Server:** [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE")、[SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE")、VARIABLE TO VARIABLEコマンドにより提供されるマシン間プロセス通信はクライアントからサーバへのみ行うことができます。ストアドプロシジャの読み書きを行うのは常にクライアントプロセスです。

*srcVar;dstVar*の組み合わせにおいて、ソース変数は送り先変数と互換性のあるタイプである必要があり、互換性がない場合には、意味のない値が設定されます。  
インタプリタモードでは、送り先変数が存在しない場合、変数が作成されソース変数の値が設定されます。

カレントプロセスは送り先プロセスの変数を"のぞき見"しています。送り先プロセスは別のプロセスが自分の変数のインスタンスに書き込んでいることについては何も警告されません。

##### 制限事項 

VARIABLE TO VARIABLE は、送り先変数としてローカル変数を受け付けません。

VARIABLE TO VARIABLE は、任意のタイプの送り先プロセスまたはインタープロセス変数を受け付けますが、以下のタイプは除きます:

* ポインタ
* ポインタ配列
* 2次元配列

送り先プロセスは、ユーザプロセスである必要があります。カーネルプロセスは、送り先プロセスにはなれません。送り先プロセスが存在しない場合には、エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドでインストールされたエラー処理メソッドを使用すると、このエラーをとらえることができます。

#### 例題 

以下の例は、ローカル変数*$vlProcess*で示されたプロセスからプロセス配列を読み込み、配列要素を順番に大文字に変換して、配列を全体として書き込みます:

```4d
 GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
    $anArray{$vlElem}:=Uppercase($anArray{$vlElem})
 End for
 VARIABLE TO VARIABLE($vlProcess;at_IPCom_Array;$anArray)
```

#### 参照 

[GET PROCESS VARIABLE](get-process-variable.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  
*プロセス*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 635 |
| スレッドセーフである | &cross; |


