---
id: null-undefined
title: Null と 未定義
---

Null および未定義は、式の値が未知のケースを扱うデータ型です。

## Null

Null is a special data type with only one possible value: **null**. この値は、値を持たない式によって返されます。

In the 4D language and for object field attributes, null values are managed through the `Null` function. この関数をつぎの式と組み合わせて使うことで、null値の設定や比較をおこなうことができます:

- object attributes
- collection elements
- variables of the object, collection, pointer, picture, or variant type.

## 未定義

未定義 (undefined) は、実際にはデータタイプではありません。 未定義は、まだ定義されていない変数を示します。 A project method can return an undefined value if, within the method, the result is assigned an undefined expression (an expression calculated with at least one undefined variable). Evaluating an object property can also produce an undefined value. Reading a property of an undefined object or value returns **undefined**.

A variant variable has **undefined** as [default value](data-types.md#default-values).

A field cannot be undefined (the `Undefined` command always returns False for a field).

Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:

- Assigning an undefined value to variables (except arrays) has the same effect as calling [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) with them:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- 未定義の値を既存のオブジェクトプロパティに代入した場合、その値は型に応じて初期化、あるいは消去されます:
  - オブジェクト、コレクション、ポインター: Null
  - ピクチャー: 空のピクチャー
  - ブール: False
  - 文字列: ""
  - 数値: 0
  - 日付:  "オブジェクトではISO日付フォーマットの代わりに日付型を使用する" 設定が有効化されている場合は !00-00-00!、それ以外の場合には ""
  - 時間: 0 (ミリ秒単位)
  - 未定義、Null: 変化なし

```4d
     var $o : Object
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- 未定義の値を存在しないオブジェクトのプロパティへと代入した場合は、何も起こりません。

- 未定義の値を引数としてプロジェクトメソッドに渡した場合、宣言された引数の型に応じて、0 あるいは "" (空の文字列) へと自動変換されます。

```4d
     var $o : Object
     mymethod($o.a) //pass an undefined parameter
     
      //In mymethod method
     #Declare ($myText : Text) //parameter type is text
      // $myText contains ""
```

- 条件式で、If あるいは Case of キーワードで未定義と評価された場合には、自動的にfalse へと変換されます:

```4d
     var $o : Object
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

:::tip

When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: `String`, `Num`, `Date`, `Time`, `Bool`. これらのコマンドは式が未定義と評価された場合に、指定された型の空の値を返します。 例:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

:::

## Null 演算子

| 演算  | シンタックス                  | 戻り値     | 式                              | 値     |
| --- | ----------------------- | ------- | ------------------------------ | ----- |
| 等しい | Null `=` Null           | Boolean | a.nullProp `=` b.nullProp      | true  |
|     | Null `=` Undefined      | Boolean | a.nullProp `=` b.undefinedProp | true  |
|     | Null `=` _scalar value_ | Boolean | a.nullProp `=` 42              | false |
| 異なる | Null `#` Null           | Boolean | a.nullProp `#` b.nullProp      | false |
|     | Null `#` Undefined      | Boolean | a.nullProp `#` b.undefinedProp | false |
|     | Null `#` _scalar value_ | Boolean | a.nullProp `#` 42              | true  |

_scalar values_ are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. それ以外のデータ型 (ポインター、ピクチャー、オブジェクト、コレクション) の場合、デフォルト値は未定義または null となります。 例:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## 未定義演算子

| 演算  | シンタックス                                             | 戻り値     | 式                                   | 値     |
| --- | -------------------------------------------------- | ------- | ----------------------------------- | ----- |
| 等しい | Undefined `=` Undefined                            | Boolean | a.undefinedProp `=` b.undefinedProp | true  |
|     | Undefined `=` Null                                 | Boolean | a.undefinedProp `=` c.nullProp      | true  |
|     | Undefined `=` _other values_                       | Boolean | a.undefinedProp `=` 42              | false |
| 異なる | Undefined `#` Undefined                            | Boolean | a.undefinedProp `#` b.undefinedProp | false |
|     | Undefined `#` Null                                 | Boolean | a.undefinedProp `#` b.nullProp      | false |
|     | Undefined `#` _other values_                       | Boolean | a.undefinedProp `#` 42              | true  |
| 大きい | Undefined `>` string, Date, Time, Boolean, number  | Boolean | a.undefinedProp `>` "abc"           | false |
| 小さい | Undefined `<` string, Date, Time, Boolean, number  | Boolean | a.undefinedProp `<` "abc"           | false |
| 以上  | Undefined `>=` string, Date, Time, Boolean, number | Boolean | a.undefinedProp `>=` "abc"          | false |
| 以下  | Undefined `<=` string, Date, Time, Boolean, number | Boolean | a.undefinedProp `<=` "abc"          | false |

_other values_ are expressions of any type with a value neither Undefined nor Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## 例題

Here are the different results of the `Undefined` command as well as the `Null` command with object properties, depending on the context:

```4d
var $vEmp : Object
var $result : Boolean
$vEmp:=New object
$vEmp.name:="Smith"

$vEmp.children:=Null
 
$result:=Undefined($vEmp.name) //False
$result:=($vEmp.name=Null) //False
 
$result:=Undefined($vEmp.children) //False
$result:=($vEmp.children=Null) //True
 
$result:=Undefined($vEmp.parent) //True
$result:=($vEmp.parent=Null) //True
```

未定義値および null値との比較結果の例:

```4d
var $result : Boolean
var $vObj : Object
var $vVar : Variant

$vObj:=New object
$vObj.null:=Null
//note that $vVar is not assigned 

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar)  //True

$result:=($vObj.undefined#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.undefined>"hello") //False
$result:=($vObj.undefined>$vVar)  //Error
$result:=($vObj.undefined>$vObj.null)  //Error
$result:=($vVar < 42) //False

```
