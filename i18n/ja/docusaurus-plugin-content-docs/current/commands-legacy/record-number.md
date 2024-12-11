---
id: record-number
title: Record number
slug: /commands/record-number
displayed_sidebar: docs
---

<!--REF #_command_.Record number.Syntax-->**Record number** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Record number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードの番号を返すテーブル 省略時、デフォルトテーブル |
| 戻り値 | Integer | &#8592; | カレントレコード番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Record number.Summary-->**Record number**は、*aTable*のカレントレコードの物理レコード番号を返します。<!-- END REF-->レコードポインタがカレントセレクションの前後にある場合等、カレントレコードがない場合、**Record number**は-1を返します。カレントレコードが保存されていない新しいレコードの場合、**Record number**は-3を返します。

レコード番号は変わることがあります。削除されたレコードのレコード番号は再利用されます。

**4D Server:** このコマンドは、On Validateフォームイベントにおいては、4Dローカルモードと4Dリモートモードで異なる値を返します。ローカルモードではレコード番号 (レコードは既に作成されていると扱われるため) を返します。リモートモードでは-3を返します。なぜならば、レコードは4D Server上に作成されていますが、クライアントにこの情報はまだ通知されていないためです。

**注:** レコードが作成中であるかをテストする目的では、[Is new record](is-new-record.md)コマンドの利用をお勧めします。

#### 例題 

以下の例は、カレントレコードのレコード番号を変数に格納し、他に同じデータを持つレコードがないかを検索します:

```4d
 $RecNum:=Record number([People]) // レコード番号を取得
 QUERY([People];[People]Last =[People]Last) // 同じLast名を持つレコードを検索
  // 検索件数を表示
 ALERT("There are "+String(Records in selection([People])+" with that name.")
 GOTO RECORD([People];$RecNum) // 元のレコードに戻る
```

#### 参照 

[GOTO RECORD](goto-record.md)  
[Is new record](is-new-record.md)  
[Selected record number](selected-record-number.md)  
[Sequence number](sequence-number.md)  
*レコード番号について*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 243 |
| スレッドセーフである | &check; |


