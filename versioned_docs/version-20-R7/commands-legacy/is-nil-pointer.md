---
id: is-nil-pointer
title: Is nil pointer
slug: /commands/is-nil-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Is nil pointer.Syntax-->**Is nil pointer** ( *aPointer* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is nil pointer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aPointer | Pointer | &#8594;  | Pointer to be tested |
| Function result | Boolean | &#8592; | TRUE = Nil pointer (->[]) FALSE = Valid pointer to an existing object |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is nil pointer.Summary-->The **Is nil pointer** command returns True if the pointer you pass in *aPointer* is Nil (*\->\[\]*).<!-- END REF--> It returns False in all other cases (pointer to field, table or variable).

If you want to find out the name of the variable or the number of the field that is being pointed to, you can use the [RESOLVE POINTER](resolve-pointer.md) command.

#### Example 

```4d
 var $ptr : Pointer
 ...
 If(Is nil pointer($ptr))
 End if
  // is equivalent to
 If($ptr=Null)
 End if
```

#### See also 

[Is a variable](is-a-variable.md)  
[RESOLVE POINTER](resolve-pointer.md)  