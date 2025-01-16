---
id: ob-is-defined
title: OB Is defined
slug: /commands/ob-is-defined
displayed_sidebar: docs
---

<!--REF #_command_.OB Is defined.Syntax-->**OB Is defined** ( *object* {; *property*} ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is defined.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | Structured object |
| property | Text | &#8594;  | If passed = property to check, if omitted = check object |
| Function result | Boolean | &#8592; | If property omitted: True if object is defined, otherwise False.<br/>If property passed: True if property is defined, otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is defined.Summary-->The **OB Is defined** command returns True if *object* or *property* is defined, and False otherwise.<!-- END REF-->can be an object varialble or a 4D object field.

By default, if you omit the *property* parameter, the command checks whether the *object* is defined. An object is defined if its contents has been initialized. 

**Note:** An object can be defined but empty. To find out if an object is undefined or empty, use the [OB Is empty](ob-is-empty.md) command. 

If you pass the *property* parameter, the command checks whether this property exists in *object*. Note that the *property* parameter is case sensitive. 

#### Example 1 

Syntax testing the initialization of an object:

```4d
 var $object : Object
 $def:=OB Is defined($object) // $def=false since $object is not initialized
 
 OB SET($object;"Name";"Martin")
 OB REMOVE($object;"Name")
 $def2:=OB Is defined($object) // $def2=true since $object is empty {} but has been initialized
```

#### Example 2 

Test for existence of a property:

```4d
 var $ref : Object
 OB SET($ref;"name";"smith";"age";42)
  //...
 If(OB Is defined($ref;"age"))
  //...
 End if
```

This test is equivalent to:

```4d
 If(OB Get type($Object;"name")#Is undefined)
```

#### See also 

[OB Is empty](ob-is-empty.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1231 |
| Thread safe | &check; |


