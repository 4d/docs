---
id: ClassClass
title: クラス
---

プロジェクトにおいてユーザークラスが [定義](Concepts/classes.md#クラス定義) されていれば、それは 4Dランゲージ環境に読み込まれます。 クラスとは、それ自身が "Class" クラスのオブジェクトであり、プロパティと関数を持ちます。

### 概要

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)<br/><!-- INCLUDE #ClassClass.isShared.Summary -->          |
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)<br/><!-- INCLUDE #ClassClass.isSingleton.Summary --> |
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)<br/><!-- INCLUDE #ClassClass.me.Summary -->                            |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<br/><!-- INCLUDE #ClassClass.name.Summary -->                      |
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #ClassClass.new().Summary -->                     |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<br/><!-- INCLUDE #ClassClass.superclass.Summary -->    |

<!-- REF ClassClass.isShared.Desc -->

## .isShared

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### 説明

`.isShared` プロパティは、<!-- REF #ClassClass.isShared.Summary -->ユーザークラスが [共有クラス](../Concepts/classes.md#共有クラス)として定義されている場合は `true` を返します<!-- END REF -->。それ以外の場合は `false` を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF ClassClass.isSingleton.Desc -->

## .isSingleton

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### 説明

`.isSingleton` プロパティは、<!-- REF #ClassClass.isSingleton.Summary -->ユーザークラスが [シングルトンクラス](../Concepts/classes.md#シングルトンクラス)として定義されている場合は `true` を返します<!-- END REF -->。それ以外の場合は `false` を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF ClassClass.me.Desc -->

## .me

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### 説明

`.me` プロパティは、<!-- REF #ClassClass.me.Summary -->`cs.className` シングルトンクラスのシングルトンインスタンスを返します<!-- END REF -->。 シングルトンクラスが前もってインスタンス化されていない場合、このプロパティは引数なしでクラスコンストラクターを呼び出し、インスタンスを作成します。 そうでない場合は、既存のシングルトンインスタンスを返します。

`cs.className` が [シングルトンクラス](../Concepts/classes.md#シングルトンクラス) でない場合、`.me` はデフォルトで **未定義** です。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF ClassClass.name.Desc -->

## .name

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは、<!-- REF #ClassClass.name.Summary -->`4D.Class` オブジェクトの名称を格納します<!-- END REF -->。 クラス名の大文字・小文字は区別されます。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF ClassClass.new().Desc -->

## .new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->

| 引数    | 型                        |     | 説明              |
| ----- | ------------------------ | :-: | --------------- |
| param | any                      |  -> | コンストラクター関数に渡す引数 |
| 戻り値   | 4D.Class |  <- | クラスの新規オブジェクト    |

<!-- END REF -->

#### 説明

`.new()` 関数は、<!-- REF #ClassClass.new().Summary -->対象クラスの新規インスタンスである `cs.className` オブジェクトを作成して返します<!-- END REF -->。 この関数は、[`cs` クラスストア](Concepts/classes.md#cs) に属する全クラスで自動的に利用可能です。

任意の *param* パラメーターに渡した引数は、当該 *className*クラス定義内の [Class Constructor](Concepts/classes.md#class-constructor) 関数 (あれば) が受け取ります。 コンストラクター関数においては、[`This`](Concepts/classes.md#this) は新規に作成されるオブジェクトを指します。

:::note 注記

- すでにインスタンス化されている [シングルトンクラス](../Concepts/classes.md#シングルトンクラス) に対して `.new()` を呼び出すと、新しいインスタンスではなくシングルトンインスタンスが返されます。
- 存在しないクラスを対象に `.new()` を呼び出した場合、エラーが返されます。

:::

#### 例題

Person クラスの新規インスタンスを作成するには、次のように書きます:

```4d
var $person : cs.Person 
$person:=cs.Person.new() // 新規インスタンスの作成  
//$person はクラス関数を格納しています
```

パラメーターを使って、Personクラスの新規インスタンスを作成するには、次のように書きます:

```4d
// クラス: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
	This.firstName:=$firstname
	This.lastName:=$lastname
	This.age:=$age
```

```4d
// メソッド内の使用例
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
// $person.firstName = "John"
// $person.lastName = "Doe"
// $person.age = 40
```

<!-- END REF -->

<!-- REF ClassClass.superclass.Desc -->

## .superclass

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### 説明

`.superclass` プロパティは、<!-- REF #ClassClass.superclass.Summary -->対象クラスの親クラスを返します<!-- END REF -->。 スーパークラスは、`4D.Class` オブジェクト、あるいは `cs.className` オブジェクトのいずれかです。 親クラスが存在しない場合は、このプロパティは **null** を返します。

ユーザークラスのスーパークラスは、[`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) キーワードを使ってクラス内で定義されます。

このプロパティは **読み取り専用** です。

#### 例題

```4d
$sup:=4D.File.superclass // Document
$sup:=4D.Document.superclass // Object
$sup:=4D.Object.superclass // null

// `Class extends File` を使って
// MyFile クラスを作成した場合  
$sup:=cs.MyFile.superclass // File

```

**参照:** [Super](Concepts/classes.md#super)

<!-- END REF -->
