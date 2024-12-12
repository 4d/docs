---
id: frontmost-window
title: Frontmost window
slug: /commands/frontmost-window
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost window.Syntax-->**Frontmost window** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Frontmost window.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, フローティングウィンドウを考慮する 省略時, フローティングウィンドウを無視 |
| 戻り値 | Integer | &#8592; | ウィンドウ参照番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Frontmost window.Summary-->Frontmost window コマンドは最前面のウィンドウの参照番号を返します。<!-- END REF-->

#### 参照 

[Frontmost process](frontmost-process.md)  
[Next window](next-window.md)  