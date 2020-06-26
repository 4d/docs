---
id: classes
title: クラス
---


## 概要

4D ランゲージでは **クラス** の概念がサポートされています。 プログラミング言語では、クラスを利用することによって、属性やメソッドなどを持つ特定のオブジェクト種を定義することができます。

クラスが定義されていれば、そのクラスのオブジェクトをコード内で **インスタンス化** することができます。 各オブジェクトは、それ自身が属するクラスのインスタンスです。 クラスは、別のクラスを継承することで、それらの機能を受け継ぐことができます。

4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

### Class オブジェクト

クラスとは、それ自身が "Class" クラスのオブジェクトです。 Class オブジェクトは次のプロパティやメソッドを持ちます:

- `name`: ECMAScript に準拠している必要があります
- `superclass` オブジェクト (任意。無ければ null)
- `new()` メソッド: Class オブジェクトをインスタンス化します

さらに、Class オブジェクトは次を参照できます:

- `constructor` オブジェクト (任意)
- `prototype` オブジェクト: 名前付きのメソッドオブジェクトを格納します (任意)

Class オブジェクトは共有オブジェクトです。したがって、異なる 4D プロセスから同時にアクセスすることができます。

### プロパティ検索とプロトタイプ

4D のすべてのオブジェクトは、なんらかの Class オブジェクトに内部的にリンクしています。 あるプロパティがオブジェクト内で見つからない場合、4D はそのクラスのプロトタイプオブジェクト内を検索します。見つからない場合、4D はそのクラスのスーパークラスのプロトタイプオブジェクト内を探します。これは、スーパークラスが存在しなくなるまで続きます。

すべてのオブジェクトは、継承ツリーの頂点である "Object" クラスを継承します。

```4d
//Class: Polygon
Class constructor($width : Integer;$height : Integer)
    This.area:=$width*$height

    //var $poly : Object
    var $instance : Boolean
    $poly:=cs.Polygon.new(4;3)

    $instance:=OB Instance of($poly;cs.Polygon)
    // true
    $instance:=OB Instance of($poly;4D.Object)
    // true
```

オブジェクトのプロパティを列挙する際には、当該クラスのプロトタイプは列挙されません。 したがって、`For each` ステートメントや `JSON Stringify` コマンドは、クラスプロトタイプオブジェクトのプロパティを返しません。 クラスのプロトタイプオブジェクトプロパティは、内部的な隠れプロパティです。

### クラス定義

