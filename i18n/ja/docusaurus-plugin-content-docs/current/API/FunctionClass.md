---
id: FunctionClass
title: Function
---

**`4D.Function`** オブジェクトにはコードが格納されています。 このコードは `()` 演算子を使用して、または [`apply()`](#apply) や [`call()`](#call) 関数を使用して呼び出すことができます。

### 継承

4D は**4D.Function** クラスを継承した、以下のような複数の種類の `Function` オブジェクトを管理します:

- **ネイティブ関数**、[`collection.sort()`](./CollectionClass.md#sort) や [`file.copyTo()`](./FileClass.md#copyto) などの、様々な4D クラスのビルトイン関数。
- **ユーザー関数**、 [`Function` キーワード](Concepts/classes.md#function) を使用して[ユーザークラス](Concepts/classes.md) で作成された関数。
- **フォーミュラ関数**、 [4D.Formula](./FormulaClass.md) オブジェクト内に保管されたフォーミュラコードを実行できる関数
- **メソッド関数**、[4D.Method](./MethodClass.md) オブジェクト内にテキストとして保管されたソースコードを実行できる関数。

### Function オブジェクト内のコードを実行する

Function オブジェクトは、オブジェクトプロパティに格納することができます:

```4d
var $message : 4D.Formula
$message:=Formula(ALERT("Hello world"))
$f:={message: $message}
```

このようなプロパティは "オブジェクト関数"、つまり親オブジェクトに紐づいた関数です。 オブジェクトプロパティに保存されている関数を実行するには、プロパティ名のあとに **()** をつけます:

```4d
 $f.message() // "Hello world" を表示します
```

大カッコを使用したシンタックスもサポートされます:

```4d
 $f["message"]() // "Hello world" と表示します
```

たとえ引数を受け取らなかったとしても (後述参照)、オブジェクト関数を実行するためにはカッコ `()` をつけて呼び出す必要があるという点に注意してください。 オブジェクトプロパティのみを呼び出した場合、フォーミュラへの新しい参照が返されます (そしてフォーミュラは実行はされません): オブジェクトプロパティのみを呼び出した場合、フォーミュラへの新しい参照が返されます (そしてフォーミュラは実行はされません):

```4d
 $o:=$f.message // $o にはFunction オブジェクトが返されます
```

[`apply()`](#apply) および [`call()`](#call) 関数を使って関数を実行することもできます:

```4d
 $message.apply() // "Hello world" を表示する
```

### 概要

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>履歴</summary>

| リリース  | 内容                                     |
| ----- | -------------------------------------- |
| 21 R3 | 4D.Methods オブジェクトのサポート |
| 17 R3 | 追加                                     |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *params* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

<div class="no-index">

| 引数      | 型          |                             | 説明                              |
| ------- | ---------- | :-------------------------: | ------------------------------- |
| thisObj | Object     |              ->             | 関数内での `This` コマンドによって返されるオブジェクト |
| params  | Collection |              ->             | 関数に引数として渡される値のコレクション            |
| 戻り値     | any        | <- | 関数の実行結果の値                       |

</div>
<!-- END REF -->

#### 説明

`.apply()` 関数は、<!-- REF #FunctionClass.apply().Summary -->対象の function オブジェクトを、引数をコレクションとして渡して実行し、その結果の値を返します<!-- END REF -->。

*thisObj* には、関数内で `This` として使用されるオブジェクトへの参照を渡すことができます。 `This` を使用せず、しかし引数を渡したい場合には、ここに Null を渡します。 `This` を使用せず、しかし引数を渡したい場合には、ここに Null を渡します。

任意の *params* 引数を使用することで、フォーミュラ内で引数として使用されるコレクションを渡すこともできます:

- `4D.Formula` オブジェクトには、引数は $1...$n でフォーミュラに渡されます。
- `4D.Method` オブジェクトのようなその他の `4D.Function` オブジェクトには、引数は[宣言されたメソッド引数](../Concepts/parameters.md) 内に渡されます。

`.apply()` は [`.call()`](#call) と似ていますが、引数をコレクションとして渡す点が異なります。 これは計算された結果を渡すのに便利です。 これは計算された結果を渡すのに便利です。

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>履歴</summary>

| リリース  | 内容                                     |
| ----- | -------------------------------------- |
| 21 R3 | 4D.Methods オブジェクトのサポート |
| 17 R3 | 追加                                     |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

<div class="no-index">

| 引数      | 型      |                             | 説明                              |
| ------- | ------ | --------------------------- | ------------------------------- |
| thisObj | Object | ->                          | 関数内での `This` コマンドによって返されるオブジェクト |
| params  | any    | ->                          | 関数に引数として渡される値                   |
| 戻り値     | any    | <- | 関数の実行結果の値                       |

</div>
<!-- END REF -->

#### 説明

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the function object to which it is applied, with one or more parameter(s) passed directly, and returns the resulting value<!-- END REF -->.

*thisObj* には、関数内で `This` として使用されるオブジェクトへの参照を渡すことができます。 `This` を使用せず、しかし引数を渡したい場合には、ここに Null を渡します。

任意の *params* 引数を使用することで、フォーミュラ内で引数として使用される値を渡すこともできます:

- `4D.Formula` オブジェクトには、引数は $1...$n でフォーミュラに渡されます。
- `4D.Method` オブジェクトでは、引数は[宣言されたメソッド引数](../Concepts/parameters.md) 内に渡されます。

`.call()` は [`.apply()`](#apply) と似ていますが、引数を直接渡す点が異なります。

<!-- END REF -->

#### 例題 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // "HELLO" を返します
```

#### 例題 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // 100 を返します
```

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>履歴</summary>

| リリース  | 内容                                     |
| ----- | -------------------------------------- |
| 21 R3 | 4D.Methods オブジェクトのサポート |
| 18 R2 | 追加                                     |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### 説明

`.source` プロパティは、<!-- REF #FunctionClass.source.Summary -->対象ファンクションのテキスト型のソースコード<!-- END REF -->を格納します。

返される値は4D.Formula または4D.Method オブジェクトを作成するのに使用された元のテキストですが、再フォーマットされます。

このプロパティは **読み取り専用** です。

<!-- END REF -->

#### 例題

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```



