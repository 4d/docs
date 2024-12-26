---
id: set-list-item-parameter
title: SET LIST ITEM PARAMETER
slug: /commands/set-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PARAMETER.Syntax-->**SET LIST ITEM PARAMETER** ( {* ;} *list* ; itemRef | * ; *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef &#124; * | Operator, Longint | &#8594;  | Item reference number or 0 for the last item appended to the list or * for the current list item |
| selector | Text | &#8594;  | Parameter constant |
| value | Text, Boolean, Real | &#8594;  | Value of the parameter |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST ITEM PARAMETER.Summary-->The **SET LIST ITEM PARAMETER** command modifies the *selector* parameter for the *itemRef* item of the hierarchical list whose reference or object name is passed in the *list* parameter.<!-- END REF-->

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and the second *\** is passed, the syntax based on the object name is required since each representation can have its own current item.

You can pass a reference number in *itemRef*. If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in *itemRef* to indicate the last item added to the list (using *Hierarchical Lists*).

Lastly, you can pass *\** in *itemRef*: in this case, the command is applied to the current item of the list. If several items are selected manually, the current item is the last one that was selected. If no item is selected, the command does nothing.

In *selector*, you can pass either:

* one of the following constants (found in the “*Hierarchical Lists*” theme):
  
| Constant                   | Type   | Value                      | Comment                                                                                                                                                                                                                                                                                 |  
| -------------------------- | ------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Additional text            | Text | 4D\_additional\_text       | This constant is used to add text to the right of the *itemRef* item. This additional title will always be displayed in the right part of the list, even when the user moves the horizontal scrolling cursor. When you use this constant, pass the text to be displayed in *value*.     |  
| Associated standard action | Text | 4D\_standard\_action\_name | Associate a standard action with the *itemRef*. In this case, you must pass in the *value* parameter a standard action name with a parameter, for example "fontSize?value=10pt". For more information, please refer to the *Standard actions* section in the *Design Reference* manual. |
* or a **custom selector**: You can also pass custom text and associate it with a value of the Text, Number or Boolean type in *selector*. This value will be stored with the list item and may be retrieved using the [GET LIST ITEM PARAMETER](get-list-item-parameter.md) command. This lets you set up any type of interface associated with hierarchical lists. For example, in a list of customer names, you can store the age of each person and only display it when the corresponding item is selected.

#### Example 

You want to set as choice list of a hierarchical pop up menu a custom list of font size values using the standard actions feature:

```4d
 $myList:=New list
 APPEND TO LIST($myList;ak standard action title;1)
 APPEND TO LIST($myList;ak standard action title;2)
 APPEND TO LIST($myList;ak standard action title;3)
 SET LIST ITEM PARAMETER($myList;1;Associated standard action;"fontSize?value=10pt")
 SET LIST ITEM PARAMETER($myList;2;Associated standard action;"fontSize?value=12pt")
 SET LIST ITEM PARAMETER($myList;3;Associated standard action;"fontSize?value=14pt")
 OBJECT SET LIST BY REFERENCE(*;"popup";Choice list;$myList)
```

![](../assets/en/commands/pict3372004.en.png)

#### See also 

[APPEND TO LIST](append-to-list.md)  
[Action info](action-info.md)  
[GET LIST ITEM PARAMETER](get-list-item-parameter.md)  
[GET LIST ITEM PARAMETER ARRAYS](get-list-item-parameter-arrays.md)  
[INSERT IN LIST](insert-in-list.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 986 |
| Thread safe | &cross; |


