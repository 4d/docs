---
id: object-get-maximum-value
title: OBJECT GET MAXIMUM VALUE
slug: /commands/object-get-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Syntax-->**OBJECT GET MAXIMUM VALUE** ( {* ;} *object* ; *maxValue* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#x1F852; | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#x1F852; | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| maxValue | Date, Time, Number | &#x1F858; | オブジェクトのカレントの最大値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Summary-->**OBJECT GET MAXIMUM VALUE**コマンドは、引数 *object* と *\** で指定したオブジェクトのカレントの最大値を、 *maxValue* 変数の中に返します。<!-- END REF-->

最大値のプロパティは、デザインモードのプロパティリストを使用するか、新コマンド [OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md) を使用することによって定義できます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

#### 参照 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  