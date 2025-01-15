---
id: object-get-enterable
title: OBJECT Get enterable
slug: /commands/object-get-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enterable.Syntax-->**OBJECT Get enterable** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enterable.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>フィールドまたは変数 (* 省略時) |
| 戻り値 | Boolean | &#8592; | True = 入力可; そうでなければ false |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get enterable.Summary-->OBJECT Get enterable コマンドはobjectで指定されたオブジェクトまたはオブジェクトグループが**入力可属性**を持つ場合にTrueを、そうでなければFalseを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。 

#### 参照 

[OBJECT SET ENTERABLE](object-set-enterable.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1067 |
| スレッドセーフである | &cross; |


