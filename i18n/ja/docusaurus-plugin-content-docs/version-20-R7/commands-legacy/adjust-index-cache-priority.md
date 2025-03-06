---
id: adjust-index-cache-priority
title: ADJUST INDEX CACHE PRIORITY
slug: /commands/adjust-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Syntax-->**ADJUST INDEX CACHE PRIORITY** ( *aField* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | 優先度値を調整したいインデックスのフィールド |
| priority | Integer | &#8594;  | フィールドインデックスのキャッシュ優先度値 |

<!-- END REF-->

#### 上級者向け 

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Summary-->このコマンドは特定の用途のために用意されています。<!-- END REF-->データベースのパフォーマンスに影響するため、注意して使用しなければなりません。

#### 説明 

**ADJUST INDEX CACHE PRIORITY**コマンドはカレントプロセスにおいて、*aField* 引数で指定されたフィールドに関連したインデックスに対し*priority* 引数で指定した特定の優先度値を設定します。このコマンドを呼び出すと、同じプロセスにおいて同じコマンドを通して以前調整された優先度値を上書きします。このコマンドは読み込みやクエリなどの一時的な用途において優先度を調整するのに向いています。

**注:** このコマンドはローカルモード(4D Serverおよび4D)用です。リモートモードの4Dでは使用できません。

このコマンドは*aField* 引数で指定したフィールドに関連する全てのインデックス(キーワードインデックス含む)に対しての優先度を操作します。ただし複合インデックスの優先度は変更されません。

*priority* 引数には、"*Cache Management*"テーマ内にある、以下の定数のうちのいずれかひとつを渡してください:

| 定数                       | コメント               |
| ------------------------ | ------------------ |
| Cache priority low       |                    |
| Cache priority very low  |                    |
| Cache priority normal    | キャッシュ優先度をデフォルト値に設定 |
| Cache priority high      |                    |
| Cache priority very high |                    |

#### 例題 

\[Docs\]Comments フィールドのインデックスのキャッシュ優先度を一時的に変更したい場合を考えます:

```4d
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)
 QUERY([Docs];[Docs]Comments%"Extra") // インデックスされたフィールド上での検索
  //... 同じテーブル上での他の複数のクエリあるいは並び替えを実行
  // 完了したら通常のキャッシュ優先度に戻す
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)
```

#### 参照 

[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1430 |
| スレッドセーフである | &check; |


