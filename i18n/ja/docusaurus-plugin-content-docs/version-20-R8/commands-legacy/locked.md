---
id: locked
title: Locked
slug: /commands/locked
displayed_sidebar: docs
---

<!--REF #_command_.Locked.Syntax-->**Locked** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Locked.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | ロックを検証するレコードが属するテーブル, または 省略時、デフォルトテーブル |
| 戻り値 | Boolean | &#8592; | TRUE: レコードはロックされている FALSE: レコードはロックされていない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Locked.Summary-->**Locked**は、*aTable*のカレントレコードがロックされているかを調べます。<!-- END REF-->このコマンドを使用してレコードがロックされているかどうかを調べた後、レコードが開放されるまで待機するか、処理をスキップするかの選択をユーザに与える等の適切な処理を行ってください。

**Locked** がTRUE を返す場合、レコードは他のユーザまたはプロセスによりロックされているか、カレントプロセスでスタックされており、レコードを保存することはできません。この場合には、[LOAD RECORD](load-record.md) コマンドを使用して、**Locked**がFALSE を返すまでレコードのロードを繰り返します。

**Locked**がFALSE を返す場合、レコードはアンロックされています。これはレコードが他のすべてのユーザに対してロックされることを意味します。ローカルユーザまたはカレントプロセスだけがレコードを修正、保存できます。レコードを修正するには、テーブルが読み書き状態でなければなりません。

削除されたレコードをロードしようとすると、**Locked**はTRUE を返し続けます。存在しないレコードをこれ以上待機しないために、[LOCKED BY](locked-by.md) コマンドを使用します。レコードが削除されている場合、[LOCKED BY](locked-by.md) コマンドはプロセス引数に-1を返します。

**Note:** *aTable*にカレントレコードが存在しない場合、言い換えれば[Record number](record-number.md) が-1を返す時、**Locked**はFALSE を返します。

トランザクション処理の実行中、レコードがロックされているかどうかを調べるために[LOAD RECORD](load-record.md) と**Locked**がしばしば使用しされます。レコードがロックされている場合、トランザクション処理をキャンセルするのが一般的です。

#### 参照 

[Locked records info](locked-records-info.md)  
[LOAD RECORD](load-record.md)  
[LOCKED BY](locked-by.md)  
*レコードのロック*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 147 |
| スレッドセーフである | &check; |


