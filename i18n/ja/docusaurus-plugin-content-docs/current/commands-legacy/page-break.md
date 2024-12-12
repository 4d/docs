---
id: page-break
title: PAGE BREAK
slug: /commands/page-break
displayed_sidebar: docs
---

<!--REF #_command_.PAGE BREAK.Syntax-->**PAGE BREAK** {( * | > )}<!-- END REF-->
<!--REF #_command_.PAGE BREAK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * &#124; > | &#8594;  | *: Print formで開始されたプリントジョブをキャンセル, または >: 1つのプリントジョブを強制 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.PAGE BREAK.Summary-->PAGE BREAKはプリンタに送信されたデータの印刷を実行させ、改ページを行います。<!-- END REF-->PAGE BREAKは (On Printing Detailフォームイベントのコンテキストで) [Print form](../commands/print-form.md "Print form")と共に使用し、強制的に改ページを行ったり、メモリに作成された最後のページを印刷するために使用します。PAGE BREAKは、[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドとともに使用してはいけません。この代りに、[Subtotal](subtotal.md "Subtotal")や[BREAK LEVEL](break-level.md "BREAK LEVEL")にオプション引数を使用してページブレークを行ってください。

*\** と *\>* 引数は両方ともオプションです。

*\** 引数により、[Print form](../commands/print-form.md "Print form") コマンドによって開始したプリントジョブをキャンセルすることができます。このコマンドを実行すると、進行中のプリントジョブが直ちに中止されます。

**Note:** Windowsでは、プリンタサーバのスプールプロパティによってはこのメカニズムが動作しないことがあります。プリンタがただちに印刷を行うように設定されている場合、取消しは機能しないでしょう。PAGE BREAK(\*) コマンドの操作を有効にするには、プリンタ設定で最後のページがスプールされてから印刷を開始する設定を選んでください。

*\>* 引数は、PAGE BREAKの振る舞いを変更します。このシンタックスは2種類の効果を持ちます:

* PAGE BREAKコマンドが引数なしで再度実行されるまで、プリントジョブを開いたままにします。
* プリントジョブに優先権を与えます。プリントジョブが終了するまで、他のプリントは行われません。  
2番目のオプションは、スプールされるプリントジョブとともに使用すると、特に有効です。> 引数はプリントジョブが1つのファイルにスプールされることを保証します。これはプリント時間を短縮させます。

**Note:** スクリーンをプリントする際、ユーザがプリントプレビューダイアログボックスのキャンセルボタンをクリックした場合、PAGE BREAKコマンドはシステム変数OKに0を代入します。

#### 例題 1 

[Print form](../commands/print-form.md "Print form") コマンドの例題参照

#### 例題 2 

[SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER") コマンドの例題参照

#### 参照 

[CANCEL](cancel.md)  
[Print form](../commands/print-form.md)  