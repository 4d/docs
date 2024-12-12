---
id: activated
title: Activated
slug: /commands/activated
displayed_sidebar: docs
---

<!--REF #_command_.Activated.Syntax-->**Activated**  : Boolean<!-- END REF-->
<!--REF #_command_.Activated.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがactivationである場合にTrueを返す |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Activated.Summary-->**Activated** コマンドは、(廃止予定)フォームを含むウインドウがプロセスの最前面のウインドウになると、そのフォームメソッドで**True** を返します。<!-- END REF-->

**注:** このコマンドは、[Form event code](../commands/form-event-code.md) コマンドを用いてOn Activate イベントを返すかどうかをテストするのと同等と言えます。

**警告:** フォームの**Activated** フェーズに[TRACE](trace.md) または[ALERT](alert.md)を置かないでください。入れると無限ループになります。

**Note:** **Activated** 実行サイクルを生成させるには、デザインモードでそのフォームのOn Activateイベントプロパティを必ず選択してください。

#### 参照 

[Deactivated](deactivated.md)  
[Form event code](../commands/form-event-code.md)  