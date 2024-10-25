---
id: post-key
title: POST KEY
slug: /commands/post-key
displayed_sidebar: docs
---

<!--REF #_command_.POST KEY.Syntax-->**POST KEY** ( *code* {; *modifiers* {; *process*}} )<!-- END REF-->
<!--REF #_command_.POST KEY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| code | Integer | &#8594;  | 文字コードまたはファンクションキーコード |
| modifiers | Integer | &#8594;  | モディファイアキーのステータス |
| process | Integer | &#8594;  | 送信先のプロセス参照番号、 省略または0の場合、アプリケーションイベントキュー |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.POST KEY.Summary-->POST KEY コマンドはキーストロークをシミュレートします。<!-- END REF-->これは、ユーザが実際にキーボード上で文字を入力した場合と同様の結果を生じます。

引数 *code* には、その文字のコードを渡します。 

引数 *modifiers* を渡す場合は、イベント (モディファイア) 定数の1つまたは組み合わせを渡します。例えば、Shiftキーをシミュレートするには、 Shift key mask を渡します。引数 *modifiers* を渡さなかった場合は、モディファイアはシミュレートされません。

引数 *process* を指定すると、 キーストロークは、*process* に渡したプロセス番号を持つプロセスへと送られます。 0 (ゼロ) を渡したり、この引数を省略すると、キーストロークはアプリケーションレベルに送られます。そして、4Dスケジューラーはそれを適切なプロセスにディスパッチします。

#### 例題 

[Process number](process-number.md "Process number") コマンドの例題を参照してください。

#### 参照 

*ASCII Codes*  
[POST CLICK](post-click.md)  
[POST EVENT](post-event.md)  
*ファンクションキーコード*  