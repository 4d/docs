---
id: null-undefined
title: Null と 未定義
---

Null および未定義は、式の値が未知のケースを扱うデータ型です。

## Null

Null は **null** の値のみをとることのできる特殊なデータタイプです。 この値は、値を持たない式によって返されます。

4D ランゲージやオブジェクトフィールド属性においては、`Null` 関数を使ってnull値を扱います。 この関数をつぎの式と組み合わせて使うことで、null値の設定や比較をおこなうことができます:

- オブジェクトの属性
- コレクションの要素
- オブジェクト型、コレクション型、ポインター型、ピクチャー型、バリアント型の変数

## 未定義

未定義 (undefined) は、実際にはデータタイプではありません。 未定義は、まだ定義されていない変数を示します。 関数 (結果を返すプロジェクトメソッド) は、メソッド内で戻り値 ($0) に未定義式が代入されている場合、未定義値を返すことがあります。未定義式とは、未定義の変数を一つ以上使っている式のことです。 フィールドは、未定義にはできません (フィールドの場合、`Undefined` コマンドは常に False を返します)。 バリアント型変数は **undefined** がデフォルト値となっています。


## Null 演算子


| 演算  | シンタックス             | 戻り値     | 式                              | 値     |
| --- | ------------------ | ------- | ------------------------------ | ----- |
| 等しい | Null `=` Null      | Boolean | a.nullProp `=` b.nullProp      | true  |
|     | Null `=` Undefined | Boolean | a.nullProp `=` b.undefinedProp | true  |
|     | Null `=` *スカラー値*   | Boolean | a.nullProp `=` 42              | false |
| 異なる | Null `#` Null      | Boolean | a.nullProp `#` b.nullProp      | false |
|     | Null `#` Undefined | Boolean | a.nullProp `#` b.undefinedProp | false |
|     | Null `#` *スカラー値*   | Boolean | a.nullProp `#` 42              | true  |

*スカラー値* は、文字列、日付、時間、ブール、数値、BLOB のいずれかの型の値です。 スカラー値が宣言されている場合、その [デフォルト値](data-types.md#デフォルト値) は未定義でも null でもありません。 それ以外のデータ型 (ポインター、ピクチャー、オブジェクト、コレクション) の場合、デフォルト値は未定義または null となります。 例:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

大なり (`>`)、小なり (`<`)、以上 (`>=`)、以下 (`<=`) 演算子による比較は null値に対応しておらず、エラーが返されます。

:::

## 未定義演算子


| 演算  | シンタックス                                                | 戻り値     | 式                                   | 値     |
| --- | ----------------------------------------------------- | ------- | ----------------------------------- | ----- |
| 等しい | Undefined `=` Undefined                               | Boolean | a.undefinedProp `=` b.undefinedProp | true  |
|     | Undefined `=` Null                                    | Boolean | a.undefinedProp `=` c.nullProp      | true  |
|     | Undefined `=` *その他の値*                                 | Boolean | a.undefinedProp `=` 42              | false |
| 異なる | Undefined `#` Undefined                               | Boolean | a.undefinedProp `#` b.undefinedProp | false |
|     | Undefined `#` Null                                    | Boolean | a.undefinedProp `#` b.nullProp      | false |
|     | Undefined `#` *その他の値*                                 | Boolean | a.undefinedProp `#` 42              | true  |
| 大きい | Undefined `>` string, Date, Time, Boolean, number  | Boolean | a.undefinedProp `>` "abc"        | false |
| 小さい | Undefined `<` string, Date, Time, Boolean, number  | Boolean | a.undefinedProp `<` "abc"        | false |
| 以上  | Undefined `>=` string, Date, Time, Boolean, number | Boolean | a.undefinedProp `>=` "abc"       | false |
| 以下  | Undefined `<=` string, Date, Time, Boolean, number | Boolean | a.undefinedProp `<=` "abc"       | false |

*その他の値* は、未定義でも null でもない値を持つ任意の型の式です。

:::info

大なり (`>`)、小なり (`<`)、以上 (`>=`)、以下 (`<=`) 演算子による未定義値の比較は、ポインター、ピクチャー、BLOB、オブジェクト、コレクション、未定義値または null値に対応しておらず、エラーが返されます。

:::

## 例題

オブジェクトプロパティを対象に、`Undefined` および `Null` コマンドを使用した場合の結果の例です:

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

