---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *tableTitles* ; *tableNums* )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableTitles | Text array | &#8592; | カレントテーブルの名前 |
| tableNums | Integer array | &#8592; | テーブル番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET TABLE TITLES.Summary-->GET TABLE TITLES コマンドを使用して、ストラクチャウィンドウで、または[SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES") コマンドを用いて定義されたデータベーステーブルの番号と名前を配列 *tableTitles* と *tableNums* に取得します。<!-- END REF-->これら2つの配列の内容は同期化されています。

セッション中に [SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES") コマンドが呼び出されると、GET TABLE TITLES コマンドは "修正された" 名前とこのコマンドによって定義されたテーブル番号のみを返します。その他の場合、GET TABLE TITLES コマンドは、ストラクチャウィンドウで定義されているすべてのデータベーステーブルの名前を返します。   
これら両方の場合で、コマンドは非表示テーブルを返しません。 

#### 参照 

[GET FIELD TITLES](get-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  