---
id: object-get-filter
title: OBJECT Get filter
slug: /commands/object-get-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get filter.Syntax-->**OBJECT Get filter** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get filter.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>フィールドまたは変数 (* 省略時) |
| 戻り値 | Text | &#8592; | フィルター名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get filter.Summary-->OBJECT Get filter コマンドは *object*で指定されたオブジェクトまたはオブジェクトグループに割り当てられたフィルターの名前を返します。<!-- END REF-->.

オプションの *\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。

#### 参照 

[OBJECT SET FILTER](object-set-filter.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1073 |
| スレッドセーフである | &cross; |


