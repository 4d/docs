---
id: object-get-value
title: OBJECT Get value
slug: /commands/object-get-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get value.Syntax-->**OBJECT Get value** ( *objectName* ) : Mixed<!-- END REF-->
<!--REF #_command_.OBJECT Get value.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectName | Text | &#8594;  | Object name |
| Function result | Mixed | &#8592; | Current value of the form object's data source |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get value.Summary-->The **OBJECT Get value** command returns the current value of the data source for the form object(s) designated by the *objectName* parameter.<!-- END REF-->

In the *objectName* parameter, pass the name of a form object (string). If you use the wildcard character (“@”) for multiple objects, only the value of the data source from the first form object is returned.

**Note**: **OBJECT Get value** is not available on list box column objects.

**Returned value**

Current value of the form object's data source. 

**Notes**:

* If the data source is an array, the command returns the index of the array
* If the data source is an expression, the command returns the value evaluated value since the last execution cycle

#### Example 

See the example for the [OBJECT SET VALUE](object-set-value.md) command. 

#### See also 

[OBJECT SET VALUE](object-set-value.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1743 |
| Thread safe | &check; |
| Forbidden on the server ||


