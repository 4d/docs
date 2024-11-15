---
id: ob-is-empty
title: OB Is empty
slug: /commands/ob-is-empty
displayed_sidebar: docs
---

<!--REF #_command_.OB Is empty.Syntax-->**OB Is empty** ( *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is empty.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | 構造化されたオブジェクト |
| 戻り値 | Boolean | &#8592; | object が空か未定義のときには True 、それ以外のときには False |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Is empty.Summary-->**OB Is empty**コマンドは、*object* が未定義か空である場合にはTrueを返し、*object* が定義済み(初期化済み)で少なくとも一つのプロパティを内包している場合にはFalseを返します。<!-- END REF-->

*object* で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

#### 例題 

[OB Is defined](ob-is-defined.md) コマンド同様、このコマンドもオブジェクトの中身によって異なる結果を返します:

```4d
 var $ref : Object
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // False
 
 OB SET($ref;"name";"Susie";"age";4)
  // $ref="{"name":"Susie","age":4}"
 $empty:=OB Is empty($ref) // False
 $def:=OB Is defined($ref) // True
 
 OB REMOVE($ref;"name")
 OB REMOVE($ref;"age")
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // True
```

#### 参照 

[OB Is defined](ob-is-defined.md)  