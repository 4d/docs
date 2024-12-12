---
id: get-adjusted-table-cache-priority
title: Get adjusted table cache priority
slug: /commands/get-adjusted-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted table cache priority.Syntax-->**Get adjusted table cache priority** ( *aTable* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted table cache priority.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | スカラー優先度値を取得するテーブル |
| 戻り値 | Integer | &#8592; | スカラーフィールドのカレントの優先度値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get adjusted table cache priority.Summary-->**Get adjusted table cache priority**コマンドは *aTable*引数で指定したテーブルのスカラーデータのキャッシュに、キャッシュマネージャーによって適用された、調整されたキャッシュ優先度値を返します。<!-- END REF-->このコマンドはローカルモード(4D Server と4D)でのみ動作します。リモートモードの4Dでは使用できません。

スカラーデータフィールド型には、日付/時間、数値、文字列型のフィールドが含まれます。

#### 参照 

[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  
*データベースキャッシュ内の優先度を管理*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1426 |
| スレッドセーフである | &check; |


