---
id: classes
title: クラス
---


## 概要

4D ランゲージでは **クラス** の概念がサポートされています。 プログラミング言語では、クラスを利用することによって、属性やメソッドなどを持つ特定のオブジェクト種を定義することができます。

ユーザークラスが定義されていれば、そのクラスのオブジェクトをコード内で **インスタンス化** することができます。 各オブジェクトは、それ自身が属するクラスのインスタンスです。 クラスは、別のクラスを [継承](#class-extends-classname) することで、その [関数](#function) と、([宣言された](#property) および [計算された](#function-get-と-function-set)) プロパティを受け継ぐことができます。

> 4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

たとえば、次のように `Person` クラスを定義した場合:

```4d  
// クラス: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : text
 $fullName:=This.firstName+" "+This.lastName

Function sayHello()->$welcome : Text
 $welcome:="Hello "+This.fullName
```

この "Person" のインスタンスをメソッド内で作成するには、以下のように書けます:

```4d
var $person : cs.Person // Person クラスのオブジェクト
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() // "Hello John Doe"
```

## クラスの管理

### クラス定義

4D においてユーザークラスとは、`/Project/Sources/Classes/` フォルダーに保存された専用の [メソッド](methods.md) ファイル (.4dm) によって定義されます。 ファイル名がクラス名になります。

クラスを命名する際には、次のルールに留意してください:

- [クラス名](identifiers.md#クラス) は [プロパティ名の命名規則](identifiers.md#オブジェクトプロパティ) に準拠している必要があります。
- クラス名の大文字・小文字は区別されます。
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

Project フォルダー Project Sources Classes Polygon.4dm

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

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object <!-- END REF -->

<!-- REF #_command_.cs.Params -->
| 引数         | 型      |    | 説明                                                     |
| ---------- | ------ | -- | ------------------------------------------------------ |
| classStore | Object | <- | プロジェクトまたはコンポーネントのユーザークラスストア|<!-- END REF -->

|

`cs` コマンドは、 <!-- REF #_command_.cs.Summary -->カレントプロジェクトまたはコンポーネントのユーザークラスストアを返します<!-- END REF -->。 これには、プロジェクトまたはコンポーネントにて [定義](#クラス定義) されている、すべてのユーザークラスが含まれます。 デフォルトでは、 [ORDAクラス](ORDA/ordaClasses.md) のみ利用可能です。


#### 例題

`myClass` オブジェクトの新規インスタンスを作成するには、次のように書きます:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->
| 引数         | 型      |    | 説明                                  |
| ---------- | ------ | -- | ----------------------------------- |
| classStore | Object | <- | 4Dクラスストア|<!-- END REF -->

|

`4D` コマンドは、 <!-- REF #_command_.4D.Summary -->ビルトイン 4Dクラスのクラスストアを返します<!-- END REF -->。 [CryptoKey](API/CryptoKeyClass.md) などの専用 API へのアクセスを提供します。

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
- `Class constructor`: クラスの新規インスタンス (オブジェクト) を初期化します。
- `property`: オブジェクトのスタティックプロパティを型定義します。
- `Function get <Name>` と `Function set <Name>`: オブジェクトの計算プロパティを定義します。
- `Class extends <ClassName>`: 継承を定義します。

### `Function`

#### シンタックス

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// コード
```

:::note

関数コードにおいては、終了キーワードはありません。 There is no ending keyword for function code.

:::

クラス関数とは、当該クラスのプロパティです。 クラス関数とは、当該クラスのプロパティです。

クラス定義ファイルでは、`Function` キーワードと関数名を使用して宣言をおこないます。 関数名は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。

:::tip

アンダースコア ("_") 文字で関数名を開始すると、その関数は 4Dコードエディターの自動補完機能から除外されます。 たとえば、`MyClass` に `Function _myPrivateFunction` を宣言した場合、コードエディターにおいて `"cs.MyClass "` とタイプしても、候補として提示されません。 "</code> とタイプしても、候補として提示されません。

:::

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

クラス関数の場合には、`Current method name` コマンドは次を返します: `<ClassName>.<FunctionName>` (例: "MyClass.myFunction")。

アプリケーションのコード内では、クラス関数はオブジェクトインスタンスのメンバーメソッドとして呼び出され、[引数](#引数) を受け取ることができます。 以下のシンタックスがサポートされています:

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



#### 戻り値

関数の戻り値は、入力パラメーターリストに矢印 (`->`) を追加し、それに続けて宣言します。 例:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

コロン (`:`) 記号の後に戻り値のデータ型だけを指定し、そのうえで [`return 文`](parameters.md#return-expression) を使って戻り値を返すこともできます (これは関数の実行を終了します)。 例:

```4d
Function add($x : Variant; $y : Integer): Integer
 // なんらかのコード
 return $x+$y
```

#### 例題 1

```4d
// クラス: Rectangle
property name : Text
property height; width : Integer

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

#### 例題 2

[`return 文`](parameters.md#return-expression) を使った例です:

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class Constructor`

#### シンタックス

```4d
// クラス: MyClass
Class Constructor({$parameterName : type; ...})
// コード
```

:::note

クラスコンストラクター関数コードにおいては、終了キーワードはありません。 There is no ending keyword for function code.

:::


`Square` クラスには、スーパークラスメソッドを呼び出すメンバーメソッドを定義します:

クラスコンストラクターが定義されていると、[`new()`](API/ClassClass.md#new) 関数を呼び出したときに、当該コンストラクターが呼び出されます (コンストラクターで引数を指定している場合は `new()` 関数に渡します)。

コンストラクター関数は、1つのクラスに 1つしか存在できません (そうでない場合はエラーが返されます)。 [`Super`](#super) キーワードを使用することで、コンストラクターはスーパークラス (親クラス) のコンストラクターを呼び出すことができます。

コンストラクター内でインスタンスのプロパティを作成し、型宣言することができます (例題参照)。 また、インスタンスプロパティの値が、コンストラクターに渡される引数に依存しない場合は、[`property`](#property) キーワードを使用して定義することができます。


#### 例題

```4d
// クラス: MyClass
// MyClass のクラスコンストラクター
Class constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// プロジェクトメソッドにて
// オブジェクトをインスタンス化します
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)
// $o = {"name":"John";"age":42}
```


### `property`

#### シンタックス

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

`property` キーワードを使用して、ユーザークラス内のプロパティを宣言することができます。 クラスプロパティには、名前と型があります。

クラスプロパティを宣言することで、コードエディターの自動補完機能とエラー検出機能を強化します。

プロパティは、[`new()`](API/ClassClass.md#new) 関数が呼び出されたときに、新規作成するオブジェクトについて宣言されますが、自動で追加されるわけではありません (値が割り当てられた場合にのみ追加されます)。

プロパティ名は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。


プロパティの型として、以下のものがサポートされています:

| propertyType                             | 内容                                     |
| ---------------------------------------- | -------------------------------------- |
| `Text`                                   | テキスト値                                  |
| `Date`                                   | 日付値                                    |
| `Time`                                   | 時間値                                    |
| `Boolean`                                | ブール値                                   |
| `Integer`                                | 倍長整数値                                  |
| `Real`                                   | 実数値                                    |
| `Pointer`                                | ポインター値                                 |
| `Picture`                                | ピクチャー値                                 |
| `BLOB`                                   | スカラーBLOB値                              |
| `Collection`                             | コレクション値                                |
| `Variant`                                | バリアント値                                 |
| `Object`                                 | デフォルトクラス (4D.Object) のオブジェクト           |
| `4D.<className>`                   | 4Dクラス名のオブジェクト                          |
| `cs.<className>`                   | ユーザークラス名のオブジェクト                        |
| `cs.<namespace>.<className>` | `<namespace>` コンポーネントクラス名のオブジェクト |

:::info

`property` キーワードは、クラス関数内の `Function` および `Class Constructor` ブロック外でのみ使用できます。

:::


#### 例題

```4d
// クラス: MyClass

property name : Text
property age : Integer
```

メソッド内で:

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{}
$o.name:="John" // $o:{"name" : "John"}
$o.age:="Smith"  // シンタックスチェックでエラーに
```


### `Function get` と `Function set`

#### シンタックス

```4d
Function get <name>()->$result : type
// コード
```

```4d
Function set <name>($parameterName : type)
// コード
```

`Function get` と `Function set` は、クラスの **計算プロパティ** を定義するアクセサーです。 計算プロパティとは、計算をマスクするデータ型を持つ命名プロパティです。 計算プロパティの値にアクセスすると、4D は対応するアクセサーのコードを実行します:

- プロパティを読み取るときには `Function get` が実行されます。
- プロパティに書き込むときには `Function set` が実行されます。

プロパティがアクセスされない場合は、コードも実行されません。

計算プロパティは、メモリ上に保持する必要のないデータを処理するために設計されています。 計算プロパティは通常、永続的なプロパティに基づいています。 たとえば、クラスオブジェクトの永続的なプロパティとして、*税込価格* と *消費税率* が含まれている場合、*税抜価格* は計算プロパティで処理することができます。

クラス定義ファイルでは、計算プロパティの宣言には、`Function get` (*ゲッター*) と `Function set` (*セッター*) のキーワードを使い、その後にプロパティ名を記述します。 名称は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。

`Function get` はプロパティの型の値を返し、`Function set` はプロパティの型の引数を受け取ります。 どちらも、標準的な [関数の引数](#引数) のルールに準拠する必要があります。

両方の関数が定義されている場合、計算プロパティは **read-write** となります。 `Function get` のみが定義されている場合、計算プロパティは **read-only** です。 この場合、コードがプロパティを変更しようとするとエラーが返されます。 `Function set` のみが定義されている場合、4D はプロパティの読み取り時に *undefined* を返します。

計算プロパティの型は、*ゲッター* の `$return` の型宣言によって定義されます。 [有効なプロパティタイプ](dt_object.md) であれば、いずれも使用可能です。

> オブジェクトプロパティに *undefined* を代入すると、型を保持したまま値がクリアされます。 このためには、まず `Function get` を呼び出して値の型を取得し、次にその型の空の値で `Function set` を呼び出します。

#### 例題 1

```4d  
// クラス: Person.4dm
property firstName; lastName : Text

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
// プロジェクトメソッドにて
$fullName:=$person.fullName // Function get fullName() が呼び出されます
$person.fullName:="John Smith" // Function set fullName() が呼び出されます
```

#### 例題 2

```4d
Function get fullAddress()->$result : Object

 $result:=New object

 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country
```

### `Class extends <ClassName>`

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



### `Super`

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->
| 引数    | 型      |    | 説明                                 |
| ----- | ------ | -- | ---------------------------------- |
| param | any    | -> | 親コンストラクターに受け渡す引数                   |
| 戻り値   | Object | <- | 親オブジェクト|<!-- END REF -->

|

`Super` キーワードによって、 <!-- REF #_command_.Super.Summary -->スーパークラス (親クラス) を呼び出すことができます<!-- END REF -->。

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

// クラス: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")
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

### `This`

<!-- REF #_command_.This.Syntax -->**This** : Object<!-- END REF -->

<!-- REF #_command_.This.Params -->
| 引数  | 型      |    | 説明                                    |
| --- | ------ | -- | ------------------------------------- |
| 戻り値 | Object | <- | カレントオブジェクト|<!-- END REF -->

|

`This` キーワードは、 <!-- REF #_command_.This.Summary -->現在処理中のオブジェクトへの参照を返します<!-- END REF -->。

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

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` は引数として渡したオブジェクトのクラスを返します。

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`object` が `class`、またはその子クラスに属していれば、`OB Instance of` は `true` を返します。
