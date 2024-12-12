---
id: in-footer
title: In footer
slug: /commands/in-footer
displayed_sidebar: docs
---

<!--REF #_command_.In footer.Syntax-->**In footer**  : Boolean<!-- END REF-->
<!--REF #_command_.In footer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがフッター内にある場合にはTrueを返す |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.In footer.Summary-->**In footer** はIn footer 実行サイクルに対してTrueを返します。<!-- END REF-->  

**In footer** 実行サイクルを生成させるには、デザインモードでそのフォームやオブジェクトでOn Printing footerイベントプロパティを必ず選択してください。

**注:** このコマンドは、[Form event code](../commands/form-event-code.md) コマンドを用いてOn Printing footerイベントを返すかどうかをテストするのと同等と言えます。

#### 参照 

[In break](in-break.md)  
[In header](in-header.md)  