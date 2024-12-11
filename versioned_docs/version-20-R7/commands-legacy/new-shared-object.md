---
id: new-shared-object
title: New shared object
slug: /commands/new-shared-object
displayed_sidebar: docs
---

<!--REF #_command_.New shared object.Syntax-->**New shared object** {( *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )} : Object<!-- END REF-->
<!--REF #_command_.New shared object.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| property | Text | &#8594;  | Name of property to create |
| value | Text, Date, Boolean, Pointer, Number, Object | &#8594;  | Value of property |
| Function result | Object | &#8592; | New shared object |

<!-- END REF-->

#### Description 

<!--REF #_command_.New shared object.Summary-->The **New shared object** command creates a new empty or prefilled shared object and returns its reference.<!-- END REF--> Adding or editing a property to this object must be surrounded by the *Use...End use* structure, otherwise an error is generated. Reading a property without a *Use...End use* structure is, however, possible. 

**Note:** For more information on *shared objects*, please refer to the *Shared objects and shared collections* page.

If you do not pass any parameters, **New shared object** creates an empty object and returns its reference. You must assign this reference to a 4D object variable.

**Note:** `var : Object` declares a variable of the [Object] type but does not create an object. 

Optionally, you can prefill the new object by passing one or several *property*/*value* pairs as parameters:

* In the *property* parameter, pass the label of the property to be created (up to 255 characters). Note that the *property* parameter is case sensitive.
* In the *value* parameter, pass the value you want to set for the property. Shared objects can only contain values of the following types:  
   * number (real, longint...) Number values are always stored as reals.  
   * text  
   * boolean  
   * date  
   * time (stored as number of milliseconds - real)  
   * null  
   * shared object(\*)  
   * shared collection(\*)  
**Note:** Unlike standard (not shared) objects, shared objects do not support pictures, pointers, and objects or collections that are not shared.  
    
(\*)When a shared object or collection is added to a shared object, they share the same locking identifier. For more information on this point, refer to the *About the locking identifier (how shared groups work)* section.

#### Example 1 

You want to create a new prefilled shared object:

```4d
 var $contact : Object
 $contact:=New shared object("name";"Smith";"firstname";"John")
```

#### Example 2 

You want to create and modify a shared object. The structure must be called for this object:   

```4d
 var $s_obj : Object
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End use
```

#### See also 

[New object](new-object.md)  
[New shared collection](../commands/new-shared-collection.md)  
*Shared objects and shared collections*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1526 |
| Thread safe | &check; |
| Forbidden on the server ||


