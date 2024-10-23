---
id: in-header
title: In header
slug: /commands/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  -> 戻り値<!-- END REF-->
<!--REF #_command_.In header.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがヘッダー内にある場合にはTrueを返す |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.In header.Summary-->**In header** はIn header実行サイクルに対してTrueを返します。<!-- END REF-->

**In header** 実行サイクルを生成させるには、デザインモードでそのフォームやオブジェクトで On Headerイベントプロパティを必ず選択してください。

**注:** このコマンドは、[Form event code](form-event-code.md) コマンドを使用して、On Header イベントを返すかどうかをテストするのと同じです。

#### 参照 

*\_o\_During*  
[In break](in-break.md)  
[In footer](in-footer.md)  