---
id: delete-selection
title: DELETE SELECTION
slug: /commands/delete-selection
displayed_sidebar: docs
---

<!--REF #_command_.DELETE SELECTION.Syntax-->**DELETE SELECTION** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DELETE SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントセレクションを削除するテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE SELECTION.Summary-->**DELETE SELECTION**は、*aTable*のカレントセレクションのレコードを削除します。<!-- END REF-->カレントセレクションが空の場合、**DELETE SELECTION**は何も行いません。レコードが削除された後、カレントセレクションは空になります。トランザクション処理中に削除されたレコードは、トランザクション処理が実行または取り消されるまで、他のユーザや他のプロセスに対してロックされます。

**警告:** レコードの削除は、恒久的な操作です。削除が実行されると元に戻すことはできません。

テーブルインスペクターの「レコードを完全に削除」オプションの選択を解除すると、**DELETE SELECTION**使用時のレコード削除処理を高速にすることができます (4Dデザインリファレンスマニュアルの*レコードを完全に削除*参照)。

#### 例題 1 

以下の例は\[People\]テーブルのすべてのレコードを表示します。ユーザはこの中から削除したいものを選択します。この例には2つのメソッドがあります。第1のメソッドはレコードを表示します。第2は削除ボタンのオブジェクトメソッドです。以下は、第1のメソッドです: 

```4d
 ALL RECORDS([People]) // 全レコードをセレクションに
 FORM SET OUTPUT([People];"Listing") // レコードを一覧するフォームを設定
 DISPLAY SELECTION([People]) // 全レコードを表示
```

次に示すのは削除ボタンのオブジェクトメソッドです。このボタンは出力フォームのフッタエリアにあります。このオブジェクトメソッドでは、セレクションを削除するために、ユーザが選択したレコード (UserSet) を使用します。ユーザがレコードを1件も選択しなかった場合、DELETE SELECTIONは何も行わないという点に注目してください。

```4d
  // 本当にレコードを削除するか確認する
 CONFIRM("You selected "+String(Records in set("UserSet"))+" people to delete."
 +Char(13)+"Click OK to Delete them.")
 If(OK=1)
    USE SET("UserSet") // ユーザが選択したレコードを使用
    DELETE SELECTION([People]) // レコードセレクションを削除
 End if
 ALL RECORDS([People]) // すべてのレコードを選択
```

#### 例題 2 

**DELETE SELECTION**の実行中にロックされたレコードが見つかると、そのレコードは削除されません。ロックされたレコードはすべて"**LockedSet**"というセットに納められます。**DELETE SELECTION**の実行後、"**LockedSet**"を調べて、ロックされているレコードが存在していたかどうかを知ることができます。次はループを使用してすべてのレコードを削除します:

```4d
 Repeat // ロックされたレコードがある限り繰り返す
    DELETE SELECTION([ThisTable])
    $lockedRecords:=Records in set("LockedSet")
    If($lockedRecords#0) // ロックされたレコードがあれば
       USE SET("LockedSet") // ロックされたレコードのみをセレクションにする
    End if
 Until($lockedRecords=0) // ロックされたレコードがなくなるまで
```

#### 参照 

[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
[TRUNCATE TABLE](truncate-table.md)  
*セット*  
*レコードのロック*  