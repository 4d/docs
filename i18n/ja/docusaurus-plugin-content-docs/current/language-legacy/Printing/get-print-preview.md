---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True: 印刷プレビューを行うFalse: 印刷プレビューを行わない |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get print preview.Summary-->**Get print preview**コマンドはカレントプロセスで[SET PRINT PREVIEW](../commands/set-print-preview)が**True**で呼ばれている場合、Trueを返します。<!-- END REF-->

ユーザーは印刷ダイアログでこのオプションを変更できる点に留意してください。最終的な印刷モードを判定するには[Is in print preview](../commands/is-in-print-preview)コマンドを使用します。

## 参照 

[Is in print preview](../commands/is-in-print-preview)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1197 |
| スレッドセーフである | no |


