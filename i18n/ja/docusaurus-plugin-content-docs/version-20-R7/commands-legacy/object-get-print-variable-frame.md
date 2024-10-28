---
id: object-get-print-variable-frame
title: OBJECT GET PRINT VARIABLE FRAME
slug: /commands/object-get-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Syntax-->**OBJECT GET PRINT VARIABLE FRAME** ( {* ;} *object* ; *variableFrame* {; *fixedSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| variableFrame | Boolean | &#8592; | True = 可変長フレームを使用、False = 固定長フレームを使用 |
| fixedSubform | Integer | &#8592; | 固定長フレーム時のサブフォームに対するオプション |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Summary-->**OBJECT GET PRINT VARIABLE FRAME**コマンドは、引数 *object* と *\** で指定したオブジェクトの印刷時可変オプションのカレントの設定を取得します。<!-- END REF-->

フレーム印刷のプロパティはプロパティリストか、 [OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md) という新しいコマンドを使用することで設定できます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*variableFrame* 引数には、フレーム印刷のオプションの状態がブールで返されます。**True** の場合は「可変」を、 **False** の場合は「固定」を意味します。

*object* で指定したオブジェクトがサブフォームで、フレーム印刷が「固定」に設定されている場合に限り、コマンドは *fixedSubform* 引数に固定フレーム印刷時のオプションの状態を返します。返される値は "*Form Objects (Properties)*" テーマ内にあります。以下の通りです:

| 定数                                      | 型    | 値 | コメント                                                            |
| --------------------------------------- | ---- | - | --------------------------------------------------------------- |
| Print Frame fixed with multiple records | 倍長整数 | 2 | フレームは同じサイズを維持しますが、4Dは全てのレコードが載るまで複数回フォームを印刷します。                 |
| Print Frame fixed with truncation       | 倍長整数 | 1 | 4Dはサブフォームのエリアに収まるレコードのみ印刷します。フォームは一度だけ印刷され、印刷されなかったレコードは無視されます。 |

#### 参照 

[OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md)  