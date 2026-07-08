---
id: FunctionClass
title: Function
---


A **`4D.Function`** object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 


### Inheritance

4D handles several kinds of `Function` objects, inheriting from the **4D.Function** class:

- **native functions**, i.e. built-in functions from various 4D classes such as [`collection.sort()`](./CollectionClass.md#sort) or [`file.copyTo()`](./FileClass.md#copyto).
- **user functions**, created in [user classes](Concepts/classes.md) using the [`Function` keyword](Concepts/classes.md#function).
- **formula functions**, i.e. functions that can execute formula code stored in [4D.Formula](./FormulaClass.md) objects,
- **method functions**, i.e. functions that can execute source code as text stored in [4D.Method](./MethodClass.md) objects. 


### Executing code in Function objects

Function objects can be encapsulated in object properties:

```4d
var $message : 4D.Formula
$message:=Formula(ALERT("Hello world"))
$f:={message: $message}
```

This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the **()** operator after the property name, such as:

```4d
 $f.message() //displays "Hello world"
```

Syntax with brackets is also supported:

```4d
 $f["message"]() //displays "Hello world"
```

Note that, even if it does not have parameters (see below), an object function to be executed must be called with `()` parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
 $o:=$f.message //returns the function object in $o
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call):

```4d
 $message.apply() //displays "Hello world"
```


### Summary


||
|---|
|[<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary -->|
|[<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary --> |
|[<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary --> |





<!-- REF FunctionClass.apply().Desc -->
## .apply()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Support of 4D.Methods objects|
|17 R3|Added|

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *params* : Collection } ) : any<!-- END REF -->


<!-- REF #FunctionClass.apply().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---------|--- |:---:|------|
|thisObj|Object|->|Object to be returned by the `This` command in the function|
|params |Collection|->|Collection of values to be passed as parameters to the function|
|Result|any|<-|Value from function execution|
</div>
<!-- END REF -->


#### Description

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the function object to which it is applied, passing parameters as a collection, and returns the resulting value<!-- END REF -->. 

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the function. Pass Null if you do not want to use `This` but you want to send parameters.

You can pass a collection to be used as parameters in the function using the optional *params* parameter:

- in `4D.Formula` objects, parameters are passed in $1...$n in the formula.
- in other `4D.Function` objects such as `4D.Method` objects, parameters are passed in [declared method parameters](../Concepts/parameters.md). 

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. This can be useful for passing calculated results.

<!-- END REF -->



<!-- REF FunctionClass.call().Desc -->
## .call()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Support of 4D.Methods objects|
|17 R3|Added|

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->


<!-- REF #FunctionClass.call().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|thisObj|Object|->|Object to be returned by the `This` command in the function|
|params |any|->|Values to be passed as parameters to the function|
|Result|any|<-|Value from function execution|
</div>
<!-- END REF -->


#### Description

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the function object to which it is applied, with one or more parameter(s) passed directly, and returns the resulting value<!-- END REF -->. 

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the function.

You can pass values to be used as parameters in the function using the optional *params* parameter:

- in `4D.Formula` objects, parameters are passed in $1...$n in the formula.
- in `4D.Method` objects, parameters are passed in [declared method parameters](../Concepts/parameters.md). 

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

<!-- END REF -->


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




<!-- REF FunctionClass.source.Desc -->
## .source

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Support of 4D.Methods objects|
|18 R2|Added|

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->


#### Description

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source code of the function as text<!-- END REF -->.

The returned value is the original text used to create the 4D.Formula or 4D.Method object but reformatted.

This property is **read-only**.

<!-- END REF -->

#### Example

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```



