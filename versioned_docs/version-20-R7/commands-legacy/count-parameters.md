---
id: count-parameters
title: Count parameters
slug: /commands/count-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Count parameters.Syntax-->**Count parameters**  : Integer<!-- END REF-->
<!--REF #_command_.Count parameters.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Number of parameters actually passed |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count parameters.Summary-->The Count parameters command returns the number of parameters passed to a project method.<!-- END REF-->Count parameters is meaningful only in a project method that has been called by another method (project method or other). If the project method calling this command is associated with a menu, it returns 0.

#### Example 1 

4D project methods accept optional parameters, starting from the right.   
For example, you can call the method MyMethod(a;b;c;d) in the following ways:

```4d
 MyMethod(a;b;c;d) // All parameters are passed
 MyMethod(a;b;c) // The last parameter is not passed
 MyMethod(a;b) // The last two parameters are not passed
 MyMethod(a) // Only the first parameter is passed
 MyMethod // No Parameter is passed at all
```

Using Count parameters from within MyMethod, you can detect the actual number of parameters and perform different operations depending on what you have received. The following example displays a text message and can insert the text into a 4D Write area or send the text into a document on disk:

```4d
  // APPEND TEXT Project Method
  // APPEND TEXT ( Text { ; Long { ; Time } } )
  // APPEND TEXT ( Text { ; 4D Write Area { ; DocRef } } )
 
 var $1 : Text
 var $2 : Time
 var $3 : Integer
 
 MESSAGE($1)
 If(Count parameters>=3)
    SEND PACKET($3;$1)
 Else
    If(Count parameters>=2)
       WR INSERT TEXT($2;$1)
    End if
 End if
```

After this project method has been added to your application, you can write:

```4d
 APPEND TEXT(vtSomeText) // Will only display the text message
 APPEND TEXT(vtSomeText;$wrArea) // Displays text message and appends it to $wrArea
 APPEND TEXT(vtSomeText;0;$vhDocRef) // Displays text message and writes it to $vhDocRef
```

#### Example 2 

4D project methods accept a variable number of parameters of the same type, starting from the right. To declare these parameters, you use a compiler directive to which you pass *${N}* as a variable, where N specifies the first parameter. Using Count parameters you can address those parameters with a For loop and the parameter indirection syntax. This example is a function that returns the greatest number received as parameter:

```4d
  // Max of Project Method
  // Max of ( Real { ; Real2... ; RealN } ) -> Real
  // Max of ( Value { ; Value2... ; ValueN } ) -> Greatest value
 
 var $0;${1} : Real // All parameters will be of type REAL as well as the function result
 $0:=${1}
 For($vlParam;2;Count parameters)
    If(${$vlParam}>$0)
       $0:=${$vlParam}
    End if
 End for
```

After this project method has been added to your application, you can write:

```4d
 vrResult:=Max of(Records in set("Operation A");Records in set("Operation B"))
```

or:

```4d
 vrResult:=Max of(r1;r2;r3;r4;r5;r6)
```

#### See also 

*Compiler Commands*  
[Copy parameters](copy-parameters.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 259 |
| Thread safe | &check; |


