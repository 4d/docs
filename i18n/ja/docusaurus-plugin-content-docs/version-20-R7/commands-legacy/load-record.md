---
id: load-record
title: LOAD RECORD
slug: /commands/load-record
displayed_sidebar: docs
---

<!--REF #_command_.LOAD RECORD.Syntax-->**LOAD RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.LOAD RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードをロードするテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LOAD RECORD.Summary-->LOAD RECORDは、*aTable*のカレントレコードをロードします。<!-- END REF-->カレントレコードが存在しない場合、LOAD RECORDは何も行いません。  
レコードがロードされたら、[Locked](locked.md "Locked")コマンドを使用してレコードが更新可能か調べることができます:

* *aTable*が読み込みのみ状態ならば、[Locked](locked.md "Locked")コマンドは[True](true.md "True")を返し、レコードを修正することはできません。
* *aTable*が読み書き状態でも、レコ－ドが既にロックされている場合は、レコードは読み込みのみ状態になり、そのレコードを修正することはできません。
* *aTable*が読み書き状態でかつレコ－ドがロックされていない場合、カレントプロセス内でレコードを修正することができます。その際[Locked](locked.md "Locked")コマンドはその他のすべてのユーザとプロセスに対して[True](true.md "True")を返します。

**Note:** [READ ONLY](read-only.md "READ ONLY")コマンドの後にLOAD RECORDを実行すると、[UNLOAD RECORD](unload-record.md "UNLOAD RECORD")コマンドを使用しなくても、レコードは自動的にアンロードされた後ロードされます。

通常[QUERY](query.md "QUERY")、[NEXT RECORD](next-record.md "NEXT RECORD")、[PREVIOUS RECORD](previous-record.md "PREVIOUS RECORD")等のコマンドは自動的にカレントレコードをロードするため、LOAD RECORDコマンドを使用する必要はありません。

マルチュユーザ環境やマルチプロセス環境において既存レコードを修正するには、レコードが属するテーブルに読み書き状態でアクセスしなければなりません。レコードがロックされており、ロードされていない場合、時間をおいて、再度LOAD RECORDを実行する必要があります。このためには、ループ内でLOAD RECORDを使用し、レコードが読み書き状態になるまで待機できます。

**Tip:** LOAD RECORDコマンドを使用し、入力フォームにおいてカレントレコードを再ロードすることができます。変更中のデータはすべて以前の値で置き換えられます。この場合、LOAD RECORDコマンドは、いわば一般的な入力データの取消しとして振る舞います。

#### 参照 

[Locked](locked.md)  
[UNLOAD RECORD](unload-record.md)  
*レコードのロック*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 52 |
| スレッドセーフである | &check; |


