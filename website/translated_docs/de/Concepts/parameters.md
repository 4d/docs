---
id: parameters
title: Parameters
---


## Using parameters

You'll often find that you need to pass data to your methods. This is easily done with parameters.

**Parameters** (or **arguments**) are pieces of data that a method needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Parameters are passed to methods in the same way. For example, if a project method named DO SOMETHING accepted three parameters, a call to the method might look like this:

```4d
DO SOMETHING(WithThis;AndThat;ThisWay)
```
The parameters are separated by semicolons (;). Their value is evaluated at the moment of the call.

In the subroutine (the method that is called), the value of each parameter is automatically copied into sequentially numbered local variables: $1, $2, $3, and so on. The numbering of the local variables represents the order of the parameters.

```4d
  //Code of the method DO SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the WithThis parameter
  //$2 contains the AndThat parameter
  //$3 contains the ThisWay parameter
```

Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. However, in the case where you use commands that modify the value of the variable passed as parameter (for example `Find in field`), the parameters $1, $2, and so on cannot be used directly. You must first copy them into standard local variables (for example: `$myvar:=$1`).

The same principles are used when methods are executed through dedicated commands, for example:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10! date as parameter to the SetCalendarDate  
// in the context of a subform
```

**Note:** For a good execution of code, you need to make sure that all `$1`, `$2`... parameters are correctly declared within called methods (see [Declaring parameters](#declaring-parameters) below).


### Supported expressions

You can use any [expression](Concepts/quick-tour.md#expression-types) as parameter, except:

- tables
- arrays

Tables or array expressions can only be passed [as reference using a pointer](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).


## Functions

Data can be returned from methods. A method that returns a value is called a function.

4D or 4D Plug-in commands that return a value are also called functions.

For example, the following line is a statement that uses the built-in function, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called *MyLength*. Here is the statement:

```4d
MyLength:=Length("How did I get here?")
```

Any subroutine can return a value. The value to be returned is put into the local variable `$0`.

For example, the following function, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 function:

```4d
NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *NewPhrase* gets “THIS is good.”

The function result, `$0`, is a local variable within the subroutine. It can be used as such within the subroutine. For example, in the previous `DO SOMETHING` example, `$0` was first assigned the value of `$1`, then used as parameter to the `ALERT` command. Within the subroutine, you can use `$0` in the same way you would use any other local variable. It is 4D that returns the value of `$0` (as it is when the subroutine ends) to the called method.


## Declaring parameters

Even if it is not mandatory in [interpreted mode](Concepts/interpreted.md), you must declare each parameter in the called methods to prevent any trouble.

In the following example, the `OneMethodAmongOthers` project method declares three parameters:

```4d
  // OneMethodAmongOthers Project Method
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // 1st parameter is of type Real
 C_DATE($2) // 2nd parameter is of type Date
 C_LONGINT($3) // 3rd parameter is of type Long Integer
```

In the following example, the `Capitalize` project method accepts a text parameter and returns a text result:

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

**Note:** For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Within this method, you can predeclare the parameters for each method, for example:
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
See [Interpreted and compiled modes](Concepts/interpreted.md) page for more information.

Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method. **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. For example:
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

## Values or references

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the $1, $2... local variables in the subroutine (see [Using parameters](#using-parameters)). The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method. For example:

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

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Functions](#functions) paragraph.


### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.


## Named parameters

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```
In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
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
 C_OBJECT($1;$para)
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
C_OBJECT($1;$para)
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

4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters.

> When optional parameters are needed in your methods, you might also consider using [Named parameters](#named-parameters) which provide a flexible way to handle variable numbers of parameters.

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($2;$1)
    End if
 End if
```
After this project method has been added to your application, you can write:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```


## Parameter indirection

4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called **parameter indirection**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. Within the method, an indirection address is formatted: ${$i}, where $i is a numeric variable. ${$i} is called a **generic parameter**.

For example, consider a function that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

This function is called in the following manner:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In this case, the calling method will get the string “182.70”, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values.

Here is the function, named `MySum`:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

This function can now be called in various ways:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


### Declaring generic parameters

As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. To declare these parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_LONGINT(${4})
```

This command means that starting with the fourth  parameter (included), the method can receive a variable number of parameters of longint type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real.

**Note:** The number in the declaration has to be a constant and not a variable.
