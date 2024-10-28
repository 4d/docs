---
id: object-set-indicator-type
title: OBJECT SET INDICATOR TYPE
slug: /commands/object-set-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Syntax-->**OBJECT SET INDICATOR TYPE** ( {* ;} *object* ; *indicator* )<!-- END REF-->
<!--REF #_command_.OBJECT SET INDICATOR TYPE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| indicator | Integer | &#8594;  | インジケータータイプ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Summary-->**OBJECT SET INDICATOR TYPE**コマンドは、引数 *object* と *\** で指定したサーモメーターの進捗インジケーターのタイプを、カレントプロセスにおいて変更します。<!-- END REF-->

インジケータータイプは、サーモメーターの表示方法を定義します。詳細な情報に関しては、 *Design Reference* マニュアルの *インジケーター* を参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。 

*indicator* 引数には、表示したいインジケーターの種類を渡します。 "*Form Objects (Properties)*" のテーマ内にある、以下の定数の中から選ぶことが出来ます。

| 定数                        | 型    | 値 | コメント                         |
| ------------------------- | ---- | - | ---------------------------- |
| Asynchronous progress bar | 倍長整数 | 3 | 連続したアニメーションを表示する、回転型のインジケーター |
| Barber shop               | 倍長整数 | 2 | 連続したアニメーションを表示するバー           |
| Progress bar              | 倍長整数 | 1 | 標準の進捗バー                      |

#### 参照 

[OBJECT Get indicator type](object-get-indicator-type.md)  