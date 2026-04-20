---
id: FormulaClass
title: Formula
---


`4D.Formula` objects are created by the [Formula](../commands/formula) or [Formula from string](../commands/formula-from-string) commands and allow you execute any 4D expression or code expressed as single-line text.

`4D.Formula` class objects inherit from the [`4D.Function`](./FunctionClass.md) class. Thus, to execute the formula, you can:

- store a `4D.Formula` object in an object property and use the `()` operator after the property name,
- or directly call the `4D.Formula` object using the [`call()`](#call) or [`apply()`](#apply) function on it.

See examples in the [Executing code in Function objects](../API/FunctionClass.md#executing-code-in-function-objects) paragraph.

:::info

This class is [**streamable**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) in binary.

:::


### Passing parameters to formulas

You can pass parameters to your formulas using a sequential parameter syntax based upon `$1, $2,...,$n`. The numbering of the $ parameters represents the order in which they will be passed to the formula. For example, you can write:

```4d
 $f:={message: Formula(ALERT("Hello "+$2+", "+$1))}
 $f.message("John";"Smith") //displays "Hello Smith, John"
```

Or using the [.call()](#call) function:

```4d
 var $f : 4D.Formula
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2026" (for example)
```

#### Parameters to a single method

For more convenience, when the formula is made of a single project method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:

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

Parameters are received within the method, in the order they are specified in the call.



### Formula object


||
|---|
|[<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary -->|
|[<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary --> |
|[<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary --> |



<!-- INCLUDE FunctionClass.apply().Desc -->


#### Example 1

```4d
 var $f : 4D.Formula
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
```


#### Example 2

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

#### Example 1

```4d
 var $f : 4D.Formula
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
```

#### Example 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
```


<!-- INCLUDE FunctionClass.source.Desc -->

#### Example

```4d
 var $of : 4D.Formula
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```
