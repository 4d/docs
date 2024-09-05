---
id: null-undefined
title: Null と 未定義
---

Null および未定義は、式の値が未知のケースを扱うデータ型です。

## Null

Null は **null** の値のみをとることのできる特殊なデータタイプです。 この値は、値を持たない式によって返されます。 **null** 値のプロパティを読み取ろうとするとエラーが返されます。

4D ランゲージやオブジェクトフィールド属性においては、`Null` 関数を使ってnull値を扱います。 この関数をつぎの式と組み合わせて使うことで、null値の設定や比較をおこなうことができます:

- オブジェクトの属性
- コレクションの要素
- オブジェクト型、コレクション型、ポインター型、ピクチャー型、バリアント型の変数 ([デフォルト値としての Null](data-types.md#デフォルト値としての-null) も参照ください)。

## 未定義

未定義 (undefined) は、実際にはデータタイプではありません。 未定義は、まだ定義されていない変数を示します。 オブジェクトプロパティを評価した結果、未定義の値が生成されることがあります。 未定義の値のプロパティを読み取ると、**undefined** が返されます。

バリアント型変数は **undefined** が [デフォルト値](data-types.md#デフォルト値)となっています。

フィールドは、未定義にはできません (フィールドの場合、`Undefined` コマンドは常に False を返します)。

未定義の式を読み込んだ、または割り当てようとしたときに 4D は通常、エラーを生成します。ただし以下の場合には生成されません:

- 未定義の値を (配列を除く) 変数に割り当てることは、[`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/ja/page89.html) コマンドを使うのと同じ効果があります:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 // $val=10
     $val:=$o.a // $o.a は未定義 (エラーなし) なため、この値を代入すると変数が初期化されます
      // $val=0
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
     mymethod($o.a) // 未定義の引数を渡すと

      // mymethod メソッド内では
     #Declare ($myText : Text) // 引数の型はテキスト
      // $myText の中身は ""
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

4Dコード内の式に対して特定の型であることが要求される場合、その式を適切な 4Dキャストコマンド (`String`, `Num`, `Date`, `Time`, `Bool`) で囲うことで、たとえ未定義に評価されたとしても正しい型を確実に得ることができます。 これらのコマンドは式が未定義と評価された場合に、指定された型の空の値を返します。 例:

```4d
 $myString:=Lowercase(String($o.a.b)) // 未定義の場合でも文字列の値を取得し、
  // コード内でエラーが起きないようにします
```

:::

## Null 演算子

| 演算  | シンタックス                  | 戻り値 | 式                                                              | 値     |
| --- | ----------------------- | --- | -------------------------------------------------------------- | ----- |
| 等しい | Null `=` Null           | ブール | a.nullProp `=` b.nullProp      | true  |
|     | Null `=` Undefined      | ブール | a.nullProp `=` b.undefinedProp | true  |
|     | Null `=` _scalar value_ | ブール | a.nullProp `=` 42                              | false |
| 異なる | Null `#` Null           | ブール | a.nullProp `#` b.nullProp      | false |
|     | Null `#` Undefined      | ブール | a.nullProp `#` b.undefinedProp | false |
|     | Null `#` _scalar value_ | ブール | a.nullProp `#` 42                              | true  |

_スカラー値_ は、文字列、日付、時間、ブール、数値、BLOB のいずれかの型の値です。 スカラー値が宣言されている場合、その [デフォルト値](data-types.md#デフォルト値) は未定義でも null でもありません。 それ以外のデータ型 (ポインター、ピクチャー、オブジェクト、コレクション) の場合、デフォルト値は未定義または null となります。 例:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

大なり (`>`)、小なり (`<`)、以上 (`>=`)、以下 (`<=`) 演算子による比較は Null値に対応しておらず、エラーが返されます。

:::

## 未定義演算子

| 演算  | シンタックス                                             | 戻り値 | 式                                                                   | 値     |
| --- | -------------------------------------------------- | --- | ------------------------------------------------------------------- | ----- |
| 等しい | Undefined `=` Undefined                            | ブール | a.undefinedProp `=` b.undefinedProp | true  |
|     | Undefined `=` Null                                 | ブール | a.undefinedProp `=` c.nullProp      | true  |
|     | Undefined `=` _その他の値_                              | ブール | a.undefinedProp `=` 42                              | false |
| 異なる | Undefined `#` Undefined                            | ブール | a.undefinedProp `#` b.undefinedProp | false |
|     | Undefined `#` Null                                 | ブール | a.undefinedProp `#` b.nullProp      | false |
|     | Undefined `#` _その他の値_                              | ブール | a.undefinedProp `#` 42                              | true  |
| 大きい | Undefined `>` String, Date, Time, Boolean, Number  | ブール | a.undefinedProp `>` "abc"                           | false |
| 小さい | Undefined `<` String, Date, Time, Boolean, Number  | ブール | a.undefinedProp `<` "abc"                           | false |
| 以上  | Undefined `>=` String, Date, Time, Boolean, Number | ブール | a.undefinedProp `>=` "abc"                          | false |
| 以下  | Undefined `<=` String, Date, Time, Boolean, Number | ブール | a.undefinedProp `<=` "abc"                          | false |

_その他の値_ は、未定義でも Null でもない値を持つ任意の型の式です。

:::info

大なり (`>`)、小なり (`<`)、以上 (`>=`)、以下 (`<=`) 演算子による未定義値の比較は、ポインター、ピクチャー、BLOB、オブジェクト、コレクション、未定義値または Null値に対応しておらず、エラーが返されます。

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
// $vVar は代入前の状態です

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar)  //True

$result:=($vObj.undefined#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.undefined>"hello") //False
$result:=($vObj.undefined>$vVar)  //エラー
$result:=($vObj.undefined>$vObj.null)  //エラー
$result:=($vVar < 42) //False

```
