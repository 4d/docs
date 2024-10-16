---
id: get-table-properties
title: GET TABLE PROPERTIES
slug: /commands/get-table-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE PROPERTIES.Syntax-->**GET TABLE PROPERTIES** ( tablePtr| tableNum ; *invisible* {; *trigSaveNew* {; *trigSaveRec* {; *trigDelRec* {; *trigLoadRec*}}}} )<!-- END REF-->
<!--REF #_command_.GET TABLE PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tablePtr&#124; tableNum | ポインター, 倍長整数 | &#8594;  | テーブルポインタ、またはテーブル番号 |
| invisible | Boolean | &#8592; | True = 非表示、False = 表示 |
| trigSaveNew | Boolean | &#8592; | True = トリガ“新規レコード保存時”が有効、 False = それ以外 |
| trigSaveRec | Boolean | &#8592; | True = トリガ“既存レコード保存時”が有効、 False = それ以外 |
| trigDelRec | Boolean | &#8592; | True = トリガ“レコード削除時”が有効、 False = それ以外 |
| trigLoadRec | Boolean | &#8592; | ***使用しない (廃止) *** |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET TABLE PROPERTIES.Summary-->GET TABLE PROPERTIESコマンドは、*tablePtr*または*tableNum*で渡したテーブルのプロパティを返します。<!-- END REF-->最初の引数としてテーブル番号またはテーブルへのポインタを渡すことができます。

このコマンドが実行されると

* このテーブルに対し非表示属性が設定されている場合、引数*invisible*にTrueが返され、そうでない場合Falseが返されます。非表示属性を指定することにより、4D標準のエディタ（ラベル、チャート等）の使用時にテーブルを隠すことができます。
* このテーブルに対し新規レコード保存時トリガが設定されている場合、引数*trigSaveNew*にTrueが返され、そうでない場合Falseが返されます。
* このテーブルに対し既存レコード保存時トリガが設定されている場合、引数*trigSaveRec*にTrueが返され、そうでない場合Falseが返されます。
* このテーブルに対しレコード削除時トリガが設定されている場合、引数*trigDelRec*にTrueが返され、そうでない場合Falseが返されます。

#### 参照 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  