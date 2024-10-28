---
id: object-set-print-variable-frame
title: OBJECT SET PRINT VARIABLE FRAME
slug: /commands/object-set-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Syntax-->**OBJECT SET PRINT VARIABLE FRAME** ( {* ;} *object* ; *variableFrame* {; *fixedSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、<br/>または変数やフィールド( * 省略時) |
| variableFrame | Boolean | &#8594;  | True = 可変長フレーム印刷、 False = 固定長フレーム印刷 |
| fixedSubform | Integer | &#8594;  | サブフォームを固定サイズで印刷する際のオプション |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Summary-->**OBJECT SET PRINT VARIABLE FRAME**コマンドは、引数 *object* と *\** で指定したオブジェクトの印刷時可変のプロパティを、変更します。<!-- END REF-->

このプロパティはテキスト型・ピクチャー型の変数とフィールド、そしてサブフォームにのみ存在します。サブフォームの場合は更に固定長印刷のオプションも存在します。詳細な情報に関しては、 *Design Reference* マニュアルの [WA OPEN BACK URL](wa-open-back-url.md) を参照して下さい。このコマンドは、印刷時可変のプロパティがないオブジェクトに対しては何もしません。

このプロパティは以下のオブジェクトにおいてのみ存在します:

* テキスト型・ピクチャー型の変数とフィールド(*Design Reference* マニュアルの*印刷時可変*を参照して下さい)
* 4D Write Pro エリア(4D Write Pro リファレンスマニュアル内の*4D Write Pro エリアを使用する*を参照して下さい)
* サブフォーム。サブフォームの場合は更に固定長印刷のオプションも存在します(詳細な情報に関しては、 *Design Reference* マニュアルの*印刷*を参照して下さい)。このコマンドに対して*fixedSubform* 引数を使用することによって、固定長印刷のオプションを設定することができます。

このコマンドは、印刷時可変のプロパティがないオブジェクトに対しては何もしません。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*variableFrame* 引数はブール型の引数です。 **True**を渡した場合、オブジェクトは可変長フレームで印刷されます。 **False** を渡した場合、オブジェクトは固定長フレームで印刷されます。

任意の *fixedSubform* 引数では、 *object* でサブフォームを指定していて *variableFrame* 引数に **False** を渡した場合のみ、追加のオプションを設定できます(他の場合には無視されます)。このオプションではサブフォームの固定長フレーム印刷モードを定義できます。 "*Form Objects (Properties)*" テーマにある、以下の定数のどちらかを渡して下さい:

| 定数                                      | 型    | 値 | コメント                                                            |
| --------------------------------------- | ---- | - | --------------------------------------------------------------- |
| Print Frame fixed with multiple records | 倍長整数 | 2 | フレームは同じサイズを維持しますが、4Dは全てのレコードが載るまで複数回フォームを印刷します。                 |
| Print Frame fixed with truncation       | 倍長整数 | 1 | 4Dはサブフォームのエリアに収まるレコードのみ印刷します。フォームは一度だけ印刷され、印刷されなかったレコードは無視されます。 |

#### 参照 

[OBJECT GET PRINT VARIABLE FRAME](object-get-print-variable-frame.md)  