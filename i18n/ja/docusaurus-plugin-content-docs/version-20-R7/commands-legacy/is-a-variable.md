---
id: is-a-variable
title: Is a variable
slug: /commands/is-a-variable
displayed_sidebar: docs
---

<!--REF #_command_.Is a variable.Syntax-->**Is a variable** ( *aPointer* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a variable.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aPointer | Pointer | &#8594;  | テストするポインタ |
| 戻り値 | Boolean | &#8592; | TRUE = 変数のポインタ FALSE = 変数以外のポインタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is a variable.Summary-->**Is a variable**コマンドは、*aPointer*が定義済み変数を参照する場合にはTrueを返します。<!-- END REF-->その他の場合（フィールドやテーブルへのポインター、Nilポインター等）、この関数はFalseを返します。

参照されている変数の名前やフィールド番号を知りたい場合、[RESOLVE POINTER](resolve-pointer.md)コマンドを使用します。

#### 参照 

[Is nil pointer](is-nil-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  