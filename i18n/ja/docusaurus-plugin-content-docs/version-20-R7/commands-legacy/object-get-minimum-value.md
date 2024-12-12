---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( {* ;} *object* ; *minValue* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| minValue | Date, Time, Number | &#8592; | オブジェクトのカレントの最小値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->**OBJECT GET MINIMUM VALUE**コマンドは、引数 *object* と *\** で指定したオブジェクトの最小値を、 *minValue* 変数の中に返します。<!-- END REF-->

最小値のプロパティは、デザインモードのプロパティリストを使用するか、新コマンド [OBJECT SET MINIMUM VALUE](object-set-minimum-value.md) を使用することによって定義できます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

#### 参照 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  