---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *aField* : Field ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594; | インデックスの優先度を取得したいフィールド |
| 戻り値 | Integer | &#8592; | インデックスのカレントの優先度値 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|16 R2|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get adjusted index cache priority.Summary-->**Get adjusted index cache priority** コマンドは、*aField* 引数で指定されたフィールドのインデックスに対しキャッシュマネージャーによって適用されたキャッシュ優先度値を返します。<!-- END REF-->このコマンドはローカルモード(4D Serverおよび4D)においてのみ動作します。リモートモードでは使用できません。

## 参照 

[ADJUST INDEX CACHE PRIORITY](../commands/adjust-index-cache-priority)  
[SET INDEX CACHE PRIORITY](../commands/set-index-cache-priority)  
*データベースキャッシュ内の優先度を管理*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1427 |
| スレッドセーフである | yes |


