---
id: ob-remove
title: OB REMOVE
slug: /commands/ob-remove
displayed_sidebar: docs
---

<!--REF #_command_.OB REMOVE.Syntax-->**OB REMOVE** ( *object* ; *property* )<!-- END REF-->
<!--REF #_command_.OB REMOVE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | Structured object |
| property | Text | &#8594;  | Name of property to remove |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB REMOVE.Summary-->The **OB REMOVE** command removes the *property* of the language object designated by the *object* parameter.<!-- END REF--> This command removes the *property* as well as its current value.

*object* can be an object varialble or a 4D object field.

In the *property* parameter, pass the label of the property to be read. Note that the *property* parameter is case sensitive.

#### Example 

You want to remove the "age" property of an object:

```4d
 var $Object : Object
 OB SET($Object;"name";"smith";"age";42;"client";True)
  // $Object={"name":"smith","age":42,"client":true}
 OB REMOVE($Object;"age")
  // $Object={"name":"smith","client":true}
```

#### See also 

[OB SET](ob-set.md)  