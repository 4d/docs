---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| 戻り値 | Boolean | &#8592; | True = 自動スペルチェックFalse = 自動スペルチェックなし |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->**OBJECT Get auto spellcheck**コマンドは*object*と*\** 引数で指定したオブジェクトのカレントプロセスの自動スペルチェックオプションに関する設定値を返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

このコマンドは自動スペルチェックが*object*に対し有効になっていれば**True**、そうでなければ**False**を返します。

#### 参照 

[OBJECT SET AUTO SPELLCHECK](object-set-auto-spellcheck.md)  