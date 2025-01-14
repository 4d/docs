---
id: post-outside-call
title: POST OUTSIDE CALL
slug: /commands/post-outside-call
displayed_sidebar: docs
---

<!--REF #_command_.POST OUTSIDE CALL.Syntax-->**POST OUTSIDE CALL** ( *process* )<!-- END REF-->
<!--REF #_command_.POST OUTSIDE CALL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.POST OUTSIDE CALL.Summary-->This command was named **CALL PROCESS** in previous 4D releases.<!-- END REF--> 

#### 説明 

**POST OUTSIDE CALL**は、*process*の最前面のウィンドウに表示されたフォームを呼び出します。

**重要**: **POST OUTSIDE CALL**は、同一マシン上で実行されたプロセス間でのみ有効です。

存在しないプロセスを呼び出した場合には、何も行いません。

*process* (目的のプロセス) で現在フォームが表示されていない場合には何も行いません。目的のプロセスで表示されているフォームがOn Outside callイベントを受け取ります。デザインモードのフォームプロパティウィンドウにおいて、このフォームのOn Outside callイベントを必ず有効にし、フォームメソッドでこのイベントを管理する必要があります。このイベントが無効であったり、またはフォームメソッドでイベントの管理を行わない場合、何も行われません。

**Note:** On Outside callイベントは、受け取り側である入力フォームの入力状況を変更します。特に、フィールドが編集中である場合には、On Data changeイベントが生成されます。

呼び出し元プロセス (**POST OUTSIDE CALL**が実行されたプロセス) は“待機”しません。**POST OUTSIDE CALL**は即座に効力を持ちます。必要であれば、この目的のために使用する、([GET PROCESS VARIABLE](get-process-variable.md)と[SET PROCESS VARIABLE](set-process-variable.md)により) 2つのプロセス間で読み書きが可能なインタープロセス変数やプロセス変数を使用して、呼び出したプロセスからの返答を待つループを書かなければなりません。

フォームを表示しないプロセスの間で通信を行うには、[GET PROCESS VARIABLE](get-process-variable.md)および[SET PROCESS VARIABLE](set-process-variable.md)コマンドを使用してください。

****Tip: POST OUTSIDE CALL**には**POST OUTSIDE CALL** **(-1)**というもう一つの構文があります。メソッドの実行速度が遅くならないように、4Dはインタープロセス変数が変更されるたびに再描画することはしません。プロセス参照番号の代わりに-1を*process*引数に渡すと、4Dは外部呼び出しをポストせず、その代わりに、同一マシン上で実行されているプロセス内のすべてのウィンドウに表示されているインタプロセス変数をすべて更新します。

#### 例題 

の例題参照

#### 参照 

[Form event code](../commands/form-event-code.md)"  
[GET PROCESS VARIABLE](get-process-variable.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 329 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


