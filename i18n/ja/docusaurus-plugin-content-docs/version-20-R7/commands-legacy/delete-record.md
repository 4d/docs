---
id: delete-record
title: DELETE RECORD
slug: /commands/delete-record
displayed_sidebar: docs
---

<!--REF #_command_.DELETE RECORD.Syntax-->**DELETE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DELETE RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードを削除するテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE RECORD.Summary-->DELETE RECORDは、*aTable*のカレントレコードを削除します。<!-- END REF-->プロセスに*aTable*のカレントレコードが存在しない場合、DELETE RECORDコマンドは何も行いません。フォーム中では、このコマンドの代わりにレコード削除アクションを持つボタンを作成することができます。

**Note:**

* DELETE RECORDコマンドの実行前に、カレントレコードがメモリ上からアンロードにされている場合 (例えば[UNLOAD RECORD](unload-record.md)コマンドの実行等)、削除実行後カレントセレクションは空になります。
* DELETE RECORDコマンドは、テーブルが [READ ONLY](read-only.md) モードである場合には、削除しようとしているレコードがロックされているかどうかに関わらず、何もしません。

レコードの削除は、一度実行すると元に戻すことはできません(ただしトランザクション中に実行された場合を除きます。詳細は*トランザクションを使用する*を参照してください)。

レコードが削除されると、そのレコード番号は新しいレコードが作成される際に再利用されます。したがって、データベースからレコードを削除することがある場合は、レコード番号をレコードの識別に使用しないでください。

#### 例題 

以下の例は1件の\[employee\]レコードを削除します。まずユーザにどのemployeeレコードを削除するのかを尋ね、\[employee\]レコードを検索し、見つかったレコードを削除します:

```4d
 vFind:=Request("Employee ID to delete:") // 従業員IDを要求
 If(OK=1)
    QUERY([Employee];[Employee]ID =vFind) // 従業員を検索
    DELETE RECORD([Employee]) // 従業員を削除
 End if
```

#### 参照 

[Locked](locked.md)  
*トリガ*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 58 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| サーバー上での使用は不可 ||


