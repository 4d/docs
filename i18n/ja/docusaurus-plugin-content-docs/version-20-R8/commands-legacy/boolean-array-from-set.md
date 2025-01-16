---
id: boolean-array-from-set
title: BOOLEAN ARRAY FROM SET
slug: /commands/boolean-array-from-set
displayed_sidebar: docs
---

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Syntax-->**BOOLEAN ARRAY FROM SET** ( *booleanArr* {; *set*} )<!-- END REF-->
<!--REF #_command_.BOOLEAN ARRAY FROM SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| booleanArr | Boolean array | &#8592; | レコードがセットに含まれているかいないかを示す配列 |
| set | Text | &#8594;  | セット名、または 引数が省略された場合UserSet |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Summary-->BOOLEAN ARRAY FROM SETコマンドは、テーブル内の各レコードが指定されたセットに含まれるか含まれないかを示すブール配列を作成します。<!-- END REF-->

配列の各要素は、テーブルに作成されたレコードと同じ順序（絶対レコード番号順）で整列されます。配列の０番目の要素はレコード番号0のレコードにあたり、配列の要素Nはレコード番号Nのレコードにあたります。

配列の各要素は以下の通りです。

* 対応するレコードがセットに含まれる場合はTrue
* 対応するレコードがセットに含まれない場合はFalse

**警告：** *booleanArr*配列の総要素数に意味はありません。構造上の理由により、この数はテーブル上の実存のレコード数と異なっています。起こりうる余分の要素は[False](false.md "False")にセットされます。

*set*引数を指定しない場合、コマンドはカレントプロセスのUserSetを使用します。

#### 参照 

[CREATE SET FROM ARRAY](create-set-from-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 646 |
| スレッドセーフである | &check; |


