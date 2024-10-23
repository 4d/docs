---
id: get-field-entry-properties
title: GET FIELD ENTRY PROPERTIES
slug: /commands/get-field-entry-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Syntax-->**GET FIELD ENTRY PROPERTIES** ( fieldPtr|tableNum {; *fieldNum*}; *list* ; *mandatory* ; *nonEnterable* ; *nonModifiable* )<!-- END REF-->
<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fieldPtr&#124;tableNum | ポインター, 倍長整数 | &#8594;  | フィールドポインタ、またはテーブル番号 |
| fieldNum | Integer | &#8594;  | 第1引数がテーブル番号の場合、 フィールド番号 |
| list | Text | &#8592; | 関連づけられた選択リストの名前、または空の文字列 |
| mandatory | Boolean | &#8592; | True = 必須入力、 False = 任意 |
| nonEnterable | Boolean | &#8592; | True = 表示のみ、 False = 入力可 |
| nonModifiable | Boolean | &#8592; | True = 修正不可、False = 修正可 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Summary-->GET FIELD ENTRY PROPERTIESコマンドは、*tableNum*および*fieldNum*、または*fieldPtr*で指定したフィールドのデータ入力プロパティを返します。<!-- END REF-->  
次のいずれかの引数を指定することができます。

* *tableNum*および*fieldNum*に対し、テーブル番号とフィールド番号を指定、または
* *fieldPtr*にフィールドのポインタを指定

**Note:** このコマンドは、ストラクチャウインドウレベルで定義したプロパティを返します。同様のプロパティはフォームレベルでも定義できます。

このコマンドが実行されると

* 引数*list*には、このフィールドに関連付けられた選択リスト名（存在する場合）が返されます。リストは次のタイプのフィールドに関連付けることができます：文字列、テキスト、実数、整数、倍長整数、日付、時間、ブール。  
フィールドに関連付けられた選択リストが存在しない場合や、フィールドタイプが選択リスト用のものでない場合、空の文字列（""）が返されます。
* 引数*mandatory*には、フィールドが必須入力であればTrueが、そうでない場合にはFalseが返されます。この必須入力属性は、BLOBを除くあらゆるフィールドタイプに設定することができます。
* 引数*nonEnterable*には、フィールドが表示のみであればTrueが、そうでない場合にはFalseが返されます。入力不可のフィールドは読み取りのみであり、データの入力はできません。この表示のみ属性は、BLOBを除くあらゆるフィールドタイプに設定することができます。
* 引数*nonModifiable*には、フィールドが修正不可であればTrueが、そうでない場合にはFalseが返されます。修正不可のフィールドへの入力は一度しか行えず、以後修正はできません。この修正不可属性は、BLOBを除くあらゆるフィールドタイプに設定することができます。

#### 参照 

[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  