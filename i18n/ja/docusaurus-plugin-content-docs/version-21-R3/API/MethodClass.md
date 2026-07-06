---
id: MethodClass
title: メソッド
---

`4D.Method` オブジェクトには、ソーステキストから作成され、実行可能なコードの一部分が格納されています。 `4D.Method` オブジェクトには、ソーステキストから作成され、実行可能なコードの一部分が格納されています。 `4D.Method` のメソッドは、プロジェクトの実行モード(インタープリター/コンパイル)に関わらず、常にインタープリターモードで実行されます。 この機能は特に、ダイナミックなコードスニペットのオン・ザ・フライな実行をサポートするように設計されてます。 この機能は特に、ダイナミックなコードスニペットのオン・ザ・フライな実行をサポートするように設計されてます。

`4D.Method` オブジェクトは、`4D.Method.new()` 関数で作成されます。

`4D.Method` オブジェクトは、 [`4D.Function`](./FunctionClass.md) クラスを継承します。 そのため、メソッドオブジェクトを実行するためには、以下のような方法があります: そのため、メソッドオブジェクトを実行するためには、以下のような方法があります:

- オブジェクトプロパティに`4D.Method` オブジェクトを入れ、プロパティ名の後に `()` 演算子を使用する
- または、 [`call()`](#call) あるいは [`apply()`](#apply) 関数を使用して `4D.Method` オブジェクトを呼び出す。

[Function オブジェクト内のコードを実行する](../API/FunctionClass.md#executing-code-in-function-objects) の段落の例題を参照してください。

:::tip 関連したblog 記事

[Execute Code from Text with 4D.Method](https://blog.4d.com/execute-code-from-text-with-4d-method)

:::

:::info

このクラスは、バイナリーで[**ストリーム可能**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) です。

:::

### 例題

#### 基本的なダイナミックメソッド作成

```4d
var $myCode : Text
$myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer"+Char(13)+"return $number1*$number2"

var $o:={}
$o.multiplication:=4D.Method.new($myCode) // オブジェクトをプロパティにいれる
var $result2:=$o.multiplication(2;3) // 6

var $result3:=4D.Method.new($myCode).call(Null; 10; 5) // 50
```

#### メソッドコード内で `This` を使用する

```4d
var $myCode:="#DECLARE ($str1:text):text"+Char(13)+"return $str1+This.name"

var $o:={name: "John"}
$o.concat:=4D.Method.new($myCode)

var $result : Text
$result:=$o.concat("Hello ") // $result は "Hello John"
```

#### テキストファイルをシンタックスチェックにかける

```text
// テキストファイル内に保存されている4D メソッド
var $newBusinessRules:=New shared object
Use ($newBusinessRules)
	$newBusinessRules.taxRate:=0.2
	$newBusinessRules.discountFormula:="price * quantity * discountRate"
	$newBusinessRules.approvalThreshold:=10000
	$newBusinessRules.freeShippingThreshold:=150
	$newBusinessRules.defaultCurrency:="EUR"
End use 

Use (Storage)
	Storage.businessRules:=$newBusinessRules
End use  
```

このメソッドは以下のようなコード内で呼び出されます:

```4d
var $myFile:=File("/DATA/BusinessRules.4dm")

var $myMethod:=4D.Method.new($myFile.getText())
// シンタックスエラーの検証
If ($myMethod.checkSyntax().success)
   $myMethod.call()
End if 
```

### メソッドオブジェクト

4D.Method オブジェクトは以下のプロパティと関数を提供します:

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary -->               |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->                  |
| [<!-- INCLUDE #MethodClass.checkSyntax().Syntax -->](#checksyntax)<br/><!-- INCLUDE #MethodClass.checkSyntax().Summary --> |
| [<!-- INCLUDE #MethodClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MethodClass.name.Summary -->                          |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->                |

## 4D.Method.new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 21 R3 | 追加 |

</details>

<!-- REF #4D.Method.new().Syntax -->**4D.Method.new**( *source* : Text {; name : Text } ) : 4D.Method<!-- END REF -->

<!-- REF #4D.Method.new().Params -->

<div class="no-index">

| 引数     | 型                         |                             | 説明                                                                 |
| ------ | ------------------------- | :-------------------------: | ------------------------------------------------------------------ |
| source | Text                      |              ->             | テキストとして表現された、オブジェクトとしてカプセル化される4D メソッド                              |
| name   | Text                      |              ->             | デバッガに表示するメソッド名。 デバッガに表示するメソッド名。 省略した場合、メソッド名は "anonymous" と表示されます。 |
| 戻り値    | 4D.Method | <- | 新規メソッド共有オブジェクト                                                     |

</div>
<!-- END REF -->

#### 説明

`4D.Method.new()` 関数は、 <!-- REF #4D.Method.new().Summary -->*source* 引数のコードからビルドされた新しい `4D.Method` 型のオブジェクトを作成して返します<!-- END REF -->。

*source* 引数には、メソッドの4D ソースコードをテキストとして渡します。 [`Char`](../commands/char) コマンドまたは [エスケープシークエンス](../Concepts/quick-tour.md#エスケープシークエンス)を使用することで、全ての行末文字(LF、CR、CRLF)がサポートされています。 [`Char`](../commands/char) コマンドまたは [エスケープシークエンス](../Concepts/quick-tour.md#エスケープシークエンス)を使用することで、全ての行末文字(LF、CR、CRLF)がサポートされています。

オプションの *name* 引数には、4D デバッガーあるいはランタイムエクスプローラーに表示されるメソッドの名前を渡します。 この引数を省略した場合、メソッド名は、 "anonymous" として表示されます。 この引数を省略した場合、メソッド名は、 "anonymous" として表示されます。

:::tip

以下のような場合には、 *name* 引数を使用してメソッドに名前をつけることが推奨されます:

- [デバッガのカスタムウォッチエリア](../Debugging/debugger#カスタムウォッチエリア) 内で一貫したメソッド名を使用する(anonymous なメソッドはデバッガでは永続的ではありません)。
- [`Method get path`](../commands/method-get-path) や [`Method resolve path`](../commands/method-resolve-path) などのコマンドを使用して揮発性のメソッドを管理する(anonymous なメソッドはパスを持ちません)。

:::

返される4D.Method オブジェクトは、[`checkSyntax()`](#checksyntax) を使用してチェックできる他、 `()`、 [`.apply()`](#apply) あるいは [`.call()`](#call) を使用して実行可能です。

:::note

命名された揮発性のメソッドオブジェクトはプロジェクトメソッドではありません。これらはディスクファイル内に保存はされず、[`EXECUTE METHOD`](../commands/execute-method) などのコマンドで呼び出すことはできません。 その一方で、これらは[`4D.Function`](./FunctionClass.md) クラスを継承するため、 `4D.Function` オブジェクトが想定されているところであればどこでも使用可能です。 その一方で、これらは[`4D.Function`](./FunctionClass.md) クラスを継承するため、 `4D.Function` オブジェクトが想定されているところであればどこでも使用可能です。

:::

#### 例題

```4d
var $m:=4D.Method.new("#DECLARE ($t : Text) : Text \nreturn Uppercase($t)")

var $res:=$m.call(Null; "hello world")  //HELLO WORLD
```

<!-- INCLUDE FunctionClass.apply().Desc -->

#### 例題

```4d
var $coll:=[10; 2]
var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.apply(Null; $coll) //20

```

<!-- INCLUDE FunctionClass.call().Desc -->

#### 例題

```4d
 var $m : 4D.Method
 var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.call(Null; 10; 5) //50
```

## .checkSyntax()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 21 R3 | 追加 |

</details>

<!-- REF #MethodClass.checkSyntax().Syntax -->**.checkSyntax**() : Object<!-- END REF -->

<!-- REF #MethodClass.checkSyntax().Params -->

<div class="no-index">

| 引数  | 型      |                             | 説明                  |
| --- | ------ | --------------------------- | ------------------- |
| 戻り値 | Object | <- | シンタックスチェックの結果オブジェクト |

</div>
<!-- END REF -->

#### 説明

`.checkSyntax()` 関数は <!-- REF #MethodClass.checkSyntax().Summary -->`4D.Method` オブジェクトのソースコードに対してシンタックスをチェックし、その結果のオブジェクトを返します<!-- END REF -->。

結果オブジェクトには、以下のプロパティが格納されています:

| プロパティ   |                                                                                   | 型                   | 説明                                                                                                      |
| ------- | --------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| success |                                                                                   | Boolean             | シンタックスエラーが何も検出されなかった場合にはTrue、それ以外の場合にはFalse                                                             |
| errors  |                                                                                   | Object の Collection | **以下はerror または warningの場合にのみ返されます**。 **以下はerror または warningの場合にのみ返されます**。 エラーまたは警告の詳細を格納したオブジェクトのコレクション |
|         | [].isError    | Boolean             | エラーならTrue、それ以外の場合は警告                                                                                    |
|         | [].message    | Text                | エラーならTrue、それ以外の場合は警告                                                                                    |
|         | [].lineNumber | Integer             | コード内でのエラーが発生した行番号                                                                                       |

#### 例題

```4d
var $m : 4D.Method
var $check : Object
$m:=4D.Method.new("var $a:=2026\r$a:=current date")
$check:=$m.checkSyntax()
If ($check.success=False)
	ALERT("Syntax error: "+$check.errors[0].message)
End if 
```

## .name

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 21 R3 | 追加 |

</details>

<!-- REF #MethodClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティには、<!-- REF #MethodClass.name.Summary -->`new()` コンストラクターの *name* 引数内で宣言されていれば、`4D.Method` オブジェクトの名前が格納されています<!-- END REF -->。 それ以外の場合、プロパティは返されません。 それ以外の場合、プロパティは返されません。

このプロパティは **読み取り専用** です。

<!-- INCLUDE FunctionClass.source.Desc -->

#### 例題

```4d
var $myCode:="#DECLARE ():Real\n"+\
"return random*current time"
$m:=4D.Method.new($myCode)
$src:=$m.source //"#DECLARE() : Real\rreturn Random*Current time"
```
