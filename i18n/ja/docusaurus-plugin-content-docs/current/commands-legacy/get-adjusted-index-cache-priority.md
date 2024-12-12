---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *aField* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | インデックスの優先度を取得したいフィールド |
| 戻り値 | Integer | &#8592; | インデックスのカレントの優先度値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get adjusted index cache priority.Summary-->**Get adjusted index cache priority** コマンドは、*aField* 引数で指定されたフィールドのインデックスに対しキャッシュマネージャーによって適用されたキャッシュ優先度値を返します。<!-- END REF-->

**注:** このコマンドはローカルモード(4D Serverおよび4D)においてのみ動作します。リモートモードでは使用できません。

#### 参照 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  
*データベースキャッシュ内の優先度を管理*  