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

```
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

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into local variables within the called class function or method. Two syntaxes are proposed to declare variable parameters in the called code:

- [named variables](#named-parameters) (recommended in most cases) or
- [sequentially numbered variables](#sequential-parameters).

Both [named](#named-parameters) and [sequential](#sequential-parameters) syntaxes can be mixed with no restriction to declare parameters. For example:

```4d
Function add($x : Integer)
 var $0;$2 : Integer
 $0:=$x+$2
```

## Named parameters

Inside called methods or class functions, parameter values are assigned to local variables. You can declare parameters using a **parameter name** along with a **parameter type**, separated by colon.

- For class functions, parameters are declared along with the `Function` keyword.
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
> If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

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

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression) or through `$0`in the [sequential syntax](#returned-value-1)). For example:

```4d
Function add($x : Variant; $y : Integer): Integer
 $0:=$x+$y
```

### Supported data types

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects.  For example:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

## Sequential parameters

As an alternative to [named parameters](#named-parameters) syntax, you can declare parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. The numbering of the local variables represents the order of the parameters.

> Although this syntax is supported by class functions, it is recommended to use [named parameters](#named-parameters) syntax in this case.

For example, when you call a `DO_SOMETHING` project method with three parameters:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:

```4d
  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
```

### Returned value

The value to be returned is automatically put into the local variable `$0`.

For example, the following method, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 method:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *$NewPhrase* gets “THIS is good.”

The returned value, `$0`, is a local variable within the subroutine. It can be used as such within the subroutine. For example, you can write:

```4d
// Do_something
$0:=Uppercase($1)
ALERT($0)
```

In this example, `$0` is first assigned the value of `$1`, then used as parameter to the `ALERT` command. Within the subroutine, you can use `$0` in the same way you would use any other local variable. It is 4D that returns the value of `$0` (as it is when the subroutine ends) to the called method.

### Supported data types

You can use any [expression](quick-tour.md#expression-types) as sequential parameter, except:

- tables
- arrays

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

## `return {expression}`

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R4  | Added   |
</details>

The `return` statement ends function or method execution and can be used to return an expression to the caller.

For example, the following function returns the square of its argument, $x, where $x is a number.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internally, `return x` executes `$0:=x` or (if declared) `myReturnValue:=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise *undefined*.

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). However, note that it ends immediately the code execution. For example:

```4d
Function getValue
 $0:=10
 return 20
 // returns 20

Function getValue -> $v : Integer
 return 10
 $v:=20 // never executed
 // returns 10
```

## Parameter indirection (${N})

4D project methods accept a variable number of parameters. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression. `${N}` is called a **generic parameter**.

### Using generic parameters

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

Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using a [compiler directive](#declaring-generic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command. For example:

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

### Declaring generic parameters

As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. Non-declared generic parameters automatically get the [Variant](dt_variant.md) type.

To declare generic parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_TEXT(${4})
```

> Declaring generic parameters can only be done with the [sequential syntax](#sequential-parameters).

This command means that starting with the fourth parameter (included), the method can receive a variable number of parameters of text type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type text, even if for you it was, for instance, of the data type Real.

> The number in the declaration has to be a constant and not a variable.

## Declaring parameters for compiled mode

Even if it is not mandatory in [interpreted mode](interpreted.md), you must declare each parameter in the called methods or functions to prevent any trouble.

When using the [named variable syntax](#named-parameters), parameters are automatically declared through the `#DECLARE` keyword or `Function` prototype. For example:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
 // all parameters are declared with their type
```

When using the [sequential variable syntax](#sequential-parameters), you need to make sure all parameters are properly declared. In the following example, the `Capitalize` project method accepts a text parameter and returns a text result:

```4d
  // Capitalize Project Method
  // Capitalize ( Text ) -> Text
  // Capitalize ( Source string ) -> Capitalized string

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

Using commands such as `New process` with process methods that accept parameters also require that parameters are explicitely declared in the called method. For example:

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

This code can be executed in compiled mode only if "foo_method" declares its parameters:

```4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

> For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Within this method, you can predeclare the parameters for each method, for example:

```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```

See [Interpreted and compiled modes](interpreted.md) page for more information.

Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):

- Database methods - For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

> You can also use [named parameters](#named-parameters) with the `#DECLARE` keyword.

- Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method. **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. For example:

```4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

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
  - if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
  - if the parameter was declared using the [sequential syntax](#sequential-parameters) (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.

## Input/Output variables

Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. However, in the case where you use commands that modify the value of the variable passed as parameter (for example `Find in field`), the parameters $1, $2, and so on cannot be used directly. You must first copy them into standard local variables (for example: `$myvar:=$1`).

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
 var $1; $para : Object
 $para:=$1  
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
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
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

> You can also call a method or function with more parameters than declared. They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 Method($message : Text; $path : Text; $wpArea : Object)

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

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

## Values or references

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. For example:

```4d
 //Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

 //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. Rather than passing the field to the method, you pass a pointer to it, so you would write:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Here the parameter is not the field, but a pointer to it. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
 //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

 //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Returning values](#returning-values) paragraph.

### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

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
