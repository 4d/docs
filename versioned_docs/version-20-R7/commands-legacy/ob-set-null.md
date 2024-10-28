---
id: ob-set-null
title: OB SET NULL
slug: /commands/ob-set-null
displayed_sidebar: docs
---

<!--REF #_command_.OB SET NULL.Syntax-->**OB SET NULL** ( *object* ; *property* )<!-- END REF-->
<!--REF #_command_.OB SET NULL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | Structured object |
| property | Text | &#8594;  | Name of property where null value is to be applied |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB SET NULL.Summary-->The **OB SET NULL** command stores the **null** value in the language object designated by the *object* parameter.<!-- END REF-->

*object* can be an object varialble or a 4D object field.

In the *property* parameter, pass the label of the property where you want to store the **null** value. If the property already exists in *object*, its value is updated. If it does not exist, it is created.   
Note that the *property* parameter is case sensitive.

#### Example 

We want to put the null value in the "age" property for Lea:

```4d
 var $ref : Object
 OB SET($ref;"name";"Lea";"age";4)
  // $ref = {"name":"Lea","age":4}
 ...
 OB SET NULL($ref ;"age")
  // $ref = {"name":"Lea","age":null}
```

#### See also 

[Null](null.md)  
[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[OB SET](ob-set.md)  