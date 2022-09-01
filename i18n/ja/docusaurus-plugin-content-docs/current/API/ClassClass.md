---
id: ClassClass
title: Class
---


プロジェクトにおいてユーザークラスが [定義](Concepts/classes.md#クラス定義) されていれば、それは 4Dランゲージ環境に読み込まれます。 クラスとは、それ自身が "Class" クラスのオブジェクトであり、プロパティと関数を持ちます。



### 概要


|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #ClassClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### 詳細

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. .

このプロパティは **読み取り専用** です。

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #ClassClass.new().Syntax -->

**.new**( *param* : any { *;...paramN* } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->
| 引数     | タイプ      |    | 詳細                                      |
| ------ | -------- |:--:| --------------------------------------- |
| param  | any      | -> | コンストラクター関数に渡す引数                         |
| Result | 4D.Class | <- | クラスの新規オブジェクト|<!-- END REF -->


|


#### 詳細

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. この関数は、[`cs` クラスストア](Concepts/classes.md#cs) に属する全クラスで自動的に利用可能です。

任意の *param* パラメーターに渡した引数は、当該クラス定義内の [Class Constructor](Concepts/classes.md#class-constructor) 関数 (あれば) が受け取ります。 コンストラクター関数においては、[`This`](Concepts/classes.md#this) は新規に作成されるオブジェクトを指します。

存在しないクラスを対象に `.new()` を呼び出した場合、エラーが返されます。

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

| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #ClassClass.superclass.Syntax -->

**.superclass** : 4D.Class<!-- END REF -->

#### 詳細

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. スーパークラスは、`4D.Class` オブジェクト、あるいは `cs.className` オブジェクトのいずれかです。 親クラスが存在しない場合は、このプロパティは **null** を返します。

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
