---
id: classes
title: クラス
---


## 概要

4D ランゲージでは **クラス** の概念がサポートされています。 プログラミング言語では、クラスを利用することによって、属性や関数などを持つ特定のオブジェクト種を定義することができます。

クラスが定義されていれば、そのクラスのオブジェクトをコード内で **インスタンス化** することができます。 各オブジェクトは、それ自身が属するクラスのインスタンスです。 クラスは、別のクラスを継承することで、それらの機能を受け継ぐことができます。

4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

### Class オブジェクト

クラスとは、それ自身が "Class" クラスのオブジェクトです。 Class オブジェクトは次のプロパティやメソッドを持ちます:

- `name`: ECMAScript に準拠している必要があります
- `superclass` オブジェクト (任意。無ければ null)
- `new()` メソッド: Class オブジェクトをインスタンス化します

さらに、Class オブジェクトは次を参照できます:

- `constructor` オブジェクト (任意)
- `prototype` オブジェクト: 名前付き関数オブジェクトを格納します (任意)

Class オブジェクトは共有オブジェクトです。したがって、異なる 4D プロセスから同時にアクセスすることができます。

### プロパティ検索とプロトタイプ

4D のすべてのオブジェクトは、なんらかのクラスオブジェクトに内部的にリンクしています。 オブジェクト内にあるプロパティが見つからない場合、4D はそのクラスのプロトタイプオブジェクト内を検索します。見つからない場合、4D はそのクラスのスーパークラスのプロトタイプオブジェクト内を探します。これは、スーパークラスが存在しなくなるまで続きます。

すべてのオブジェクトは、継承ツリーの頂点である "Object" クラスを継承します。

```4d
  // クラス: Polygon
Class constructor
C_LONGINT($1;$2)
This.area:=$1*$2

 //C_OBJECT($poly)
C_BOOLEAN($instance)
$poly:=cs.Polygon.new(4;3)

$instance:=OB Instance of($poly;cs.Polygon)  
 // true
$instance:=OB Instance of($poly;4D.Object)
 // true 
```

オブジェクトのプロパティを列挙する際には、当該クラスのプロトタイプは列挙されません。 したがって、`For each` ステートメントや `JSON Stringify` コマンドは、クラスプロトタイプオブジェクトのプロパティを返しません。 クラスのプロトタイプオブジェクトプロパティは、内部的な隠れプロパティです。

### クラス定義

