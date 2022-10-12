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

## 例題

オブジェクトプロパティを対象に、`Undefined` および `Null` コマンドを使用した場合の結果の例です:

```4d
C_OBJECT($vEmp)
$vEmp:=New object
$vEmp.name:="Smith"
$vEmp.children:=Null

$undefined:=Undefined($vEmp.name) // false
$null:=($vEmp.name=Null) //false

$undefined:=Undefined($vEmp.children) // false
$null:=($vEmp.children=Null) //true

$undefined:=Undefined($vEmp.parent) // true
$null:=($vEmp.parent=Null) //true
```
