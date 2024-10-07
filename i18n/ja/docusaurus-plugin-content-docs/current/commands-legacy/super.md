---
id: super
title: Super
slug: /commands/super
displayed_sidebar: docs
---

<!--REF #_command_.Super.Syntax-->**Super** {( *param* {; *param2* ; ... ; *paramN*} )} -> 戻り値<!-- END REF-->
<!--REF #_command_.Super.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| param | Mixed | &#x1F852; | 親コンストラクターに渡す引数 |
| 戻り値 | オブジェクト | &#x1F850; | オブジェクトの親 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Super.Summary-->**Super** コマンドは、スーパークラスへの呼び出しを行います。<!-- END REF-->

**Super** は二つの目的のために導入されました:

* **コンストラクターコード**内においては、**Super** はスーパークラスのコンストラクターを呼び出すためのコマンドです。コンストラクター内で使用された場合、**Super** コマンドは単独で使用され、[This](this.md) キーワードが使用される前に使用されていなければなりません。
   * 継承ツリー内の全てのクラスコンストラクターが適切に呼ばれていないと、エラー-10748 が生成されます。4Dデベロッパーは全ての呼び出しが有効かどうかを検証する責務があります。
   * [This](this.md) コマンドが、まだスーパークラスがコンストラクトされていないオブジェクトに対して呼び出された場合、エラー-10743 が生成されます。
   * **Super** がオブジェクトスコープ外から呼び出された場合、またはスーパークラスのコンストラクターが既に呼び出されているオブジェクトに対して呼び出された場合、エラー-10746 が生成されます。

```4d
  // myClass コンストラクター内
 var $1;$2 : Text
 Super($1) //テキスト引数でスーパークラスコンストラクターを呼び出す
 This.param:=$2 // 二つ目の引数を使用する
```

* **クラスメンバーファンクション**内においては、**Super** はスーパークラスのプロトタイプを指定し、スーパークラス階層のファンクションを呼び出すことを可能にします。

```4d
 Super.doSomething(42) //スーパークラス内で宣言された"doSomething" ファンクションを呼び出す
```

#### 例題 1 

以下の例題はクラスコンストラクター内部の**Super** の使用例を紹介しています。このコマンドは、Rectangle クラスとSquare クラスで共通しているコンストラクター部分の重複を避けるために呼び出されています。

```4d
  //Class: Rectangle
 
 Class constructor
 var $1;$2 : Integer
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2
 
 Function sayName
 ALERT("Hi, I am a "+This.name+".")
 
 Function getArea
 var $0 : Integer
 $0:=This.height*This.width
```

```4d
  //Class: Square
 
 Class extends Rectangle
 
 Class constructor
 var $1 : Integer
 
  // Rectangle の幅と高さとして提供された長さで
  // 親クラスコンストラクターを呼び出す
 Super($1;$1)
 
  // 派生したクラスにおいては、
  // Super は'This' を使用する前に呼び出されていなければならない
 This.name:="Square"
```

#### 例題 2 

以下の例ではクラスメンバーメソッド内においての**Super** の使用法を紹介しています。

ファンクションを持ったRectangle クラスを作成した場合を考えます:

```4d
  //Class: Rectangle
 
 Function nbSides
 var $0 : Text
 $0:="I have 4 sides"
```

また、スーパークラスファンクションを呼び出すファンクションを持つSquare クラスを作成したとします:

```4d
  //Class: Square
 
 Class extends Rectangle
 
 Function description
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

その後、プロジェクトメソッド内において以下のように書くことができます:

```4d
 var $square : Object
 var $message : Text
 $square:=cs.Square.new()
 $message:=$square.description() // "I have 4 sides which are all equal" が格納される
```

#### 参照 

[cs](cs.md)  
[This](this.md)  