---
id: set-blobs-cache-priority
title: SET BLOBS CACHE PRIORITY
slug: /commands/set-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Syntax-->**SET BLOBS CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.SET BLOBS CACHE PRIORITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セッション中の"blob"データの優先度値を設定したいテーブル |
| priority | Integer | &#8594;  | テーブル内のBLOBのキャッシュ優先度 |

<!-- END REF-->

#### 上級者向け 

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Summary-->このコマンドは特定の用途のために用意されています。<!-- END REF-->データベースのパフォーマンスに影響するため、注意して使用しなければなりません。

#### 説明 

**SET BLOBS CACHE PRIORITY** コマンドはコマンドはカレントセッションにおいて、すべてのプロセスで、キャッシュ内にある*aTable* 引数で指定されたテーブルに関連する"blob"データに対し*priority* 引数で指定された特定の優先度を設定します。このこのコマンドは、必ず**On Startup** あるいは **On Server Startup**データベースメソッド内で呼び出されなければなりません。

**注:** このコマンドはローカルモード(4D Serverあるいは4D)においてのみ動作します。リモートモードの4Dでは使用できません。

"blob"データフィールドにはBLOB、テキスト、ピクチャー、オブジェクトが含まれます。このコマンドはこれらのデータがデータファイル内に保存されている場合にのみその優先度を管理します。

*priority* 引数には、"*Cache Management*"テーマ内にある以下の定数のうちのどれか一つを渡します:

| 定数                       | コメント               |
| ------------------------ | ------------------ |
| Cache priority low       |                    |
| Cache priority very low  |                    |
| Cache priority normal    | キャッシュ優先度をデフォルト値に設定 |
| Cache priority high      |                    |
| Cache priority very high |                    |

#### 例題 

内において、\[Customer\]テーブルに対して高い優先度を設定したい場合を考えます:

```4d
 SET BLOBS CACHE PRIORITY([Customer];Cache priority very high)
```

#### 参照 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  