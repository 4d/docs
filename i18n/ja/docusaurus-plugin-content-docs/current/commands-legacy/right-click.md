---
id: right-click
title: Right click
slug: /commands/right-click
displayed_sidebar: docs
---

<!--REF #_command_.Right click.Syntax-->**Right click**  -> 戻り値<!-- END REF-->
<!--REF #_command_.Right click.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 右クリックを検知した場合True、そうでなければFalse |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Right click.Summary-->Right click コマンドは、マウスの右ボタンがクリックされた場合に[True](true.md "True") を返します。<!-- END REF-->

このコマンドはOn clickedフォームイベントのコンテキストで使用します。したがって、デザインモードにおいて、このイベントがフォームや特定のオブジェクトのプロパティで適切に選択されていることを確認する必要があります。

#### 参照 

[Contextual click](contextual-click.md)  
[Form event code](form-event-code.md)  