---
id: st-get-options
title: ST GET OPTIONS
slug: /commands/st-get-options
displayed_sidebar: docs
---

<!--REF #_command_.ST GET OPTIONS.Syntax-->**ST GET OPTIONS** ( {* ;} *object* ; *option* ; *value* {; *option2* ; *value2* ; ... ; *optionN* ; *valueN*} )<!-- END REF-->
<!--REF #_command_.ST GET OPTIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| option | Integer | &#8594;  | 取得したいオプション |
| value | Integer | &#8592; | オプションのカレントの値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.ST GET OPTIONS.Summary-->**ST GET OPTIONS**コマンドは、 *object* 引数で指定されたスタイル付テキストフィールドまたはテキスト変数内で動作中のオプションのカレントの値を取得します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。このとき、オブジェクトがフォーカスされていた場合にはコマンドは編集中のテキストに関しての情報を返し、オブジェクトがフォーカスされていない場合にはコマンドはオブジェクトのデータソースの情報を返します。  
省略時には *object* 引数でフィールドまたは変数を指定します。この場合にはコマンドは変数またはフィールドの情報を返します。

*option* 引数には、取得したいオプションを指定するコードを渡します。コマンドはそのオプションのカレントの値を *value* 引数に返します。 *option* 引数には "*Multistyle Text*" テーマ内にある、以下の定数を使用することができます:

| 定数                          | 型    | 値 | コメント                                            |
| --------------------------- | ---- | - | ----------------------------------------------- |
| ST Expressions display mode | 倍長整数 | 1 | *value* 引数にはST ValuesまたはST Referencesのどちらかが入ります |
| ST References               | 倍長整数 | 1 | 式のソースの文字列を表示します。                                |
| ST Values                   | 倍長整数 | 0 | 4D式の、計算された値を表示します。                              |

#### 参照 

[ST SET OPTIONS](st-set-options.md)  