---
id: adjust-blobs-cache-priority
title: ADJUST BLOBS CACHE PRIORITY
slug: /commands/adjust-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Syntax-->**ADJUST BLOBS CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | "blob"データの優先度値を調節するテーブル |
| priority | Integer | &#8594;  | テーブル内のBLOBのキャッシュ優先度値 |

<!-- END REF-->

#### 上級者向け 

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Summary-->このコマンドは特定の用途のために用意されています。<!-- END REF-->データベースのパフォーマンスに影響するため、注意して使用しなければなりません。

#### 説明 

**ADJUST BLOBS CACHE PRIORITY** コマンドはカレントプロセスにおいてキャッシュ内にある*aTable* 引数で指定されたテーブルに関連した"Blob"データに*priority* 引数で指定した特定の優先度を設定します。。このコマンドを呼び出すと、同じプロセス内において同じコマンドを使用して以前調整された優先度は置き換えられます。このコマンドは一時的に必要な場合、例えばクエリや読み込みの途中などの場合に使用します。

**注:** このコマンドはローカルモード(4D Server と4D)でのみ動作します。リモートモードの4Dでは使用できません。

"Blob"データフィールドには、BLOB、テキスト、ピクチャー、そしてオブジェクトが含まれます。このコマンドは、これらのデータがデータファイルにのみ保存されている場合に限りこれらの優先度を管理します。スカラー型のフィールド(日付、数値、文字列型)の優先度については、[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)コマンドを使用して調整します。

*priority* 引数には、"*Cache Management*" テーマ内にある、以下の定数のうちのどれか一つを使用することができます:

| 定数                       | コメント               |
| ------------------------ | ------------------ |
| Cache priority low       |                    |
| Cache priority very low  |                    |
| Cache priority normal    | キャッシュ優先度をデフォルト値に設定 |
| Cache priority high      |                    |
| Cache priority very high |                    |

#### 例題 

データファイルに保存されている\[Docs\]テーブルのテキストフィールドのキャッシュ優先度を、シーケンシャル検索を実行時に一時的に変更したい場合を考えます:

```4d
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)
 QUERY([Docs];[Docs]Author#"A@") // インデックスされていないフィールド上でシーケンシャル検索
  //... 同じテーブル上での他の複数のクエリあるいは並び替えを実行
  // 完了したら通常のキャッシュ優先度に戻す
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)
```

#### 参照 

[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  