---
id: show-process
title: SHOW PROCESS
slug: /commands/show-process
displayed_sidebar: docs
---

<!--REF #_command_.SHOW PROCESS.Syntax-->**SHOW PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.SHOW PROCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | 表示させるプロセスのプロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SHOW PROCESS.Summary-->SHOW PROCESSは*process*に属する全ウィンドウを表示します。<!-- END REF-->このコマンドは*process*のウィンドウを最前面ウィンドウにするわけではありません。これを行うには[BRING TO FRONT](bring-to-front.md "BRING TO FRONT")コマンドを使用します。  
プロセスが既に表示されている場合は、このコマンドは何も実行しません。

#### 例題 

次の例は、以前に非表示になっていれば、Customersプロセスを表示します。Customersプロセスのプロセス参照は事前にプロセス変数*<>Customers*に格納されています:

```4d
 SHOW PROCESS(<>Customers)
```

#### 参照 

[BRING TO FRONT](bring-to-front.md)  
[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 325 |
| スレッドセーフである | &cross; |


