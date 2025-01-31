---
id: set-index-cache-priority
title: SET INDEX CACHE PRIORITY
slug: /commands/set-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX CACHE PRIORITY.Syntax-->**SET INDEX CACHE PRIORITY** ( *aField* ; *priority* )<!-- END REF-->
<!--REF #_command_.SET INDEX CACHE PRIORITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field whose index(es) priority value has to be set for the session |
| priority | Integer | &#8594;  | Cache priority value for the field index(es) |

<!-- END REF-->

#### 上級者向け 

<!--REF #_command_.SET INDEX CACHE PRIORITY.Summary-->このコマンドは特定の用途のために用意されています。<!-- END REF-->データベースのパフォーマンスに影響するため、注意して使用しなければなりません。

#### 説明 

コマンドは、カレントセッションにおいて、すべてのプロセスで、キャッシュ内にある*aField* 引数で指定されたフィールドに関連するインデックスに対し、*priority* 引数で指定した特定の優先度を設定します。このコマンドは、必ず**On Startup** あるいは **On Server Startup**データベースメソッド内で呼び出されなければなりません。

**注:** このコマンドはローカルモード(4D Serverあるいは4D)においてのみ動作します。リモートモードの4Dでは使用できません。

このコマンドは引数で指定されたフィールドに関連するすべてのインデックス(キーワードインデックス含む)に対し優先度を管理します(複合インデックスの優先度はカスタマイズすることができません)。

*priority* 引数には、"*Cache Management*"テーマ内にある以下の定数のうちのどれか一つを渡します:

| 定数                       | コメント               |
| ------------------------ | ------------------ |
| Cache priority low       |                    |
| Cache priority very low  |                    |
| Cache priority normal    | キャッシュ優先度をデフォルト値に設定 |
| Cache priority high      |                    |
| Cache priority very high |                    |

#### 例題 

内において、\[Customer\]LastNameフィールドのインデックスに対して高い優先度を設定したい場合を考えます:

```4d
 SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)
```

#### 参照 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1401 |
| スレッドセーフである | &check; |


