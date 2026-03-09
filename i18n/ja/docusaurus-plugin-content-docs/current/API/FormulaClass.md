---
id: FormulaClass
title: Formula
---

`4D.Formula` objects are created by the [Formula](../commands/formula) or [Formula from string](../commands/formula-from-string) commands and allow you execute any 4D expression or code expressed as single-line text.

`4D.Formula` class objects inherit from the [`4D.Function`](./FunctionClass.md) class. Thus, to execute the formula, you can:

- store a `4D.Formula` object in an object property and use the `()` operator after the property name,
- or directly call the `4D.Formula` object using the [`call()`](#call) or [`apply()`](#apply) function on it.

See examples in the [Executing code in Function objects](../API/FunctionClass.md#executing-code-in-function-objects) paragraph.

### フォーミュラに引数を渡す

フォーミュラには、順番引数シンタックス `$1, $2...$n` を使用して引数を渡すことができます。 $ 付きの引数の番号は、それらがフォーミュラに渡される順番を表します。 たとえば:

```4d
 $f:={message: Formula(ALERT("Hello "+$2+", "+$1))}
 $f.message("John";"Smith") //displays "Hello Smith, John"
```

あるいは、[.call()](#call) 関数を使用して:

```4d
 var $f : 4D.Formula
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2026" (for example)
```

#### 単一メソッド用の引数

利便性のために、フォーミュラが単一のプロジェクトメソッドから作成された場合には、引数はフォーミュラオブジェクトの初期化では省略することができます。 省略された引数は、フォーミュラを呼び出す時に一緒に渡すことができます。 例:

```4d
 var $f : 4D.Formula

 $f:=Formula(myMethod)
  //Writing Formula(myMethod($1;$2)) is not necessary
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call() //returns "How are you?"

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
 $result:=$f.apply(Null;$c) // returns 60
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
 $result:=$f.call(Null;"hello") // returns "HELLO"
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
