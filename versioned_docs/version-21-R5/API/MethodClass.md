---
id: MethodClass
title: Method
---


A `4D.Method` object contains a piece of code that is created from text source and can be executed. `4D.Method` methods always execute in interpreted mode, regardless of the project running mode (interpreted/compiled). This feature is especially designed to support dynamic, on-the-fly execution of code snippets.

A `4D.Method` object is created with the `4D.Method.new()` function. 

`4D.Method` objects inherit from the [`4D.Function`](./FunctionClass.md) class. Thus, to execute the method object, you can:

- store a `4D.Method` object in an object property and use the `()` operator after the property name,
- or directly call the `4D.Method` object using the [`call()`](#call) or [`apply()`](#apply) function on it.

See examples in the [Executing code in Function objects](../API/FunctionClass.md#executing-code-in-function-objects) paragraph.

:::tip Related blog post

[Execute Code from Text with 4D.Method](https://blog.4d.com/execute-code-from-text-with-4d-method)

:::

:::info

This class is [**streamable**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) in binary.

:::


### Examples

#### Basic dynamic method creation

```4d
var $myCode : Text
$myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer"+Char(13)+"return $number1*$number2"

var $o:={}
$o.multiplication:=4D.Method.new($myCode) //put object in a property
var $result2:=$o.multiplication(2;3) // 6

var $result3:=4D.Method.new($myCode).call(Null; 10; 5) // 50
```

#### Using `This` inside method code

```4d
var $myCode:="#DECLARE ($str1:text):text"+Char(13)+"return $str1+This.name"

var $o:={name: "John"}
$o.concat:=4D.Method.new($myCode)

var $result : Text
$result:=$o.concat("Hello ") // $result is "Hello John"
```

#### Using a text file with syntax checking

```text
//4d method stored in a text file
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

This method is called in the code:

```4d
var $myFile:=File("/DATA/BusinessRules.4dm")

var $myMethod:=4D.Method.new($myFile.getText())
// Syntax errors verification
If ($myMethod.checkSyntax().success)
   $myMethod.call()
End if 
```


### Method Object

4D.Method objects provide the following properties and functions:


||
|---|
|[<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary -->|
|[<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary --> |
|[<!-- INCLUDE #MethodClass.checkSyntax().Syntax -->](#checksyntax)<br/><!-- INCLUDE #MethodClass.checkSyntax().Summary -->|
|[<!-- INCLUDE #MethodClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MethodClass.name.Summary -->|
|[<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary --> |



## 4D.Method.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #4D.Method.new().Syntax -->**4D.Method.new**( *source* : Text {; name : Text } ) : 4D.Method<!-- END REF -->


<!-- REF #4D.Method.new().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|Textual representation of a 4D method to be encapsuled as an object|
|name|Text|->|Name of the method to display in the debugger. If omitted, the method name will be displayed as "anonymous"|
|Result|4D.Method|<-|New Method shared object|
</div>
<!-- END REF -->


#### Description

The `4D.Method.new()` function <!-- REF #4D.Method.new().Summary -->creates and returns a new `4D.Method` object built from the *source* code<!-- END REF -->.

In the *source* parameter, pass the 4D source code of the method as text. All end-of-line characters are supported (LF, CR, CRLF) using the [`Char`](../commands/char) command or an [escape sequence](../Concepts/quick-tour.md#escape-sequences).  

In the optional *name* parameter, pass the name of the method to be displayed in the 4D debugger or Runtime explorer. If you omit this parameter, the method name will appear as "anonymous". 

:::tip

Giving a *name* to your method is recommended if you want to:

- use persistent method name in the [Custom watch pane of the Debugger](../Debugging/debugger#custom-watch-pane) (anonymous methods are not persistent in the debugger).
- handle the volatile method using commands such as [`Method get path`](../commands/method-get-path) and [`Method resolve path`](../commands/method-resolve-path) (anonymous methods don't have paths).

:::


The resulting 4D.Method object can be checked using [`checkSyntax()`](#checksyntax) and executed using `()`, [`.apply()`](#apply) or [`.call()`](#call).


:::note

Named volatile method objects are not project methods, they are not stored in disk files and cannot be called by commands such as [`EXECUTE METHOD`](../commands/execute-method). On the other hand, since they inherit from the [`4D.Function`](./FunctionClass.md) class, they can be used wherever a `4D.Function` object is expected.  

:::


#### Example

```4d
var $m:=4D.Method.new("#DECLARE ($t : Text) : Text \nreturn Uppercase($t)")

var $res:=$m.call(Null; "hello world")  //HELLO WORLD
```


<!-- INCLUDE FunctionClass.apply().Desc -->


#### Example

```4d
var $coll:=[10; 2]
var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.apply(Null; $coll) //20

```


<!-- INCLUDE FunctionClass.call().Desc -->


#### Example

```4d
 var $m : 4D.Method
 var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.call(Null; 10; 5) //50
```


## .checkSyntax()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.checkSyntax().Syntax -->**.checkSyntax**() : Object<!-- END REF -->


<!-- REF #MethodClass.checkSyntax().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Syntax check result object|
</div>
<!-- END REF -->


#### Description

The `.checkSyntax()` function <!-- REF #MethodClass.checkSyntax().Summary -->checks the syntax of the source code of the `4D.Method` object and returns a result object<!-- END REF -->.

The Result object contains the following properties:

|Property||Type|Description|
|---|---|---|---|
|success||Boolean|True if no syntax error was detected, false otherwise|
|errors||Collection of objects|**Available only in case of error or warning**. Collection of objects describing errors or warnings|
||[].isError|Boolean|Error if True, warning otherwise|
||[].message|Text|Error or warning message|
||[].lineNumber|Integer|Line number of error in the code|



#### Example


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

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>


<!-- REF #MethodClass.name.Syntax -->**.name** : Text<!-- END REF -->


#### Description

The `.name` property <!-- REF #MethodClass.name.Summary -->contains the name of the `4D.Method` object, if it was declared in the *name* parameter of the `new()` constructor<!-- END REF -->. Otherwise, the property is not returned. 

This property is **read-only**.



<!-- INCLUDE FunctionClass.source.Desc -->


#### Example

```4d
var $myCode:="#DECLARE ():Real\n"+\
"return random*current time"
$m:=4D.Method.new($myCode)
$src:=$m.source //"#DECLARE() : Real\rreturn Random*Current time"
```
