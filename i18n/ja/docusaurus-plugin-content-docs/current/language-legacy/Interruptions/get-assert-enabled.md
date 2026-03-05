---
id: get-assert-enabled
title: Get assert enabled
slug: /commands/get-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.Get assert enabled.Syntax-->**Get assert enabled** : Boolean<!-- END REF-->
<!--REF #_command_.Get assert enabled.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True = アサーションは有効<br/>False = アサーションは無効 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|12|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get assert enabled.Summary-->Get assert enabled コマンドは カレントプロセスでアサーションが有効か無効かによって[True](../commands/true)または[False](../commands/false)を返します。<!-- END REF-->アサーションについての詳細は[ASSERT](assert.md "ASSERT")コマンドの説明を参照してください。

デフォルトでアサーションは有効ですが、[SET ASSERT ENABLED](set-assert-enabled.md "SET ASSERT ENABLED")コマンドを使用して無効にできます。

## 参照 

[ASSERT](../commands/assert)  
[Asserted](../commands/asserted)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1130 |
| スレッドセーフである | yes |


