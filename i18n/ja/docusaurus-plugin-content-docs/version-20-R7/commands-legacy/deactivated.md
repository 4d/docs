---
id: deactivated
title: Deactivated
slug: /commands/deactivated
displayed_sidebar: docs
---

<!--REF #_command_.Deactivated.Syntax-->**Deactivated**  : Boolean<!-- END REF-->
<!--REF #_command_.Deactivated.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがdeactivationである場合にTrueを返す |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Deactivated.Summary-->**Deactivated**コマンドはプロセスの最前面のウインドウが後ろに移動すると、そのフォームメソッドでTrue を返します。<!-- END REF--> 

**Deactivated**実行サイクルを生成させるには、デザインモードでそのフォームやオブジェクトのOn Deactivateイベントプロパティを必ず選択してください。

**注:** このコマンドは、[Form event code](form-event-code.md) コマンドを用いてOn Deactivate イベントを返すかどうかをテストするのと同等と言えます。

#### 参照 

[Activated](activated.md)  
[Form event code](form-event-code.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 347 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


