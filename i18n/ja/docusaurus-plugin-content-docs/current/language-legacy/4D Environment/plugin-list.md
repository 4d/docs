---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *numbersArray* : Integer array ; *namesArray* : Text array )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| numbersArray | Integer array | &#8592; | プラグイン番号 |
| namesArray | Text array | &#8592; | プラグイン名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.PLUGIN LIST.Summary-->PLUGIN LIST コマンドは*numbersArray*配列と*namesArray*配列に、4Dアプリケーションにロードされ、利用可能なプラグインの番号と名前を返します。<!-- END REF-->これら2つの配列は、コマンドによりサイズが調整され、同期されます。

**注:** *numbersArray*配列に返された値と、*Is License Available*テーマの定数の値とを比較できます。

PLUGIN LISTは、4Dに統合されたプラグイン (例: 4D Chart) やサードパーティのプラグインも対象とします。

## 参照 

[COMPONENT LIST](../commands/component-list)  
[Get plugin access](../commands/get-plugin-access)  
[Is license available](../commands/is-license-available)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 847 |
| スレッドセーフである | yes |


