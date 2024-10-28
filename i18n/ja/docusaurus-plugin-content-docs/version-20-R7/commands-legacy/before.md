---
id: before
title: Before
slug: /commands/before
displayed_sidebar: docs
---

<!--REF #_command_.Before.Syntax-->**Before**  -> 戻り値<!-- END REF-->
<!--REF #_command_.Before.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがbeforeである場合にはTrueを返す |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Before.Summary-->**Before** はBefore 実行サイクルでTrue を返します。<!-- END REF-->

**Before** 実行サイクルを生成させるには、デザインモードでそのフォームやオブジェクトのOn Loadイベントプロパティを必ず選択してください。

**注:** このコマンドは、[Form event code](form-event-code.md) コマンドを用いてOn Load イベントを返すかどうかをテストするのと同等と言えます。

#### 参照 

[Form event code](form-event-code.md)  