ユーザークラスファイルによって、特定のオブジェクト種のひな形を定義します。`new()` クラスメンバーメソッドを呼び出すことで、このひな形に基づいたオブジェクトをインスタンス化することができます。 クラスファイル内では、専用の [クラスキーワード](#クラスキーワード) や [クラスコマンド](#クラスコマンド) を使用します。

たとえば:

```4d
//Class: Person.4dm
Class constructor($firstname : Text;$lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname
```

この "Person" のインスタンスをメソッド内で作成するには、以下のように書けます:

    var $o:Object
    $o:=cs.Person.new("John";"Doe")
    // $o:{firstName: "John";lastName: "Doe" }
    

空のクラスファイルを作成し、空のオブジェクトをインスタンス化することも可能です。 たとえば、次の `Empty.4dm` クラスファイルを作成します:

```4d
// Empty.4dm クラスファイル
// 空です
```

メソッドでは次のように書けます:

```4d
$o:=cs.Empty.new()  
// $o : {}
$cName:=OB Class($o).name // "Empty"
```

## クラスストア

定義されたクラスには、クラスストアよりアクセスすることができます。 クラスストアには次のものが存在します:

- ビルトイン 4Dクラス専用のクラスストア: `4D` コマンドによって返されます。
- 開かれている各データベースおよびコンポーネントのクラスストア: `cs` コマンドによって返されます。 "ユーザークラス" ともいいます。

たとえば、`cs.myClass.new()` ステートメント (`cs` は *クラスストア (classstore)* を意味します) を使って myClass のオブジェクトインスタンスを新規作成できます。

## ユーザークラス

### クラスファイル

4D においてユーザークラスとは、`/Project/Sources/Classes/` フォルダーに保存された専用のメソッドファイル (.4dm) によって定義されます。 ファイル名がクラス名になります。

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

- データベースフォルダー 
    + Project 
        * Sources 
            - Classes 
                + Polygon.4dm

### クラス名

クラスを命名する際には、次のルールに留意してください:

- ECMAScript に準拠した名前であること 
- 大文字と小文字が区別されること
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと 

### 4D 開発インターフェース

**ファイル** メニューまたはエクスプローラーなど、4D 開発インターフェースを介してクラスを作成した場合には、クラスファイルは自動的に適切な場所に保存されます。

#### ファイルメニューとツールバー

4D 開発の **ファイル** メニューまたはツールバーより **新規 > クラス...** を選択することで、開いているプロジェクトにクラスファイルを新規作成することができます。

**Ctrl+Shift+Alt+k** ショートカットも使用できます。

#### エクスプローラー

エクスプローラーの **メソッド** ページにおいて、クラスは **クラス** カテゴリに分類されています。

クラスを新規作成するには次の方法があります:

- **クラス** カテゴリを選択し、![](assets/en/Users/PlussNew.png) ボタンをクリックします。
- エクスプローラーウィンドウの下部にあるアクションメニュー、またはクラスグループのコンテキストメニューから **新規クラス...** を選択します。 ![](assets/en/Concepts/newClass.png)
- エクスプローラーのホームページのコンテキストメニューより **新規 > クラス...** を選択します。 

#### クラスのコードサポート

各種 4D 開発ウィンドウ (コードエディター、コンパイラー、デバッガー、ランタイムエクスプローラー) において、クラスコードは "特殊なプロジェクトメソッド" のように扱われます:

- コードエディター: 
    - クラスは実行できません
    - クラスメソッドはコードのブロックです 
    - オブジェクトメンバーに対する **定義に移動** 操作はクラスの Function 宣言を探します。例: "$o.f()" の場合、"Function f" を見つけます。
    - クラスのメソッド宣言に対する **参照箇所を検索** 操作は、そのメソッドがオブジェクトメンバーとして使われている箇所を探します。例: "Function f" の場合 "$o.f()" を見つけます。
- ランタイムエクスプローラーおよびデバッガーにおいて、クラスメソッドは \<ClassName> コンストラクターまたは \<ClassName>.\<FunctionName> 形式で表示されます。

### クラスの削除

既存のクラスを削除するには:

- ディスク上で "Classes" フォルダーより .4dm クラスファイルを削除します。
- エクスプローラーでは、クラスを選択した状態で ![](assets/en/Users/MinussNew.png) をクリックするか、コンテキストメニューより **移動 > ゴミ箱** を選択します。 

## クラスキーワード

クラス定義内では、専用の 4Dキーワードが使用できます:

- `Function <Name>`: オブジェクトのメンバーメソッドを定義します。 
- `Class constructor`: オブジェクトのプロパティを定義します (プロトタイプ定義)。
- `Class extends <ClassName>`: 継承を定義します。

### Function

#### シンタックス

```js
Function <name>({parameterName : type;...})
// code
```

クラスメソッドとは、当該クラスのプロトタイプオブジェクトのプロパティです。 また、クラスメソッドは "Function" クラスのオブジェクトでもあります。

クラス定義ファイルでは、`Function` キーワードとメンバーメソッド名を使用してメンバーメソッド宣言をおこないます。 このとき、メンバーメソッド名は ECMAScript に準拠している必要があります。

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features. For example, if you declare `Function _myPrivateFunction` in MyClass, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

Immediately following the function name, [parameters](#class-function-parameters) for the function can be declared with an assigned name and data type. たとえば:

```code4d
Function setFullName($firstname : Text;$lastname : Text)
```

Within a class function, the `This` command is used as the object instance. たとえば:

```4d
Function setFullname($firstname : Text;$lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()
    var $0 : Text
    $0:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: "*\<ClassName>.\<FunctionName>*", for example "MyClass.myMethod".

In the database code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`

- use of a "Function" class member method:
    
    - `apply()`
    - `call()`

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:  
> - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.

#### Class function parameters

Function parameters are declared using the parameter name and the parameter type, separated by colon. The parameter name must be [ECMA Script](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6) compliant. Multiple parameters (and types) are separated by semicolons (;).

```4d
Function add($x;$y : Variant;$z : Integer;$xy : Object)
```

> If the type is not defined, the parameter will be defined as `Variant`.

The return parameter ($0) is not supported in the named parameter list. It must be declared inside the function code. For example:

```4d
Function add($x : Variant;$y : Integer)
    var $0 : Text
```

> The classic 4D syntax for method parameters can be used in conjunction with the class function parameter syntax. For example:
> 
> ```4d
Function add($x : Integer)
  var $0,$2 : Integer
  $0:=$x+$2
```

#### Example

```4d
// Class: Rectangle
Class constructor($width : Integer;$height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Function definition
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```

```4d
// In a project method
C_OBJECT($o)  
C_REAL($area)

$o:=cs.Rectangle.new()  
$area:=$o.getArea(50;100) //5000
```

### Class constructor

#### Syntax

```js
// Class: MyClass
Class Constructor
// code
```

A class constructor function, which can accept [parameters](#class-function-parameters), can be used to define a user class.

In that case, when you call the `new()` class member method, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>.constructor*", for example "MyClass.constructor".

#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// In a project method
// You can instantiate an object
C_OBJECT($o)
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```

### Class extends \<ClassName>

#### Syntax

```js
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. この子クラスは、親クラスのすべての機能を継承します。

クラス継承は次のルールに沿っている必要があります:

- ユーザークラスはビルトインクラスを継承できません (例外は 4D.Object で、すべてのユーザークラスにデフォルトで継承されます)
- ユーザークラスは、別のデータベースやコンポーネントのユーザークラスを継承できません。
- ユーザークラスは、自身を継承することはできません。
- 間接的にも、自身を継承することはできません (例: "a" extends "b" かつ "b" extends "a")。 

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax' will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```4d
//Class: Square
//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Polygon's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### Super

#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |


The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.
    
    - If all class constructors in the inheritance tree are not properly called, error -10748 is generated. 呼び出しが有効であることを確認するのは、開発者の役目となります。 
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
    
    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// inside myClass constructor
var $text1,$text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
// Class: Rectangle
Class constructor($width : Integer;$height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width


Function sayName()
    ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |


The `This` keyword returns a reference to the currently processed object. `This` は、4Dにおいて [様々なコンテキスト](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.ja.html) で使用することができます。

`This` の値は、呼ばれ方によって決まります。 `This` の値は実行時に代入により設定することはできません。また、呼び出されるたびに違う値となりえます。

オブジェクトのメンバーメソッドとしてフォーミュラが呼び出された場合、`This` はメソッドの呼び出し元であるオブジェクトを指します。 For example:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the `new()` keyword), its `This` is bound to the new object being constructed.

```4d
//Class: ob

Class Constructor  

    // Create properties on This as
    // desired by assigning to them
    This.a:=42 
```

```4d
// in a 4D method  
$o:=cs.ob.new()
$val:=$o.a //42
```

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).

In any cases, `This` refers to the object the method was called on, as if the method were on the object.

```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```

Then you can write in a project method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. *f* は $o のメソッドとして呼び出されるため、メソッド内の `This` は $o を指します。

## クラスコマンド

4D ランゲージには、クラス機能を扱う複数のコマンドがあります。

### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` は引数として渡したオブジェクトのクラスを返します。

### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`object` が `class`、またはその子クラスに属していれば、`OB Instance of` は `true` を返します。それ以外の場合は `false` を返します。