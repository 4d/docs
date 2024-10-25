---
id: hide-process
title: HIDE PROCESS
slug: /commands/hide-process
displayed_sidebar: docs
---

<!--REF #_command_.HIDE PROCESS.Syntax-->**HIDE PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.HIDE PROCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | 隠すプロセスのプロセス番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.HIDE PROCESS.Summary-->HIDE PROCESSは*process*に属するすべてのウィンドウを非表示にします。<!-- END REF-->*process*のすべてのインタフェース要素は、次に[SHOW PROCESS](show-process.md "SHOW PROCESS")コマンドを実行するまで非表示となります。そのプロセスのメニューバーも非表示になります。したがって、プロセスが非表示になっているときにウィンドウを開いても画面が再描画されたり表示されません。プロセスが既に非表示になっている場合、このコマンドは何も実行しません。

ただし、デバッグウィンドウだけは例外です。*process*を非表示にしてもデバッグウィンドウが表示されると、*process*は表示され最前面のプロセスとなります。

*process*を作成した時点でそれを全く表示したくなければ、HIDE PROCESSコマンドをプロセスメソッドの最初のコマンドにします。このコマンドはメインプロセスおよびキャッシュマネージャプロセスを非表示にすることはできません。

プロセスを非表示にした場合でも、そのプロセスは実行し続けます。

#### 例題 

次の例は、カレントプロセスのすべてのウインドウを非表示にします:

```4d
 HIDE PROCESS(Current process)
```

#### 参照 

[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  