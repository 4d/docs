---
id: ob-instance-of
title: OB Instance of
slug: /commands/ob-instance-of
displayed_sidebar: docs
---

<!--REF #_command_.OB Instance of.Syntax-->**OB Instance of** ( *object* ; *class* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Instance of.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | クラスをテストするオブジェクト |
| class | Object | &#8594;  | 属しているかをテストするクラス |
| 戻り値 | Boolean | &#8592; | オブジェクトが指定されたクラスまたはその子クラスに属する場合にはTrue、それ以外の場合にはfalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Instance of.Summary-->**OB Instance of** コマンドは*object* 引数のオブジェクトが*class* 引数で指定されたクラスまたはその子クラスに属していればtrue を、それ以外の場合にはfalse を返します。<!-- END REF-->引数のクラスが有効なクラスオブジェクトでない場合、エラー-10745 が返されます。

#### 例題 

Polygon というクラスを作成した場合を考えます:

```4d
  //Class: Polygon
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

その後、メソッド内において、以下のように書くことができます:

```4d
 var $poly : Object
 var $instance : Boolean
 
 $poly:=cs.Polygon.new(4;3)
 
 $instance:=OB Instance of($poly;cs.Polygon)
  // true
 
 $instance:=OB Instance of($poly;4D.Object)
  // true 
 
 $instance:=OB Instance of($poly;cs.Circle)
  // false
```

#### 参照 

[OB Class](ob-class.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1731 |
| スレッドセーフである | &check; |


