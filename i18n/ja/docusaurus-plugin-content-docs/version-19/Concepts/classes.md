---
id: classes
title: クラス
---


## 概要

4D ランゲージでは **クラス** の概念がサポートされています。 プログラミング言語では、クラスを利用することによって、属性やメソッドなどを持つ特定のオブジェクト種を定義することができます。

ユーザークラスが定義されていれば、そのクラスのオブジェクトをコード内で **インスタンス化** することができます。 各オブジェクトは、それ自身が属するクラスのインスタンスです。 クラスは、別のクラスを [継承](#class-extends-classname) することで、その [関数](#function) を受け継ぐことができます。

> 4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

たとえば、次のように `Person` クラスを定義した場合:

```4d  
// クラス: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function sayHello()->$welcome : Text
 $welcome:="Hello "+This.firstName+" "+This.lastName
```

この "Person" のインスタンスをメソッド内で作成するには、以下のように書けます:

```
var $person : cs.Person // Person クラスのオブジェクト
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```

## クラスの管理

### クラス定義

4D においてユーザークラスとは、`/Project/Sources/Classes/` フォルダーに保存された専用のメソッドファイル (.4dm) によって定義されます。 ファイル名がクラス名になります。

クラスを命名する際には、次のルールに留意してください:

- [クラス名](identifiers.md#クラス) は [プロパティ名の命名規則](identifiers.md#オブジェクトプロパティ) に準拠している必要があります。
- クラス名の大文字・小文字は区別されます。
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

- Project フォルダー
  - Project
    - Sources
      - Classes
        - Polygon.4dm

### クラスの削除

既存のクラスを削除するには:

- ディスク上で "Classes" フォルダーより .4dm クラスファイルを削除します。
- 4D エクスプローラーでは、クラスを選択した状態で ![](../assets/en/Users/MinussNew.png) をクリックするか、コンテキストメニューより **移動 ＞ ゴミ箱** を選択します。

### 4D インターフェースの使用

**ファイル** メニューまたはエクスプローラーなど、4D インターフェースを介してクラスを作成した場合には、クラスファイルは自動的に適切な場所に保存されます。

#### ファイルメニューとツールバー

4D Developer の **ファイル** メニューまたはツールバーより **新規 ＞ クラス...** を選択することで、開いているプロジェクトにクラスファイルを新規作成することができます。

**Ctrl+Shift+Alt+k** ショートカットも使用できます。

#### エクスプローラー

エクスプローラーの **メソッド** ページにおいて、クラスは **クラス** カテゴリに分類されています。

クラスを新規作成するには次の方法があります:

- **クラス** カテゴリを選択し、![](../assets/en/Users/PlussNew.png) ボタンをクリックします。
- エクスプローラーウィンドウの下部にあるアクションメニュー、またはクラスグループのコンテキストメニューから **新規クラス...** を選択します。 ![](../assets/en/Concepts/newClass.png)
- エクスプローラーのホームページのコンテキストメニューより **新規 > クラス...** を選択します。

#### クラスのコードサポート

各種 4Dウィンドウ (コードエディター、コンパイラー、デバッガー、ランタイムエクスプローラー) において、クラスコードは "特殊なプロジェクトメソッド" のように扱われます:

- コードエディター:
  - クラスは実行できません
  - クラスメソッドはコードのブロックです
  - オブジェクトメンバーに対する **定義に移動** 操作はクラスの Function 宣言を探します。 例: "$o.f()" の場合、"Function f" を見つけます。
  - クラスのメソッド宣言に対する **参照箇所を検索** 操作は、そのメソッドがオブジェクトメンバーとして使われている箇所を探します。 例: "Function f" の場合 "$o.f()" を見つけます。
- ランタイムエクスプローラーおよびデバッガーにおいて、クラスメソッドは `<ClassName>` コンストラクターまたは `<ClassName>.<FunctionName>` 形式で表示されます。

## クラスストア

定義されたクラスには、クラスストアよりアクセスすることができます。 クラスストアには次の二つが存在します:

- `cs` - ユーザークラスストア
- `4D` - ビルトインクラスストア

### cs

#### cs -> classStore

| 引数         | 型      |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| classStore | object | <- | プロジェクトまたはコンポーネントのユーザークラスストア |

`cs` コマンドは、カレントプロジェクトまたはコンポーネントのユーザークラスストアを返します。 これには、プロジェクトまたはコンポーネントにて [定義](#クラス定義) されている、すべてのユーザークラスが含まれます。 デフォルトでは、 [ORDAクラス](ORDA/ordaClasses.md) のみ利用可能です。

#### 例題

`myClass` オブジェクトの新規インスタンスを作成するには、次のように書きます:

```4d
$instance:=cs.myClass.new()
```

### 4D

#### 4D -> classStore

| 引数         | 型      |    | 説明       |
| ---------- | ------ | -- | -------- |
| classStore | object | <- | 4Dクラスストア |

`4D` コマンドは、ビルトイン 4Dクラスのクラスストアを返します。 [CryptoKey](API/CryptoKeyClass.md) などの専用 API へのアクセスを提供します。

#### 例題

`CryptoKey` クラスに新規キーを作成するには、次のように書きます:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## Class オブジェクト

プロジェクトにおいてクラスが [定義](#クラス定義) されていれば、それは 4Dランゲージ環境に読み込まれます。 クラスとは、それ自身が ["Class" クラス](API/ClassClass.md) のオブジェクトです。 Class オブジェクトは次のプロパティや関数を持ちます:

- [`name`](API/ClassClass.md#name) 文字列
- [`superclass`](API/ClassClass.md#superclass) オブジェクト (無い場合は null)
- [`new()`](API/ClassClass.md#new) 関数 (Class オブジェクトをインスタンス化します)

また、Class オブジェクトは [`constructor`](#class-constructor) オブジェクトを参照することも可能です (任意)。

Class オブジェクトは [共有オブジェクト](shared.md) です。 したがって、異なる 4Dプロセスから同時にアクセスすることができます。

### 継承

クラス宣言において [Class extends](classes.md#class-extends-classname) キーワードを使うと、そのクラスは親クラス (つまり [`スーパークラス`](API/ClassClass.md#superclass)) を継承します。

関数やプロパティがクラス内で見つからない場合、4D はそのクラスの [`スーパークラス`](API/ClassClass.md#superclass) 内を検索します。 見つからない場合、4D はさらに、そのスーパークラスのスーパークラス内を探します。 これは、スーパークラスが存在しなくなるまで続きます (すべてのオブジェクトは "Object" スーパークラスを継承しています)。

## クラスキーワード

クラス定義内では、専用の 4Dキーワードが使用できます:

- `Function <Name>`: オブジェクトのクラス関数を定義します。
- `Class constructor`: オブジェクトのプロパティを定義します。
- `Class extends <ClassName>`: 継承を定義します。

### Function

#### シンタックス

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// コード
```

:::note

関数コードにおいては、終了キーワードはありません。 クラスコンストラクター関数コードにおいては、終了キーワードはありません。

:::


クラス関数とは、当該クラスのプロパティです。 クラス関数は [4D.Function](API/FunctionClass.md#4dfunction-オブジェクトについて) クラスのオブジェクトです。

クラス定義ファイルでは、`Function` キーワードと関数名を使用して宣言をおこないます。 関数名は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。

> **Tip:** アンダースコア ("_") 文字で関数名を開始すると、その関数は 4Dコードエディターの自動補完機能から除外されます。 たとえば、`MyClass` に `Function _myPrivateFunction` を宣言した場合、コードエディターにおいて `"cs.MyClass "` とタイプしても、候補として提示されません。 "</code> とタイプしても、候補として提示されません。

関数名のすぐ後に、名前とデータ型を指定して [引数](#引数) を宣言します (戻り値の宣言も可)。 例:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

クラスメソッド内でオブジェクトインスタンスを参照するには `This` コマンドを使います。 例:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

クラス関数の場合には、`Current method name` コマンドは次を返します: `<ClassName>.<FunctionName>` (例: "MyClass.myMethod")。

アプリケーションのコード内では、クラス関数はオブジェクトインスタンスのメンバーメソッドとして呼び出され、[引数](#クラス関数の引数) を受け取ることができます。 以下のシンタックスがサポートされています:

- `()` 演算子の使用。 例: `myObject.methodName("hello")`
- "4D.Function" クラスメンバーメソッドの使用:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

> **スレッドセーフに関する警告:** クラス関数がスレッドセーフではないのに、"プリエンプティブプロセスで実行可能" なメソッドから呼び出された場合:
> 
> - 普通のメソッドの場合とは異なり、コンパイラーはエラーを生成しません。
> - ランタイムにおいてのみ、4D はエラーを生成します。

#### 引数

関数の引数は、引数名とデータ型をコロンで区切って宣言します。 パラメーター名は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。 複数のパラメーター (およびその型) を宣言する場合は、それらをセミコロン (;) で区切ります。

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> パラメーターの型が宣言されていない場合には、`バリアント` 型として定義されます。

関数の戻り値を宣言するには (任意)、入力パラメーターリストに矢印 (`->`) と戻り値の定義を追加します。 例:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

オブジェクトのメンバーメソッドとしてフォーミュラが呼び出された場合、`This` はメソッドの呼び出し元であるオブジェクトを指します。 例:

```4d
Function add($x : Variant; $y : Integer): Integer
 $0:=$x+$y
```

関数内の引数宣言に使用される [従来の 4Dシンタックス](parameters.md#順番引数) を、クラス関数の引数宣言に使うこともできます。 両方のシンタックスは併用することができます。 例:

```4d
Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
```

#### 例題

```4d
// クラス: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// 関数定義
Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
```

```4d
// プロジェクトメソッドにて

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

### Class constructor

#### シンタックス

```4d
// クラス: MyClass
Class Constructor({$parameterName : type; ...})
// コード
```

:::note

クラスコンストラクター関数コードにおいては、終了キーワードはありません。 4D ランゲージは、次の`Function` キーワードまたはクラスファイルの終了を持って、自動的に関数のコードの終わりを検知します。 クラスコンストラクター関数コードにおいては、終了キーワードはありません。

:::


クラスコンストラクター関数を使って、ユーザークラスを定義することができます。 このコンストラクターは [引数](#引数) を受け取ることができます。

クラスコンストラクターが定義されていると、[`new()`](API/ClassClass.md#new) 関数を呼び出したときに、当該コンストラクターが呼び出されます (コンストラクターで引数を指定している場合は `new()` 関数に渡します)。

クラスコンストラクター関数の場合には、`Current method name` コマンドは次を返します: `<ClassName>:constructor` (例: "MyClass:constructor")。

#### 例題

```4d
// クラス: MyClass
// MyClass のクラスコンストラクター
Class Constructor ($name : Text)
 This.name:=$name
```

```4d
// プロジェクトメソッドにて
// オブジェクトをインスタンス化します
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```

### Class extends `<ClassName>`

#### シンタックス

```4d
// クラス: ChildClass
Class extends <ParentClass>
```

クラス宣言において `Class extends` キーワードを使うと、別のユーザークラスの子ユーザークラスを作成することができます。 この子クラスは、親クラスのすべての機能を継承します。

クラス継承は次のルールに沿っている必要があります:

- ユーザークラスはビルトインクラスを継承できません (例外は 4D.Object および [ORDAクラス](../ORDA/ordaClasses.md) で、すべてのユーザークラスにデフォルトで継承されます)。
- ユーザークラスは、別のプロジェクトやコンポーネントのユーザークラスを継承できません。
- ユーザークラスは、自身を継承することはできません。
- 間接的にも、自身を継承することはできません (例: "a" extends "b" かつ "b" extends "a")。

コードエディターやインタープリターは、これらのルールが破られていても検知することはできません。 コンパイラーおよび "シンタックスチェック" のみがエラーを生成します。

派生クラスは、[`Super`](#super) コマンドを使って親クラスのコンストラクターを呼び出すことができます。

#### 例題

`Polygon` クラスを継承した `Square` クラスを作成します。

```4d
// クラス: Square

// パス: Classes/Square.4dm 

Class extends Polygon


Class constructor ($side : Integer)

 // 親クラスのコンストラクターを呼び出します
 // 長方形の高さ・幅パラメーターに正方形の一辺の長さを引数として渡します
 Super($side;$side)
 // 派生クラスにおいては、'This' を使用するより先に
 // Super を呼び出しておく必要があります
 This.name:="Square"

 Function getArea()
  C_LONGINT($0)
  $0:=This.height*This.width
```

### Super

#### シンタックス

```4d
Super {( param{;...;paramN} )} {-> Object} 
```

| 引数    | 型      |    | 説明               |
| ----- | ------ | -- | ---------------- |
| param | mixed  | -> | 親コンストラクターに受け渡す引数 |
| 戻り値   | object | <- | 親オブジェクト          |

`Super` キーワードによってスーパークラス (親クラス) を呼び出すことができます。

`Super` は次の 2つの目的のために使います:

1. [コンストラクターコード](#class-constructor) 内において、`Super` はスーパークラスのコンストラクターを呼び出すコマンドです。 コンストラクター内で使用する際には、`Super` コマンドは単独で使用され、また `This` キーワードよりも先に使用される必要があります。

- 継承ツリーにおいて、すべてのクラスコンストラクターが正しく呼び出されていない場合には、エラー -10748 が生成されます。 呼び出しが有効であることを確認するのは、開発者の役目となります。
- スーパークラスがコンストラクトされるより先に、`This` コマンドを使った場合には、エラー -10743 が生成されます。
- オブジェクトのスコープ外で `Super` を呼び出した場合、または、スーパークラスコンストラクターがすでに呼び出されたオブジェクトを対象に呼び出した場合には、エラー -10746 が生成されます。

```4d
// myClass コンストラクター
var $text1; $text2 : Text
Super($text1) // テキスト型引数をスーパークラスコンストラクターに渡します
This.param:=$text2 // 2番目の引数を使用します
```

2. [クラスメンバー関数](#function) 内において、`Super` はスーパークラスのプロトタイプを指し、スーパークラス階層のメンバーメソッドの呼び出しを可能にします。

```4d
Super.doSomething(42) // スーパークラスにて宣言されている
// "doSomething" メンバーメソッドを呼び出します
```

#### 例題 1

クラスコンストレクター内で `Super` を使う例です。 `Rectangle` と `Square` クラス の共通要素がコンストラクター内で重複しないよう、このコマンドを呼び出します。

```4d
// クラス: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// 関数定義
Function getArea()
 var $0 : Integer
 $0:=(This.height)*(This.width)
```

```4d
// クラス: Square

Class extends Rectangle

Class constructor ($side : Integer)

 // 親クラスのコンストラクターを呼び出します
 // 長方形の高さ・幅パラメーターに正方形の一辺の長さを引数として渡します
 Super($side;$side)
 // 派生クラスにおいては、'This' を使用するより先に
 // Super を呼び出しておく必要があります
 This.name:="Square"

Function getArea()
 C_LONGINT($0)
 $0:=This.height*This.width
```

#### 例題 2

クラスメンバーメソッド内で `Super` を使う例です。 メンバーメソッドを持つ `Rectangle` クラスを作成します:

```4d
// クラス: Rectangle

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

`Square` クラスには、スーパークラスメソッドを呼び出すメンバーメソッドを定義します:

```4d
// クラス: Square

Class extends Rectangle

Function description()
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

この場合、プロジェクトメソッド内には次のように書けます:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() // "I have 4 sides which are all equal"
```

### This

#### シンタックス

```4d
This -> Object
```

| 引数  | 型      |    | 説明         |
| --- | ------ | -- | ---------- |
| 戻り値 | object | <- | カレントオブジェクト |

`This` キーワードは、現在処理中のオブジェクトへの参照を返します。 `This` は、4Dにおいて [様々なコンテキスト](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.ja.html) で使用することができます。

`This` の値は、呼ばれ方によって決まります。 `This` の値は実行時に代入により設定することはできません。また、呼び出されるたびに違う値となりえます。

オブジェクトのメンバーメソッドとしてフォーミュラが呼び出された場合、`This` はメソッドの呼び出し元であるオブジェクトを指します。 例:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

[クラスコンストラクター](#class-constructor) 関数が [`new()`](API/ClassClass.md#new) 関数により使用された場合、その内部の `This` はインスタンス化される新規オブジェクトを指します。

```4d
// クラス: ob

Class Constructor  

 // This のプロパティを
 // 代入によって作成します
 This.a:=42 
```

```4d
// 4Dメソッドにて 
$o:=cs.ob.new()
$val:=$o.a //42
```

> コンストラクター内で [Super](#super) キーワードを使ってスーパークラスのコンストラクターを呼び出す場合、必ず `This` より先にスーパークラスのコンストラクターを呼ぶ必要があることに留意してください。 こちらの [例題](#例題-1) を参照ください。

基本的に、`This` はメソッドの呼び出し元のオブジェクトを指します。

```4d
// クラス: ob

Function f()
 $0:=This.a+This.b
```

この場合、プロジェクトメソッド内には次のように書けます:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

この例では、変数 $o に代入されたオブジェクトは *f* プロパティを持たないため、これをクラスより継承します。 *f* は $o のメソッドとして呼び出されるため、メソッド内の `This` は $o を指します。

## クラスコマンド

4Dランゲージには、クラス機能を扱う複数のコマンドがあります。

### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` は引数として渡したオブジェクトのクラスを返します。

### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`object` が `class`、またはその子クラスに属していれば、`OB Instance of` は `true` を返します。
