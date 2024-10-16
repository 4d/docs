---
id: apply-to-selection
title: APPLY TO SELECTION
slug: /commands/apply-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.APPLY TO SELECTION.Syntax-->**APPLY TO SELECTION** ( *aTable* ; *statement* )<!-- END REF-->
<!--REF #_command_.APPLY TO SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | ステートメントを適用するテーブル |
| statement | Expression | &#8594;  | 1行のコードで記述されたメソッド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.APPLY TO SELECTION.Summary-->**APPLY TO SELECTION** は、*aTable*のカレントセレクションに対して*statement*を適用します。<!-- END REF-->*statement*は1行のステートメントまたはメソッドのどちらでも構いません。*statement*が*aTable*のレコードを修正した場合、そのレコードをディスクに保存されます、レコードを修正しない場合には保存しません。カレントセレクションが空の場合、**APPLY TO SELECTION** は何も行いません。リレーションが自動であれば、*statement*はリレート先のテーブルのフィールドを含むことができます。

**警告:** 引数($1...$n) は*statement* 引数ではサポートされていません。

**APPLY TO SELECTION** は、カレントセレクションの情報 (例えば合計等) を求めるため、あるいはセレクション中のレコードを修正するため (例えばフィールドの頭文字を大文字に変える等) に使用します。このコマンドをトランザクション内で使用されている場合、トランザクション処理が取り消されると、すべての変更は無効とされます。

**4D Server:** *statement*に渡されるコマンドはサーバでは実行されません。セレクションの各レコードは修正のためローカルのワークステーションに送り返されます。

**APPLY TO SELECTION** を実行している間、処理の進捗を表すサーモメータが表示されます。**APPLY TO SELECTION** を呼び出す前に、[MESSAGES OFF](messages-off.md) を使用してサーモメータの表示を取り消すことができます。サーモメータが表示されると、ユーザは処理をキャンセルすることができます。

#### 例題 1 

以下の例題はテーブル \[Employees\] 中のカレントセレクションのレコードを大文字に変更します:

```4d
 APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))
```

#### 例題 2 

APPLY TO SELECTION実行中にレコードを修正して、そのレコードがロックされていると、更新は保存されません。ロックされたレコードはLockedSetと呼ばれるセットに格納されます。APPLY TO SELECTION実行後、LockedSetをテストしてロックされたレコードがなかったか確認します。以下のループはすべてのレコードが更新されるまで処理を実行します:

```4d
 Repeat
    APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))
    USE SET("LockedSet") // ロックされたレコードのみを選択
 Until(Records in set("LockedSet")=0) // ロックされたレコードがなくなれば終了
```

#### 例題 3 

この例題ではメソッドを使用します: 

```4d
 ALL RECORDS([Employees])
 APPLY TO SELECTION([Employees];M_Cap)
```

#### システム変数およびセット 

ユーザが進捗サーモメータの停止ボタンをクリックすると、OKシステム変数に0が設定されます。そうでなければ1が設定されます。

#### 参照 

[EDIT FORMULA](edit-formula.md)  
*セット*  