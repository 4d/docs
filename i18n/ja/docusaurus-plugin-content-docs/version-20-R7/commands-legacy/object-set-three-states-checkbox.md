---
id: object-set-three-states-checkbox
title: OBJECT SET THREE STATES CHECKBOX
slug: /commands/object-set-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Syntax-->**OBJECT SET THREE STATES CHECKBOX** ( {* ;} *object* ; *threeStates* )<!-- END REF-->
<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:object はオブジェクト名(文字列)、省略時:object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名(*指定時)、または変数やフィールド(*省略時) |
| threeStates | Boolean | &#8594;  | True = スリーステートチェックボックス、False = 標準のチェックボックス |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Summary-->**OBJECT SET THREE STATES CHECKBOX**コマンドは、引数 *object* と *\** で指定したチェックボックスの"スリーステート"のプロパティを、カレントのプロセスにおいて変更します。<!-- END REF-->

"スリーステート"オプションは、チェックボックスにて"どちらでもない"という新しい状態の使用を可能にします。詳細な情報に関しては*Design Reference* 内の *3 ステートチェックボックス* を参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

このコマンドは変数と関連付けられたチェックボックスに対してのみ適用され、チェックボックスとして現れるブール型のフィールドには使用できません。

*threeStates* 引数には、 スリーステートモードをオンにしたい場合には **True** を、オフにしたい場合は **False** を渡します。

#### 参照 

[OBJECT Get three states checkbox](object-get-three-states-checkbox.md)  