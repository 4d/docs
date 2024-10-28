---
id: set-table-cache-priority
title: SET TABLE CACHE PRIORITY
slug: /commands/set-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET TABLE CACHE PRIORITY.Syntax-->**SET TABLE CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.SET TABLE CACHE PRIORITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セッション中の優先度を設定するスカラーデータのテーブル |
| priority | Integer | &#8594;  | テーブル内のスカラー値に対するキャッシュ優先度値 |

<!-- END REF-->

#### 上級者向け 

<!--REF #_command_.SET TABLE CACHE PRIORITY.Summary-->このコマンドは特定の用途のために用意されています。<!-- END REF-->データベースのパフォーマンスに影響するため、注意して使用しなければなりません。

#### 説明 

コマンドはカレントセッションにおいて、すべてのプロセスで、キャッシュ内にある*aTable* 引数で指定されたテーブルに関連するデータに対し*priority* 引数で指定された特定の優先度を設定します。このこのコマンドは、必ず**On Startup** あるいは **On Server Startup**データベースメソッド内で呼び出されなければなりません。

**注:** このコマンドはローカルモード(4D Serverあるいは4D)においてのみ動作します。リモートモードの4Dでは使用できません。

このコマンドははスカラーフィールド(日付、数値、あるいは文字列型)内のデータに対してのみ優先度を管理します。バイナリー型(Blob、テキスト、ピクチャー、およびオブジェクト)のフィールドの優先度は[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md) コマンドで管理されます。

*priority* 引数には、"*Cache Management*"テーマ内にある以下の定数のうちのどれか一つを渡します:

| 定数                       | コメント               |
| ------------------------ | ------------------ |
| Cache priority low       |                    |
| Cache priority very low  |                    |
| Cache priority normal    | キャッシュ優先度をデフォルト値に設定 |
| Cache priority high      |                    |
| Cache priority very high |                    |

#### 例題 

内において、\[Customer\]スカラーデータに対して高い優先度を設定したい場合を考えます:

```4d
 SET TABLE CACHE PRIORITY([Customer];Cache priority very high)
```

#### 参照 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  