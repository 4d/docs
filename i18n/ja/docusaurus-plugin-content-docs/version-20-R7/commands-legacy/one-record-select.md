---
id: one-record-select
title: ONE RECORD SELECT
slug: /commands/one-record-select
displayed_sidebar: docs
---

<!--REF #_command_.ONE RECORD SELECT.Syntax-->**ONE RECORD SELECT** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.ONE RECORD SELECT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードをカレントセレクションにする テーブル、または省略時デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ONE RECORD SELECT.Summary-->ONE RECORD SELECTは*aTable*のカレントレコードをカレントセレクションにします。<!-- END REF-->カレントレコードが存在しないかカレントレコードがメモリにロードされていない場合 (特殊なケース)、ONE RECORD SELECTは何も行いません。

#### 注 

このコマンドはレコードスタックにプッシュしてポップしたレコードを、セレクションが変更された際にカレントセレクションにするために使用されました。 [SET QUERY DESTINATION](set-query-destination.md) を使用してセレクションやカレントレコードを変更せずに検索を行えるようになりました。これにより同じテーブルをクエリする目的でレコードをプッシュ/ポッ プする必要はなくなりました。結果は、 **ONE RECORD SELECT** はセレクションをカレントレコードだけに縮小したい場合を除いて利用価値が少なくなりました。

**警告:** レコード番号は、あるレコードが削除されてそのあと他のレコードが作成された場合には再利用される可能性があるという点に注意してください(*レコード番号について* 参照)。

#### 参照 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
*命名セレクション*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 189 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||


