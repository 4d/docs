---
id: get-pointer
title: Get pointer
slug: /commands/get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Get pointer.Syntax-->**Get pointer** ( *varName* ) : Pointer<!-- END REF-->
<!--REF #_command_.Get pointer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| varName | Text | &#8594;  | Name of a process or interprocess variable |
| Function result | Pointer | &#8592; | Pointer to process or interprocess variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get pointer.Summary-->The **Get pointer** command returns a pointer to the process or interprocess variable whose name you pass in *varName*.<!-- END REF-->

To get a pointer to a field, use [Field](field.md). To get a pointer to a table, use [Table](table.md).

**Note:** You can pass expressions such as, for example, *ArrName+"{3}"*, as well as 2D array elements (*ArrName+"{3}{5}"*) to **Get pointer**.  
However, you cannot pass variable elements (*ArrName+"{myVar}"*). 

#### Example 1 

In a form, you build a 5 x 10 grid of enterable variables named v1, v2... v50\. To initialize all of these variables, you write:

```4d
  // ...
 For($vlVar;1;50)
    $vpVar:=Get pointer("v"+String($vlVar))
    $vpVar->:=""
 End for
```

#### Example 2 

Using pointers to elements of two-dimensional arrays:

```4d
 $pt:=Get pointer("a{1}{2}")
  //$pt=->a{1}{2}
 $pt2:=Get pointer("atCities"+"{2}{6}")
  //$pt2=->atCities{2}{6}
```

#### See also 

[Field](field.md)  
[Table](table.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 304 |
| Thread safe | &check; |
| Forbidden on the server ||


