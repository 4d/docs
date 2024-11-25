---
id: is-nil-pointer
title: Is nil pointer
slug: /commands/is-nil-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Is nil pointer.Syntax-->**Is nil pointer** ( *aPointer* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is nil pointer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aPointer | Pointer | &#8594;  | テストするポインタ |
| 戻り値 | Boolean | &#8592; | TRUE = Nil ポインタ (->[]) FALSE = 既存のオブジェクトへの有効なポインタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is nil pointer.Summary-->**Is nil pointer**コマンドは、*aPointer*がNilポインタ (->\[\]) の場合に**True**を返します。<!-- END REF-->その他の場合（フィールドやテーブル、変数へのポインタ）、この関数はFalseを返します。

ポインターの参照先である変数の名前やフィールド番号を知りたい場合、[RESOLVE POINTER](resolve-pointer.md)コマンドを使用します。

#### 例題 

```4d
 var $ptr : Pointer
 ...
 If(Is nil pointer($ptr))
 End if
  // これは下記に相当する
 If($ptr=Null)
 End if
```

#### 参照 

[Is a variable](is-a-variable.md)  
[RESOLVE POINTER](resolve-pointer.md)  