---
id: records-in-table
title: Records in table
slug: /commands/records-in-table
displayed_sidebar: docs
---

<!--REF #_command_.Records in table.Syntax-->**Records in table** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in table.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコード数を返すテーブル, または 省略時、デフォルトテーブル |
| 戻り値 | Integer | &#8592; | テーブル中の総レコード数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Records in table.Summary-->Records in tableは、*aTable*中の総レコード数を返します。<!-- END REF-->[Records in selection](records-in-selection.md "Records in selection")は、カレントセレクションのレコード数のみを返します。Records in tableがトランザクション内で使用される場合、トランザクション中に作成されたレコードが考慮に入れられます。

#### 例題 

以下の例は、テーブルのレコード数を表示します:

```4d
 ALERT("There are "+String(Records in table([People]))+" records in the テーブル.")
```

#### 参照 

[Records in selection](records-in-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 83 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


