---
id: get-list-item-properties
title: GET LIST ITEM PROPERTIES
slug: /commands/get-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PROPERTIES.Syntax-->**GET LIST ITEM PROPERTIES** ( {* ;} *list* ; itemRef | * ; *enterable* {; *styles* {; *icon* {; *color*}}} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 演算子, 倍長整数 | &#8594;  | 項目参照番号, または 0: リストに最後に追加された項目, または *: カレントのリスト項目 |
| enterable | Boolean | &#8592; | TRUE = 入力可, FALSE = 入力不可 |
| styles | Integer | &#8592; | 項目のフォントスタイル |
| icon | Text, Integer | &#8592; | ピクチャー名または番号 |
| color | Integer | &#8592; | RGBカラー値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET LIST ITEM PROPERTIES.Summary-->**GET LIST ITEM PROPERTIES** コマンドは、引数*list*に渡されたリスト参照番号またはオブジェクト名のリスト内で、引数*itemRef*によって指定された項目のプロパティを返します。<!-- END REF-->

オプションの第一引数 *\** を渡した場合、*list* 引数はフォーム上のリストオブジェクトに対応するオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。リストオブジェクトを一つしか使わない場合や、2番目の *\** を使用しない場合は、両方のシンタックスを使用できます。他方フォーム上に同じ階層リストを参照する複数のオブジェクトがある場合で、2番目の *\** を渡して現在選択されている項目を参照する場合、それぞれのオブジェクトが個別に選択された項目をもつので、オブジェクト名に基づくシンタックスを使用しなければなりません。

**Note:** オブジェクト名に @ 文字を使用することで、名前に対応するオブジェクトが複数検索された場合、 **GET LIST ITEM PROPERTIES** コマンドは最初に見つけたオブジェクトを処理の対象とします。

*itemRef* に項目参照番号を渡すことができます。0を渡した場合、リストに最後に追加された項目が処理の対象となります。*\** を渡した場合、コマンドは現在選択されている項目を処理の対象とします。複数の項目が選択されている場合、カレントの項目は最後に選択された項目です。  
\* を渡して項目が選択されていない場合や項目参照番号を渡してその項目が存在しない場合、コマンドはパラメーターを変更しません。

項目参照番号を使用して作業を実行する場合、項目がユニークな参照番号を持つリストを作成します。そうでなければ、項目を区別できません。詳細については[APPEND TO LIST](append-to-list.md)の説明を参照してください。

呼出し後に、以下の値を取得できます:

* 項目が編集可の場合、*enterable* にTRUEが返されます。
* *styles* には項目のフォントスタイルが返されます。
* *icon* には項目に割り当てられたピクチャーが返されます。  
   * ピクチャーファイルを使用してアイコンが指定されていた場合、コマンドは *icon* にピクチャーのパス名 ( **path:<filesystem path>** ) を返します。  
   * アイコンがライブラリピクチャー (バイナリデータベースのみ) を使用して指定されていた場合、コマンドはこの引数に渡された変数の型に応じ、ピクチャー名 ( **pictlib:<name>**) あるいは番号のいずれかを返します。なお、*icon* 変数の型を指定しなかった場合は、デフォルトでピクチャー名が返されます (テキスト)。アイコンが割り当てられていない場合、コマンドは空値を返します。  
         
   **注:** [GET LIST ITEM ICON](get-list-item-icon.md) コマンドを使用すれば、ピクチャー変数にアイコンを取得できます。
* *color*には項目のテキストカラーが返されます。

これらのプロパティに関する詳細は、[SET LIST ITEM PROPERTIES](set-list-item-properties.md) コマンドの説明を参照してください。

#### 参照 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM ICON](get-list-item-icon.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 631 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


