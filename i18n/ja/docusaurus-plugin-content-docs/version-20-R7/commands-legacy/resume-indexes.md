---
id: resume-indexes
title: RESUME INDEXES
slug: /commands/resume-indexes
displayed_sidebar: docs
---

<!--REF #_command_.RESUME INDEXES.Syntax-->**RESUME INDEXES** ( *aTable* {; *} )<!-- END REF-->
<!--REF #_command_.RESUME INDEXES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | インデックスを再開するテーブル |
| * | 演算子 | &#8594;  | 指定時 = 非同期インデックス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESUME INDEXES.Summary-->**RESUME INDEXES** コマンドは、 [PAUSE INDEXES](pause-indexes.md) コマンドを使用して停止させた *aTable* のインデックスを全て再起動させます。<!-- END REF-->のインデックスが停止されていない場合、コマンドは何もしません。

ほとんどの場合、このコマンドの実行は *aTable* のインデックスのリビルドをトリガーします。  
任意の *\** 引数を渡した場合、インデックスのリビルドは非同期モードにて実行されます。これはインデックスの完了如何に関わらず、コマンドを呼び出すメソッドは呼び出された後も実行を続けるという事です。この引数を省略した場合、インデックスのリビルドはメソッドの実行をリビルドのオペレーションが完了するまで停止します。

**RESUME INDEXES** コマンドは4Dサーバーまたはローカルの4Dからのみ呼び出すことが出来ます。このコマンドがリモートの4Dマシンから呼び出されたときは、エラー -10513が生成されます。このエラーは [ON ERR CALL](on-err-call.md)コマンドによって実装されたメソッドを使用して割り込むことができます。

#### 参照 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1294 |
| スレッドセーフである | &check; |


