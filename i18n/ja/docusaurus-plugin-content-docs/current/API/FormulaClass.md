---
id: FormulaClass
title: Formula
---

`4D.Formula` オブジェクトは [Formula](../commands/formula) または [Formula from string](../commands/formula-from-string) コマンドによって作成され、これを使用するとあらゆる4D 式または単一行のテキストとして表現されたコードを実行することができます。

`4D.Formula` クラスオブジェクトは、 [`4D.Function`](./FunctionClass.md) クラスを継承します。 そのため、フォーミュラを実行するためには、以下のような方法があります:

- オブジェクトプロパティに `4D.Formula` オブジェクトを入れ、プロパティ名の後に `()` 演算子を使用する
- または、 [`call()`](#call) あるいは [`apply()`](#apply) 関数を使用して `4D.Formula` オブジェクトを呼び出す。

[Function オブジェクト内のコードを実行する](../API/FunctionClass.md#executing-code-in-function-objects) の段落の例題を参照してください。

:::info

このクラスは、バイナリーで[**ストリーム可能**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) です。

:::

### フォーミュラに引数を渡す

フォーミュラには、順番引数シンタックス `$1, $2...$n` を使用して引数を渡すことができます。 $ 付きの引数の番号は、それらがフォーミュラに渡される順番を表します。 たとえば:

```4d
 $f:={message: Formula(ALERT("Hello "+$2+", "+$1))}
 $f.message("John";"Smith") // "Hello Smith, John" と表示する
```

あるいは、[.call()](#call) 関数を使用して:

```4d
 var $f : 4D.Formula
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") // "Hello World" を返す
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) // "Welcome to 2026" を返す(一例)
```

#### 単一メソッド用の引数

利便性のために、フォーミュラが単一のプロジェクトメソッドから作成された場合には、引数はフォーミュラオブジェクトの初期化では省略することができます。 省略された引数は、フォーミュラを呼び出す時に一緒に渡すことができます。 例:

```4d
 var $f : 4D.Formula

 $f:=Formula(myMethod)
  // Formula(myMethod($1;$2)) と書くのは必須ではない
 $text:=$f.call(Null;"Hello";"World") // "Hello World" を返す
 $text:=$f.call() // "How are you?" を返す

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
```

引数はメソッド内において、呼び出し時に指定した順で受け取られます。

### フォーミュラオブジェクト

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- INCLUDE FunctionClass.apply().Desc -->

#### 例題 1

```4d
 var $f : 4D.Formula
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // 60 を返す
```

#### 例題 2

```4d
 var $calc : 4D.Formula
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- INCLUDE FunctionClass.call().Desc -->

#### 例題 1

```4d
 var $f : 4D.Formula
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // "HELLO" を返す
```

#### 例題 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // 100 を返します
```

<!-- INCLUDE FunctionClass.source.Desc -->

#### 例題

```4d
 var $of : 4D.Formula
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```
