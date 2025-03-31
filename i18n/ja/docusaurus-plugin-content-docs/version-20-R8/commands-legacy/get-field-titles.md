---
id: get-field-titles
title: GET FIELD TITLES
slug: /commands/get-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD TITLES.Syntax-->**GET FIELD TITLES** ( *aTable* ; *fieldTitles* ; *fieldNums* )<!-- END REF-->
<!--REF #_command_.GET FIELD TITLES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | フィールド名を取得したいテーブル |
| fieldTitles | Text array | &#8592; | カレントフィールドの名前 |
| fieldNums | Integer array | &#8592; | フィールド番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET FIELD TITLES.Summary-->GET FIELD TITLES コマンドを使用して、目的の *table* に対してデータベースフィールドの名前と番号を配列 *fieldTitles* と *fieldNums* に受け取ります。<!-- END REF-->これら2つの配列内容は同期化されています。

セッション中に [SET FIELD TITLES](set-field-titles.md "SET FIELD TITLES") コマンドが呼び出されると、GET FIELD TITLES コマンドは "修正された" 名前と、このコマンドによって定義されたフィールド番号のみを返します。そうでない場合、GET FIELD TITLES コマンドはストラクチャウィンドウで定義されているすべてのデータベースフィールドの名前を返します。   
これら両方の場合で、コマンドは非表示フィールドを返しません。 

#### 参照 

[GET TABLE TITLES](get-table-titles.md)  
[SET FIELD TITLES](set-field-titles.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 804 |
| スレッドセーフである | &cross; |