ユーザークラスファイルは、オブジェクトのひな形を定義します。このオブジェクトは `new()` クラスメンバーメソッドを呼び出すことでインスタンス化することができます。 クラスファイル内では、専用の [クラスキーワード](#クラスキーワード) や [クラスコマンド](#クラスコマンド) を使用します。

たとえば:

```4d
// クラス: Person.4dm
Class constructor
  C_TEXT($1) // 名前
  C_TEXT($2) // 名字
  This.firstName:=$1
  This.lastName:=$2
```

メソッド内で "Person" のインスタンスを作成します:

    C_OBJECT($o)
    $o:=cs.Person.new("John";"Doe")  
    // $o: {firstName: "John";lastName: "Doe" }
    

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

提供されているクラスはクラスストアよりアクセスすることができます。 クラスストアには次のものが存在します:

- ビルトイン 4Dクラス専用のクラスストア: `4D` コマンドによって返されます。
- 開かれている各データベースおよびコンポーネントのクラスストア: `cs` コマンドによって返されます。 "ユーザークラス" ともいいます。

たとえば、`cs.myClass.new()` ステートメント (`cs` は *クラスストア (classstore)* を意味します) と使って myClass のオブジェクトインスタンスを新規作成できます。

## ユーザークラス

### クラスファイル

4D においてユーザークラスとは、`/Project/Sources/Classes/` フォルダーに保存された専用のメソッドファイル (.4dm) によって定義されます。 ファイル名がクラス名になります。

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

- データベースフォルダー 
    + Project 
        * Sources 
            - クラス 
                + Polygon.4dm

### クラス名

クラスを命名する際には、次のルールに留意してください:

- ECMAScript に準拠した名前であること 
- 大文字と小文字が区別されること
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと 

### 4D 開発インターフェース

**ファイル** メニューまたはエクスプローラーなど、4D 開発インターフェースを介してクラスを作成した場合には、クラスファイルは自動的に適切な場所に保存されます。

#### ファイルメニューとツールバー

4D 開発の **ファイル** メニューまたはツールバーより **新規 > クラス...** を選択することで、開いているプロジェクトのクラスファイルを新規作成することができます。

**Ctrl+Shift+Alt+k** ショートカットも使用できます。

#### エクスプローラー

エクスプローラーの **メソッド** ページにおいて、クラスは **クラス** カテゴリに分類されています。

クラスを新規作成するには次の方法があります:

- **クラス** カテゴリを選択し、![](assets/en/Users/PlussNew.png) ボタンをクリックします。
- エクスプローラーウィンドウの下部にあるアクションメニュー、またはクラスグループのコンテキストメニューから **新規クラス...** を選択します。 ![](assets/en/Concepts/newClass.png)
- エクスプローラーのホームページのコンテキストメニューより **新規 > クラス...** を選択します。 

#### クラスコードサポート

各種 4D 開発ウィンドウ (コードエディター、コンパイラー、デバッガー、ランタイムエクスプローラー) において、クラスコードは "特殊なプロジェクトメソッド" のように扱われます:

- コードエディター: 
    - クラスは実行できません
    - クラス関数はコードのブロックです 
    - オブジェクトメンバーに対する **定義に移動** 操作はクラス関数宣言を探します。例: "$o.f()" の場合、"Function f" を見つけます。
    - クラス関数宣言に対する **参照箇所を検索** 操作は、その関数がオブジェクトメンバーとして使われている箇所を探します。例: "Function f" の場合 "$o.f()" を見つけます。
- ランタイムエクスプローラーおよびデバッガーにおいて、クラス関数は \<ClassName> コンストラクターまたは \<ClassName>.\<FunctionName> 形式で表示されます。

### Deleting a class

To delete an existing class, you can:

- on your disk, remove the .4dm class file from the "Classes" folder,
- in the Explorer, select the class and click ![](assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu. 

## Class keywords

Specific 4D keywords can be used in class definitions:

- `Function <Name>` to define member methods of the objects. 
- `Class constructor` to define the properties of the objects (i.e. the prototype).
- `Class extends <ClassName>` to define inheritance.

### Class Function

#### シンタックス

```js
Function <name>
// code
```

Class functions are properties of the prototype object of the owner class. They are objects of the "Function" class.

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be ECMAScript compliant.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features. For example, if you declare `Function _myPrivateFunction` in MyClass, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

Within a class function, the `This` is used as the object instance. たとえば:

```4d
Function getFullName
  C_TEXT($0)
  $0:=This.firstName+" "+Uppercase(This.lastName)

Function getAge
  C_LONGINT($0)
  $0:=(Current date-This.birthdate)/365.25
```

For a class function, the `Current method name` command returns: "*\<ClassName>.\<FunctionName>*", for example "MyClass.myMethod".

In the database code, class functions are called as member methods of the object instance and can receive parameters if any. The following syntaxes are supported:

- use of the `()` operator. For example `myObject.methodName("hello")`.
- use of a "Function" class member method 
    - `apply()`
    - `call()`

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:  
> - the compiler does not generate any error (which is different compared to regular methods),

<

p>

> - an error is thrown by 4D only at runtime.

#### Example

```4d
// Class: Rectangle
Class Constructor
    C_LONGINT($1;$2)
    This.name:="Rectangle"
    This.height:=$1
    This.width:=$2

// Function definition
Function getArea
    C_LONGINT($0)
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

A class constructor function, which can accept parameters, can be used to define a user class.

In that case, when you call the `new()` class member method, the class constructor is called with the parameters optionnally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>.constructor*", for example "MyClass.constructor".

#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor
C_TEXT($1)
This.name:=$1
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

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another database or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a"). 

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax' will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```4d
  //Class: Square
  //path: Classes/Square.4dm 

 Class extends Polygon

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Polygon's width and height
Super($1;$1)
  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"

Function getArea
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
    - If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid. 
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated. 
    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
  // inside myClass constructor
 C_TEXT($1;$2)
 Super($1) //calls superclass constructor with a text param
 This.param:=$2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
 Super.doSomething(42) //calls "doSomething" function  
    //declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
  //Class: Rectangle

 Class constructor
 C_LONGINT($1;$2)
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2

 Function sayName
 ALERT("Hi, I am a "+This.name+".")

 Function getArea
 C_LONGINT($0)
 $0:=This.height*This.width
```

```4d
  //Class: Square

 Class extends Rectangle

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
 Super($1;$1)

  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
  //Class: Rectangle

 Function nbSides
 C_TEXT($0)
 $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
  //Class: Square

 Class extends Rectangle

 Function description
 C_TEXT($0)
 $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
 C_OBJECT($square)
 C_TEXT($message)
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |


The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. For example:

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

 Function f
    $0:=This.a+This.b
```

Then you can write in a project method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o.

## Class commands

Several commands of the 4D language allows you to handle class features.

### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.

### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.