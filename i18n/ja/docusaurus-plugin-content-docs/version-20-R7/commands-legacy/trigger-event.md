---
id: trigger-event
title: Trigger event
slug: /commands/trigger-event
displayed_sidebar: docs
---

<!--REF #_command_.Trigger event.Syntax-->**Trigger event**  : Integer<!-- END REF-->
<!--REF #_command_.Trigger event.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 0: トリガー実行サイクル外1: 新規レコード保存時2: 既存レコード保存時3: レコード削除時 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Trigger event.Summary-->**Trigger event**コマンドがトリガー内で呼び出されると、データベースイベントのタイプ、つまりそのトリガーが起動された理由を示す数値を返します。<!-- END REF-->

*Trigger Events*テーマに以下のような定義済み定数があります。

| 定数                              | 型    | 値 |
| ------------------------------- | ---- | - |
| On Deleting Record Event        | 倍長整数 | 3 |
| On Saving Existing Record Event | 倍長整数 | 2 |
| On Saving New Record Event      | 倍長整数 | 1 |
  
  
トリガー内で複数のレコードに対してデータベース操作を実行すると、トリガーの正確な実行を妨げる条件 (通常レコードのロック) に遭遇します。この状況の例としては、\[Invoices\] テーブルにレコードを追加しているときに、\[Products\] テーブルにある複数のレコードを更新する場合が挙げられます。この時点で、必ずデータベースの操作を停止して、データベースのエラーを返さなければなりません。そうすることにより、起動プロセスがそのデータベースリクエストを実行できないことを理解します。起動プロセスはトリガーによって実行された不完全なデータベース操作を、トランザクション中にキャンセルできなければなりません。このような状況が発生した場合、トリガー内から何らかの操作を試みた前からそのプロセスがトランザクション内にあることを確かめる必要があります。これを実行するには[In transaction](in-transaction.md)コマンドを使用します。 

トリガーのカスケードを呼び出す場合、4Dには使用可能なメモリの容量以外に制限はありません。トリガーの実行を最適化するために、データベースイベントだけでなく、トリガーがカスケードされて起動される際の呼び出しのレベルに基づいて、トリガーのコードを記述することもできます。例えば\[Invoices\] テーブルに対する削除データベースイベントの中で、\[Invoices\] レコードの削除が、削除された \[Customers\] レコードに関連した**すべて**の送り状の削除にともなうものである場合には、\[Customers\] 総売上げフィールドの更新をスキップすることもできます。これを実行するには[Trigger level](trigger-level.md)と[TRIGGER PROPERTIES](trigger-properties.md)コマンドを使用します。

#### 例題 

**Trigger event**コマンドを使用して、以下のようにトリガを作成します。

```4d
  //[anyTable] 用のトリガー
 var $0 : Integer
 $0:=0 //データベースリクエストが許可されると仮定する
 Case of
    :(Trigger event=On Saving New Record Event)
  //新規に作成されたレコードの保存のために適切な動作を実行する
    :(Trigger event=On Saving Existing Record Event)
  //既存のレコードの保存のために適切な動作を実行する
    :(Trigger event=On Deleting Record Event)
  //レコードの削除のために適切な動作を実行する
 End case
```

#### 参照 

[In transaction](in-transaction.md)  
[Trigger level](trigger-level.md)  
[TRIGGER PROPERTIES](trigger-properties.md)  
*トリガ*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 369 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


