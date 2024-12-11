---
id: create-record
title: CREATE RECORD
slug: /commands/create-record
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RECORD.Syntax-->**CREATE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.CREATE RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 新規レコードを作成するテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE RECORD.Summary-->**CREATE RECORD**は、*aTable*に対して新しい空のレコードを作成しますが、このレコードは表示されません。<!-- END REF-->データ入力のために新しいレコードを作成して表示するには[ADD RECORD](add-record.md)を使用します。

**CREATE RECORD**は、レコードデータの割り当てをプログラミング言語で実行する場合に、[ADD RECORD](add-record.md)の代わりに使用します。新しく作成されたレコードはカレントレコードとなりますが、カレントセレクションは変わりません。

新しいレコードは、テーブルに対する[SAVE RECORD](save-record.md)コマンドを実行するまではメモリ上にのみ存在します。新しいカレントレコードが保存される前に (検索等によって) 変更されると、そのレコードは失われます。

**注:** このコマンドでは、*aTable* に渡したテーブルが読み書き可能モードである必要はありません。テーブルが読み込みのみモードの場合でも使用する事ができます(*レコードのロック*を参照して下さい)。

#### 例題 

以下の例は、30日以上経過したデータをアーカイブします。これはアーカイブ用のテーブルに新しいレコードを作成することで行っています。アーカイブが終了すると、対象のレコードを\[Accounts\]テーブルから削除します:

```4d
  // 30日経過したレコードを検索
 QUERY([Accounts];[Accounts]Entered<(Current date-30))
 For($vlRecord;1;Records in selection([Accounts])) // レコードごとにループ
    CREATE RECORD([Archive]) // 新しいアーカイブレコードを作成
    [Archive]Number:=[Account]Number // アーカイブレコードにフィールドをコピー
    [Archive]Entered:=[Account]Entered
    [Archive]Amount:=[Account]Amount
    SAVE RECORD([Archive]) // アーカイブレコードを保存
    NEXT RECORD([Accounts]) // 次のaccountレコードをカレントレコードにする
 End for
 DELETE SELECTION([Accounts]) // accountレコードを削除
```

#### 参照 

[ADD RECORD](add-record.md)  
[MODIFY RECORD](modify-record.md)  
[SAVE RECORD](save-record.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 68 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| サーバー上での使用は不可 ||


