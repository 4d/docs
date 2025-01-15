---
id: duplicate-record
title: DUPLICATE RECORD
slug: /commands/duplicate-record
displayed_sidebar: docs
---

<!--REF #_command_.DUPLICATE RECORD.Syntax-->**DUPLICATE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DUPLICATE RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードを複製するテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DUPLICATE RECORD.Summary-->DUPLICATE RECORDは、カレントレコードを複製して同じ*aTable*内に新しいレコードを作成します。<!-- END REF-->新しいレコードはカレントレコードとなります。カレントレコードが存在しない場合、DUPLICATE RECORDは何も行いません。新しいレコードを保存するには[SAVE RECORD](save-record.md "SAVE RECORD")を使用しなければなりません。

DUPLICATE RECORDはデータ入力中にも実行可能です。これにより現在表示しているレコードのコピーを作ることができます。複製元のレコードへの変更を保存するために、最初に[SAVE RECORD](save-record.md "SAVE RECORD")を実行しておくことを忘れないでください。

**互換性に関する注意:** 4Dバージョン11より、このコマンドはサブテーブルをサポートしません。

#### 参照 

[SAVE RECORD](save-record.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 225 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||


