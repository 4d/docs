---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Boolean | &#8592; | True = スリーステートチェックボックス、False = 標準のチェックボックス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->**OBJECT Get three states checkbox**コマンドは、引数 *object* と *\** で指定したチェックボックスの"スリーステート"プロパティの、カレントの状態を返します。<!-- END REF-->

スリーステートのプロパティは、プロパティリストを使用するか、同一プロセスにおいてであれば [OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md) を呼び出して設定することができます。

#### 参照 

[OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1250 |
| スレッドセーフである | &cross; |


