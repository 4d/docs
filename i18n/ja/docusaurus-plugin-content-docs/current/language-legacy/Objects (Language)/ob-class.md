---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *object* : Object ) : Object<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594; | クラスを返してほしいオブジェクト |
| 戻り値 | Null, Object | &#8592; | オブジェクトのクラス |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|18 R3|初出|

</details>
</div>

## 説明 

<!--REF #_command_.OB Class.Summary-->**OB Class** コマンドは*object* 引数のクラスを返します。<!-- END REF-->4D では、全てのオブジェクトはオブジェクトはオブジェクトクラスから継承しています。引数のオブジェクトが既存のオブジェクトでなかった場合、**OB Class** はnull を返します。

## 例題 

Polygon というクラスを作成した場合を考えます:

```4d
  //Class: Polygon
 
 Class constructor( $width : Integer ; $height : Integer)
 This.area:=$width*$height
```

その後、メソッド内において、以下のように書くことができます:

```4d
 var $poly;$class : Object
 $poly:=cs.Polygon.new(4;3)
 
 $class:=OB Class($poly)
  //$class にはClass: Polygon が格納される
```

## 参照 

[OB Instance of](../commands/ob-instance-of)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1730 |
| スレッドセーフである | yes |


