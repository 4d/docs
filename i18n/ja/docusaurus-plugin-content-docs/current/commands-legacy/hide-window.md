---
id: hide-window
title: HIDE WINDOW
slug: /commands/hide-window
displayed_sidebar: docs
---

<!--REF #_command_.HIDE WINDOW.Syntax-->**HIDE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.HIDE WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号、または 省略時、カレントプロセスの最前面ウィンドウ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.HIDE WINDOW.Summary-->HIDE WINDOWコマンドは、*window*で指定したウィンドウ参照番号を持つウィンドウまたはこの引数省略時はカレントプロセスの最前面ウィンドウを、隠すために使用します。<!-- END REF-->例えばこのコマンドを使用して、複数のプロセスで構成されるアプリケーションで、アクティブなプロセスのウィンドウだけを表示できます。 

ウィンドウはスクリーンから消えますが、開かれたままです。プログラムを使用して、4Dのウィンドウがサポートする変更を適用できます。 

HIDE WINDOWコマンドで画したウィンドウを表示するには:

* [SHOW WINDOW](show-window.md "SHOW WINDOW") コマンドにウィンドウ参照番号を渡して使用する。
* ランタイムエクスプローラの**プロセス**ページで、ウィンドウを処理しているプロセスを選択し、**表示**ボタンをクリックする。

プロセスのすべてのウィンドウを隠すには[HIDE PROCESS](hide-process.md "HIDE PROCESS") コマンドを使用します。

#### 例題 

この例題は、入力フォームのボタンメソッドです。このメソッドは同じプロセス内で新しいウィンドウにダイアログボックスを開きます。その間入力フォームとツールパレットは隠されます。ダイアログボックスが閉じられると、他のウィンドウは再び表示されます。

```4d
  // Object method for the "Information" button
 
 HIDE WINDOW(Entry) // Hide the entry window
 HIDE WINDOW(Palette) // Hide the palette
 $Infos:=Open window(20;100;500;400;8) // Create the information window
 ... // Place here instructions that are dedicated to the dialog management
 CLOSE WINDOW($Infos) // Close the dialog
 SHOW WINDOW(Entry)
 SHOW WINDOW(Palette) // Display the other windows
```

#### 参照 

[SHOW WINDOW](show-window.md)  