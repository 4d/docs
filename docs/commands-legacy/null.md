---
id: "null"
title: "Null"
slug: /commands/null
displayed_sidebar: docs
---

<!--REF #_command_.Null.Syntax-->**Null**  : Null<!-- END REF-->
<!--REF #_command_.Null.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Null | &#8592; | Null value |

<!-- END REF-->

#### Description 

<!--REF #_command_.Null.Summary-->**Null** returns the Null type value **null**.<!-- END REF-->

This function allows you to assign or compare the **null** value to the following language elements:

| **Language elements**                                   | **Comments**                                                                                                                                                                                                                                                       |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| object property values                                  | Comparing **Null** to an object property returns true if the property value is null, and false otherwise. To simplify code, comparing **Null** also returns true if the property does not exist in the object (i.e. is [Undefined](undefined.md)), see example 4\. |
| collection elements                                     | When a collection is expanded by adding non-adjacent elements, any intermediary elements get automatically the **null** value.                                                                                                                                     |
| object variables             | See (\*) below                                                                                                                                                                                                                                                     |
| collection variables | See (\*) below                                                                                                                                                                                                                                                     |
| pointer variables         | See (\*) below                                                                                                                                                                                                                                                     |
| picture variables          | (\*) Assigning the **null** value to such a variable type clears its contents. In this case, it has the same effect as calling the [CLEAR VARIABLE](clear-variable.md) command.                                                                                    |
| variant variables          |                                                                                                                                                                                                                                                                    |

**Note:** This command cannot be used with scalar database fields. Null values in database fields are managed by the SQL engine, and are handled through the [Is field value Null](is-field-value-null.md) and [SET FIELD VALUE NULL](set-field-value-null.md) commands,

#### Example 1 

You want to assign and test the **null** value to an object property:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 If(vEmp.children=Null) //true
 End if
 If(vEmp.name=Null) //false
 End if
 If(vEmp.parent=Null) //true
 End if
```

**Note:** This example requires that the object notation is activated in the database. 

#### Example 2 

You want to assign and compare the **null** value to a collection element:

```4d
 var myCol : Collection
 myCol:=New collection(10;20;Null)
 ...
 If(myCol[2]=Null)
  // if the 3rd element is null
    ...
 End if
```

#### Example 3 

These examples show the various ways to assign or compare the **null** value to variables: 

```4d
  //Object variable
 var $o : Object
 $o:=New object
 $o:=Null //equivalent to CLEAR VARIABLE($o)
 If($o#Null) //equivalent to If (OB Is defined($o))
 End if
```

```4d
  //Collection variable
 var $c : Collection
 $c:=New collection
 $c:=Null //equivalent to CLEAR VARIABLE($c)
 If($c#Null)
 End if
```

```4d
  //Pointer variable
 var $p : Pointer
 $p:=->$v
 $p:=Null //equivalent to CLEAR VARIABLE($p)
 If($p=Null) //equivalent to If (Is Nil pointer($p))
 End if
```

```4d
  //Picture variable
 var $i : Picture
 $i:=$vpicture
 $i:=Null //equivalent to CLEAR VARIABLE($i)
 If($i#Null) //equivalent to If (Picture size($i)#0)
 End if
```

#### Example 4 

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

[Is field value Null](is-field-value-null.md)  
[OB SET NULL](ob-set-null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1517 |
| Thread safe | &check; |
| Forbidden on the server ||


