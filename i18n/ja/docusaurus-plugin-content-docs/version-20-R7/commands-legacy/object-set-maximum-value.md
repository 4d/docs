---
id: object-set-maximum-value
title: OBJECT SET MAXIMUM VALUE
slug: /commands/object-set-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Syntax-->**OBJECT SET MAXIMUM VALUE** ( {* ;} *object* ; *maxValue* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| maxValue | Date, Time, Number | &#8594;  | オブジェクトの最大値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Summary-->**OBJECT SET MAXIMUM VALUE**コマンドは、引数 *object* と *\** で指定したオブジェクトの最大値を、カレントプロセスにおいて変更します。<!-- END REF-->

「最大値」プロパティは、数、日付、時間のデータ種類に対して適用することができます。詳細な情報に関しては、 *Design Reference* マニュアルの *最大値と最小値* を参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*maxValue* 引数には、カレントプロセスにおいてオブジェクトに対して適用したい最大値を渡します。このとき、渡す最大値はオブジェクトの型と対応している必要があります。そうでない場合にはエラー18 "フィールドタイプが対応していません。"が返されます。

#### 参照 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  