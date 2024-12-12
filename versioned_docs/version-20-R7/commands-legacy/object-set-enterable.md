---
id: object-set-enterable
title: OBJECT SET ENTERABLE
slug: /commands/object-set-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENTERABLE.Syntax-->**OBJECT SET ENTERABLE** ( {* ;} *object* ; *enterable* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENTERABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Table or Field or Variable (if * is omitted) |
| enterable | Boolean, Integer | &#8594;  | Boolean: True=enterable, False=non-enterableLongint: 0=not enterable, 1=enterable, 2=not enterable not focusable |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET ENTERABLE.Summary-->The **OBJECT SET ENTERABLE** command makes the form objects specified by *object* either enterable or non-enterable and can set the *focusable* attribute.<!-- END REF-->

**Note:** A *focusable* form object can get the focus and triggers the *On Getting focus* / *On Losing focus* form events. In addition, **input** and **4D Write Pro area** focusable objects can have their contents selected and copied, even if they are non-enterable. 

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a table, field or variable in *object*. In this case, specify a table, field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the *Object Properties* section.

You can pass either a boolean value or a Longint value in *enterable*:

* Boolean - when *enterable* is True, the user can enter data and move the cursor into the area.  
When *enterable* is False:  
   * in binary databases, the user cannot enter data and the *focusable* attribute depends on the **Focusable** option set in the Property list.  
   * in projects, the user cannot enter data and the object is focusable.
* Longint - passing a longint value in *enterable* allows you to control also the *focusable* property for **Inputs** and **4D Write Pro areas**. You can use one of the following constants:  

| Constant                        | Value | Comment                                                                                                                                                                |  
| ------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| obk enterable                   | 1     | Users can enter values in the object and the object is focusable.                                                                                                      |  
| obk not enterable               | 0     | Users cannot enter values in the object but an **input object** or a **4D Write Pro area** is focusable (other not enterable objects are automatically not focusable). |  
| obk not enterable not focusable | 2     | Users cannot enter values in the object and an **input object** or a **4D Write Pro area** is not focusable.                                                           |

The **OBJECT SET ENTERABLE** command can also be used to enable the “Enter in List” mode by programming for subforms and list forms displayed using the [MODIFY SELECTION](modify-selection.md) and [DISPLAY SELECTION](display-selection.md) commands:

* For subforms, in the *enterable* parameter, pass either the name of the subform table or the name of the subform object itself, for example: **OBJECT SET ENTERABLE**(\*;"Subform";True). The command works in subforms only if it is in the form method of the subform.
* For list forms, you must pass the name of the form table in the *enterable* parameter, for example: **OBJECT SET ENTERABLE**(\[MyTable\];True).

Making an object non-enterable does not prevent you from changing its value programmatically.

**Note:** To make a list box cell non-enterable, you pass the value -1 to $0 in the On Before Data Entry event, see *Managing entry*.

#### Example 1 

The following example sets a shipping field, depending on the weight of the shipment. If the shipment is 1 ounce or less, then the shipper is set to US Mail and the field is set to be non-enterable. Otherwise, the field is set to be enterable. 

```4d
 If([Shipments]Weight<=1)
    [Shipments]Shipper:="US Mail"
    OBJECT SET ENTERABLE([Shipments]Shipper;False)
 Else
    OBJECT SET ENTERABLE([Shipments]Shipper;True)
 End if
```

#### Example 2 

Here is the object method of a checkbox located in the header of a list in order to control the Enter in List mode: 

```4d
 var bEnterable : Boolean
 OBJECT SET ENTERABLE([Table1];bEnterable)
```

#### See also 

[OBJECT Get enterable](object-get-enterable.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  