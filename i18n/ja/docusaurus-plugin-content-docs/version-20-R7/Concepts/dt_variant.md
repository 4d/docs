---
id: variant
title: Variant
---

バリアント型は、サポートしている型の任意のデータを受け取ることができる変数型です。 一般的には、返したり受け取ったりする値の型が未定である汎用的なコードを書くためにこの変数型が使用されます。 これは、たとえばオブジェクトの属性を扱うようなコードがそれに該当します。

バリアント型の変数は以下のデータタイプの値を格納することができます:

- BLOB
- boolean
- collection
- date
- longint
- object
- picture
- pointer
- real
- テキスト
- time
- null
- undefined

> バリアント型変数に配列を格納することはできません。

インタープリターモード、コンパイルモードのどちらにおいても、一つのバリアント型変数に異なる型のコンテンツを代入することができます。 固定されている型の変数とは異なり、バリアント型変数の中身は変数自身の型 (つまり、バリアント型) と同一ではありません。 例:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

変数が期待されるところであれば、どこでもバリアント型変数を使用することができます。ただし、変数の中身のデータ型は予期される型でなくてはなりません。 また、バリアント型変数を使う場合、その時点で変数に格納されている値のみが実質的に使われます。 例:

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v // バリアント型変数を、型未指定の変数に代入します

$t:=Type($v) // 12 (Is variant) 代入元の変数はバリアント型ですが
$t2:=Type($v2) // 2 (Is text) 代入先の変数はテキスト型です
```

バリアント型は、様々なタイプになりうる [メソッドの引数](parameters.md) ($0, $1,...) を宣言するのに使用できます。 この場合、引数の値の型の確認作業が必要になります:

```4d
#DECLARE ($param : Variant)
Case of
: (Value type($param)=Is longint)
...
: (Value type($param)=Is text)
...
End case
```

> バリアント型変数が必要ではない場合 (つまりデータタイプが分かっている場合)、型が固定された変数を使用することが推奨されます。 固定型変数の方がパフォーマンスやコードの可読性も良く、予期せぬデータタイプを見過ごしてしまうようなバグを防げるため、コンパイラーにも優しいといえます。
