---
id: cs
title: cs
slug: /commands/cs
displayed_sidebar: docs
---

<!--REF #_command_.cs.Syntax-->**cs** -> 戻り値<!-- END REF-->
<!--REF #_command_.cs.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &#x1F850; | カレントデータベースの全てのクラスを格納したクラスストア |

<!-- END REF-->

#### 説明 

<!--REF #_command_.cs.Summary-->**cs** コマンドは、カレントデータベースまたはコンポーネント内において定義された全てのユーザーを格納した*クラスストア* オブジェクトを返します。<!-- END REF-->このコマンドはユーザークラスからオブジェクトをインスタンス化するためには必須です。

**注:** このコマンドはプロジェクトデータベースにおいてのみ動作します。バイナリーデータベースにおいては、**cs** は空のクラスストアを返します。

#### 例題 

Polygon クラスを作成した場合を考えます:

```4d
  //Class: Polygon
 
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

その後、メソッド内において以下のように書くことができます:

```4d
 var $poly : Object
 $poly:=cs.Polygon.new(4;3)
  // {area:12}
```

#### 参照 

[4D](4d.md)  
[Super](super.md)  