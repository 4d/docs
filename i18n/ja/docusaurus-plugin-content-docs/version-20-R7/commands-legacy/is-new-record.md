---
id: is-new-record
title: Is new record
slug: /commands/is-new-record
displayed_sidebar: docs
---

<!--REF #_command_.Is new record.Syntax-->**Is new record** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is new record.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードを検査するテーブル または 省略時、デフォルトテーブル |
| 戻り値 | Boolean | &#8592; | True: レコードは未保存の新規レコード, そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is new record.Summary-->Is new record コマンドは、カレントプロセス内で、指定された*aTable*のカレントレコードが未保存の新規レコードの場合に[True](true.md "True")を返します。<!-- END REF-->[Record number](record-number.md "Record number")コマンドが-3を返すかどうかで同じ情報を得ることができます。  
しかしこの目的では[Record number](record-number.md "Record number")の代りにIs new recordを使用することを強くお勧めします。実際、Is new recordコマンドは4Dの将来のバージョンとのより優れた互換性を保証します。

**4D Server:** このコマンドは、On Validateフォームイベントにおいては、4Dローカルモードと4Dリモートモードで異なる値を返します。ローカルモードでは[False](false.md "False") (レコードは既に作成されていると扱われるため) を返します。リモートモードでは[True](true.md "True")を返します。なぜならば、レコードは4D Server上に作成されていますが、クライアントにこの情報はまだ通知されていないためです。

#### 例題 

下記の2つの方法は同一のものです。コードが4Dの将来のバージョンとの互換性を保つため、2番目の方法を強く推奨します:

```4d
 If(Record number([Table])=-3) //非推奨
  // ...
 End if
 
```

```4d
 If(Is new record([Table])) //強く推奨
  // ...
 End if
```

#### 参照 

[Modified record](modified-record.md)  
[Record number](record-number.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 668 |
| スレッドセーフである | &check; |


