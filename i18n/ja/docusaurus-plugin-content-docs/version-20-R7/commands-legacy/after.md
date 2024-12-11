---
id: after
title: After
slug: /commands/after
displayed_sidebar: docs
---

<!--REF #_command_.After.Syntax-->**After**  : Boolean<!-- END REF-->
<!--REF #_command_.After.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがafterである場合にはTrueを返す |

<!-- END REF-->

#### 説明 

<!--REF #_command_.After.Summary-->**After** はAfter 実行サイクルでTrue を返します。<!-- END REF-->

**After** 実行サイクルを生成させるには、デザインモードでそのフォームやオブジェクトのOn Validateイベントプロパティを必ず選択してください。

**注:** このコマンドは、[Form event code](form-event-code.md) コマンドを用いてOn Validate イベントを返すかどうかをテストするのと同等と言えます。

#### 参照 

[Form event code](form-event-code.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 31 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


