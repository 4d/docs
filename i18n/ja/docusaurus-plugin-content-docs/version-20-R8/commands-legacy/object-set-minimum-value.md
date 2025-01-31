---
id: object-set-minimum-value
title: OBJECT SET MINIMUM VALUE
slug: /commands/object-set-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Syntax-->**OBJECT SET MINIMUM VALUE** ( {* ;} *object* ; *minValue* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MINIMUM VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| minValue | Date, Time, Number | &#8594;  | オブジェクトの最小値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Summary-->**OBJECT SET MINIMUM VALUE**コマンドは、引数 *object* と *\** で指定したオブジェクトの最小値を、カレントプロセスにおいて変更します。<!-- END REF-->

「最小値」プロパティは、数、日付、時間のデータ種類に対して適用することができます。詳細な情報に関しては、 *Design Reference* マニュアルの *最大値と最小値* を参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*minValue* 引数には、カレントプロセスにおいてオブジェクトに対して適用したい最小値を渡します。このとき、渡す最小値はオブジェクトの型と対応している必要があります。そうでない場合にはエラー18"フィールドタイプが対応していません。"が返されます。

#### 参照 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1242 |
| スレッドセーフである | &cross; |


