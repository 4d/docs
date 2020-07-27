---
id: classes
title: クラス
---


## 概要

4D ランゲージでは **クラス** の概念がサポートされています。 プログラミング言語では、クラスを利用することによって、属性やメソッドなどを持つ特定のオブジェクト種を定義することができます。

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. 各オブジェクトは、それ自身が属するクラスのインスタンスです。 A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function).

> 4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

For example, you could create a `Person` class with the following definition:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname
```

この "Person" のインスタンスをメソッド内で作成するには、以下のように書けます:

    var $o : cs.Person //object of Person class
    $o:=cs.Person.new("John";"Doe")
    // $o:{firstName: "John"; lastName: "Doe" }
    

## Managing classes

### クラス定義

4D においてユーザークラスとは、`/Project/Sources/Classes/` フォルダーに保存された専用のメソッドファイル (.4dm) によって定義されます。 ファイル名がクラス名になります。

クラスを命名する際には、次のルールに留意してください:

- A class name must be compliant with [property naming rules](Concepts/dt_object.md#object-property-identifiers). 
- 大文字と小文字が区別されること
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと 

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

- データベースフォルダー 
    + Project 
        * Sources 
            - クラス 
                + Polygon.4dm

### クラスの削除

既存のクラスを削除するには:

- ディスク上で "Classes" フォルダーより .4dm クラスファイルを削除します。
- in the 4D Explorer, select the class and click ![](assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu. 

### Using 4D interface

Class files are automatically stored at the appropriate location when created through the 4D interface, either via the **File** menu or the Explorer.

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

## クラスストア

定義されたクラスには、クラスストアよりアクセスすることができます。 Two class stores are available:

- `cs` for user class store
- `4D` for built-in class store

### cs

#### cs -> classStore

| Parameter  | 型      |    | 説明                                            |
| ---------- | ------ | -- | --------------------------------------------- |
| classStore | object | <- | User class store for the project or component |


The `cs` command returns the user class store for the current project or component. It returns all user classes [defined](#class-definition) in the opened project or component. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### 例題

You want to create a new instance of an object of `myClass`:

```4d
$instance:=cs.myClass.new()
```

### 4D

#### 4D -> classStore

| Parameter  | 型      |    | 説明             |
| ---------- | ------ | -- | -------------- |
| classStore | object | <- | 4D class store |


The `4D` command returns the class store for available built-in 4D classes. It provides access to specific APIs such as [CryptoKey](API/cryptoClass.md).

#### 例題

You want to create a new key in the `CryptoKey` class:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## Using classes in your code

### Class オブジェクト

When a class is [defined](#class-definition) in the project, it is loaded in the 4D language environment. クラスとは、それ自身が "Class" クラスのオブジェクトです。 Class オブジェクトは次のプロパティやメソッドを持ちます:

- `name` string
- `superclass` オブジェクト (任意。無ければ null)
- `new()` メソッド: Class オブジェクトをインスタンス化します

さらに、Class オブジェクトは次を参照できます:

- a [`constructor`](#class-constructor) object (optional),
- a `prototype` object, containing named [function](#function) objects (optional).

Class オブジェクトは共有オブジェクトです。したがって、異なる 4D プロセスから同時にアクセスすることができます。

### new() method

#### cs.\<ClassName>.new() -> classObject

| Parameter   | 型      |    | 説明                                    |
| ----------- | ------ | -- | ------------------------------------- |
| classObject | object | <- | New object of the \<ClassName> class |


The `new()` method creates and returns an object which is a new instance of the `<ClassName>` class on which it is called. It is automatically available on all classes from the `cs` [class store](#class-stores).

If it is called on a non-existing class, an error is returned.

#### 例題

To create a new instance of the Person class:

```4d
var $person : cs.Person //for accurate autocompletion  
$person:=cs.Person.new() //create the new instance  
//$Person contains functions of the class
```

Note that you can instantiate empty objects. たとえば、次の `Empty.4dm` クラスファイルを作成します:

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

### プロパティ検索とプロトタイプ

4D のすべてのオブジェクトは、なんらかの Class オブジェクトに内部的にリンクしています。 あるプロパティがオブジェクト内で見つからない場合、4D はそのクラスのプロトタイプオブジェクト内を検索します。見つからない場合、4D はそのクラスのスーパークラスのプロトタイプオブジェクト内を探します。これは、スーパークラスが存在しなくなるまで続きます。

すべてのオブジェクトは、継承ツリーの頂点である "Object" クラスを継承します。

```4d
//Class: Polygon
Class constructor($width : Integer; $height : Integer)
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

## クラスキーワード

クラス定義内では、専用の 4Dキーワードが使用できます:

- `Function <Name>`: オブジェクトのメンバーメソッドを定義します。 
- `Class constructor`: オブジェクトのプロパティを定義します (プロトタイプ定義)。
- `Class extends <ClassName>`: 継承を定義します。

### Function

#### シンタックス

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

クラス関数とは、当該クラスのプロトタイプオブジェクトのプロパティです。 また、クラス関数は "Function" クラスのオブジェクトでもあります。

クラス定義ファイルでは、`Function` キーワードと関数名を使用して宣言をおこないます。 The function name must be compliant with [property naming rules](Concepts/dt_object.md#object-property-identifiers).

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). たとえば:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. たとえば:

```4d
Function setFullname($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()->$fullname : Text
    $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: "*\<ClassName>.\<FunctionName>*", for example "MyClass.myMethod".

In the database code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. 次のシンタックスがサポートされています:

- `()` 演算子の使用 For example, `myObject.methodName("hello")`
- use of a "Function" class member method: 
    - `apply()`
    - `call()`

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute: - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.

#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with [property naming rules](Concepts/dt_object.md#object-property-identifiers). Multiple parameters (and types) are separated by semicolons (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

> If the type is not stated, the parameter will be defined as `Variant`.

You declare the return parameter (optional) by adding an arrow (->) and the return parameter definition after the input parameter(s) list. For example:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. For example:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```

> The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. Both syntaxes can be mixed. For example:
> 
> ```4d
Function add($x : Integer)
  var $2; $value : Integer
  var $0 : Text
  $value:=$x+$2
  $0:=String($value)
```

#### Example

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Function definition
Function getArea()->$result : Integer
    $result:=(This.height)*(This.width)
```

```4d
// In a project method
var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new()  
$area:=$rect.getArea(50;100) //5000
```

### Class constructor

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

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
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```

### Class extends \<ClassName>

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. この子クラスは、親クラスのすべての機能を継承します。

クラス継承は次のルールに沿っている必要があります:

- ユーザークラスはビルトインクラスを継承できません (例外は 4D.Object で、すべてのユーザークラスにデフォルトで継承されます)
- ユーザークラスは、別のデータベースやコンポーネントのユーザークラスを継承できません。
- ユーザークラスは、自身を継承することはできません。
- 間接的にも、自身を継承することはできません (例: "a" extends "b" かつ "b" extends "a")。 

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

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
var $text1; $text2 : Text
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
Class constructor($width : Integer; $height : Integer)
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