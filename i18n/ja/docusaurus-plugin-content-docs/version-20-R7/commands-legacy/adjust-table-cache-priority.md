---
id: adjust-table-cache-priority
title: ADJUST TABLE CACHE PRIORITY
slug: /commands/adjust-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Syntax-->**ADJUST TABLE CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | スカラーデータの優先度値を調整したいテーブル |
| priority | Integer | &#8594;  | テーブルのキャッシュ優先度値 |

<!-- END REF-->

#### 上級者向け 

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Summary-->このコマンドは特定の用途のために用意されています。<!-- END REF-->データベースのパフォーマンスに影響するため、注意して使用しなければなりません。

#### 説明 

**ADJUST TABLE CACHE PRIORITY**コマンドは、カレントプロセスにおいて、キャッシュ内にある*aTable* 引数で指定されたテーブルに関連付けられたデータに対し*priority* 引数で指定した特定の優先度値を設定します。このコマンドを呼び出すと、同じプロセスにおいて同じコマンドを通して以前調整された優先度値を上書きします。このコマンドはクエリや読み込みなどの一時的な用途において優先度を調整するのに向いています。

**注:** このコマンドはローカルモード(4D Serverおよび4D)においてのみ動作します。リモートモードの4Dでは使用できません。

このコマンドは、スカラー型(日付、数値、あるいは文字列)フィールドのデータの優先度のみを管理します。バイナリー型(Blob、テキスト、ピクチャーおよびオブジェクト)のフィールドの優先度については、[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md) コマンドによって管理されます。

*priority* 引数には、"*Cache Management*"テーマ内の以下の定数のうちいずれか一つを渡します:

| 定数                       | コメント               |
| ------------------------ | ------------------ |
| Cache priority low       |                    |
| Cache priority very low  |                    |
| Cache priority normal    | キャッシュ優先度をデフォルト値に設定 |
| Cache priority high      |                    |
| Cache priority very high |                    |

#### 例題 

\[Docs\]スカラーフィールドのキャッシュ優先度を一時的に変更した場合を考えます:

```4d
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)
  // ... 特定の処理をここで実行
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)
```

#### 参照 

[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1429 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


