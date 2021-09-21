---
id: ClassClass
title: Class
---


プロジェクトにおいてユーザークラスが [定義](Concepts/classes.md#クラス定義) されていれば、それは 4Dランゲージ環境に読み込まれます。 クラスとは、それ自身が "Class" クラスのオブジェクトであり、プロパティと関数を持ちます。



### 概要


|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;`4D.Class` オブジェクトの名称を格納します|
| [**.new**( *param* : any { *;...paramN* } ) : 4D.Class](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象クラスの新規インスタンスである `cs.className` オブジェクトを作成して返します |
| [**.superclass** : 4D.Class](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象クラスの親クラスを返します |



## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

**.name** : Text
#### 説明

`.name` プロパティは、 `4D.Class` オブジェクトの名称を格納します。 クラス名の大文字・小文字は区別されます。

このプロパティは **読み取り専用** です。 




## .new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

**.new**( *param* : any { *;...paramN* } ) : 4D.Class
| 引数    | タイプ      |    | 説明              |
| ----- | -------- |:--:| --------------- |
| param | any      | -> | コンストラクター関数に渡す引数 |
| 戻り値   | 4D.Class | <- | クラスの新規オブジェクト    |


#### 説明

`.new()` 関数は、 対象クラスの新規インスタンスである `cs.className` オブジェクトを作成して返します。 この関数は、[`cs` クラスストア](Concepts/classes.md#cs) に属する全クラスで自動的に利用可能です。

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





## .superclass

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

**.superclass** : 4D.Class
#### 説明

`.superclass` プロパティは、 対象クラスの親クラスを返します。 スーパークラスは、`4D.Class` オブジェクト、あるいは `cs.className` オブジェクトのいずれかです。 親クラスが存在しない場合は、このプロパティは **null** を返します。

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

<style> h2 { background: #d9ebff;}</style>
