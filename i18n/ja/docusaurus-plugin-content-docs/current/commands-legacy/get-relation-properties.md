---
id: get-relation-properties
title: GET RELATION PROPERTIES
slug: /commands/get-relation-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET RELATION PROPERTIES.Syntax-->**GET RELATION PROPERTIES** ( fieldPtr|tableNum {; *fieldNum*}; *oneTable* ; *oneField* {; *choiceField* {; *autoOne* {; *autoMany*}}} )<!-- END REF-->
<!--REF #_command_.GET RELATION PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fieldPtr&#124;tableNum | ポインター, 倍長整数 | &#8594;  | フィールドポインタ、またはテーブル番号 |
| fieldNum | Integer | &#8594;  | 第一引数がテーブル番号の場合、 フィールド番号 |
| oneTable | Integer | &#8592; | 1テーブルのテーブル番号、または リレーションが未定義の場合は0（ゼロ） |
| oneField | Integer | &#8592; | 1フィールド番号、または リレーションが未定義の場合は0（ゼロ） |
| choiceField | Integer | &#8592; | 選択フィールド番号、または選択フィールドが未定義の場合は0（ゼロ） |
| autoOne | Boolean | &#8592; | True = 自動1対1リレート False = 1対1マニュアルリレート |
| autoMany | Boolean | &#8592; | True = 自動1対nリレート False = 1対nマニュアルリレート |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET RELATION PROPERTIES.Summary-->GET RELATION PROPERTIESコマンドは、*tableNum*および*fieldNum*、または*fieldPtr*で指定した元のフィールドを起点とするリレート（存在する場合）のプロパティを返します。<!-- END REF-->

次のいずれかの引数を指定することができます。

* *tableNum*および*fieldNum*に対し、テーブルとフィールドを指定
* *fieldPtr*にフィールドのポインタを指定

このコマンドが実行されると

* 引数*oneTable*および*oneField*にはそれぞれ、起点フィールドからのリレートが指し示すテーブル番号およびフィールド番号が納められます。このフィールドを起点とするリレートが存在しない場合、これらの引数には0が返されます。
* 引数*choicefield*には、このリレートで定義されたターゲットテーブルのワイルドカード選択フィールド番号が納められます。このリレートに対しワイルドカード選択フィールドが設定されていない場合、または起点フィールドからのリレートがない場合、この引数には0が返されます。
* 引数*autoOne*および*autoMany*にはそれぞれ、このリレートに対し「自動1対1リレート」および「自動1対nリレート」チェックボックスがチェックされている場合に[True](true.md "True")が、そうでない場合には[False](false.md "False")が返されます。

**Note:** 引数*autoOne*および*autoMany*は、起点フィールドから始まるリレートが存在しない場合にも[True](true.md "True")を返します。（この場合、返す値には意味がありません）。2つの引数*oneTable*および*oneField*の値により、リレートが存在するかどうかを確認できます。

#### 参照 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  
[SET FIELD RELATION](set-field-relation.md)  