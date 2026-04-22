---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
slug: /commands/get-adjusted-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *aTable* : Table ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | "blob"優先度値を取得したいテーブル |
| 戻り値 | Integer | &#8592; | "blob"フィールドのカレントの優先度値 |
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

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->**Get adjusted blobs cache priority** コマンドは*aTable* 引数で指定されたテーブルの"blob"データにキャッシュマネージャーによって適用されたカレントの調整済みキャッシュ優先度値を返します。<!-- END REF-->このコマンドはローカルモード(4D Server と4D)でのみ動作します。リモートモードの4Dでは使用できません。

## 参照 

[ADJUST BLOBS CACHE PRIORITY](../commands/adjust-blobs-cache-priority)  
[SET BLOBS CACHE PRIORITY](../commands/set-blobs-cache-priority)  
*データベースキャッシュ内の優先度を管理*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1428 |
| スレッドセーフである | yes |


