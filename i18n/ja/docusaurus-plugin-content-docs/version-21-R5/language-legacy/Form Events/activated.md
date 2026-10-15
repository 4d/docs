---
id: activated
title: Activated
slug: /commands/activated
displayed_sidebar: docs
---

<!--REF #_command_.Activated.Syntax-->**Activated**  : Boolean<!-- END REF-->
<!--REF #_command_.Activated.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 実行サイクルがactivationである場合にTrueを返す |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.Activated.Summary-->**Activated** コマンドは、(廃止予定)フォームを含むウインドウがプロセスの最前面のウインドウになると、そのフォームメソッドで**True** を返します。<!-- END REF-->

**注:** このコマンドは、[Form event code](../commands/form-event-code) コマンドを用いてOn Activate イベントを返すかどうかをテストするのと同等と言えます。

**警告:** フォームの**Activated** フェーズに[TRACE](../commands/trace) または[ALERT](../commands/alert)を置かないでください。入れると無限ループになります。

**Note:** **Activated** 実行サイクルを生成させるには、デザインモードでそのフォームのOn Activateイベントプロパティを必ず選択してください。

## 参照 

[Deactivated](../commands/deactivated)  
[Form event code](../commands/form-event-code)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 346 |
| スレッドセーフである | no |



