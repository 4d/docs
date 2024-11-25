---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *object* ) : any<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | クラスを返してほしいオブジェクト |
| 戻り値 | Null, Object | &#8592; | オブジェクトのクラス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Class.Summary-->**OB Class** コマンドは*object* 引数のクラスを返します。<!-- END REF-->4D では、全てのオブジェクトはオブジェクトはオブジェクトクラスから継承しています。引数のオブジェクトが既存のオブジェクトでなかった場合、**OB Class** はnull を返します。

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
 var $poly;$class : Object
 $poly:=cs.Polygon.new(4;3)
 
 $class:=OB Class($poly)
  //$class にはClass: Polygon が格納される
```

#### 参照 

[OB Instance of](ob-instance-of.md)  