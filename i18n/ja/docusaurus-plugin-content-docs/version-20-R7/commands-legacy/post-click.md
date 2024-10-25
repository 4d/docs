---
id: post-click
title: POST CLICK
slug: /commands/post-click
displayed_sidebar: docs
---

<!--REF #_command_.POST CLICK.Syntax-->**POST CLICK** ( *mouseX* ; *mouseY* {; *process*} {; *} )<!-- END REF-->
<!--REF #_command_.POST CLICK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| mouseX | Integer | &#8594;  | 水平座標 |
| mouseY | Integer | &#8594;  | 垂直座標 |
| process | Integer | &#8594;  | 送信先のプロセス参照番号、 省略または0の場合、アプリケーションイベントキュー |
| * | Operator |  &#8594;  | 指定された場合はグローバルな座標システムが使用される 省略された場合はローカルな座標システムが使用される |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.POST CLICK.Summary-->POST CLICK コマンドはマウスクリックをシミュレートします。<!-- END REF-->これは、ユーザが実際にマウスボタンをクリックした場合と同様の結果を生じます。

引数 *mouseX* と *mouseY* には、クリックの水平座標と垂直座標を渡します。引数 *\** を渡した場合、これらの座標は画面にに対して相対的に表されます。引数 *\** を省略すると、*process* に渡したプロセス番号を持つプロセスの最前面のウィンドウに対して相対的に表されます。

引数 *process* を指定すると、クリックは *process* に渡したプロセス番号を持つプロセスへ送られます。0 (ゼロ) を渡したりこの引数を省略すると、クリックはアプリケーションレベルに送られます。そして、4Dスケジューラーがそれを適切なプロセスにディスパッチします。

#### 参照 

[POST EVENT](post-event.md)  
[POST KEY](post-key.md)  