---
id: outside-call
title: Outside call
slug: /commands/outside-call
displayed_sidebar: docs
---

<!--REF #_command_.Outside call.Syntax-->**Outside call**  : Boolean<!-- END REF-->
<!--REF #_command_.Outside call.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True if the execution cycle is an outside call |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Outside call.Summary-->**Outside call** は、実行サイクルのあとにTrueを返します。<!-- END REF-->

**Outside call** 実行サイクルが生成されるためには、デザイン環境においてOn Outside call イベントプロパティがフォーム・オブジェクトに対して選択されていることを確認して下さい。

**注:** このコマンドは、[Form event code](../commands/form-event-code.md) コマンドを使用して、On Outside call イベントを返すかどうかを試すのと同じであると言えます。

#### 参照 

[Form event code](../commands/form-event-code.md)  
[POST OUTSIDE CALL](post-outside-call.md)  