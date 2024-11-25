---
id: undefined
title: Undefined
slug: /commands/undefined
displayed_sidebar: docs
---

<!--REF #_command_.Undefined.Syntax-->**Undefined** ( *expression* ) : Boolean<!-- END REF-->
<!--REF #_command_.Undefined.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | Expression whose resulting value to be evaluated |
| Function result | Boolean | &#8592; | True = undefined, False = not undefined |

<!-- END REF-->

#### Description 

<!--REF #_command_.Undefined.Summary-->Undefined returns True if the result of the evaluation of *expression* is not a defined value, and False otherwise.<!-- END REF-->

* A variable is defined if it has been created via a compilation directive or if a value is assigned to it. It is undefined in all other cases. If the database has been compiled, the Undefined function returns False for all variables.
* An object property is undefined if it does not exist in the object.
* Undefined always returns False for field references.

**Note:** Keep in mind that **Undefined** evaluates *expression*. The following statements are equivalent:  

```4d
 $result:=Undefined($exp)
  // same result:
 $result:=(Value type($exp)=Is undefined)
```

  
In some cases, you may not want the parameter to be evaluated (for example, when you use a pointer to a variable to check if the variable is defined). Then, you need to write:  

```4d
 $result:=(Type($ptr->)=Is undefined) //true if the pointed variable does not exist (no error)
```

#### Example 

Here are the different results of the [Undefined](undefined.md) command as well as the [Null](null.md) command with object properties, depending on the context:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Undefined(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Undefined(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Undefined(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

#### See also 

[CLEAR VARIABLE](clear-variable.md)  