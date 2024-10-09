---
id: is-a-variable
title: Is a variable
slug: /commands/is-a-variable
displayed_sidebar: docs
---

<!--REF #_command_.Is a variable.Syntax-->**Is a variable** ( *aPointer* ) -> Function result<!-- END REF-->
<!--REF #_command_.Is a variable.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aPointer | Pointer | &srarr; | Pointer to be tested |
| Function result | Boolean | &larr; | TRUE = Pointer points to a variable FALSE = Pointer does not point to a variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is a variable.Summary-->The Is a variable command returns True if the pointer you pass in *aPointer* references a defined variable.<!-- END REF--> It returns False in all other cases (pointer to field or table, Nil pointer, and so on).

When you want to know the name of the variable being pointed to or the field number, you can use the [RESOLVE POINTER](resolve-pointer.md) command.

#### See also 

[Is nil pointer](is-nil-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  