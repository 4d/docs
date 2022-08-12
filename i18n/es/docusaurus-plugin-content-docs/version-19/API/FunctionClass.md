---
id: FunctionClass
title: Formula
---



The [Formula](#formula) and [Formula from string](#formula-from-string) commands allow you to create native [`4D.Function` objects](#about-4dfunction-objects) to execute any 4D expression or code expressed as text.

### Formula Objects

Formula objects can be encapsulated in object properties:

```4d
 var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the **()** operator after the property name, such as:

```4d
 $f.message() //displays "Hello world"
```

Syntax with brackets is also supported:

```4d
 $f["message"]() //displays "Hello world"
```

Note that, even if it does not have parameters (see below), an object function to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
 $o:=$f.message //returns the formula object in $o
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call) functions:

```4d
 $f.message.apply() //displays "Hello world"
```

#### Passing parameters

You can pass parameters to your formulas using the [sequential parameter syntax](Concepts/parameters.md#sequential-parameters) based upon $1, $2...$n. For example, you can write:

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //displays "Hello John"
```

Or using the [.call()](#call) function:

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2019" (for example)
```

#### Parameters to a single method

For more convenience, when the formula is made of a single project method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:

```4d
 var $f : 4D.Function

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

### About 4D.Function objects

A `4D.Function` object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 4D proposes three kinds of Function objects:

- native functions, i.e. built-in functions from various 4D classes such as `collection.sort()` or `file.copyTo()`.
- user functions, created in user [classes](Concepts/classes.md) using the [Function keyword](Concepts/classes.md#function).
- formula functions, i.e. functions that can execute any 4D formula.

### Summary

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |

## Formula

<details><summary>History</summary>

| Version | Changes                          |
| ------- | -------------------------------- |
| v17 R6  | Renamed (New formula -> Formula) |
| v17 R3  | Added                            |

</details>

<!-- REF #_command_.Formula.Syntax -->

**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->
| Parameter  | Type        |    | Description                                                          |
| ---------- | ----------- |:--:| -------------------------------------------------------------------- |
| formulaExp | Expression  | -> | Formula to be returned as object                                     |
| Result     | 4D.Function | <- | Native function encapsulating the formula|<!-- END REF -->

|

#### Description

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the *formulaExp* expression<!-- END REF -->. *formulaExp* can be as simple as a single value or complex, such as a project method with parameters.

Having a formula as an object allows it to be passed as a parameter (calculated attribute) to commands or methods or to be executed from various components without needing to declare them as "shared by components and host database". When called, the formula object is evaluated within the context of the database or component that created it.

The returned formula can be called with:

- [`.call()`](#call) or [`.apply()`](#apply) methods, or
- object notation syntax (see [formula object](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //returns 3
 $f.apply($o) //returns 3
 $o.myFormula() //returns 3
```

You can pass [parameters](#passing-parameters) to the `Formula`, as seen below in [example 4](#example-4).

You can specify the object on which the formula is executed, as seen in [example 5](#example-5). The properties of the object can then be accessed via the `This` command.

If *formulaExp* uses local variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the local variables. Note that using arrays as local variables is not supported.

The object created by `Formula` can be saved, for example, in a database field or in a blob document.

#### Example 1

A simple formula:

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // returns 3
```

#### Example 2

A formula using local variables:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
```

#### Example 3

A simple formula using parameters:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //returns 30
```

#### Example 4

A formula using a project method with parameters:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```

#### Example 5

Using `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //returns "John Smith"
```

#### Example 6

Calling a formula using object notation:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc

  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

## Formula from string

<details><summary>History</summary>

| Version | Changes                                                |
| ------- | ------------------------------------------------------ |
| v17 R6  | Renamed New formula from string -> Formula from string |
| v17 R3  | Added                                                  |

</details>

<!-- REF #_command_.Formula from string.Syntax -->

**Formula from string**( *formulaString* : Text ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->
| Parameter     | Type        |    | Description                                                        |
| ------------- | ----------- |:--:| ------------------------------------------------------------------ |
| formulaString | Text        | -> | Text formula to be returned as object                              |
| Result        | 4D.Function | <- | Native object encapsulating the formula|<!-- END REF -->

|

#### Description

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a 4D.Function object based upon the *formulaString*<!-- END REF -->.  *formulaString* can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`Formula`](#formula), except that it handles a text-based formula. In most cases, it is recommended to use the `Formula` command. `Formula from string` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). In this context, using syntax with tokens is highly advised.
> Because local variable contents can not be accessed by name in compiled mode, they can not be used in *formulaString*. An attempt to access a local variable with `Formula from string` will result in an error (-10737).

#### Example

The following code will create a dialog accepting a formula in text format:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

...and execute the formula:

![](../assets/en/API/formulaAlert.png)

<!-- REF FunctionClass.apply().Desc -->
## .apply()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R3  | Added   |

</details>

<!-- REF #FunctionClass.apply().Syntax -->

**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->
| Parameter     | Type       |    | Description                                                             |
| ------------- | ---------- |:--:| ----------------------------------------------------------------------- |
| thisObj       | Object     | -> | Object to be returned by the This command in the formula                |
| formulaParams | Collection | -> | Collection of values to be passed as $1...$n when `formula` is executed |
| Result        | any        | <- | Value from formula execution|<!-- END REF -->

|

#### Description

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional *formulaParams* parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. This can be useful for passing calculated results.

#### Example 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
```

#### Example 2

```4d
 var $calc : 4D.Function
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->
## .call()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R3  | Added   |

</details>

<!-- REF #FunctionClass.call().Syntax -->

**.call**() : any<br/>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->
| Parameter | Type   |    | Description                                               |
| --------- | ------ | -- | --------------------------------------------------------- |
| thisObj   | Object | -> | Object to be returned by the This command in the formula  |
| params    | any    | -> | Value(s) to be passed as $1...$n when formula is executed |
| Result    | any    | <- | Value from formula execution|<!-- END REF -->

|

#### Description

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass values to be used as *$1...$n* parameters in the formula using the optional *params* parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Example 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
```

#### Example 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
```

<!-- END REF -->

<!-- REF FunctionClass.source.Desc -->
## .source

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |

</details>

<!-- REF #FunctionClass.source.Syntax -->

**.source** : Text <!-- END REF -->

#### Description

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

This property is **read-only**.

#### Example

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->
