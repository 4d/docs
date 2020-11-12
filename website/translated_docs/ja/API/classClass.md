---
id: classClass
title: Class
---

<style> h2 { background: #d9ebff;}</style>

When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class, which has properties and a function.



### Summary


|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #classClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.name.Summary -->|
| [<!-- INCLUDE #classClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.new().Summary --> |
| [<!-- INCLUDE #classClass.superclass.Syntax -->](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.superclass.Summary --> |



<!-- REF classClass.name.Desc -->
## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #classClass.name.Syntax -->
**.name** : Text<!-- END REF -->

#### 説明

The `.name` property <!-- REF #classClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. 大文字と小文字が区別されること

This property is **read-only**. 

<!-- END REF -->



<!-- REF classClass.new().Desc -->
## .new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

<!-- REF #classClass.new().Syntax -->
**.new()** : 4D.Class<!-- END REF -->

<!-- REF #classClass.new().Params -->
| 参照  | タイプ      |    | 説明                      |
| --- | -------- |:--:| ----------------------- |
| 戻り値 | 4D.Class | <- | New object of the class |
<!-- END REF -->


#### 説明

The `.new()` function <!-- REF #classClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs).

存在しないクラスを対象に呼び出された場合、エラーが返されます。


#### 例題

Person クラスの新規インスタンスを作成するには、次のように書きます:

```4d
var $person : cs.Person  
$person:=cs.Person.new() //create the new instance  
//$Person contains functions of the class
```

<!-- END REF -->



<!-- REF classClass.superclass.Desc -->
## .superclass

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #classClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### 説明

The `.superclass` property <!-- REF #classClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

This property is **read-only**.

#### 例題

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs.MyFile.superclass //File 

```



**See also:** [Super](Concepts/classes.md#super)
<!-- END REF -->
