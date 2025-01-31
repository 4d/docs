---
id: parameters
title: Parameters
---


You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.

## Overview

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```4d
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

The input parameters are separated by semicolons (;).

The same principles are used when methods are executed through dedicated commands, for example:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called *MyLength*. Here is the statement:

```4d
MyLength:=Length("How did I get here?")
```

Any subroutine can return a value. Only one single output parameter can be declared per method or class function.

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into or from local variables within the called class function or method. Variable parameters must be [declared](#declaring-parameters) in the called code.


:::info Compatibility

The legacy declaration syntax, where parameters are automatically copied in sequentially numbered local variables $0, $1, etc. and declared using compiler directives such as `C_TEXT($1;$2)`, is **deprecated** as of 4D 20 R7.  

:::


## Declaring parameters

Inside called methods or class functions, parameter values are assigned to local variables. You usually declare parameters using a **parameter name** along with a **parameter type**, separated by colon.  

- For class functions, parameters are declared along with the function prototype, i.e. when using the `Function` or `Class Constructor` keywords.
- For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `#DECLARE` keyword at the beginning of the method code.

Examples:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d  
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```


The following rules apply:

- The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration).
- Parameter names must start with a `$` character and be compliant with [property naming rules](identifiers.md#object-properties).
- Multiple parameters (and types) are separated by semicolons (;).
- Multiline syntaxes are supported (using "\\" character).


For example, when you call a `getArea()` function with two parameters:

```4d
$area:=$o.getArea(50;100)
```

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

>If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

All 4D method kinds support the `#DECLARE` keyword, including database methods. For example, in the `On Web Authentication` database method, you can declare named parameters:

```4d    
	// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
```

### Returned value

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). For example:

```4d
Function add($x : Variant; $y : Integer): Integer
	return $x+$y
```


:::warning

Parameters, which include the returned value, must be declared only once. In particular, you cannot declare the same parameter as input and output, even with the same type. For example:

```qs
	//invalid declaration
Function myTransform ($x : Integer) -> $x : Integer
	//error: $x is declared twice
```

:::



### Supported data types

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects. For example:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Initialization

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned.



## `return {expression}`

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|Added
</details>

The `return` statement ends function or method execution and can be used to return an expression to the caller.

For example, the following function returns the square of its argument, $x, where $x is a number.

```4d
Function square($x : Integer) -> $result : Integer
   return $x * $x
```

:::note

Internally, `return x` executes `myReturnValue:=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise *undefined*.

:::

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). However, note that it ends immediately the code execution. For example:


```4d
Function getValue -> $v : Integer
	$v:=10
	return 20
	// returns 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// returns 10
```



## Parameter indirection (${N})

4D methods and functions accept a variable number of parameters. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression.


### Using variadic parameters

For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

Here is the method, named `MySum`:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

The method's parameters must be passed in the correct order, first the format and then a variable number of values:

```4d
 Result:=MySum("##0.00";125,2;33,5;24) //"182.70"
 Result:=MySum("000";1;2;200) //"203"
```

Note that even if you declared 0, 1, or more parameters, you can always pass the number of parameters that you want. Parameters are all available within the called code through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using the [variadic notation](#declaring-variadic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command. For example:

```4d
//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date)
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

This method can be called:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed
```

> Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others.


### Declaring variadic parameters

It is not mandatory to declare variadic parameters. Non-declared variadic parameters automatically get the [Variant](dt_variant.md) type.

However, to avoid type mismatch errors during code execution, you can declare a variable number of parameters using the "..." notation in the prototypes of your functions, class constructors and methods (variadic parameters). You specify the parameter's type following notation "..." with the desired type.

```4d
#DECLARE ( ... : Text ) // Undefined number of 'Text' parameters

```

```4d
Function myfunction ( ... : Text)

```


When declaring multiple parameters, variadic notation must be employed at last position, for example:

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```



#### Example

Here we have a method called `SumNumbers` that returns the calculated total for all the numbers passed as parameters:

```4d

#DECLARE( ... : Real) : Real



var $number; $total : Real

For each ($number; 1; Count parameters)
	$total+=${$number}
End for each

return $total

```

This method can be called with a variable number of Real parameters. In case of wrong parameter type, an error will be returned before the method is executed :

```4d

$total1:=SumNumbers // returns 0
$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error

```

:::note Compatibility

The legacy syntax for declaring variadic parameters (`C_TEXT(${4})`) is deprecated as of 4D 20 R7.

:::


## Triggers and On Drag Over

Some contexts do not support declaration in a "Compiler_" method, thus they are handled specifically:

- Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.




## Wrong parameter type

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. For example, if you write the following methods:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //wrong type, text expected
```

This case is handled by 4D depending on the context:

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called.
- in interpreted projects:
	+ if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
	+ if the parameter was declared using a legacy (`_C_XXX`) syntax, no error is generated, the called method receives an empty value of the expected type.






## Using object properties as named parameters

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 #DECLARE ($para : Object)
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). To handle missing parameters, you can either:
- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:

```4d
  //ChangeAge
 #DECLARE ($para : Object)
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```
Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
#DECLARE ($para : Object)  
If ($para.toAdd=Null)
	$para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order.



## Optional parameters

In the *4D Language Reference* manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the *okButtonTitle* parameter may be omitted when calling the command. You can call it in the following ways:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
```

4D methods and functions also accept such optional parameters. You can declare any number of parameters. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](data-types.md#default-values). For example:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```
```4d
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Displays " "
```

:::note

You can also call a method or function with more parameters than declared. They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

:::


Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 #DECLARE ($message : Text; $path : Text; $wpArea : Object)

 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```
After this project method has been added to your application, you can write:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```

:::tip

When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.  

:::


## Values or references

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. For example:

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

	//Here is the code of the method DO_SOMETHING
 #DECLARE($param : Text)
 $param:=Uppercase($param)
 ALERT($param)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $param, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. Rather than passing the field to the method, you pass a pointer to it, so you would write:

```4d
  //Here is some code from the method MY_METHOD
DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
#DECLARE($param : Text)
$param->:=Uppercase($param->)
ALERT($param->)
```

Here the parameter is not the field, but a pointer to it. Therefore, within the `DO SOMETHING` method, $param is no longer the value of the field but a pointer to the field. The object **referenced** by $param ($param-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 #DECLARE ($param : Text) -> ($result : Text)
 $result:=Uppercase($param)
 ALERT($result)
```

This second technique of returning a value by a subroutine is called "using a function". This is described in the [Returning values](#returning-values) paragraph.


### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$param, $return...` do not contain *values* but *references*. Modifying the value of the `$param, $return...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$param, $return...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```


The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.


**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.
