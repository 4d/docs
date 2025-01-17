---
id: object-get-list-reference
title: OBJECT Get list reference
slug: /commands/object-get-list-reference
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list reference.Syntax-->**OBJECT Get list reference** ( {* ;} *object* {; *listType*} ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get list reference.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| listType | Integer | &#8594;  | リストの種類:選択リスト、指定リスト、除外リスト |
| 戻り値 | Integer | &#8592; | リストの参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get list reference.Summary-->**OBJECT Get list reference**コマンドは、引数 *object* と *\** で指定したオブジェクトまたはオブジェクトのグループに関連付けられた階層リストの参照番号(ListRef)を返します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*listType* 引数を省略した場合、コマンドは自動的にオブジェクトに割り当てられた選択リストの参照番号を返します。また、*listType* 引数に "*Form Objects (Properties)*" テーマ内にある以下の定数を渡すことにより、指定リストと除外リストの参照番号を取得することが出来ます:

| 定数            | 型    | 値 | コメント                                  |
| ------------- | ---- | - | ------------------------------------- |
| Choice list   | 倍長整数 | 0 | 選択できる値のリスト(プロパティリスト内の「選択リスト」)。(デフォルト) |
| Excluded list | 倍長整数 | 2 | 入力できない値のリスト。(プロパティリスト内の「除外リスト」)       |
| Required list | 倍長整数 | 1 | 入力可能な値のリスト(プロパティリストの"指定リスト"オプション)。    |

*listType* で指定した種類の階層リストが関連付けされていない場合、コマンドは 0 を返します。

#### 参照 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1267 |
| スレッドセーフである | &cross; |


