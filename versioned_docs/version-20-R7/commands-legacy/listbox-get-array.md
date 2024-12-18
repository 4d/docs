---
id: listbox-get-array
title: LISTBOX Get array
slug: /commands/listbox-get-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get array.Syntax-->**LISTBOX Get array** ( {* ;} *object* ; *arrType* ) : Pointer<!-- END REF-->
<!--REF #_command_.LISTBOX Get array.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) |
| arrType | Integer | &#8594;  | Type of array |
| Function result | Pointer | &#8592; | Pointer to array associated with property |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get array.Summary-->**Note:** This command only works with array type list boxes.<!-- END REF-->

The **LISTBOX Get array** command returns a pointer to the *arrType* array of the list box or list box column designated by the *object* and *\** parameters.

Style, color, background color or row control arrays can be associated with array type list boxes or (except for row control arrays) with the columns of array type list boxes, using the Property list in Design mode or using the [LISTBOX SET ARRAY](listbox-set-array.md) command. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. You can designate a list box or a list box column in the *object* parameter. 

In *arrType*, pass the type of array for the property you want to get. You can use one of the following constants, available in the "*List Box*" theme: 

| Constant                  | Type    | Value |
| ------------------------- | ------- | ----- |
| lk background color array | Integer | 1     |
| lk control array          | Integer | 3     |
| lk font color array       | Integer | 0     |
| lk row height array       | Integer | 4     |
| lk style array            | Integer | 2     |

The command returns one of the following values:

* [Is nil pointer](is-nil-pointer.md) if no array for the requested property is associated with the column or the list box.
* a pointer to the array of the requested property, defined by the user.
* a pointer to the array of the requested property, defined dynamically when calling the [LISTBOX SET ROW COLOR](listbox-set-row-color.md) or [LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md) command.

#### Example 

Typical examples of use:

```4d
 vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)
  // returns a pointer to the font color array
  // associated with the "MyLB" list box
 
 vPtr:=LISTBOX Get array(*;"Col4";lk style array)
  // returns a pointer to the font style array
  // associated with the columns of the "Col4" list box
```

#### See also 

[LISTBOX GET ARRAYS](listbox-get-arrays.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1278 |
| Thread safe | &cross; |


