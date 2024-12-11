---
id: truncate-table
title: TRUNCATE TABLE
slug: /commands/truncate-table
displayed_sidebar: docs
---

<!--REF #_command_.TRUNCATE TABLE.Syntax-->**TRUNCATE TABLE** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.TRUNCATE TABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | すべてのレコードが削除されるテーブル 省略時はデフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.TRUNCATE TABLE.Summary-->TRUNCATE TABLE コマンドは*aTable*のすべてのレコードを素早く削除します。<!-- END REF-->*aTable*が既に空の場合、TRUNCATE TABLEは何も行いません。コマンドの呼出し後、カレントセレクションやカレントレコードはありません。

このコマンドの効果は[ALL RECORDS](all-records.md "ALL RECORDS")と[DELETE SELECTION](delete-selection.md "DELETE SELECTION")の呼び出しと同じです。しかしその動作は以下の点で異なります:

* トリガは呼び出されません。
* データの参照整合性はチェックされません。
* TRUNCATE TABLEを実行するプロセスはトランザクション中であってはなりません。トランザクション中の場合、コマンドは何も行わず、OKシステム変数に0が設定されます。
* 1つ以上のレコードが他のプロセスによりロックされていると、コマンドは失敗します。エラーが生成され、OKシステム変数に0が設定されます。**LockedSet**システムセットは作成されません。
* *aTable*が既に空の場合、TRUNCATE TABLEは何も行わず、OK変数は1に設定されます。
* *aTable*が読み込みのみの場合、TRUNCATE TABLEは何も行わず、OK変数は0に設定されます。
* ログファイルがあれば、処理はログファイルに記録されます。

TRUNCATE TABLEコマンドは注意して使用しなければなりませんが、例えば一時的なデータを素早く削除するなど特定のケースではとても効率的です。

**Note:** このコマンドのコンセプトと動作はSQL TRUNCATE (テーブル) コマンドと同じです。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKは1に、そうでなければ0に設定されます。

#### 参照 

[DELETE SELECTION](delete-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1051 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


