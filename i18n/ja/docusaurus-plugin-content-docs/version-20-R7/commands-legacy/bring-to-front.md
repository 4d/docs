---
id: bring-to-front
title: BRING TO FRONT
slug: /commands/bring-to-front
displayed_sidebar: docs
---

<!--REF #_command_.BRING TO FRONT.Syntax-->**BRING TO FRONT** ( *process* )<!-- END REF-->
<!--REF #_command_.BRING TO FRONT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | 最前面に移動させるプロセスのプロセス番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.BRING TO FRONT.Summary-->BRING TO FRONTは*process*に属するすべてのウィンドウを最前面に配置します。<!-- END REF-->このプロセスが既に最前のプロセスの場合は、このコマンドは何も行いません。プロセスが非表示の場合に、[SHOW PROCESS](show-process.md "SHOW PROCESS")コマンドでプロセスを表示しないとBRING TO FRONTコマンドは効果がありません。 

このコマンドを使用して、アプリケーションプロセスとデザインプロセスを最前面にすることができます。

**注:**プロセスに複数のウィンドウが含まれていて、その中で特定のものを最前面に配置したいときには、例えば [SET WINDOW RECT](set-window-rect.md) のようなコマンドを使用することが推奨されます。

#### 例題 

次の例は、メニューから実行できるプロジェクトメソッドです。これは、最前のプロセスが<>*vlAddCust\_PID*プロセスかどうかを調べています。そうでなければ、それを前面に配置します:

```4d
 If(Frontmost process#<>vlAddCust_PID)
    BRING TO FRONT(<>vlAddCust_PID)
 End if
```

#### 参照 

[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  