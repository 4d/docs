---
id: object-get-action
title: OBJECT Get action
slug: /commands/object-get-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get action.Syntax-->**OBJECT Get action** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get action.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| 戻り値 | Text | &#8592; | 関連付けられた標準アクション名と(あれば)引数の文字列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get action.Summary-->**OBJECT Get action** コマンドは*object* 引数と*\** 引数によって指定されたオブジェクトに割り当てられた標準アクションの名前と引数(あれば)を返します。<!-- END REF-->

任意の *\** 引数を指定した場合、*object* はオブジェクト名です(文字列) 。オプションの \* 引数を省略すると、*object* はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照(フィールドまたは変数のみ)を指定します。  

フォームエディターのプロパティリスト、あるいは[OBJECT SET ACTION](object-set-action.md) コマンドを使用して、オブジェクトに対して標準アクションを設定することができます。**OBJECT Get action** コマンドはオブジェクトに割り当てられた標準アクションの名前を含む文字列(に加えて、あれば引数も)を返します。

標準アクションの全体的な一覧については、*デザインリファレンス*マニュアルの*標準アクション*の章を参照してください。

#### 例題 

フォーム内にあるオブジェクトのうち、まだ関連付けられたアクションがないもの全てに対して、"キャンセル"アクションを割り当てたい場合を考えます:

```4d
 ARRAY TEXT($arrObjects;0)
 
 FORM GET OBJECTS($arrObjects)
 For($i;1;Size of array($arrObjects))
    If(OBJECT Get action(*;$arrObjects{$i})=ak none)
       OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)
    End if
 End for
```

#### 参照 

[OBJECT SET ACTION](object-set-action.md)  