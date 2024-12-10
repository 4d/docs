---
id: super
title: Super
displayed_sidebar: docs
---

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->

| 引数    | 型      |                             | 説明               |
| ----- | ------ | --------------------------- | ---------------- |
| param | any    | ->                          | 親コンストラクターに受け渡す引数 |
| 戻り値   | Object | <- | 親オブジェクト          |

<!-- END REF -->

`Super` キーワードによって、<!-- REF #_command_.Super.Summary -->スーパークラス (親クラス) を呼び出すことができます<!-- END REF -->。

`Super` は次の 2つの目的のために使います:

1. `Square` クラスには、スーパークラスメソッドを呼び出すメンバーメソッドを定義します: When used in a constructor, the `Super` command appears alone and must be used before the [`This`](this.md) keyword is used.

- 継承ツリーにおいて、すべてのクラスコンストラクターが正しく呼び出されていない場合には、エラー -10748 が生成されます。 呼び出しが有効であることを確認するのは、開発者の役目となります。
- スーパークラスがコンストラクトされるより先に、`This` コマンドを使った場合には、エラー -10743 が生成されます。
- オブジェクトのスコープ外で `Super` を呼び出した場合、または、スーパークラスコンストラクターがすでに呼び出されたオブジェクトを対象に呼び出した場合には、エラー -10746 が生成されます。

```4d
// myClass コンストラクター
var $text1; $text2 : Text
Super($text1) // テキスト型引数をスーパークラスコンストラクターに渡します
This.param:=$text2 // 2番目の引数を使用します
```

2. Inside a [class function](#class-function), `Super` designates the prototype of the [`superclass`](../API/ClassClass.md#superclass) and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) // スーパークラスにて宣言されている
// "doSomething" メンバーメソッドを呼び出します
```

#### 例題 1

クラスコンストレクター内で `Super` を使う例です。 クラスコンストレクター内で `Super` を使う例です。 `Rectangle` と `Square` クラス の共通要素がコンストラクター内で重複しないよう、このコマンドを呼び出します。

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea() : Integer

 return (This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

 // It calls the parent class's constructor with lengths
 // provided for the Rectangle's width and height
 Super($side;$side)
 // In derived classes, Super must be called 
 // before you can use 'This'
 This.name:="Square"

Function getArea() : Integer
 return This.height*This.width
```

#### 例題 2

This example illustrates the use of `Super` in a class function. メンバーメソッドを持つ `Rectangle` クラスを作成します:

```4d
//Class: Rectangle

Function nbSides() : Text
 return "I have 4 sides"
```

`Square` クラスには、スーパークラスメソッドを呼び出すメンバーメソッドを定義します:

```4d
//Class: Square

Class extends Rectangle

Function description() : Text
  return Super.nbSides()+" which are all equal"
```

この場合、プロジェクトメソッド内には次のように書けます:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() // "I have 4 sides which are all equal"
```

#### 参照

[**Concept page for Classes**](../Concepts/classes.md).
