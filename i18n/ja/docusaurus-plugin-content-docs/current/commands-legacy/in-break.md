---
id: in-break
title: In break
slug: /commands/in-break
displayed_sidebar: docs
---

<!--REF #_command_.In break.Syntax-->**In break**  : Boolean<!-- END REF-->
<!--REF #_command_.In break.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがブレークエリア内にある場合にはTrueを返す |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.In break.Summary-->**In break** はIn break 実行サイクルでTrueを返します。<!-- END REF-->

**In break** 実行サイクルを生成させるには、デザインモードでそのフォームやオブジェクトでOn Printing Breakイベントプロパティを必ず選択してください。

**注:** このコマンドは、[Form event code](../commands/form-event-code.md) コマンドを用いてOn Printing Break イベントを返すかどうかをテストするのと同等と言えます。

#### 参照 

[In footer](in-footer.md)  
[In header](in-header.md)  