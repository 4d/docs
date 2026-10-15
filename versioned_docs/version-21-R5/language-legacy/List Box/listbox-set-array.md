---
id: listbox-set-array
title: LISTBOX SET ARRAY
slug: /commands/listbox-set-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ARRAY.Syntax-->**LISTBOX SET ARRAY** ( * ; *object* : Text ; *arrType* : Integer ; *arrPtr* : Pointer )<br/>**LISTBOX SET ARRAY** ( *object* : Variable ; *arrType* : Integer ; *arrPtr* : Pointer )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ARRAY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) |
| arrType | Integer | &#8594;  | Type of array |
| arrPtr | Pointer | &#8594;  | Array to associate with property |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16|Modified|
|15 R4|Modified|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX SET ARRAY.Summary-->**Note:** This command only works with array type list boxes.<!-- END REF-->

The **LISTBOX SET ARRAY** command associates an *arrType* array with the list box or list box column designated by the *object* and *\** parameters.

**Note:** Arrays of styles, colors, background colors or row controls can also be associated with array type list boxes using the Property list in the Design mode. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. You can designate a list box or a list box column in the *object* parameter.

In *arrType*, pass the type of array to associate with the list box or column. You can use one of the following constants, available in the "*List Box*" theme:

| Constant                  | Type    | Value |
| ------------------------- | ------- | ----- |
| lk background color array | Integer | 1     |
| lk control array          | Integer | 3     |
| lk font color array       | Integer | 0     |
| lk row height array       | Integer | 4     |
| lk style array            | Integer | 2     |

In the *arrPtr* parameter, you pass a pointer to the array to use to support the property type.

## Example 1 

You want to reuse the font color array of the 4th column for the 10th column:

```4d
  // retrieve a pointer to the array for column 4
 $Pointer:=LISTBOX Get array(*;"Col4";lk font color array)
  // check that it exists
 If(Not(Nil($Pointer)))
  //transfer to column 10
    LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)
 End if
```

## Example 2 

You want to set a row height array for a list box:

```4d
 LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)
```

## See also 

[LISTBOX Get array](../commands/listbox-get-array)  
[LISTBOX GET ARRAYS](../commands/listbox-get-arrays)  

## Properties

|  |  |
| --- | --- |
| Command number | 1279 |
| Thread safe | no |


