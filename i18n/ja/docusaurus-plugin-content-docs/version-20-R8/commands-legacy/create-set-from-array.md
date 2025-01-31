---
id: create-set-from-array
title: CREATE SET FROM ARRAY
slug: /commands/create-set-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET FROM ARRAY.Syntax-->**CREATE SET FROM ARRAY** ( *aTable* ; *recordsArray* {; *setName*} )<!-- END REF-->
<!--REF #_command_.CREATE SET FROM ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セットのテーブル |
| recordsArray | Integer, Boolean array | &#8594;  | レコード番号配列、または ブール配列 (True = レコードはセットに含まれる, False = レコードはセットに含まれない) |
| setName | Text | &#8594;  | 作成するセットの名前, または 省略時、UserSetに適用する |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE SET FROM ARRAY.Summary-->CREATE SET FROM ARRAY コマンドは、セット*setName*を下記の情報から作成します:

* *aTable*テーブルの絶対レコード番号の配列*recordsArray*
* ブール配列*recordsArray*。<!-- END REF-->この場合、配列の値はそれぞれのレコードが*setName*に属する ([True](true.md "True")) か属さないか ([False](false.md "False")) を表します。

このコマンドを使用する際、*recordsArray*に倍長整数配列を渡すと、配列中のすべての数値は*setName*に格納されるレコードのレコード番号を表します。番号が無効の場合 (例えばレコードが作成されていない場合)、エラー-10503が生成されます。

このコマンドを使用する際、*recordsArray*にブール配列を渡すと、配列のN番目の要素は、*setName*にN番目のレコードが含まれるか ([True](true.md "True")) 含まれないか ([False](false.md "False")) を表します。通常配列の要素数はテーブルのレコード数と一致しなくてはなりません。配列要素数がレコード数より少ない場合、配列により定義されたレコードのみがセットに格納されます。

**Note:** ブール配列では0からN-1までの要素がこのコマンドにより使用されます。

*setName* 引数を渡さないか空の文字列を渡すと、コマンドは**Userset**システムセットに適用されます。

#### エラー管理 

倍長整数配列を渡した場合で、レコード番号が無効 (レコードが作成されていない) のとき、エラー-10503が生成されます。

#### 参照 

[BOOLEAN ARRAY FROM SET](boolean-array-from-set.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 641 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


